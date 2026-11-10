/* CodyLingo — lógica do site (navegação, dicionário, profissões, depoimentos).
   Depende de DICIONARIO (js/data/dicionario*.js) e PROFISSOES (js/data/profissoes.js). */
(() => {
    'use strict';

    const DICT = typeof DICIONARIO !== 'undefined' ? DICIONARIO : {};
    const PROFS = typeof PROFISSOES !== 'undefined' ? PROFISSOES : [];
    if (!Object.keys(DICT).length) console.warn('CodyLingo: js/data/dicionario.js não foi carregado.');
    if (!PROFS.length) console.warn('CodyLingo: js/data/profissoes.js não foi carregado.');

    /* ---------- Utilidades ---------- */

    const $ = (sel, raiz = document) => raiz.querySelector(sel);
    const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

    function el(tag, attrs = {}, ...filhos) {
        const no = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) {
            if (v === false || v == null) continue;
            if (k === 'text') no.textContent = v;
            else if (k === 'html') no.innerHTML = v;
            else no.setAttribute(k, v === true ? '' : v);
        }
        no.append(...filhos);
        return no;
    }

    const normalizar = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const textoPuro = (html) => el('div', { html }).textContent.replace(/\s+/g, ' ').trim();

    const armazenar = {
        ler(chave) { try { return localStorage.getItem(chave); } catch { return null; } },
        gravar(chave, valor) { try { localStorage.setItem(chave, valor); } catch { /* modo privado */ } },
    };

    const IDIOMAS = {
        pt: { nome: 'Português', voz: 'pt-BR', tipos: { conceito: 'Conceito', estrutura: 'Estrutura de dados' } },
        es: { nome: 'Español', voz: 'es-ES', tipos: { conceito: 'Concepto', estrutura: 'Estructura de datos' } },
        en: { nome: 'English', voz: 'en-US', tipos: { conceito: 'Concept', estrutura: 'Data structure' } },
    };

    /* ---------- Navegação entre seções ---------- */

    const secoes = $$('.view');
    const idsValidos = new Set(secoes.map((s) => s.id));
    const botaoMenu = $('.menu-btn');
    const menu = $('#menu');

    function rotaAtual() {
        const id = location.hash.slice(1);
        return idsValidos.has(id) ? id : 'inicio';
    }

    function alternarMenu(abrir) {
        const aberto = abrir ?? !menu.classList.contains('aberto');
        menu.classList.toggle('aberto', aberto);
        botaoMenu.setAttribute('aria-expanded', String(aberto));
        botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    }

    let secaoAtual = null;

    function mostrarSecao(id, { moverFoco = true } = {}) {
        secaoAtual = id;
        secoes.forEach((s) => { s.hidden = s.id !== id; });
        
        // Atualiza menu superior
        $$('.menu a').forEach((a) => {
            if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });

        // Atualiza barra inferior mobile
        $$('.bottom-nav-link').forEach((a) => {
            if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });

        const titulo = $(`#${id}`).dataset.titulo;
        document.title = id === 'inicio' ? 'CodyLingo · Dicionário para programadores' : `${titulo} · CodyLingo`;
        alternarMenu(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
        pararFala();
        if (moverFoco) $('#conteudo').focus({ preventScroll: true });
    }

    window.addEventListener('hashchange', () => {
        if (location.hash === '#conteudo') return;
        if (rotaAtual() !== secaoAtual) mostrarSecao(rotaAtual());
    });

    window.addEventListener('popstate', () => {
        if (rotaAtual() !== secaoAtual) mostrarSecao(rotaAtual(), { moverFoco: false });
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button > 0) return;
        const id = link.getAttribute('href').slice(1);
        if (!idsValidos.has(id)) return;
        e.preventDefault();
        try { history.pushState(null, '', `#${id}`); } catch { /* ambiente sem history */ }
        mostrarSecao(id);
    });

    botaoMenu.addEventListener('click', () => alternarMenu());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('aberto')) { alternarMenu(false); botaoMenu.focus(); }
    });

    const topo = $('.topo');
    window.addEventListener('scroll', () => topo.classList.toggle('com-sombra', window.scrollY > 8), { passive: true });

    function irPara(id) {
        try { history.pushState(null, '', `#${id}`); } catch { /* ambiente sem history */ }
        mostrarSecao(id);
    }

    /* ---------- Busca Rápida no Topo ---------- */
    $('#btn-busca-rapida').addEventListener('click', () => {
        irPara('dicionario');
        setTimeout(() => {
            const campo = $('#busca');
            if (campo) campo.focus();
        }, 100);
    });

    /* ---------- Idioma compartilhado ---------- */

    let idioma = IDIOMAS[armazenar.ler('codylingo:idioma')] ? armazenar.ler('codylingo:idioma') : 'pt';

    function definirIdioma(novo) {
        if (!IDIOMAS[novo] || novo === idioma) return;
        idioma = novo;
        armazenar.gravar('codylingo:idioma', idioma);
        pararFala();
        sincronizarIdioma();
        if (termoAtual) renderizarTermo();
        renderizarVerbete();
    }

    function sincronizarIdioma() {
        $$('input[name="idioma"]').forEach((r) => { r.checked = r.value === idioma; });
        $$('#verbete [data-idioma]').forEach((b) => b.classList.toggle('ativo', b.dataset.idioma === idioma));
        document.documentElement.dataset.idioma = idioma;
    }

    /* ---------- Dicionário ---------- */

    const TERMOS = Object.keys(DICT).sort((a, b) => a.localeCompare(b, 'pt'));
    const termoPorBusca = new Map(TERMOS.map((t) => [normalizar(t), t]));
    TERMOS.forEach((t) => (DICT[t].aliases || []).forEach((a) => {
        if (!termoPorBusca.has(normalizar(a))) termoPorBusca.set(normalizar(a), t);
    }));
    const CONCEITOS_OO = new Set(['objeto', 'herança', 'instância', 'encapsulamento', 'polimorfismo', 'abstração']);
    const ORDEM_GRUPOS = ['Conceitos básicos', 'Estruturas de dados', 'Orientação a objetos', 'Palavras reservadas de Java', 'C'];

    const resultado = $('#resultado');
    const campoBusca = $('#busca');
    const botaoOuvir = $('#ouvir');
    let termoAtual = null;
    let textoParaFala = '';

    function linguagemDe(termo) {
        if (DICT[termo].lang) return DICT[termo].lang;
        const codigo = DICT[termo].pt.examples.map((e) => e.code).join('\n');
        return /printf|scanf|#include|malloc|\bstruct\s+\w+\s*\{|\bint main\b/.test(codigo) ? 'c' : 'java';
    }

    function grupoDe(termo) {
        if (DICT[termo].categoria) return DICT[termo].categoria;
        if (CONCEITOS_OO.has(termo)) return 'Orientação a objetos';
        return linguagemDe(termo) === 'c' ? 'C' : 'Palavras reservadas de Java';
    }

    function preencherListaDeTermos() {
        $('#termos').append(...TERMOS.map((t) => el('option', { value: t })));
    }

    function termosVizinhos(termo) {
        const i = TERMOS.indexOf(termo);
        if (i < 0) return { anterior: null, proximo: null };
        return { anterior: TERMOS[i - 1] || null, proximo: TERMOS[i + 1] || null };
    }

    function renderizarIndice() {
        const nav = $('#indice');
        nav.replaceChildren();
        const grupos = new Map();
        TERMOS.forEach((t) => {
            const g = grupoDe(t);
            if (!grupos.has(g)) grupos.set(g, []);
            grupos.get(g).push(t);
        });
        const ordenados = [...grupos].sort(([a], [b]) => (ORDEM_GRUPOS.indexOf(a) + 1 || 99) - (ORDEM_GRUPOS.indexOf(b) + 1 || 99));
        for (const [nome, termos] of ordenados) {
            const bloco = el('section', { class: 'indice-grupo' });
            bloco.append(el('h2', { class: 'indice-titulo' }, el('span', { text: nome }), el('span', { class: 'indice-num', text: String(termos.length) })));
            const p = el('p', { class: 'indice-chips' });
            termos.forEach((t) => p.append(el('button', { type: 'button', class: 'chip', 'data-termo': t, text: t })));
            bloco.append(p);
            nav.append(bloco);
        }
        const contagem = $('#indice-contagem');
        if (contagem) contagem.textContent = `${TERMOS.length} termos no dicionário`;
    }

    function marcarIndice() {
        $$('#indice .chip').forEach((b) => {
            if (b.dataset.termo === termoAtual) b.setAttribute('aria-current', 'true');
            else b.removeAttribute('aria-current');
        });
    }

    function mostrarTermo(termo) {
        termoAtual = termo;
        campoBusca.value = termo;
        renderizarTermo();
        if (matchMedia('(max-width: 900px)').matches) {
            resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderizarTermo() {
        const dados = DICT[termoAtual];
        const { definition, examples } = dados[idioma];
        const lang = linguagemDe(termoAtual);
        const tipo = dados.tipo;
        const etiqueta = tipo ? IDIOMAS[idioma].tipos[tipo] : (lang === 'c' ? 'C' : 'Java');
        const grupo = grupoDe(termoAtual);
        textoParaFala = textoPuro(definition);

        const vizinhos = termosVizinhos(termoAtual);

        const navVizinhos = el('nav', { class: 'termo-nav', 'aria-label': 'Navegar entre termos' });
        if (vizinhos.anterior) {
            navVizinhos.append(el('button', { type: 'button', class: 'termo-nav-btn', 'data-termo': vizinhos.anterior },
                el('span', { class: 'termo-nav-seta', text: '←' }),
                el('span', { class: 'termo-nav-txt' }, el('small', { text: 'Anterior' }), el('strong', { text: vizinhos.anterior }))));
        }
        if (vizinhos.proximo) {
            navVizinhos.append(el('button', { type: 'button', class: 'termo-nav-btn termo-nav-btn--dir', 'data-termo': vizinhos.proximo },
                el('span', { class: 'termo-nav-txt' }, el('small', { text: 'Próximo' }), el('strong', { text: vizinhos.proximo })),
                el('span', { class: 'termo-nav-seta', text: '→' })));
        }

        const artigo = [
            el('nav', { class: 'resultado-migalha', 'aria-label': 'Categoria' },
                el('span', { class: 'migalha-grupo', text: grupo }),
                el('span', { class: 'migalha-sep', text: '/' }),
                el('span', { class: 'migalha-lingua', text: lang === 'c' ? 'C' : 'Java' })),
            el('div', { class: 'resultado-cab' },
                el('h2', { text: termoAtual }),
                el('span', { class: 'etiqueta', text: etiqueta })),
            el('p', { class: 'definicao', html: definition }),
            el('h3', { class: 'exemplos-titulo', text: examples.length > 1 ? 'Exemplos de código' : 'Exemplo de código' }),
            ...examples.map((ex) => blocoDeCodigo(ex, lang)),
            navVizinhos,
        ];
        resultado.replaceChildren(...artigo);
        botaoOuvir.disabled = !('speechSynthesis' in window);
        marcarIndice();
    }

    function blocoDeCodigo(exemplo, lang) {
        const codigo = exemplo.code.replace(/^\n+|\s+$/g, '');
        const code = el('code', { class: `language-${exemplo.lang || lang}` });
        code.textContent = codigo;
        if (window.hljs) window.hljs.highlightElement(code);

        const copiar = el('button', { type: 'button', class: 'copiar', 'aria-label': 'Copiar código' },
            el('svg', { class: 'copiar-icone', 'aria-hidden': 'true', width: 14, height: 14 }, el('use', { href: '#i-copy' })),
            el('span', { class: 'copiar-txt', text: 'Copiar' }));
        copiar.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codigo);
                copiar.querySelector('.copiar-txt').textContent = 'Copiado';
            } catch {
                copiar.querySelector('.copiar-txt').textContent = 'Erro';
            }
            setTimeout(() => { copiar.querySelector('.copiar-txt').textContent = 'Copiar'; }, 1800);
        });

        return el('figure', { class: 'codigo' },
            el('figcaption', { class: 'codigo-cab' },
                el('span', { class: 'codigo-titulo', text: exemplo.title.replace(/:\s*$/, '').trim() }),
                el('span', { class: 'codigo-lang', text: (exemplo.lang || lang).toUpperCase() }),
                copiar),
            el('pre', { class: 'codigo-pre' }, code));
    }

    function buscar(consulta) {
        const q = normalizar(consulta);
        if (!q) { limparBusca(); return; }

        const exato = termoPorBusca.get(q);
        if (exato) { mostrarTermo(exato); return; }

        const parecidos = TERMOS.filter((t) => normalizar(t).includes(q));
        if (parecidos.length === 1) { mostrarTermo(parecidos[0]); return; }

        termoAtual = null;
        textoParaFala = '';
        botaoOuvir.disabled = true;
        marcarIndice();

        const sugestoes = (parecidos.length ? parecidos : TERMOS.slice(0, 6));
        resultado.replaceChildren(
            el('p', { class: 'vazio', text: parecidos.length
                ? `Vários termos combinam com “${consulta.trim()}”. Qual deles?`
                : `Nenhum resultado para “${consulta.trim()}”. Tente um destes termos:` }),
            el('p', { class: 'sugeridos' },
                ...sugestoes.map((t) => el('button', { type: 'button', class: 'chip', 'data-termo': t, text: t }))));
    }

    function limparBusca() {
        pararFala();
        termoAtual = null;
        textoParaFala = '';
        campoBusca.value = '';
        botaoOuvir.disabled = true;
        resultado.replaceChildren(el('p', { class: 'vazio', html: 'Escolha um termo no índice ou digite uma palavra, como <strong>class</strong>, para ver a definição e exemplos.' }));
        marcarIndice();
    }

    function abrirNoDicionario(consulta) {
        buscar(consulta);
        irPara('dicionario');
    }

    /* Fala */
    function pararFala() {
        if ('speechSynthesis' in window) speechSynthesis.cancel();
        const ouvir = $('#ouvir');
        if (ouvir) {
            ouvir.innerHTML = `<svg aria-hidden="true"><use href="#i-volume"/></svg> <span class="btn-texto">Ouvir</span>`;
        }
    }

    botaoOuvir.addEventListener('click', () => {
        if (!textoParaFala || !('speechSynthesis' in window)) return;
        if (speechSynthesis.speaking) { pararFala(); return; }
        const fala = new SpeechSynthesisUtterance(textoParaFala);
        fala.lang = IDIOMAS[idioma].voz;
        fala.onend = fala.onerror = () => { pararFala(); };
        
        botaoOuvir.innerHTML = `<svg aria-hidden="true"><use href="#i-stop"/></svg> <span class="btn-texto">Parar</span>`;
        speechSynthesis.speak(fala);
    });

    $('#form-dic').addEventListener('submit', (e) => { e.preventDefault(); buscar(campoBusca.value); });
    $('#limpar').addEventListener('click', limparBusca);
    $$('input[name="idioma"]').forEach((r) => r.addEventListener('change', () => definirIdioma(r.value)));

    document.addEventListener('click', (e) => {
        const alvo = e.target.closest('.chip[data-termo], .termo-nav-btn[data-termo]');
        if (!alvo) return;
        mostrarTermo(alvo.dataset.termo);
    });

    /* ---------- Início ---------- */

    const verbete = $('#verbete');
    let termoDoVerbete = null;

    function renderizarVerbete() {
        if (!termoDoVerbete) return;
        const primeiraFrase = textoPuro(DICT[termoDoVerbete][idioma].definition).match(/^.*?[.!?](?=\s|$)/)?.[0];
        $('#verbete-termo').textContent = termoDoVerbete;
        $('#verbete-def').textContent = primeiraFrase || textoPuro(DICT[termoDoVerbete][idioma].definition);
    }

    function iniciarInicio() {
        if (!TERMOS.length) return;

        termoDoVerbete = TERMOS[Math.floor(Math.random() * TERMOS.length)];
        verbete.hidden = false;
        renderizarVerbete();

        $$('#verbete [data-idioma]').forEach((b) => b.addEventListener('click', () => definirIdioma(b.dataset.idioma)));
        $('#verbete-ir').addEventListener('click', () => abrirNoDicionario(termoDoVerbete));
    }

    /* ---------- Profissões ---------- */

    const listaProf = $('#prof-lista');
    const detalheProf = $('#prof-detalhe');

    function renderizarProfissoes() {
        if (!PROFS.length) return;
        listaProf.append(...PROFS.map((p) => el('button', { type: 'button', 'data-id': p.id, text: p.titulo })));
        listaProf.addEventListener('click', (e) => {
            const b = e.target.closest('button[data-id]');
            if (b) selecionarProfissao(b.dataset.id);
        });
        selecionarProfissao(PROFS[0].id);
    }

    function selecionarProfissao(id) {
        const p = PROFS.find((x) => x.id === id);
        if (!p) return;
        $$('button', listaProf).forEach((b) => {
            if (b.dataset.id === id) b.setAttribute('aria-current', 'true');
            else b.removeAttribute('aria-current');
        });

        const imagem = el('img', { src: `./assets/${p.imagem}`, alt: `Ilustração: ${p.titulo}`, width: 240, height: 240, loading: 'lazy' });
        imagem.addEventListener('error', () => imagem.closest('figure')?.remove());

        detalheProf.replaceChildren(
            el('figure', {}, imagem),
            el('div', {},
                el('h2', { text: p.titulo }),
                el('p', { text: p.resumo }),
                el('h3', { text: 'Tecnologias' }),
                el('ul', { class: 'tecnologias' }, ...p.tecnologias.map((t) => el('li', { text: t }))),
                p.atuacao ? el('p', { text: p.atuacao }) : ''));
    }

    /* ---------- Inicialização ---------- */

    preencherListaDeTermos();
    renderizarIndice();
    renderizarProfissoes();  
    sincronizarIdioma();
    iniciarInicio();
    $('#ano').textContent = new Date().getFullYear();
    mostrarSecao(rotaAtual(), { moverFoco: false });


            /* ---------- Preloader ---------- */
    function iniciarPreloader() {
        const texto = "console.log('Bem-vindo ao CodyLingo');";
        const elTxt = document.getElementById('preloader-txt');
        const preloader = document.getElementById('preloader');
        
        // Se o preloader não existir na página, ignora e segue o jogo
        if (!elTxt || !preloader) return;

        let i = 0;

        // Efeito de digitação
        function digitar() {
            if (i < texto.length) {
                elTxt.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 40); // Velocidade da digitação
            } else {
                // Tempo para ler o código antes de fechar
                setTimeout(() => {
                    preloader.classList.add('esconder');
                    document.body.classList.remove('preloader-ativo');
                    
                    // Remove do DOM após a animação de fade
                    setTimeout(() => preloader.remove(), 600);
                }, 800);
            }
        }

        // Inicia a digitação após um breve delay
        setTimeout(digitar, 300);
    }

    iniciarPreloader();
})();

/*---------
  BOTTOM NAV — auto-hide no scroll
---------*/
(function initBottomNavAutoHide() {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;

    let lastY = window.scrollY;
    let ticking = false;
    const THRESHOLD = 8;     // px mínimos para considerar mudança de direção
    const HIDE_AFTER = 120;  // só esconde depois de rolar isso pra baixo

    function update() {
        const y = window.scrollY;
        const delta = y - lastY;

        // No topo da página, sempre visível
        if (y < HIDE_AFTER) {
            nav.classList.remove('bottom-nav--hidden');
            lastY = y;
            ticking = false;
            return;
        }

        // Scroll para baixo (delta > 0) → esconde
        if (delta > THRESHOLD) {
            nav.classList.add('bottom-nav--hidden');
        }
        // Scroll para cima (delta < 0) → mostra
        else if (delta < -THRESHOLD) {
            nav.classList.remove('bottom-nav--hidden');
        }

        lastY = y;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
})();
