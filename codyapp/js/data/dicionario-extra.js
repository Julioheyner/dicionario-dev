/* Termos extras do dicionário CodyLingo: conceitos básicos, estruturas de dados,
   palavras reservadas de Java e palavras/funções de C.
   Para adicionar um termo, chame uma das funções abaixo no fim do arquivo:
     conceito(chave, [pt, es, en], codigos, { aliases: [...] })
     estrutura(...), java(...), c(...)
   "codigos" é um texto (código do tipo padrão) ou uma lista de exemplos, cada um
   um texto ou ['java' | 'c' | 'bash', codigo, rótulo opcional].
   Os exemplos de código aparecem em português, espanhol e inglês: escreva o código
   em português e os nomes, textos e comentários são traduzidos pelo GLOSSARIO abaixo
   (adicione ali o que for novo). Para controlar o código de cada idioma à mão, use
   { pt: '...', es: '...', en: '...' } no lugar do texto do código.
   Comentários explicativos: escreva // @{português|español|english} no código. */
(() => {
    const TITULO = { pt: 'Exemplo', es: 'Ejemplo', en: 'Example' };

    /* Glossário dos exemplos de código: 'português': ['espanhol', 'inglês'].
       Cobre nomes (classes, variáveis, métodos), textos entre aspas e comentários.
       Palavras reservadas e nomes de bibliotecas (public, printf, String...) não entram. */
    const GLOSSARIO = {
        /* textos entre aspas */
        ' anos.': [' años.', ' years old.'],
        ' tem ': [' tiene ', ' is '],
        '%s tem %d anos e %.2f m\\n': ['%s tiene %d años y mide %.2f m\\n', '%s is %d years old and %.2f m tall\\n'],
        '%s tem %d anos.\\n': ['%s tiene %d años.\\n', '%s is %d years old.\\n'],
        '%s tem %zu letras\\n': ['%s tiene %zu letras\\n', '%s has %zu letters\\n'],
        'Você tem %d anos\\n': ['Tienes %d años\\n', 'You are %d years old\\n'],
        'Ainda não pode': ['Todavía no puede', 'Not yet'],
        'Aprovado': ['Aprobado', 'Passed'],
        'Reprovado': ['Reprobado', 'Failed'],
        'Recuperação': ['Recuperación', 'Retake'],
        'Recuperacao': ['Recuperacion', 'Retake'],
        'Arquivo não encontrado': ['Archivo no encontrado', 'File not found'],
        'Caderno': ['Cuaderno', 'Notebook'],
        'Carro': ['Auto', 'Car'],
        'Digite sua idade: ': ['Escribe tu edad: ', 'Enter your age: '],
        'Divisão por zero!': ['¡División por cero!', 'Division by zero!'],
        'Domingo': ['Domingo', 'Sunday'],
        'Segunda': ['Lunes', 'Monday'],
        'Terça': ['Martes', 'Tuesday'],
        'Outro dia': ['Otro día', 'Another day'],
        'Dormindo...': ['Durmiendo...', 'Sleeping...'],
        'Eu sou o ': ['Soy ', 'I am '],
        'Erro': ['Error', 'Error'],
        'Executando: ': ['Ejecutando: ', 'Running: '],
        'Idade inválida': ['Edad no válida', 'Invalid age'],
        'Linha ': ['Línea ', 'Line '],
        'Maior: ': ['Mayor: ', 'Largest: '],
        'Nome não informado': ['Nombre no informado', 'Name not provided'],
        'Oi!': ['¡Hola!', 'Hi!'],
        'Olá, ': ['Hola, ', 'Hello, '],
        'Passo ': ['Paso ', 'Step '],
        'Pode dirigir': ['Puede conducir', 'Can drive'],
        'Resultado: ': ['Resultado: ', 'Result: '],
        'Sempre executa': ['Siempre se ejecuta', 'Always runs'],
        'Tentando...': ['Intentando...', 'Trying...'],
        'dados.txt': ['datos.txt', 'data.txt'],
        'endereco: ': ['direccion: ', 'address: '],
        'meu_arquivo.h': ['mi_archivo.h', 'my_file.h'],

        /* comentários */
        'arquivo do projeto': ['archivo del proyecto', 'project file'],
        'biblioteca padrão': ['biblioteca estándar', 'standard library'],
        'erro de compilação': ['error de compilación', 'compile error'],
        'Chama o construtor': ['Llama al constructor', 'Calls the constructor'],
        'Construtor': ['Constructor', 'Constructor'],
        'Em C, métodos são funções que operam sobre structs': ['En C, los métodos son funciones que operan sobre structs', 'In C, methods are functions that operate on structs'],
        'Função que simula um construtor em C': ['Función que simula un constructor en C', 'Function that simulates a constructor in C'],
        'Inicia a thread': ['Inicia el hilo', 'Starts the thread'],
        'Método com retorno': ['Método con retorno', 'Method with a return value'],
        'Método sem retorno (void)': ['Método sin retorno (void)', 'Method with no return value (void)'],
        'altera x pelo ponteiro': ['modifica x mediante el puntero', 'changes x through the pointer'],
        'caso base': ['caso base', 'base case'],
        'chamada recursiva': ['llamada recursiva', 'recursive call'],
        'p guarda o endereço de x': ['p guarda la dirección de x', 'p stores the address of x'],

        /* classes */
        'Exemplo': ['Ejemplo', 'Example'],
        'ExemploFila': ['EjemploCola', 'QueueExample'],
        'ExemploMatriz': ['EjemploMatriz', 'MatrixExample'],
        'ExemploPilha': ['EjemploPila', 'StackExample'],
        'Arvore': ['Arbol', 'Tree'],
        'Cachorro': ['Perro', 'Dog'],
        'Gato': ['Gato', 'Cat'],
        'Papagaio': ['Loro', 'Parrot'],
        'Falante': ['Hablante', 'Speaker'],
        'Forma': ['Forma', 'Shape'],
        'Quadrado': ['Cuadrado', 'Square'],
        'Circulo': ['Circulo', 'Circle'],
        'Calculadora': ['Calculadora', 'Calculator'],
        'Conta': ['Cuenta', 'Account'],
        'Contador': ['Contador', 'Counter'],
        'ContadorSeguro': ['ContadorSeguro', 'SafeCounter'],
        'Contagem': ['Conteo', 'Counting'],
        'Criacao': ['Creacion', 'Creation'],
        'DiaDaSemana': ['DiaDeLaSemana', 'DayOfWeek'],
        'Divisao': ['Division', 'Division'],
        'Dobro': ['Doble', 'Doubled'],
        'Fatorial': ['Factorial', 'Factorial'],
        'Habilitacao': ['Licencia', 'License'],
        'Idade': ['Edad', 'Age'],
        'Leitura': ['Lectura', 'Reading'],
        'Limite': ['Limite', 'Limit'],
        'Lista': ['Lista', 'ListExample'],
        'ListaEncadeada': ['ListaEnlazada', 'SinglyLinkedList'],
        'MaiorNumero': ['MayorNumero', 'LargestNumber'],
        'MinhaThread': ['MiThread', 'MyThread'],
        'No': ['Nodo', 'Node'],
        'Nota': ['Nota', 'Grade'],
        'Notas': ['Notas', 'Grades'],
        'Nulo': ['Nulo', 'NullValue'],
        'Ola': ['Hola', 'Hello'],
        'Pedido': ['Pedido', 'Order'],
        'Pessoa': ['Persona', 'Person'],
        'Populacao': ['Poblacion', 'Population'],
        'Preco': ['Precio', 'Price'],
        'Produto': ['Producto', 'Product'],
        'Repeticao': ['Repeticion', 'Repetition'],
        'Saudacao': ['Saludo', 'Greeting'],
        'Soma': ['Suma', 'Sum'],
        'Teste': ['Prueba', 'Test'],
        'TesteInterface': ['PruebaInterfaz', 'InterfaceTest'],
        'Texto': ['Texto', 'Text'],
        'Validacao': ['Validacion', 'Validation'],
        'Valor': ['Valor', 'Value'],
        'Veiculo': ['Vehiculo', 'Vehicle'],

        /* constantes */
        'DIAS_SEMANA': ['DIAS_SEMANA', 'DAYS_OF_WEEK'],
        'ENVIADO': ['ENVIADO', 'SENT'],
        'LIMITE': ['LIMITE', 'LIMIT'],
        'MAX_TENTATIVAS': ['MAX_INTENTOS', 'MAX_ATTEMPTS'],
        'PAGO': ['PAGADO', 'PAID'],
        'PENDENTE': ['PENDIENTE', 'PENDING'],

        /* variáveis, campos e métodos */
        'abrir': ['abrir', 'open'],
        'altura': ['altura', 'height'],
        'apresentar': ['presentar', 'introduce'],
        'atual': ['actual', 'current'],
        'caminho': ['ruta', 'path'],
        'contador': ['contador', 'counter'],
        'contagem': ['conteo', 'count'],
        'depositar': ['depositar', 'deposit'],
        'desempilhar': ['desapilar', 'pop'],
        'desenfileirar': ['desencolar', 'dequeue'],
        'dia': ['dia', 'day'],
        'direita': ['derecha', 'right'],
        'dizerOla': ['decirHola', 'sayHello'],
        'dobro': ['doble', 'doubled'],
        'dormir': ['dormir', 'sleep'],
        'emOrdem': ['enOrden', 'inOrder'],
        'empilhar': ['apilar', 'push'],
        'enfileirar': ['encolar', 'enqueue'],
        'esquerda': ['izquierda', 'left'],
        'exibirResultado': ['mostrarResultado', 'showResult'],
        'falar': ['hablar', 'speak'],
        'fatorial': ['factorial', 'factorial'],
        'fila': ['cola', 'queue'],
        'fim': ['fin', 'end'],
        'getContagem': ['getConteo', 'getCount'],
        'getSaldo': ['getSaldo', 'getBalance'],
        'idade': ['edad', 'age'],
        'incrementar': ['incrementar', 'increment'],
        'inicio': ['inicio', 'start'],
        'initPessoa': ['initPersona', 'initPerson'],
        'inteiro': ['entero', 'integer'],
        'lado': ['lado', 'side'],
        'leitor': ['lector', 'reader'],
        'maior': ['mayor', 'largest'],
        'matriz': ['matriz', 'matrix'],
        'no': ['nodo', 'node'],
        'nome': ['nombre', 'name'],
        'nomes': ['nombres', 'names'],
        'nota': ['nota', 'grade'],
        'notas': ['notas', 'grades'],
        'numeros': ['numeros', 'numbers'],
        'ola': ['hola', 'hello'],
        'pilha': ['pila', 'stack'],
        'populacao': ['poblacion', 'population'],
        'preco': ['precio', 'price'],
        'primeiro': ['primero', 'first'],
        'proximo': ['siguiente', 'next'],
        'proximoAno': ['anioSiguiente', 'nextYear'],
        'raio': ['radio', 'radius'],
        'raiz': ['raiz', 'root'],
        'resultado': ['resultado', 'result'],
        'saldo': ['saldo', 'balance'],
        'somar': ['sumar', 'add'],
        'texto': ['texto', 'text'],
        'tipo': ['tipo', 'type'],
        'topo': ['tope', 'top'],
        'validarIdade': ['validarEdad', 'validateAge'],
        'valor': ['valor', 'value'],
    };

    const LETRA = '[\\p{L}\\p{N}_]';
    const REGEX_GLOSSARIO = new RegExp(
        Object.keys(GLOSSARIO)
            .sort((a, b) => b.length - a.length)
            .map((k) => {
                const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const ini = new RegExp('^' + LETRA, 'u').test(k) ? `(?<!${LETRA})` : '';
                const fim = new RegExp(LETRA + '$', 'u').test(k) ? `(?!${LETRA})` : '';
                return ini + esc + fim;
            })
            .join('|'),
        'gu'
    );

    /* Marcador de comentário trilíngue dentro do código: @{português|español|english}.
       Ex.: // @{caso base|caso base|base case}. Fica protegido do glossário. */
    const MARCA = /@\{([^|}]*)\|([^|}]*)\|([^}]*)\}/g;

    function traduzirTrecho(trecho, idioma) {
        if (idioma === 'pt') return trecho;
        const i = idioma === 'es' ? 0 : 1;
        return trecho.replace(REGEX_GLOSSARIO, (m) => GLOSSARIO[m][i]);
    }

    /* Devolve o código do exemplo no idioma pedido. "code" é um texto (em português,
       traduzido pelo glossário e pelos marcadores) ou um objeto { pt, es, en } com o
       código de cada idioma. */
    function codigoNoIdioma(code, idioma) {
        if (typeof code !== 'string') return code[idioma] !== undefined ? code[idioma] : codigoNoIdioma(code.pt, idioma);
        const k = { pt: 1, es: 2, en: 3 }[idioma];
        let res = '', ultimo = 0;
        for (const m of code.matchAll(MARCA)) {
            res += traduzirTrecho(code.slice(ultimo, m.index), idioma) + m[k];
            ultimo = m.index + m[0].length;
        }
        return res + traduzirTrecho(code.slice(ultimo), idioma);
    }

    function registrar(chave, categoria, tipo, langPadrao, defs, codigos, extra = {}) {
        const lista = Array.isArray(codigos) ? codigos : [codigos];
        const exemplos = lista.map((item) => {
            if (!Array.isArray(item)) return { lang: langPadrao, code: item, rotulo: '' };
            const [lang, code, rotulo] = item;
            return { lang, code, rotulo: rotulo || (lang === 'java' ? 'Java' : lang === 'c' ? 'C' : '') };
        });
        const mostrarRotulo = exemplos.length > 1 || exemplos.some((e) => e.rotulo && e.lang !== langPadrao);
        const montar = (definition, idioma) => ({
            definition,
            examples: exemplos.map((e, i) => ({
                title: `${TITULO[idioma]} ${i + 1}${mostrarRotulo && e.rotulo ? ` (${e.rotulo})` : ''}: `,
                code: codigoNoIdioma(e.code, idioma),
                lang: e.lang,
            })),
        });
        DICIONARIO[chave] = {
            categoria, tipo, lang: langPadrao, aliases: extra.aliases || [],
            pt: montar(defs[0], 'pt'), es: montar(defs[1], 'es'), en: montar(defs[2], 'en'),
        };
    }

    const conceito = (k, d, c, x) => registrar(k, 'Conceitos básicos', 'conceito', 'java', d, c, x);
    const estrutura = (k, d, c, x) => registrar(k, 'Estruturas de dados', 'estrutura', 'java', d, c, x);
    const java = (k, d, c, x) => registrar(k, 'Palavras reservadas de Java', null, 'java', d, c, x);
    const c = (k, d, cod, x) => registrar(k, 'C', null, 'c', d, cod, x);

    /* ===================== Conceitos básicos ===================== */

    conceito('algoritmo', [
        'Um <strong>algoritmo</strong> é uma sequência finita de passos bem definidos para resolver um problema ou realizar uma tarefa. Todo programa implementa um ou mais algoritmos.',
        'Un <strong>algoritmo</strong> es una secuencia finita de pasos bien definidos para resolver un problema o realizar una tarea. Todo programa implementa uno o más algoritmos.',
        'An <strong>algorithm</strong> is a finite sequence of well-defined steps for solving a problem or performing a task. Every program implements one or more algorithms.',
    ], `public class MaiorNumero {
  public static void main(String[] args) {
    // @{lista de números a analisar|lista de números a analizar|list of numbers to check}
    int[] numeros = {4, 9, 2, 7};
    // @{começa assumindo que o primeiro é o maior|empieza asumiendo que el primero es el mayor|starts by assuming the first one is the largest}
    int maior = numeros[0];
    // @{passo 1: percorre cada número da lista|paso 1: recorre cada número de la lista|step 1: go through each number in the list}
    for (int n : numeros) {
      // @{passo 2: se achar um maior, guarda ele|paso 2: si encuentra uno mayor, lo guarda|step 2: if it finds a larger one, keep it}
      if (n > maior) maior = n;
    }
    // @{resultado final: 9|resultado final: 9|final result: 9}
    System.out.println("Maior: " + maior);
  }
}`, 

{ aliases: ['algorithm', 'algoritmos'] });

    conceito('recursão', [
        '<strong>Recursão</strong> é quando uma função chama a si mesma para resolver versões menores do mesmo problema. Toda função recursiva precisa de um caso base, que encerra as chamadas.',
        '<strong>Recursión</strong> es cuando una función se llama a sí misma para resolver versiones más pequeñas del mismo problema. Toda función recursiva necesita un caso base que detenga las llamadas.',
        '<strong>Recursion</strong> is when a function calls itself to solve smaller versions of the same problem. Every recursive function needs a base case that stops the calls.',
    ], `public class Fatorial {
  // @{fatorial de n = n × (n - 1)!|factorial de n = n × (n - 1)!|factorial of n = n × (n - 1)!}
  static int fatorial(int n) {
    if (n <= 1) return 1;          // caso base
    return n * fatorial(n - 1);    // chamada recursiva
  }

  public static void main(String[] args) {
    // @{chama a função com 5: 5 × 4 × 3 × 2 × 1|llama a la función con 5: 5 × 4 × 3 × 2 × 1|calls the function with 5: 5 × 4 × 3 × 2 × 1}
    System.out.println(fatorial(5)); // 120
  }
}`, { aliases: ['recursion', 'recursividade', 'recursividad'] });

    conceito('função', [
        'Uma <strong>função</strong> (em Java, chamada de método) é um bloco de código com nome que recebe parâmetros, executa uma tarefa e pode devolver um valor. Ela evita repetição e organiza o programa.',
        'Una <strong>función</strong> (en Java, llamada método) es un bloque de código con nombre que recibe parámetros, ejecuta una tarea y puede devolver un valor. Evita la repetición y organiza el programa.',
        'A <strong>function</strong> (called a method in Java) is a named block of code that takes parameters, performs a task and may return a value. It avoids repetition and keeps the program organized.',
    ], [
        ['java', `public class Soma {
  // @{função com dois parâmetros inteiros que devolve um int|función con dos parámetros enteros que devuelve un int|function with two integer parameters that returns an int}
  static int somar(int a, int b) {
    // @{devolve o resultado para quem chamou|devuelve el resultado a quien la llamó|gives the result back to the caller}
    return a + b;
  }

  public static void main(String[] args) {
    // @{chama a função passando 3 e 4|llama a la función pasando 3 y 4|calls the function passing 3 and 4}
    System.out.println(somar(3, 4)); // 7
  }
}`],
        ['c', `// @{biblioteca que fornece o printf|biblioteca que proporciona printf|library that provides printf}
#include <stdio.h>

// @{função com dois parâmetros inteiros que devolve um int|función con dos parámetros enteros que devuelve un int|function with two integer parameters that returns an int}
int somar(int a, int b) {
  return a + b;
}

// @{ponto de entrada do programa|punto de entrada del programa|program entry point}
int main(void) {
  // @{chama somar(3, 4) e imprime 7|llama a sumar(3, 4) e imprime 7|calls add(3, 4) and prints 7}
  printf("%d\\n", somar(3, 4));
  return 0;
}`],
    ], { aliases: ['function', 'método', 'metodo', 'method', 'funcion'] });

    conceito('laço', [
        'Um <strong>laço</strong> (ou loop) repete um bloco de código enquanto uma condição for verdadeira. Os mais comuns são <strong>for</strong>, <strong>while</strong> e <strong>do-while</strong>.',
        'Un <strong>bucle</strong> (o lazo) repite un bloque de código mientras una condición sea verdadera. Los más comunes son <strong>for</strong>, <strong>while</strong> y <strong>do-while</strong>.',
        'A <strong>loop</strong> repeats a block of code while a condition is true. The most common ones are <strong>for</strong>, <strong>while</strong> and <strong>do-while</strong>.',
    ], [
        ['java', `public class Contagem {
  public static void main(String[] args) {
    // @{começa em 1, repete enquanto i <= 3 e soma 1 a cada volta|empieza en 1, repite mientras i <= 3 y suma 1 en cada vuelta|starts at 1, repeats while i <= 3 and adds 1 on each turn}
    for (int i = 1; i <= 3; i++) {
      // @{imprime Passo 1, Passo 2 e Passo 3|imprime Paso 1, Paso 2 y Paso 3|prints Step 1, Step 2 and Step 3}
      System.out.println("Passo " + i);
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  // @{variável de controle do laço|variable de control del bucle|loop control variable}
  int i = 1;
  // @{repete enquanto a condição for verdadeira|repite mientras la condición sea verdadera|repeats while the condition is true}
  while (i <= 3) {
    printf("Passo %d\\n", i);
    // @{sem isto, o laço nunca terminaria|sin esto, el bucle nunca terminaría|without this, the loop would never end}
    i++;
  }
  return 0;
}`],
    ], { aliases: ['loop', 'bucle', 'lazo', 'repetição', 'repeticao'] });

    conceito('condicional', [
        'Uma <strong>estrutura condicional</strong> executa blocos de código diferentes conforme o resultado de uma condição. Usa <strong>if</strong>, <strong>else if</strong>, <strong>else</strong> e <strong>switch</strong>.',
        'Una <strong>estructura condicional</strong> ejecuta bloques de código distintos según el resultado de una condición. Usa <strong>if</strong>, <strong>else if</strong>, <strong>else</strong> y <strong>switch</strong>.',
        'A <strong>conditional</strong> runs different blocks of code depending on the result of a condition. It uses <strong>if</strong>, <strong>else if</strong>, <strong>else</strong> and <strong>switch</strong>.',
    ], [
        ['java', `public class Nota {
  public static void main(String[] args) {
    // @{nota do aluno|nota del alumno|student grade}
    double nota = 7.5;
    // @{primeira condição: aprovado se for 7 ou mais|primera condición: aprobado si es 7 o más|first condition: passed if it is 7 or more}
    if (nota >= 7) {
      System.out.println("Aprovado");
    } else if (nota >= 5) {
      // @{segunda condição, testada só se a primeira falhar|segunda condición, evaluada solo si la primera falla|second condition, checked only if the first one fails}
      System.out.println("Recuperação");
    } else {
      // @{se nenhuma condição foi verdadeira|si ninguna condición fue verdadera|if no condition was true}
      System.out.println("Reprovado");
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  // @{nota do aluno|nota del alumno|student grade}
  double nota = 7.5;
  // @{primeira condição: aprovado se for 7 ou mais|primera condición: aprobado si es 7 o más|first condition: passed if it is 7 or more}
  if (nota >= 7) {
    printf("Aprovado\\n");
  } else if (nota >= 5) {
    // @{segunda condição, testada só se a primeira falhar|segunda condición, evaluada solo si la primera falla|second condition, checked only if the first one fails}
    printf("Recuperacao\\n");
  } else {
    // @{se nenhuma condição foi verdadeira|si ninguna condición fue verdadera|if no condition was true}
    printf("Reprovado\\n");
  }
  return 0;
}`],
    ], { aliases: ['conditional', 'if else', 'decisão', 'decisao'] });

    conceito('constante', [
        'Uma <strong>constante</strong> é um valor que não muda depois de definido. Em Java usa-se <strong>final</strong>; em C, <strong>const</strong> ou a diretiva <strong>#define</strong>.',
        'Una <strong>constante</strong> es un valor que no cambia una vez definido. En Java se usa <strong>final</strong>; en C, <strong>const</strong> o la directiva <strong>#define</strong>.',
        'A <strong>constant</strong> is a value that does not change once defined. In Java you use <strong>final</strong>; in C, <strong>const</strong> or the <strong>#define</strong> directive.',
    ], [
        ['java', `public class Circulo {
  public static void main(String[] args) {
    // @{final: o valor não pode mais ser alterado|final: el valor ya no se puede cambiar|final: the value can no longer be changed}
    final double PI = 3.14159;
    // @{raio do círculo|radio del círculo|circle radius}
    double raio = 2;
    // @{área = π × raio × raio|área = π × radio × radio|area = π × radius × radius}
    System.out.println(PI * raio * raio);
  }
}`],
        ['c', `#include <stdio.h>

// @{constante do pré-processador, sem ponto e vírgula|constante del preprocesador, sin punto y coma|preprocessor constant, no semicolon}
#define LIMITE 100

int main(void) {
  // @{constante tipada: o compilador impede alterações|constante tipada: el compilador impide cambios|typed constant: the compiler blocks changes}
  const double PI = 3.14159;
  // @{imprime PI com 2 casas decimais e o limite|imprime PI con 2 decimales y el límite|prints PI with 2 decimal places and the limit}
  printf("%.2f %d\\n", PI, LIMITE);
  return 0;
}`],
    ], { aliases: ['constant', 'constants', 'constantes'] });

    conceito('ponteiro', [
        'Um <strong>ponteiro</strong> é uma variável que guarda o endereço de memória de outra variável. Em C, <strong>&amp;</strong> obtém o endereço e <strong>*</strong> acessa o valor apontado.',
        'Un <strong>puntero</strong> es una variable que guarda la dirección de memoria de otra variable. En C, <strong>&amp;</strong> obtiene la dirección y <strong>*</strong> accede al valor apuntado.',
        'A <strong>pointer</strong> is a variable that stores the memory address of another variable. In C, <strong>&amp;</strong> gets the address and <strong>*</strong> accesses the pointed value.',
    ], [['c', `#include <stdio.h>

int main(void) {
  // @{variável comum que guarda o valor 10|variable común que guarda el valor 10|regular variable holding the value 10}
  int x = 10;
  int *p = &x;   // p guarda o endereço de x
  *p = 20;       // altera x pelo ponteiro
  // @{x agora vale 20|x ahora vale 20|x is now 20}
  printf("x = %d\\n", x);
  // @{mostra o endereço de memória guardado em p|muestra la dirección de memoria guardada en p|shows the memory address stored in p}
  printf("endereco: %p\\n", (void *)p);
  return 0;
}`]], { aliases: ['pointer', 'puntero', 'ponteiros'] });

    conceito('compilador', [
        'Um <strong>compilador</strong> traduz o código-fonte escrito pelo programador para uma forma que a máquina executa. Em C, o <strong>gcc</strong> gera o executável; em Java, o <strong>javac</strong> gera bytecode para a JVM.',
        'Un <strong>compilador</strong> traduce el código fuente escrito por el programador a una forma que la máquina ejecuta. En C, <strong>gcc</strong> genera el ejecutable; en Java, <strong>javac</strong> genera bytecode para la JVM.',
        'A <strong>compiler</strong> translates the source code written by the programmer into a form the machine can run. In C, <strong>gcc</strong> produces the executable; in Java, <strong>javac</strong> produces bytecode for the JVM.',
    ], [
        ['bash', `# @{compila: gera Ola.class (bytecode)|compila: genera Hola.class (bytecode)|compiles: produces Hello.class (bytecode)}
javac Ola.java
# @{executa o programa na JVM|ejecuta el programa en la JVM|runs the program on the JVM}
java Ola`, 'Java'],
        ['bash', `# @{compila ola.c e cria o executável ola|compila hola.c y crea el ejecutable hola|compiles hello.c and creates the executable hello}
gcc ola.c -o ola
# @{executa o programa|ejecuta el programa|runs the program}
./ola`, 'C'],
    ], { aliases: ['compiler', 'compilar', 'gcc', 'javac'] });

    /* ===================== Estruturas de dados ===================== */

    estrutura('vetor', [
        'Um <strong>vetor</strong> (array) guarda vários valores do mesmo tipo em posições consecutivas da memória. Cada valor é acessado por um índice, que começa em 0.',
        'Un <strong>vector</strong> (arreglo o array) guarda varios valores del mismo tipo en posiciones consecutivas de la memoria. Cada valor se accede por un índice, que empieza en 0.',
        'An <strong>array</strong> stores several values of the same type in consecutive memory positions. Each value is accessed by an index, which starts at 0.',
    ], [
        ['java', `public class Notas {
  public static void main(String[] args) {
    // @{vetor com 3 posições (índices 0, 1 e 2)|vector con 3 posiciones (índices 0, 1 y 2)|array with 3 positions (indexes 0, 1 and 2)}
    int[] notas = {7, 8, 9};
    // @{percorre do índice 0 até o último|recorre desde el índice 0 hasta el último|goes from index 0 to the last one}
    for (int i = 0; i < notas.length; i++) {
      // @{lê o valor da posição i|lee el valor de la posición i|reads the value at position i}
      System.out.println(notas[i]);
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  // @{declara e preenche um vetor de 3 inteiros|declara y rellena un vector de 3 enteros|declares and fills an array of 3 integers}
  int notas[3] = {7, 8, 9};
  // @{em C é preciso informar o tamanho (3) manualmente|en C hay que indicar el tamaño (3) manualmente|in C you must give the size (3) manually}
  for (int i = 0; i < 3; i++) {
    printf("%d\\n", notas[i]);
  }
  return 0;
}`],
    ], { aliases: ['array', 'arreglo', 'arranjo', 'vector', 'lista'] });

    estrutura('matriz', [
        'Uma <strong>matriz</strong> é um vetor de vetores: organiza os valores em linhas e colunas e é acessada por dois índices, <strong>[linha][coluna]</strong>.',
        'Una <strong>matriz</strong> es un vector de vectores: organiza los valores en filas y columnas y se accede con dos índices, <strong>[fila][columna]</strong>.',
        'A <strong>matrix</strong> is an array of arrays: it organizes values in rows and columns and is accessed with two indexes, <strong>[row][column]</strong>.',
    ], [
        ['java', `public class ExemploMatriz {
  public static void main(String[] args) {
    // @{matriz de 2 linhas e 3 colunas|matriz de 2 filas y 3 columnas|matrix with 2 rows and 3 columns}
    int[][] matriz = {
      {1, 2, 3},
      {4, 5, 6}
    };
    // @{laço externo: percorre as linhas|bucle externo: recorre las filas|outer loop: goes through the rows}
    for (int i = 0; i < matriz.length; i++) {
      // @{laço interno: percorre as colunas da linha|bucle interno: recorre las columnas de la fila|inner loop: goes through the columns of the row}
      for (int j = 0; j < matriz[i].length; j++) {
        // @{imprime o valor da linha i, coluna j|imprime el valor de la fila i, columna j|prints the value at row i, column j}
        System.out.print(matriz[i][j] + " ");
      }
      // @{quebra de linha ao fim de cada linha da matriz|salto de línea al final de cada fila|new line at the end of each row}
      System.out.println();
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  // @{matriz de 2 linhas e 3 colunas|matriz de 2 filas y 3 columnas|matrix with 2 rows and 3 columns}
  int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };
  // @{laço externo: percorre as linhas|bucle externo: recorre las filas|outer loop: goes through the rows}
  for (int i = 0; i < 2; i++) {
    // @{laço interno: percorre as colunas da linha|bucle interno: recorre las columnas de la fila|inner loop: goes through the columns of the row}
    for (int j = 0; j < 3; j++) {
      printf("%d ", matriz[i][j]);
    }
    // @{quebra de linha ao fim de cada linha da matriz|salto de línea al final de cada fila|new line at the end of each row}
    printf("\\n");
  }
  return 0;
}`],
    ], { aliases: ['matrix', 'matrices', 'array 2d', 'tabela'] });

    estrutura('pilha', [
        'Uma <strong>pilha</strong> (stack) é uma estrutura em que o último elemento a entrar é o primeiro a sair (LIFO). As operações principais são empilhar (<em>push</em>) e desempilhar (<em>pop</em>).',
        'Una <strong>pila</strong> (stack) es una estructura en la que el último elemento en entrar es el primero en salir (LIFO). Las operaciones principales son apilar (<em>push</em>) y desapilar (<em>pop</em>).',
        'A <strong>stack</strong> is a structure where the last element in is the first one out (LIFO). The main operations are <em>push</em> and <em>pop</em>.',
    ], [
        ['java', `import java.util.ArrayDeque;
import java.util.Deque;

public class ExemploPilha {
  public static void main(String[] args) {
    // @{Deque pode funcionar como uma pilha|Deque puede funcionar como una pila|Deque can work as a stack}
    Deque<String> pilha = new ArrayDeque<>();
    // @{empilha A, B e C (C fica no topo)|apila A, B y C (C queda en el tope)|pushes A, B and C (C ends up on top)}
    pilha.push("A");
    pilha.push("B");
    pilha.push("C");
    // @{remove e devolve o topo|quita y devuelve el tope|removes and returns the top}
    System.out.println(pilha.pop());   // C
    // @{só olha o topo, sem remover|solo mira el tope, sin quitarlo|only looks at the top, without removing it}
    System.out.println(pilha.peek());  // B
  }
}`],
        ['c', `#include <stdio.h>

// @{capacidade máxima da pilha|capacidad máxima de la pila|maximum stack capacity}
#define MAX 5

int pilha[MAX];
// @{posição do topo; -1 significa pilha vazia|posición del tope; -1 significa pila vacía|top position; -1 means an empty stack}
int topo = -1;

// @{coloca um valor no topo, se houver espaço|coloca un valor en el tope, si hay espacio|puts a value on top, if there is room}
void empilhar(int valor) {
  if (topo < MAX - 1) pilha[++topo] = valor;
}

// @{remove o valor do topo; devolve -1 se estiver vazia|quita el valor del tope; devuelve -1 si está vacía|removes the top value; returns -1 if empty}
int desempilhar(void) {
  return topo >= 0 ? pilha[topo--] : -1;
}

int main(void) {
  // @{o último a entrar (20) é o primeiro a sair|el último en entrar (20) es el primero en salir|the last one in (20) is the first one out}
  empilhar(10);
  empilhar(20);
  printf("%d\\n", desempilhar()); // 20
  printf("%d\\n", desempilhar()); // 10
  return 0;
}`],
    ], { aliases: ['stack', 'pila', 'lifo', 'empilhar'] });

    estrutura('fila', [
        'Uma <strong>fila</strong> é uma estrutura em que o primeiro elemento a entrar é o primeiro a sair (FIFO), como uma fila de atendimento. As operações principais são enfileirar (<em>enqueue</em>) e desenfileirar (<em>dequeue</em>).',
        'Una <strong>cola</strong> es una estructura en la que el primer elemento en entrar es el primero en salir (FIFO), como una fila de atención. Las operaciones principales son encolar (<em>enqueue</em>) y desencolar (<em>dequeue</em>).',
        'A <strong>queue</strong> is a structure where the first element in is the first one out (FIFO), like a line at a counter. The main operations are <em>enqueue</em> and <em>dequeue</em>.',
    ], [
        ['java', `import java.util.LinkedList;
import java.util.Queue;

public class ExemploFila {
  public static void main(String[] args) {
    // @{LinkedList implementa a interface Queue (fila)|LinkedList implementa la interfaz Queue (cola)|LinkedList implements the Queue interface}
    Queue<String> fila = new LinkedList<>();
    // @{enfileira: Ana entra primeiro|encola: Ana entra primero|enqueue: Ana goes in first}
    fila.offer("Ana");
    fila.offer("Bruno");
    fila.offer("Carla");
    // @{desenfileira: sai quem entrou primeiro (Ana)|desencola: sale quien entró primero (Ana)|dequeue: the first one in comes out (Ana)}
    System.out.println(fila.poll());  // Ana
    // @{olha o início da fila sem remover|mira el inicio de la cola sin quitarlo|looks at the front without removing it}
    System.out.println(fila.peek());  // Bruno
  }
}`],
        ['c', `#include <stdio.h>

#define MAX 5

int fila[MAX];
// @{início aponta para quem sai; fim aponta para a próxima vaga|inicio apunta a quien sale; fin apunta al próximo lugar libre|start points to who leaves; end points to the next free slot}
int inicio = 0, fim = 0;

// @{adiciona no fim da fila|agrega al final de la cola|adds to the end of the queue}
void enfileirar(int valor) {
  if (fim < MAX) fila[fim++] = valor;
}

// @{remove do início da fila; -1 se estiver vazia|quita del inicio de la cola; -1 si está vacía|removes from the front; -1 if empty}
int desenfileirar(void) {
  return inicio < fim ? fila[inicio++] : -1;
}

int main(void) {
  // @{o primeiro a entrar (1) é o primeiro a sair|el primero en entrar (1) es el primero en salir|the first one in (1) is the first one out}
  enfileirar(1);
  enfileirar(2);
  printf("%d\\n", desenfileirar()); // 1
  printf("%d\\n", desenfileirar()); // 2
  return 0;
}`],
    ], { aliases: ['cola', 'fifo', 'enfileirar'] });

    estrutura('lista encadeada', [
        'Uma <strong>lista encadeada</strong> é formada por nós; cada nó guarda um valor e a referência para o próximo nó. Ao contrário do vetor, seus elementos não ficam lado a lado na memória.',
        'Una <strong>lista enlazada</strong> está formada por nodos; cada nodo guarda un valor y la referencia al siguiente nodo. A diferencia del vector, sus elementos no están uno junto al otro en la memoria.',
        'A <strong>linked list</strong> is made of nodes; each node holds a value and a reference to the next node. Unlike an array, its elements are not side by side in memory.',
    ], `// @{cada nó guarda um valor e aponta para o próximo|cada nodo guarda un valor y apunta al siguiente|each node holds a value and points to the next one}
class No {
  int valor;
  No proximo;

  No(int valor) {
    this.valor = valor;
  }
}

public class ListaEncadeada {
  public static void main(String[] args) {
    // @{cria 3 nós ligados em sequência: 1 → 2 → 3|crea 3 nodos enlazados en secuencia: 1 → 2 → 3|creates 3 nodes linked in sequence: 1 → 2 → 3}
    No primeiro = new No(1);
    primeiro.proximo = new No(2);
    primeiro.proximo.proximo = new No(3);

    // @{percorre a lista até chegar ao fim (null)|recorre la lista hasta llegar al final (null)|walks the list until the end (null)}
    for (No atual = primeiro; atual != null; atual = atual.proximo) {
      System.out.println(atual.valor);
    }
  }
}`, { aliases: ['linked list', 'lista enlazada', 'lista ligada', 'nó', 'nodo', 'node'] });

    estrutura('árvore', [
        'Uma <strong>árvore</strong> organiza os dados de forma hierárquica: um nó raiz, que se ramifica em nós filhos. Na árvore binária, cada nó tem no máximo dois filhos (esquerda e direita).',
        'Un <strong>árbol</strong> organiza los datos de forma jerárquica: un nodo raíz que se ramifica en nodos hijos. En el árbol binario, cada nodo tiene como máximo dos hijos (izquierda y derecha).',
        'A <strong>tree</strong> organizes data hierarchically: a root node that branches into child nodes. In a binary tree, each node has at most two children (left and right).',
    ], `// @{nó da árvore: valor, filho esquerdo e filho direito|nodo del árbol: valor, hijo izquierdo e hijo derecho|tree node: value, left child and right child}
class No {
  int valor;
  No esquerda, direita;

  No(int valor) {
    this.valor = valor;
  }
}

public class Arvore {
  // @{percurso em ordem: esquerda, nó, direita|recorrido en orden: izquierda, nodo, derecha|in-order traversal: left, node, right}
  static void emOrdem(No no) {
    // @{caso base: nó vazio, nada a fazer|caso base: nodo vacío, nada que hacer|base case: empty node, nothing to do}
    if (no == null) return;
    emOrdem(no.esquerda);
    System.out.println(no.valor);
    emOrdem(no.direita);
  }

  public static void main(String[] args) {
    // @{monta a árvore: raiz 2 com filhos 1 e 3|arma el árbol: raíz 2 con hijos 1 y 3|builds the tree: root 2 with children 1 and 3}
    No raiz = new No(2);
    raiz.esquerda = new No(1);
    raiz.direita = new No(3);
    emOrdem(raiz); // 1, 2, 3
  }
}`, { aliases: ['tree', 'arbol', 'árvore binária', 'arvore binaria', 'arvore'] });

    estrutura('string', [
        'Uma <strong>string</strong> é uma sequência de caracteres, usada para representar texto. Em Java é a classe <strong>String</strong>; em C é um vetor de <strong>char</strong> terminado em <strong>\'\\0\'</strong>.',
        'Una <strong>string</strong> es una secuencia de caracteres, usada para representar texto. En Java es la clase <strong>String</strong>; en C es un vector de <strong>char</strong> terminado en <strong>\'\\0\'</strong>.',
        'A <strong>string</strong> is a sequence of characters used to represent text. In Java it is the <strong>String</strong> class; in C it is an array of <strong>char</strong> ending in <strong>\'\\0\'</strong>.',
    ], [
        ['java', `public class Texto {
  public static void main(String[] args) {
    // @{texto guardado em um objeto String|texto guardado en un objeto String|text stored in a String object}
    String nome = "CodyLingo";
    // @{quantidade de letras|cantidad de letras|number of letters}
    System.out.println(nome.length());       // 9
    // @{converte para maiúsculas|convierte a mayúsculas|converts to uppercase}
    System.out.println(nome.toUpperCase());  // CODYLINGO
    // @{letra na posição 0|letra en la posición 0|character at position 0}
    System.out.println(nome.charAt(0));      // C
  }
}`],
        ['c', `#include <stdio.h>
#include <string.h>

int main(void) {
  // @{vetor de char; o compilador acrescenta o \\0 no final|vector de char; el compilador añade el \\0 al final|char array; the compiler adds the \\0 at the end}
  char nome[] = "CodyLingo";
  // @{strlen conta as letras, sem contar o \\0|strlen cuenta las letras, sin contar el \\0|strlen counts the letters, not counting the \\0}
  printf("%s tem %zu letras\\n", nome, strlen(nome));
  return 0;
}`],
    ], { aliases: ['texto', 'cadeia de caracteres', 'cadena', 'text', 'char[]'] });

    /* ===================== Palavras reservadas de Java ===================== */

    const ex = (corpo, classe = 'Exemplo') => `public class ${classe} {
  public static void main(String[] args) {
${corpo.split('\n').map((l) => '    ' + l).join('\n')}
  }
}`;

    java('int', [
        'A palavra-chave <strong>int</strong> em Java declara uma variável inteira de 32 bits, com valores de -2.147.483.648 a 2.147.483.647. Em C, também é o tipo inteiro mais usado.',
        'La palabra clave <strong>int</strong> en Java declara una variable entera de 32 bits, con valores de -2.147.483.648 a 2.147.483.647. En C también es el tipo entero más usado.',
        'The <strong>int</strong> keyword in Java declares a 32-bit integer variable, with values from -2,147,483,648 to 2,147,483,647. In C it is also the most used integer type.',
    ], ex('// @{int guarda números inteiros de 32 bits|int guarda números enteros de 32 bits|int stores 32-bit whole numbers}\nint idade = 25;\n// @{conta com int resulta em int|una cuenta con int da int|arithmetic with int gives an int}\nint proximoAno = idade + 1;\nSystem.out.println(proximoAno); // 26', 'Idade'));

    java('float', [
        'A palavra-chave <strong>float</strong> em Java declara um número de ponto flutuante de 32 bits (precisão simples). Os literais terminam com <strong>f</strong>.',
        'La palabra clave <strong>float</strong> en Java declara un número de punto flotante de 32 bits (precisión simple). Los literales terminan con <strong>f</strong>.',
        'The <strong>float</strong> keyword in Java declares a 32-bit floating-point number (single precision). Literals end with <strong>f</strong>.',
    ], ex('// @{o sufixo f indica um literal float|el sufijo f indica un literal float|the f suffix marks a float literal}\nfloat preco = 19.9f;\n// @{float vezes int resulta em float|float por int da float|float times int gives a float}\nfloat total = preco * 3;\nSystem.out.println(total);', 'Preco'));

    java('long', [
        'A palavra-chave <strong>long</strong> em Java declara um inteiro de 64 bits, para números maiores que o <strong>int</strong> suporta. Os literais terminam com <strong>L</strong>.',
        'La palabra clave <strong>long</strong> en Java declara un entero de 64 bits, para números mayores de lo que soporta <strong>int</strong>. Los literales terminan con <strong>L</strong>.',
        'The <strong>long</strong> keyword in Java declares a 64-bit integer, for numbers larger than <strong>int</strong> supports. Literals end with <strong>L</strong>.',
    ], ex('// @{o sufixo L indica long; o _ separa os milhares|el sufijo L indica long; el _ separa los miles|the L suffix marks a long; the _ separates thousands}\nlong populacao = 8_000_000_000L;\n// @{esse valor não cabe em um int|este valor no cabe en un int|this value does not fit in an int}\nSystem.out.println(populacao);', 'Populacao'));

    java('void', [
        'A palavra-chave <strong>void</strong> indica que um método não devolve nenhum valor. Em C, também indica ausência de retorno ou de parâmetros.',
        'La palabra clave <strong>void</strong> indica que un método no devuelve ningún valor. En C también indica ausencia de retorno o de parámetros.',
        'The <strong>void</strong> keyword indicates that a method returns no value. In C it also means no return value or no parameters.',
    ], `public class Saudacao {
  // @{void: o método faz uma ação e não devolve valor|void: el método hace una acción y no devuelve valor|void: the method performs an action and returns no value}
  static void dizerOla(String nome) {
    System.out.println("Olá, " + nome);
  }

  public static void main(String[] args) {
    // @{chama o método; não há retorno para guardar|llama al método; no hay retorno que guardar|calls the method; there is no return value to store}
    dizerOla("Cody");
  }
}`);

    java('if', [
        'A palavra-chave <strong>if</strong> executa um bloco de código somente quando a condição é verdadeira. Pode ser combinada com <strong>else</strong> para o caso contrário.',
        'La palabra clave <strong>if</strong> ejecuta un bloque de código solo cuando la condición es verdadera. Puede combinarse con <strong>else</strong> para el caso contrario.',
        'The <strong>if</strong> keyword runs a block of code only when the condition is true. It can be combined with <strong>else</strong> for the opposite case.',
    ], ex('// @{idade do usuário|edad del usuario|user age}\nint idade = 17;\n// @{executa este bloco só se a condição for verdadeira|ejecuta este bloque solo si la condición es verdadera|runs this block only if the condition is true}\nif (idade >= 18) {\n  System.out.println("Pode dirigir");\n} else {\n  // @{caso contrário, executa este bloco|en caso contrario, ejecuta este bloque|otherwise, runs this block}\n  System.out.println("Ainda não pode");\n}', 'Habilitacao'));

    java('for', [
        'A palavra-chave <strong>for</strong> cria um laço com inicialização, condição e incremento na mesma linha. É ideal quando se sabe quantas vezes repetir.',
        'La palabra clave <strong>for</strong> crea un bucle con inicialización, condición e incremento en la misma línea. Es ideal cuando se sabe cuántas veces repetir.',
        'The <strong>for</strong> keyword creates a loop with initialization, condition and increment on the same line. It is ideal when you know how many times to repeat.',
    ], ex('// @{repete 5 vezes: i vai de 1 até 5|repite 5 veces: i va de 1 a 5|repeats 5 times: i goes from 1 to 5}\nfor (int i = 1; i <= 5; i++) {\n  // @{imprime Linha 1, Linha 2, e assim por diante|imprime Línea 1, Línea 2, y así sucesivamente|prints Line 1, Line 2, and so on}\n  System.out.println("Linha " + i);\n}', 'Repeticao'));

    java('while', [
        'A palavra-chave <strong>while</strong> repete um bloco enquanto a condição for verdadeira. A condição é testada antes de cada repetição.',
        'La palabra clave <strong>while</strong> repite un bloque mientras la condición sea verdadera. La condición se evalúa antes de cada repetición.',
        'The <strong>while</strong> keyword repeats a block while the condition is true. The condition is checked before each repetition.',
    ], ex('// @{valor inicial do contador|valor inicial del contador|starting value of the counter}\nint contador = 3;\n// @{testa a condição antes de cada repetição|evalúa la condición antes de cada repetición|checks the condition before each repetition}\nwhile (contador > 0) {\n  System.out.println(contador);\n  // @{diminui 1; ao chegar a 0, o laço termina|resta 1; al llegar a 0, el bucle termina|subtracts 1; at 0 the loop ends}\n  contador--;\n}', 'Contador'));

    java('switch', [
        'A palavra-chave <strong>switch</strong> escolhe um entre vários caminhos conforme o valor de uma expressão, usando <strong>case</strong>, <strong>break</strong> e <strong>default</strong>.',
        'La palabra clave <strong>switch</strong> elige uno entre varios caminos según el valor de una expresión, usando <strong>case</strong>, <strong>break</strong> y <strong>default</strong>.',
        'The <strong>switch</strong> keyword chooses one of several paths based on the value of an expression, using <strong>case</strong>, <strong>break</strong> and <strong>default</strong>.',
    ], ex('// @{valor que será comparado em cada case|valor que se comparará en cada case|value that will be compared in each case}\nint dia = 3;\n// @{escolhe o case que combina com o valor|elige el case que coincide con el valor|picks the case that matches the value}\nswitch (dia) {\n  // @{o break impede de continuar no case seguinte|el break evita seguir en el case siguiente|break stops execution from falling into the next case}\n  case 1: System.out.println("Domingo"); break;\n  case 2: System.out.println("Segunda"); break;\n  case 3: System.out.println("Terça"); break;\n  // @{executa se nenhum case combinar|se ejecuta si ningún case coincide|runs if no case matches}\n  default: System.out.println("Outro dia");\n}', 'DiaDaSemana'));

    java('return', [
        'A palavra-chave <strong>return</strong> encerra a execução de um método e, se houver, devolve um valor a quem o chamou. Funciona de forma parecida em C.',
        'La palabra clave <strong>return</strong> termina la ejecución de un método y, si corresponde, devuelve un valor a quien lo llamó. Funciona de forma parecida en C.',
        'The <strong>return</strong> keyword ends the execution of a method and, if there is one, gives a value back to the caller. It works similarly in C.',
    ], `public class Dobro {
  // @{o int antes do nome é o tipo do valor devolvido|el int antes del nombre es el tipo del valor devuelto|the int before the name is the type of the returned value}
  static int dobro(int n) {
    // @{encerra o método e devolve o dobro de n|termina el método y devuelve el doble de n|ends the method and returns n times two}
    return n * 2;
  }

  public static void main(String[] args) {
    System.out.println(dobro(21)); // 42
  }
}`);

    java('static', [
        'A palavra-chave <strong>static</strong> indica que o membro pertence à classe, e não a cada objeto. Pode ser usado sem criar uma instância.',
        'La palabra clave <strong>static</strong> indica que el miembro pertenece a la clase y no a cada objeto. Se puede usar sin crear una instancia.',
        'The <strong>static</strong> keyword indicates that the member belongs to the class, not to each object. It can be used without creating an instance.',
    ], `public class Contador {
  // @{pertence à classe: compartilhado por todos os objetos|pertenece a la clase: compartido por todos los objetos|belongs to the class: shared by all objects}
  static int total = 0;

  // @{construtor: roda a cada new|constructor: se ejecuta en cada new|constructor: runs on every new}
  Contador() {
    // @{incrementa o mesmo total compartilhado|incrementa el mismo total compartido|increments the same shared total}
    total++;
  }

  public static void main(String[] args) {
    // @{cria dois objetos|crea dos objetos|creates two objects}
    new Contador();
    new Contador();
    // @{acessa pela classe, sem precisar de objeto|se accede por la clase, sin necesitar un objeto|accessed through the class, no object needed}
    System.out.println(Contador.total); // 2
  }
}`);

    java('final', [
        'A palavra-chave <strong>final</strong> impede mudanças: uma variável <strong>final</strong> vira constante, um método <strong>final</strong> não pode ser sobrescrito e uma classe <strong>final</strong> não pode ser herdada.',
        'La palabra clave <strong>final</strong> impide cambios: una variable <strong>final</strong> se vuelve constante, un método <strong>final</strong> no puede sobrescribirse y una clase <strong>final</strong> no puede heredarse.',
        'The <strong>final</strong> keyword prevents changes: a <strong>final</strong> variable becomes a constant, a <strong>final</strong> method cannot be overridden and a <strong>final</strong> class cannot be inherited.',
    ], ex('// @{final: o valor não pode ser trocado|final: el valor no se puede cambiar|final: the value cannot be replaced}\nfinal int MAX_TENTATIVAS = 3;\nSystem.out.println(MAX_TENTATIVAS);\n// MAX_TENTATIVAS = 5; // erro de compilação', 'Limite'));

    java('public', [
        'O modificador <strong>public</strong> torna a classe, o método ou o atributo acessível de qualquer outra classe.',
        'El modificador <strong>public</strong> hace que la clase, el método o el atributo sea accesible desde cualquier otra clase.',
        'The <strong>public</strong> modifier makes the class, method or attribute accessible from any other class.',
    ], `// @{public: a classe pode ser usada por qualquer outra|public: la clase puede ser usada por cualquier otra|public: the class can be used by any other class}
public class Pessoa {
  // @{atributo acessível de fora da classe|atributo accesible desde fuera de la clase|attribute reachable from outside the class}
  public String nome;

  // @{construtor público|constructor público|public constructor}
  public Pessoa(String nome) {
    this.nome = nome;
  }

  public static void main(String[] args) {
    Pessoa p = new Pessoa("Ana");
    // @{acesso direto ao atributo, permitido por ser public|acceso directo al atributo, permitido por ser public|direct access to the attribute, allowed because it is public}
    System.out.println(p.nome);
  }
}`);

    java('private', [
        'O modificador <strong>private</strong> restringe o acesso ao interior da própria classe. É a base do encapsulamento: o acesso de fora é feito por getters e setters.',
        'El modificador <strong>private</strong> restringe el acceso al interior de la propia clase. Es la base del encapsulamiento: el acceso desde fuera se hace mediante getters y setters.',
        'The <strong>private</strong> modifier restricts access to the inside of the class itself. It is the basis of encapsulation: outside access is done through getters and setters.',
    ], `public class Conta {
  // @{private: só a própria classe enxerga este atributo|private: solo la propia clase ve este atributo|private: only the class itself can see this attribute}
  private double saldo;

  // @{método público para ler o saldo com segurança|método público para leer el saldo de forma segura|public method to read the balance safely}
  public double getSaldo() {
    return saldo;
  }

  // @{a regra de validação fica dentro da classe|la regla de validación queda dentro de la clase|the validation rule stays inside the class}
  public void depositar(double valor) {
    if (valor > 0) saldo += valor;
  }

  public static void main(String[] args) {
    Conta c = new Conta();
    // @{de fora, só dá para mudar o saldo por este método|desde fuera, solo se puede cambiar el saldo por este método|from outside, the balance can only be changed through this method}
    c.depositar(100);
    System.out.println(c.getSaldo()); // 100.0
  }
}`);

    java('protected', [
        'O modificador <strong>protected</strong> permite o acesso dentro do mesmo pacote e também nas subclasses, mesmo em pacotes diferentes.',
        'El modificador <strong>protected</strong> permite el acceso dentro del mismo paquete y también en las subclases, incluso en paquetes distintos.',
        'The <strong>protected</strong> modifier allows access within the same package and also in subclasses, even in different packages.',
    ], `class Animal {
  // @{protected: visível na classe e nas subclasses|protected: visible en la clase y en las subclases|protected: visible in the class and its subclasses}
  protected String nome = "Rex";
}

// @{Cachorro herda de Animal, então enxerga o atributo|Perro hereda de Animal, así que ve el atributo|Dog inherits from Animal, so it sees the attribute}
public class Cachorro extends Animal {
  void apresentar() {
    // @{usa nome direto, pois foi herdado de Animal|usa nombre directamente, pues se heredó de Animal|uses name directly, since it was inherited from Animal}
    System.out.println("Eu sou o " + nome);
  }

  public static void main(String[] args) {
    new Cachorro().apresentar();
  }
}`);

    java('new', [
        'A palavra-chave <strong>new</strong> cria uma nova instância de uma classe (um objeto) ou um novo vetor, reservando memória para ele.',
        'La palabra clave <strong>new</strong> crea una nueva instancia de una clase (un objeto) o un nuevo vector, reservando memoria para él.',
        'The <strong>new</strong> keyword creates a new instance of a class (an object) or a new array, reserving memory for it.',
    ], ex('// @{new cria um objeto na memória|new crea un objeto en memoria|new creates an object in memory}\nStringBuilder texto = new StringBuilder("Cody");\n// @{altera o objeto criado|modifica el objeto creado|changes the created object}\ntexto.append("Lingo");\n// @{new também cria vetores: 3 posições com valor 0|new también crea vectores: 3 posiciones con valor 0|new also creates arrays: 3 positions holding 0}\nint[] numeros = new int[3];\nSystem.out.println(texto);\nSystem.out.println(numeros.length);', 'Criacao'));

    java('this', [
        'A palavra-chave <strong>this</strong> é uma referência ao objeto atual. Serve, por exemplo, para diferenciar um atributo de um parâmetro com o mesmo nome.',
        'La palabra clave <strong>this</strong> es una referencia al objeto actual. Sirve, por ejemplo, para diferenciar un atributo de un parámetro con el mismo nombre.',
        'The <strong>this</strong> keyword is a reference to the current object. It is used, for example, to tell an attribute apart from a parameter with the same name.',
    ], `public class Produto {
  String nome;

  // @{o parâmetro tem o mesmo nome do atributo|el parámetro tiene el mismo nombre que el atributo|the parameter has the same name as the field}
  Produto(String nome) {
    // @{this.nome é o atributo; nome é o parâmetro|this.nombre es el atributo; nombre es el parámetro|this.name is the field; name is the parameter}
    this.nome = nome;
  }

  public static void main(String[] args) {
    System.out.println(new Produto("Caderno").nome);
  }
}`);

    java('super', [
        'A palavra-chave <strong>super</strong> faz referência à superclasse: serve para chamar o construtor ou os métodos da classe pai.',
        'La palabra clave <strong>super</strong> hace referencia a la superclase: sirve para llamar al constructor o a los métodos de la clase padre.',
        'The <strong>super</strong> keyword refers to the superclass: it is used to call the constructor or the methods of the parent class.',
    ], `// @{superclasse com o atributo tipo|superclase con el atributo tipo|superclass with the type attribute}
class Veiculo {
  String tipo;

  Veiculo(String tipo) {
    this.tipo = tipo;
  }
}

public class Carro extends Veiculo {
  Carro() {
    // @{chama o construtor da superclasse|llama al constructor de la superclase|calls the superclass constructor}
    super("Carro");
  }

  public static void main(String[] args) {
    // @{imprime o tipo definido pela superclasse|imprime el tipo definido por la superclase|prints the type set by the superclass}
    System.out.println(new Carro().tipo);
  }
}`);

    java('extends', [
        'A palavra-chave <strong>extends</strong> faz uma classe herdar os atributos e métodos de outra classe (herança). Em Java, uma classe estende apenas uma classe.',
        'La palabra clave <strong>extends</strong> hace que una clase herede los atributos y métodos de otra clase (herencia). En Java, una clase extiende solo una clase.',
        'The <strong>extends</strong> keyword makes a class inherit the attributes and methods of another class (inheritance). In Java, a class extends only one class.',
    ], `// @{classe base com o método dormir|clase base con el método dormir|base class with the sleep method}
class Animal {
  void dormir() {
    System.out.println("Dormindo...");
  }
}

// @{Gato herda tudo de Animal|Gato hereda todo de Animal|Cat inherits everything from Animal}
public class Gato extends Animal {
  public static void main(String[] args) {
    // @{usa o método herdado|usa el método heredado|uses the inherited method}
    new Gato().dormir();
  }
}`);

    java('implements', [
        'A palavra-chave <strong>implements</strong> indica que uma classe cumpre o contrato de uma ou mais interfaces, implementando todos os seus métodos.',
        'La palabra clave <strong>implements</strong> indica que una clase cumple el contrato de una o más interfaces, implementando todos sus métodos.',
        'The <strong>implements</strong> keyword indicates that a class fulfills the contract of one or more interfaces, implementing all their methods.',
    ], `// @{interface: define o que fazer, sem dizer como|interfaz: define qué hacer, sin decir cómo|interface: defines what to do, not how}
interface Falante {
  void falar();
}

// @{a classe se compromete a implementar falar()|la clase se compromete a implementar hablar()|the class promises to implement speak()}
public class Papagaio implements Falante {
  // @{implementação obrigatória do método|implementación obligatoria del método|required implementation of the method}
  public void falar() {
    System.out.println("Oi!");
  }

  public static void main(String[] args) {
    new Papagaio().falar();
  }
}`);

    java('interface', [
        'Uma <strong>interface</strong> em Java define um contrato: uma lista de métodos que as classes que a implementam devem ter. Uma classe pode implementar várias interfaces.',
        'Una <strong>interface</strong> en Java define un contrato: una lista de métodos que deben tener las clases que la implementan. Una clase puede implementar varias interfaces.',
        'An <strong>interface</strong> in Java defines a contract: a list of methods that the classes implementing it must have. A class can implement several interfaces.',
    ], `// @{contrato: toda forma tem uma área|contrato: toda forma tiene un área|contract: every shape has an area}
interface Forma {
  double area();
}

// @{o quadrado cumpre o contrato|el cuadrado cumple el contrato|the square fulfills the contract}
class Quadrado implements Forma {
  double lado = 3;

  public double area() {
    return lado * lado;
  }
}

public class TesteInterface {
  public static void main(String[] args) {
    // @{a variável usa o tipo da interface|la variable usa el tipo de la interfaz|the variable uses the interface type}
    Forma f = new Quadrado();
    System.out.println(f.area()); // 9.0
  }
}`);

    java('try', [
        'A palavra-chave <strong>try</strong> delimita um bloco de código que pode lançar uma exceção. É seguida por <strong>catch</strong> (trata o erro) e, opcionalmente, por <strong>finally</strong>.',
        'La palabra clave <strong>try</strong> delimita un bloque de código que puede lanzar una excepción. Va seguida de <strong>catch</strong> (trata el error) y, opcionalmente, de <strong>finally</strong>.',
        'The <strong>try</strong> keyword delimits a block of code that may throw an exception. It is followed by <strong>catch</strong> (handles the error) and, optionally, <strong>finally</strong>.',
    ], ex('try {\n  // @{código que pode gerar erro|código que puede generar un error|code that may cause an error}\n  // @{divisão por zero lança ArithmeticException|la división por cero lanza ArithmeticException|division by zero throws ArithmeticException}\n  int resultado = 10 / 0;\n  System.out.println(resultado);\n} catch (ArithmeticException e) {\n  // @{captura o erro e evita que o programa pare|captura el error y evita que el programa se detenga|catches the error so the program does not stop}\n  System.out.println("Divisão por zero!");\n}', 'Divisao'));

    java('finally', [
        'A palavra-chave <strong>finally</strong> define um bloco que sempre é executado depois de <strong>try</strong> e <strong>catch</strong>, havendo erro ou não. É usado para liberar recursos.',
        'La palabra clave <strong>finally</strong> define un bloque que siempre se ejecuta después de <strong>try</strong> y <strong>catch</strong>, haya error o no. Se usa para liberar recursos.',
        'The <strong>finally</strong> keyword defines a block that always runs after <strong>try</strong> and <strong>catch</strong>, whether there is an error or not. It is used to release resources.',
    ], ex('try {\n  // @{tenta executar este bloco|intenta ejecutar este bloque|tries to run this block}\n  System.out.println("Tentando...");\n} catch (Exception e) {\n  // @{só roda se ocorrer uma exceção|solo corre si ocurre una excepción|runs only if an exception occurs}\n  System.out.println("Erro");\n} finally {\n  // @{roda sempre, com ou sem erro|corre siempre, con o sin error|always runs, with or without an error}\n  System.out.println("Sempre executa");\n}', 'Final'));

    java('throw', [
        'A palavra-chave <strong>throw</strong> lança uma exceção manualmente, interrompendo o fluxo normal do método.',
        'La palabra clave <strong>throw</strong> lanza una excepción manualmente, interrumpiendo el flujo normal del método.',
        'The <strong>throw</strong> keyword throws an exception manually, interrupting the normal flow of the method.',
    ], `public class Validacao {
  // @{valida o valor recebido|valida el valor recibido|validates the received value}
  static void validarIdade(int idade) {
    if (idade < 0) {
      // @{lança uma exceção para sinalizar o erro|lanza una excepción para señalar el error|throws an exception to signal the error}
      throw new IllegalArgumentException("Idade inválida");
    }
  }

  public static void main(String[] args) {
    // @{valor inválido: o programa para com erro|valor no válido: el programa se detiene con un error|invalid value: the program stops with an error}
    validarIdade(-1);
  }
}`);

    java('throws', [
        'A palavra-chave <strong>throws</strong> aparece na assinatura de um método para declarar as exceções que ele pode lançar e que quem o chama deve tratar.',
        'La palabra clave <strong>throws</strong> aparece en la firma de un método para declarar las excepciones que puede lanzar y que quien lo llama debe tratar.',
        'The <strong>throws</strong> keyword appears in a method signature to declare the exceptions it may throw and that the caller must handle.',
    ], `import java.io.FileReader;
import java.io.IOException;

public class Leitura {
  // @{throws avisa que o método pode lançar IOException|throws avisa que el método puede lanzar IOException|throws warns that the method may throw IOException}
  static void abrir(String caminho) throws IOException {
    FileReader leitor = new FileReader(caminho);
    leitor.close();
  }

  public static void main(String[] args) {
    try {
      // @{quem chama é obrigado a tratar a exceção|quien llama está obligado a tratar la excepción|the caller must handle the exception}
      abrir("dados.txt");
    } catch (IOException e) {
      // @{trata o erro caso o arquivo não exista|trata el error si el archivo no existe|handles the error if the file does not exist}
      System.out.println("Arquivo não encontrado");
    }
  }
}`);

    java('import', [
        'A palavra-chave <strong>import</strong> traz classes de outros pacotes para o arquivo atual, para que possam ser usadas sem escrever o nome completo.',
        'La palabra clave <strong>import</strong> trae clases de otros paquetes al archivo actual, para poder usarlas sin escribir el nombre completo.',
        'The <strong>import</strong> keyword brings classes from other packages into the current file, so they can be used without writing the full name.',
    ], `// @{import traz classes de outros pacotes|import trae clases de otros paquetes|import brings in classes from other packages}
import java.util.ArrayList;
import java.util.List;

public class Lista {
  public static void main(String[] args) {
    // @{lista de textos, criada com ArrayList|lista de textos, creada con ArrayList|list of strings, created with ArrayList}
    List<String> nomes = new ArrayList<>();
    // @{adiciona elementos à lista|agrega elementos a la lista|adds elements to the list}
    nomes.add("Ana");
    nomes.add("Bruno");
    System.out.println(nomes);
  }
}`);

    java('null', [
        'O literal <strong>null</strong> representa a ausência de objeto: uma referência que não aponta para nada. Usar um método em uma referência <strong>null</strong> causa <strong>NullPointerException</strong>.',
        'El literal <strong>null</strong> representa la ausencia de objeto: una referencia que no apunta a nada. Usar un método en una referencia <strong>null</strong> causa <strong>NullPointerException</strong>.',
        'The <strong>null</strong> literal represents the absence of an object: a reference that points to nothing. Calling a method on a <strong>null</strong> reference causes a <strong>NullPointerException</strong>.',
    ], ex('// @{null: a variável não aponta para nenhum objeto|null: la variable no apunta a ningún objeto|null: the variable points to no object}\nString nome = null;\n// @{sempre teste null antes de usar o objeto|prueba siempre null antes de usar el objeto|always check for null before using the object}\nif (nome == null) {\n  System.out.println("Nome não informado");\n}', 'Nulo'));

    java('enum', [
        'A palavra-chave <strong>enum</strong> define um conjunto fixo de constantes com nome, como os dias da semana ou os estados de um pedido.',
        'La palabra clave <strong>enum</strong> define un conjunto fijo de constantes con nombre, como los días de la semana o los estados de un pedido.',
        'The <strong>enum</strong> keyword defines a fixed set of named constants, such as the days of the week or the states of an order.',
    ], `// @{enum: conjunto fixo de valores possíveis|enum: conjunto fijo de valores posibles|enum: fixed set of possible values}
enum Status {
  PENDENTE, PAGO, ENVIADO
}

public class Pedido {
  public static void main(String[] args) {
    // @{só aceita um dos valores do enum|solo acepta uno de los valores del enum|only accepts one of the enum values}
    Status s = Status.PAGO;
    System.out.println(s);
  }
}`);

    java('instanceof', [
        'O operador <strong>instanceof</strong> verifica se um objeto é instância de determinada classe ou interface, devolvendo <strong>true</strong> ou <strong>false</strong>.',
        'El operador <strong>instanceof</strong> verifica si un objeto es instancia de una clase o interfaz determinada, devolviendo <strong>true</strong> o <strong>false</strong>.',
        'The <strong>instanceof</strong> operator checks whether an object is an instance of a given class or interface, returning <strong>true</strong> or <strong>false</strong>.',
    ], `class Animal {}
// @{Cachorro herda de Animal|Perro hereda de Animal|Dog inherits from Animal}
class Cachorro extends Animal {}

public class Teste {
  public static void main(String[] args) {
    // @{a variável é Animal, mas o objeto é Cachorro|la variable es Animal, pero el objeto es Perro|the variable is Animal, but the object is Dog}
    Animal a = new Cachorro();
    // @{verifica o tipo real do objeto|verifica el tipo real del objeto|checks the real type of the object}
    System.out.println(a instanceof Cachorro); // true
    System.out.println(a instanceof Animal);   // true
  }
}`);

    /* ===================== Avançado (Threads/Concorrência) ===================== */

    java('synchronized', [
        'A palavra-chave <strong>synchronized</strong> garante que apenas uma thread por vez acesse um bloco de código ou método. É essencial para evitar condições de corrida em programas multithread.',
        'La palabra clave <strong>synchronized</strong> garantiza que solo un hilo a la vez acceda a un bloque de código o método. Es esencial para evitar condiciones de carrera en programas multihilo.',
        'The <strong>synchronized</strong> keyword ensures that only one thread at a time accesses a block of code or method. It is essential to avoid race conditions in multithreaded programs.',
    ], `public class ContadorSeguro {
  private int contagem = 0;

  // @{só uma thread por vez executa este método|solo un hilo a la vez ejecuta este método|only one thread at a time runs this method}
  public synchronized void incrementar() {
    contagem++;
  }

  public int getContagem() {
    return contagem;
  }

  public static void main(String[] args) throws InterruptedException {
    ContadorSeguro contador = new ContadorSeguro();
    // @{duas threads incrementam o mesmo contador|dos hilos incrementan el mismo contador|two threads increment the same counter}
    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) contador.incrementar();
    });
    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) contador.incrementar();
    });
    t1.start(); t2.start();
    // @{espera as duas terminarem|espera a que terminen los dos|waits for both to finish}
    t1.join(); t2.join();
    // @{sem synchronized, o resultado poderia ser menor que 2000|sin synchronized, el resultado podría ser menor que 2000|without synchronized, the result could be lower than 2000}
    System.out.println(contador.getContagem()); // 2000
  }
}`);

    java('Thread', [
        'Uma <strong>Thread</strong> é uma linha de execução independente dentro de um programa. Permite que tarefas ocorram simultaneamente, melhorando o desempenho e a responsividade.',
        'Un <strong>Thread</strong> (hilo) es una línea de ejecución independiente dentro de un programa. Permite que las tareas ocurran simultáneamente, mejorando el rendimiento y la capacidad de respuesta.',
        'A <strong>Thread</strong> is an independent line of execution within a program. It allows tasks to happen simultaneously, improving performance and responsiveness.',
    ], `// @{uma thread é uma linha de execução paralela|un hilo es una línea de ejecución paralela|a thread is a parallel line of execution}
public class MinhaThread extends Thread {
  // @{o código que a thread executa|el código que ejecuta el hilo|the code the thread runs}
  public void run() {
    for (int i = 1; i <= 3; i++) {
      System.out.println("Executando: " + i);
      // @{pausa por 1 segundo|pausa por 1 segundo|pauses for 1 second}
      try { Thread.sleep(1000); } catch (InterruptedException e) {}
    }
  }

  public static void main(String[] args) {
    // @{cria a thread, mas ainda não a executa|crea el hilo, pero aún no lo ejecuta|creates the thread but does not run it yet}
    MinhaThread t = new MinhaThread();
    t.start(); // Inicia a thread
  }
}`);

    /* ===================== C ===================== */

    c('printf', [
        'A função <strong>printf</strong>, da biblioteca <strong>stdio.h</strong>, imprime texto formatado na tela. Os códigos <strong>%d</strong> (inteiro), <strong>%f</strong> (decimal) e <strong>%s</strong> (texto) marcam onde entram os valores.',
        'La función <strong>printf</strong>, de la biblioteca <strong>stdio.h</strong>, imprime texto con formato en la pantalla. Los códigos <strong>%d</strong> (entero), <strong>%f</strong> (decimal) y <strong>%s</strong> (texto) marcan dónde entran los valores.',
        'The <strong>printf</strong> function, from the <strong>stdio.h</strong> library, prints formatted text on the screen. The codes <strong>%d</strong> (integer), <strong>%f</strong> (decimal) and <strong>%s</strong> (text) mark where values go.',
    ], `#include <stdio.h>

int main(void) {
  // @{dados que serão exibidos|datos que se mostrarán|data that will be displayed}
  int idade = 20;
  double altura = 1.75;
  char nome[] = "Ana";
  // @{%s = texto, %d = inteiro, %.2f = decimal com 2 casas|%s = texto, %d = entero, %.2f = decimal con 2 decimales|%s = text, %d = integer, %.2f = decimal with 2 places}
  printf("%s tem %d anos e %.2f m\\n", nome, idade, altura);
  return 0;
}`);

    c('scanf', [
        'A função <strong>scanf</strong>, da biblioteca <strong>stdio.h</strong>, lê valores digitados pelo usuário. É preciso passar o endereço da variável com <strong>&amp;</strong>.',
        'La función <strong>scanf</strong>, de la biblioteca <strong>stdio.h</strong>, lee valores escritos por el usuario. Hay que pasar la dirección de la variable con <strong>&amp;</strong>.',
        'The <strong>scanf</strong> function, from the <strong>stdio.h</strong> library, reads values typed by the user. You must pass the address of the variable using <strong>&amp;</strong>.',
    ], `#include <stdio.h>

int main(void) {
  // @{variável que vai receber o valor digitado|variable que recibirá el valor escrito|variable that will receive the typed value}
  int idade;
  printf("Digite sua idade: ");
  // @{lê um inteiro do teclado; o & passa o endereço da variável|lee un entero del teclado; el & pasa la dirección de la variable|reads an integer from the keyboard; & passes the variable address}
  scanf("%d", &idade);
  // @{mostra o valor lido|muestra el valor leído|shows the value that was read}
  printf("Você tem %d anos\\n", idade);
  return 0;
}`);

    c('malloc', [
        'A função <strong>malloc</strong>, da biblioteca <strong>stdlib.h</strong>, reserva um bloco de memória durante a execução e devolve um ponteiro para ele (ou <strong>NULL</strong> se falhar). A memória deve ser liberada com <strong>free</strong>.',
        'La función <strong>malloc</strong>, de la biblioteca <strong>stdlib.h</strong>, reserva un bloque de memoria durante la ejecución y devuelve un puntero a él (o <strong>NULL</strong> si falla). La memoria debe liberarse con <strong>free</strong>.',
        'The <strong>malloc</strong> function, from the <strong>stdlib.h</strong> library, reserves a block of memory at run time and returns a pointer to it (or <strong>NULL</strong> on failure). The memory must be released with <strong>free</strong>.',
    ], `#include <stdio.h>
#include <stdlib.h>

int main(void) {
  // @{reserva espaço para 5 inteiros na memória (heap)|reserva espacio para 5 enteros en memoria (heap)|reserves room for 5 integers in memory (heap)}
  int *v = malloc(5 * sizeof(int));
  // @{malloc devolve NULL se não houver memória|malloc devuelve NULL si no hay memoria|malloc returns NULL if there is no memory}
  if (v == NULL) return 1;

  // @{usa a memória como se fosse um vetor|usa la memoria como si fuera un vector|uses the memory like an array}
  for (int i = 0; i < 5; i++) v[i] = i * 10;
  printf("%d\\n", v[4]); // 40

  // @{libera a memória quando não precisar mais|libera la memoria cuando ya no se necesita|releases the memory when it is no longer needed}
  free(v);
  return 0;
}`, { aliases: ['alocação dinâmica', 'alocacao dinamica', 'calloc'] });

    c('free', [
        'A função <strong>free</strong>, da biblioteca <strong>stdlib.h</strong>, libera um bloco de memória reservado com <strong>malloc</strong>. Esquecer de liberar causa vazamento de memória.',
        'La función <strong>free</strong>, de la biblioteca <strong>stdlib.h</strong>, libera un bloque de memoria reservado con <strong>malloc</strong>. Olvidar liberarlo causa una fuga de memoria.',
        'The <strong>free</strong> function, from the <strong>stdlib.h</strong> library, releases a block of memory reserved with <strong>malloc</strong>. Forgetting to free it causes a memory leak.',
    ], `#include <stdio.h>
#include <stdlib.h>

int main(void) {
  // @{reserva 20 bytes|reserva 20 bytes|reserves 20 bytes}
  char *texto = malloc(20);
  if (texto == NULL) return 1;

  snprintf(texto, 20, "CodyLingo");
  printf("%s\\n", texto);

  // @{devolve a memória ao sistema|devuelve la memoria al sistema|gives the memory back to the system}
  free(texto);
  // @{evita usar um ponteiro que já foi liberado|evita usar un puntero que ya fue liberado|avoids using a pointer that was already freed}
  texto = NULL;
  return 0;
}`, { aliases: ['vazamento de memória', 'memory leak'] });

    c('typedef', [
        'A palavra-chave <strong>typedef</strong> cria um apelido para um tipo existente, deixando o código mais curto e legível, principalmente com <strong>struct</strong>.',
        'La palabra clave <strong>typedef</strong> crea un alias para un tipo existente, haciendo el código más corto y legible, sobre todo con <strong>struct</strong>.',
        'The <strong>typedef</strong> keyword creates an alias for an existing type, making the code shorter and more readable, especially with <strong>struct</strong>.',
    ], `#include <stdio.h>

// @{define o tipo Pessoa a partir de uma struct|define el tipo Persona a partir de una struct|defines the Person type from a struct}
typedef struct {
  char nome[30];
  int idade;
} Pessoa;

int main(void) {
  // @{agora basta Pessoa, sem escrever struct|ahora basta Persona, sin escribir struct|now Person is enough, no need to write struct}
  Pessoa p = {"Ana", 20};
  printf("%s, %d\\n", p.nome, p.idade);
  return 0;
}`);

    c('union', [
        'A palavra-chave <strong>union</strong> define um tipo cujos membros compartilham o mesmo espaço de memória: só um deles guarda valor válido por vez.',
        'La palabra clave <strong>union</strong> define un tipo cuyos miembros comparten el mismo espacio de memoria: solo uno guarda un valor válido a la vez.',
        'The <strong>union</strong> keyword defines a type whose members share the same memory space: only one of them holds a valid value at a time.',
    ], `#include <stdio.h>

// @{os membros compartilham o mesmo espaço de memória|los miembros comparten el mismo espacio de memoria|members share the same memory space}
union Valor {
  int inteiro;
  float decimal;
};

int main(void) {
  union Valor v;
  // @{guarda o inteiro; só ele é válido agora|guarda el entero; solo él es válido ahora|stores the integer; only it is valid now}
  v.inteiro = 42;
  printf("%d\\n", v.inteiro);
  // @{sobrescreve o valor anterior|sobrescribe el valor anterior|overwrites the previous value}
  v.decimal = 3.14f;
  printf("%.2f\\n", v.decimal);
  return 0;
}`);

    c('const', [
        'O qualificador <strong>const</strong> indica que o valor de uma variável não pode ser alterado depois de inicializado. Tentar modificá-lo gera erro de compilação.',
        'El calificador <strong>const</strong> indica que el valor de una variable no puede cambiarse después de inicializada. Intentar modificarlo genera un error de compilación.',
        'The <strong>const</strong> qualifier indicates that a variable\'s value cannot be changed after initialization. Trying to modify it causes a compile error.',
    ], `#include <stdio.h>

int main(void) {
  // @{const: valor fixo depois de inicializado|const: valor fijo después de inicializado|const: fixed value once initialized}
  const int DIAS_SEMANA = 7;
  printf("%d\\n", DIAS_SEMANA);
  /* DIAS_SEMANA = 8;  erro de compilação */
  return 0;
}`);

    c('#include', [
        'A diretiva <strong>#include</strong> insere no programa o conteúdo de um arquivo de cabeçalho, como <strong>stdio.h</strong>. Com aspas, busca arquivos do próprio projeto.',
        'La directiva <strong>#include</strong> inserta en el programa el contenido de un archivo de cabecera, como <strong>stdio.h</strong>. Con comillas, busca archivos del propio proyecto.',
        'The <strong>#include</strong> directive inserts the contents of a header file, such as <strong>stdio.h</strong>, into the program. With quotes, it looks for files from your own project.',
    ], `#include <stdio.h>    /* biblioteca padrão */
// @{funções matemáticas, como sqrt|funciones matemáticas, como sqrt|math functions, such as sqrt}
#include <math.h>
/* #include "meu_arquivo.h"   arquivo do projeto */

int main(void) {
  // @{raiz quadrada de 16|raíz cuadrada de 16|square root of 16}
  printf("%.1f\\n", sqrt(16.0)); // 4.0
  return 0;
}`, { aliases: ['include', 'diretiva', 'biblioteca', 'header', 'stdio.h'] });

    /* ===================== Orientação a Objetos ===================== */

    registrar('construtor', 'Orientação a objetos', 'conceito', 'java', [
        'Um <strong>construtor</strong> é um método especial que inicializa um objeto quando ele é criado com <strong>new</strong>. Ele tem o mesmo nome da classe e não possui tipo de retorno. Em C, usamos funções de inicialização (como <em>init</em>) para simular esse comportamento.',
        'Un <strong>constructor</strong> es un método especial que inicializa un objeto cuando se crea con <strong>new</strong>. Tiene el mismo nombre que la clase y no tiene tipo de retorno. En C, usamos funciones de inicialización (como <em>init</em>) para simular este comportamiento.',
        'A <strong>constructor</strong> is a special method that initializes an object when it is created with <strong>new</strong>. It has the same name as the class and no return type. In C, we use initialization functions (like <em>init</em>) to simulate this behavior.',
    ], [
        ['java', `public class Pessoa {
  // @{atributos do objeto|atributos del objeto|object attributes}
  String nome;
  int idade;

  // Construtor
  public Pessoa(String nome, int idade) {
    // @{copia o parâmetro para o atributo|copia el parámetro al atributo|copies the parameter into the field}
    this.nome = nome;
    this.idade = idade;
  }

  public static void main(String[] args) {
    Pessoa p = new Pessoa("Ana", 25); // Chama o construtor
    // @{o objeto já nasce inicializado|el objeto ya nace inicializado|the object is born already initialized}
    System.out.println(p.nome + " tem " + p.idade + " anos.");
  }
}`],
        ['c', `#include <stdio.h>
#include <string.h>

// @{struct no lugar da classe|struct en lugar de la clase|a struct in place of the class}
typedef struct {
  char nome[50];
  int idade;
} Pessoa;

// Função que simula um construtor em C
void initPessoa(Pessoa *p, const char *nome, int idade) {
  // @{copia o texto para dentro da struct|copia el texto dentro de la struct|copies the text into the struct}
  strcpy(p->nome, nome);
  p->idade = idade;
}

int main(void) {
  Pessoa p;
  // @{chama a função de inicialização, passando o endereço|llama a la función de inicialización, pasando la dirección|calls the init function, passing the address}
  initPessoa(&p, "Ana", 25);
  printf("%s tem %d anos.\\n", p.nome, p.idade);
  return 0;
}`],
    ], { aliases: ['constructor', 'construtores', 'inicialização', 'inicializacao'] });

    registrar('método', 'Orientação a objetos', 'conceito', 'java', [
        'Um <strong>método</strong> é uma função definida dentro de uma classe. Ele descreve os comportamentos que os objetos daquela classe podem executar. Em C, o equivalente são as funções livres ou funções que recebem um ponteiro para uma <strong>struct</strong>.',
        'Un <strong>método</strong> es una función definida dentro de una clase. Describe los comportamientos que los objetos de esa clase pueden ejecutar. En C, el equivalente son las funciones libres o funciones que reciben un puntero a una <strong>struct</strong>.',
        'A <strong>method</strong> is a function defined inside a class. It describes the behaviors that objects of that class can execute. In C, the equivalent is standalone functions or functions that take a pointer to a <strong>struct</strong>.',
    ], [
        ['java', `public class Calculadora {
  // Método com retorno
  public int somar(int a, int b) {
    return a + b;
  }

  // Método sem retorno (void)
  public void exibirResultado(int resultado) {
    System.out.println("Resultado: " + resultado);
  }

  public static void main(String[] args) {
    // @{cria o objeto cujos métodos serão chamados|crea el objeto cuyos métodos se llamarán|creates the object whose methods will be called}
    Calculadora calc = new Calculadora();
    // @{chama o método e guarda o valor devolvido|llama al método y guarda el valor devuelto|calls the method and stores the returned value}
    int res = calc.somar(5, 3);
    // @{chama o método void, sem valor de retorno|llama al método void, sin valor de retorno|calls the void method, no return value}
    calc.exibirResultado(res);
  }
}`],
        ['c', `#include <stdio.h>

// Em C, métodos são funções que operam sobre structs
typedef struct {
  int a, b;
} Calculadora;

// @{recebe um ponteiro para a struct, como o this faz|recibe un puntero a la struct, como hace el this|takes a pointer to the struct, like this does}
int somar(Calculadora *c) {
  return c->a + c->b;
}

void exibirResultado(int resultado) {
  printf("Resultado: %d\\n", resultado);
}

int main(void) {
  // @{cria o objeto com a = 5 e b = 3|crea el objeto con a = 5 y b = 3|creates the object with a = 5 and b = 3}
  Calculadora calc = {5, 3};
  // @{passa o endereço da struct|pasa la dirección de la struct|passes the struct address}
  int res = somar(&calc);
  exibirResultado(res);
  return 0;
}`],
    ], { aliases: ['method', 'métodos', 'metodos', 'função membro', 'funcao membro'] });

})();


