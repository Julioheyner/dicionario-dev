/* Termos extras do dicionário CodyLingo: conceitos básicos, estruturas de dados,
   palavras reservadas de Java e palavras/funções de C.
   Para adicionar um termo, chame uma das funções abaixo no fim do arquivo:
     conceito(chave, [pt, es, en], codigos, { aliases: [...] })
     estrutura(...), java(...), c(...)
   "codigos" é um texto (código do tipo padrão) ou uma lista de exemplos, cada um
   um texto ou ['java' | 'c' | 'bash', codigo, rótulo opcional]. */
(() => {
    const TITULO = { pt: 'Exemplo', es: 'Ejemplo', en: 'Example' };

    function registrar(chave, categoria, tipo, langPadrao, defs, codigos, extra = {}) {
        const lista = typeof codigos === 'string' ? [codigos] : codigos;
        const exemplos = lista.map((item) => {
            if (typeof item === 'string') return { lang: langPadrao, code: item, rotulo: '' };
            const [lang, code, rotulo] = item;
            return { lang, code, rotulo: rotulo || (lang === 'java' ? 'Java' : lang === 'c' ? 'C' : '') };
        });
        const mostrarRotulo = exemplos.length > 1 || exemplos.some((e) => e.rotulo && e.lang !== langPadrao);
        const montar = (definition, idioma) => ({
            definition,
            examples: exemplos.map((e, i) => ({
                title: `${TITULO[idioma]} ${i + 1}${mostrarRotulo && e.rotulo ? ` (${e.rotulo})` : ''}: `,
                code: e.code,
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
    int[] numeros = {4, 9, 2, 7};
    int maior = numeros[0];
    for (int n : numeros) {
      if (n > maior) maior = n;
    }
    System.out.println("Maior: " + maior);
  }
}`, { aliases: ['algorithm', 'algoritmos'] });

    conceito('recursão', [
        '<strong>Recursão</strong> é quando uma função chama a si mesma para resolver versões menores do mesmo problema. Toda função recursiva precisa de um caso base, que encerra as chamadas.',
        '<strong>Recursión</strong> es cuando una función se llama a sí misma para resolver versiones más pequeñas del mismo problema. Toda función recursiva necesita un caso base que detenga las llamadas.',
        '<strong>Recursion</strong> is when a function calls itself to solve smaller versions of the same problem. Every recursive function needs a base case that stops the calls.',
    ], `public class Fatorial {
  static int fatorial(int n) {
    if (n <= 1) return 1;          // caso base
    return n * fatorial(n - 1);    // chamada recursiva
  }

  public static void main(String[] args) {
    System.out.println(fatorial(5)); // 120
  }
}`, { aliases: ['recursion', 'recursividade', 'recursividad'] });

    conceito('função', [
        'Uma <strong>função</strong> (em Java, chamada de método) é um bloco de código com nome que recebe parâmetros, executa uma tarefa e pode devolver um valor. Ela evita repetição e organiza o programa.',
        'Una <strong>función</strong> (en Java, llamada método) es un bloque de código con nombre que recibe parámetros, ejecuta una tarea y puede devolver un valor. Evita la repetición y organiza el programa.',
        'A <strong>function</strong> (called a method in Java) is a named block of code that takes parameters, performs a task and may return a value. It avoids repetition and keeps the program organized.',
    ], [
        ['java', `public class Soma {
  static int somar(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    System.out.println(somar(3, 4)); // 7
  }
}`],
        ['c', `#include <stdio.h>

int somar(int a, int b) {
  return a + b;
}

int main(void) {
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
    for (int i = 1; i <= 3; i++) {
      System.out.println("Passo " + i);
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  int i = 1;
  while (i <= 3) {
    printf("Passo %d\\n", i);
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
    double nota = 7.5;
    if (nota >= 7) {
      System.out.println("Aprovado");
    } else if (nota >= 5) {
      System.out.println("Recuperação");
    } else {
      System.out.println("Reprovado");
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  double nota = 7.5;
  if (nota >= 7) {
    printf("Aprovado\\n");
  } else if (nota >= 5) {
    printf("Recuperacao\\n");
  } else {
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
    final double PI = 3.14159;
    double raio = 2;
    System.out.println(PI * raio * raio);
  }
}`],
        ['c', `#include <stdio.h>

#define LIMITE 100

int main(void) {
  const double PI = 3.14159;
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
  int x = 10;
  int *p = &x;   // p guarda o endereço de x
  *p = 20;       // altera x pelo ponteiro
  printf("x = %d\\n", x);
  printf("endereco: %p\\n", (void *)p);
  return 0;
}`]], { aliases: ['pointer', 'puntero', 'ponteiros'] });

    conceito('compilador', [
        'Um <strong>compilador</strong> traduz o código-fonte escrito pelo programador para uma forma que a máquina executa. Em C, o <strong>gcc</strong> gera o executável; em Java, o <strong>javac</strong> gera bytecode para a JVM.',
        'Un <strong>compilador</strong> traduce el código fuente escrito por el programador a una forma que la máquina ejecuta. En C, <strong>gcc</strong> genera el ejecutable; en Java, <strong>javac</strong> genera bytecode para la JVM.',
        'A <strong>compiler</strong> translates the source code written by the programmer into a form the machine can run. In C, <strong>gcc</strong> produces the executable; in Java, <strong>javac</strong> produces bytecode for the JVM.',
    ], [
        ['bash', `javac Ola.java
java Ola`, 'Java'],
        ['bash', `gcc ola.c -o ola
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
    int[] notas = {7, 8, 9};
    for (int i = 0; i < notas.length; i++) {
      System.out.println(notas[i]);
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  int notas[3] = {7, 8, 9};
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
    int[][] matriz = {
      {1, 2, 3},
      {4, 5, 6}
    };
    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + " ");
      }
      System.out.println();
    }
  }
}`],
        ['c', `#include <stdio.h>

int main(void) {
  int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
      printf("%d ", matriz[i][j]);
    }
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
    Deque<String> pilha = new ArrayDeque<>();
    pilha.push("A");
    pilha.push("B");
    pilha.push("C");
    System.out.println(pilha.pop());   // C
    System.out.println(pilha.peek());  // B
  }
}`],
        ['c', `#include <stdio.h>

#define MAX 5

int pilha[MAX];
int topo = -1;

void empilhar(int valor) {
  if (topo < MAX - 1) pilha[++topo] = valor;
}

int desempilhar(void) {
  return topo >= 0 ? pilha[topo--] : -1;
}

int main(void) {
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
    Queue<String> fila = new LinkedList<>();
    fila.offer("Ana");
    fila.offer("Bruno");
    fila.offer("Carla");
    System.out.println(fila.poll());  // Ana
    System.out.println(fila.peek());  // Bruno
  }
}`],
        ['c', `#include <stdio.h>

#define MAX 5

int fila[MAX];
int inicio = 0, fim = 0;

void enfileirar(int valor) {
  if (fim < MAX) fila[fim++] = valor;
}

int desenfileirar(void) {
  return inicio < fim ? fila[inicio++] : -1;
}

int main(void) {
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
    ], `class No {
  int valor;
  No proximo;

  No(int valor) {
    this.valor = valor;
  }
}

public class ListaEncadeada {
  public static void main(String[] args) {
    No primeiro = new No(1);
    primeiro.proximo = new No(2);
    primeiro.proximo.proximo = new No(3);

    for (No atual = primeiro; atual != null; atual = atual.proximo) {
      System.out.println(atual.valor);
    }
  }
}`, { aliases: ['linked list', 'lista enlazada', 'lista ligada', 'nó', 'nodo', 'node'] });

    estrutura('árvore', [
        'Uma <strong>árvore</strong> organiza os dados de forma hierárquica: um nó raiz, que se ramifica em nós filhos. Na árvore binária, cada nó tem no máximo dois filhos (esquerda e direita).',
        'Un <strong>árbol</strong> organiza los datos de forma jerárquica: un nodo raíz que se ramifica en nodos hijos. En el árbol binario, cada nodo tiene como máximo dos hijos (izquierda y derecha).',
        'A <strong>tree</strong> organizes data hierarchically: a root node that branches into child nodes. In a binary tree, each node has at most two children (left and right).',
    ], `class No {
  int valor;
  No esquerda, direita;

  No(int valor) {
    this.valor = valor;
  }
}

public class Arvore {
  static void emOrdem(No no) {
    if (no == null) return;
    emOrdem(no.esquerda);
    System.out.println(no.valor);
    emOrdem(no.direita);
  }

  public static void main(String[] args) {
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
    String nome = "CodyLingo";
    System.out.println(nome.length());       // 9
    System.out.println(nome.toUpperCase());  // CODYLINGO
    System.out.println(nome.charAt(0));      // C
  }
}`],
        ['c', `#include <stdio.h>
#include <string.h>

int main(void) {
  char nome[] = "CodyLingo";
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
    ], ex('int idade = 25;\nint proximoAno = idade + 1;\nSystem.out.println(proximoAno); // 26', 'Idade'));

    java('float', [
        'A palavra-chave <strong>float</strong> em Java declara um número de ponto flutuante de 32 bits (precisão simples). Os literais terminam com <strong>f</strong>.',
        'La palabra clave <strong>float</strong> en Java declara un número de punto flotante de 32 bits (precisión simple). Los literales terminan con <strong>f</strong>.',
        'The <strong>float</strong> keyword in Java declares a 32-bit floating-point number (single precision). Literals end with <strong>f</strong>.',
    ], ex('float preco = 19.9f;\nfloat total = preco * 3;\nSystem.out.println(total);', 'Preco'));

    java('long', [
        'A palavra-chave <strong>long</strong> em Java declara um inteiro de 64 bits, para números maiores que o <strong>int</strong> suporta. Os literais terminam com <strong>L</strong>.',
        'La palabra clave <strong>long</strong> en Java declara un entero de 64 bits, para números mayores de lo que soporta <strong>int</strong>. Los literales terminan con <strong>L</strong>.',
        'The <strong>long</strong> keyword in Java declares a 64-bit integer, for numbers larger than <strong>int</strong> supports. Literals end with <strong>L</strong>.',
    ], ex('long populacao = 8_000_000_000L;\nSystem.out.println(populacao);', 'Populacao'));

    java('void', [
        'A palavra-chave <strong>void</strong> indica que um método não devolve nenhum valor. Em C, também indica ausência de retorno ou de parâmetros.',
        'La palabra clave <strong>void</strong> indica que un método no devuelve ningún valor. En C también indica ausencia de retorno o de parámetros.',
        'The <strong>void</strong> keyword indicates that a method returns no value. In C it also means no return value or no parameters.',
    ], `public class Saudacao {
  static void dizerOla(String nome) {
    System.out.println("Olá, " + nome);
  }

  public static void main(String[] args) {
    dizerOla("Cody");
  }
}`);

    java('if', [
        'A palavra-chave <strong>if</strong> executa um bloco de código somente quando a condição é verdadeira. Pode ser combinada com <strong>else</strong> para o caso contrário.',
        'La palabra clave <strong>if</strong> ejecuta un bloque de código solo cuando la condición es verdadera. Puede combinarse con <strong>else</strong> para el caso contrario.',
        'The <strong>if</strong> keyword runs a block of code only when the condition is true. It can be combined with <strong>else</strong> for the opposite case.',
    ], ex('int idade = 17;\nif (idade >= 18) {\n  System.out.println("Pode dirigir");\n} else {\n  System.out.println("Ainda não pode");\n}', 'Habilitacao'));

    java('for', [
        'A palavra-chave <strong>for</strong> cria um laço com inicialização, condição e incremento na mesma linha. É ideal quando se sabe quantas vezes repetir.',
        'La palabra clave <strong>for</strong> crea un bucle con inicialización, condición e incremento en la misma línea. Es ideal cuando se sabe cuántas veces repetir.',
        'The <strong>for</strong> keyword creates a loop with initialization, condition and increment on the same line. It is ideal when you know how many times to repeat.',
    ], ex('for (int i = 1; i <= 5; i++) {\n  System.out.println("Linha " + i);\n}', 'Repeticao'));

    java('while', [
        'A palavra-chave <strong>while</strong> repete um bloco enquanto a condição for verdadeira. A condição é testada antes de cada repetição.',
        'La palabra clave <strong>while</strong> repite un bloque mientras la condición sea verdadera. La condición se evalúa antes de cada repetición.',
        'The <strong>while</strong> keyword repeats a block while the condition is true. The condition is checked before each repetition.',
    ], ex('int contador = 3;\nwhile (contador > 0) {\n  System.out.println(contador);\n  contador--;\n}', 'Contador'));

    java('switch', [
        'A palavra-chave <strong>switch</strong> escolhe um entre vários caminhos conforme o valor de uma expressão, usando <strong>case</strong>, <strong>break</strong> e <strong>default</strong>.',
        'La palabra clave <strong>switch</strong> elige uno entre varios caminos según el valor de una expresión, usando <strong>case</strong>, <strong>break</strong> y <strong>default</strong>.',
        'The <strong>switch</strong> keyword chooses one of several paths based on the value of an expression, using <strong>case</strong>, <strong>break</strong> and <strong>default</strong>.',
    ], ex('int dia = 3;\nswitch (dia) {\n  case 1: System.out.println("Domingo"); break;\n  case 2: System.out.println("Segunda"); break;\n  case 3: System.out.println("Terça"); break;\n  default: System.out.println("Outro dia");\n}', 'DiaDaSemana'));

    java('return', [
        'A palavra-chave <strong>return</strong> encerra a execução de um método e, se houver, devolve um valor a quem o chamou. Funciona de forma parecida em C.',
        'La palabra clave <strong>return</strong> termina la ejecución de un método y, si corresponde, devuelve un valor a quien lo llamó. Funciona de forma parecida en C.',
        'The <strong>return</strong> keyword ends the execution of a method and, if there is one, gives a value back to the caller. It works similarly in C.',
    ], `public class Dobro {
  static int dobro(int n) {
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
  static int total = 0;

  Contador() {
    total++;
  }

  public static void main(String[] args) {
    new Contador();
    new Contador();
    System.out.println(Contador.total); // 2
  }
}`);

    java('final', [
        'A palavra-chave <strong>final</strong> impede mudanças: uma variável <strong>final</strong> vira constante, um método <strong>final</strong> não pode ser sobrescrito e uma classe <strong>final</strong> não pode ser herdada.',
        'La palabra clave <strong>final</strong> impide cambios: una variable <strong>final</strong> se vuelve constante, un método <strong>final</strong> no puede sobrescribirse y una clase <strong>final</strong> no puede heredarse.',
        'The <strong>final</strong> keyword prevents changes: a <strong>final</strong> variable becomes a constant, a <strong>final</strong> method cannot be overridden and a <strong>final</strong> class cannot be inherited.',
    ], ex('final int MAX_TENTATIVAS = 3;\nSystem.out.println(MAX_TENTATIVAS);\n// MAX_TENTATIVAS = 5; // erro de compilação', 'Limite'));

    java('public', [
        'O modificador <strong>public</strong> torna a classe, o método ou o atributo acessível de qualquer outra classe.',
        'El modificador <strong>public</strong> hace que la clase, el método o el atributo sea accesible desde cualquier otra clase.',
        'The <strong>public</strong> modifier makes the class, method or attribute accessible from any other class.',
    ], `public class Pessoa {
  public String nome;

  public Pessoa(String nome) {
    this.nome = nome;
  }

  public static void main(String[] args) {
    Pessoa p = new Pessoa("Ana");
    System.out.println(p.nome);
  }
}`);

    java('private', [
        'O modificador <strong>private</strong> restringe o acesso ao interior da própria classe. É a base do encapsulamento: o acesso de fora é feito por getters e setters.',
        'El modificador <strong>private</strong> restringe el acceso al interior de la propia clase. Es la base del encapsulamiento: el acceso desde fuera se hace mediante getters y setters.',
        'The <strong>private</strong> modifier restricts access to the inside of the class itself. It is the basis of encapsulation: outside access is done through getters and setters.',
    ], `public class Conta {
  private double saldo;

  public double getSaldo() {
    return saldo;
  }

  public void depositar(double valor) {
    if (valor > 0) saldo += valor;
  }

  public static void main(String[] args) {
    Conta c = new Conta();
    c.depositar(100);
    System.out.println(c.getSaldo()); // 100.0
  }
}`);

    java('protected', [
        'O modificador <strong>protected</strong> permite o acesso dentro do mesmo pacote e também nas subclasses, mesmo em pacotes diferentes.',
        'El modificador <strong>protected</strong> permite el acceso dentro del mismo paquete y también en las subclases, incluso en paquetes distintos.',
        'The <strong>protected</strong> modifier allows access within the same package and also in subclasses, even in different packages.',
    ], `class Animal {
  protected String nome = "Rex";
}

public class Cachorro extends Animal {
  void apresentar() {
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
    ], ex('StringBuilder texto = new StringBuilder("Cody");\ntexto.append("Lingo");\nint[] numeros = new int[3];\nSystem.out.println(texto);\nSystem.out.println(numeros.length);', 'Criacao'));

    java('this', [
        'A palavra-chave <strong>this</strong> é uma referência ao objeto atual. Serve, por exemplo, para diferenciar um atributo de um parâmetro com o mesmo nome.',
        'La palabra clave <strong>this</strong> es una referencia al objeto actual. Sirve, por ejemplo, para diferenciar un atributo de un parámetro con el mismo nombre.',
        'The <strong>this</strong> keyword is a reference to the current object. It is used, for example, to tell an attribute apart from a parameter with the same name.',
    ], `public class Produto {
  String nome;

  Produto(String nome) {
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
    ], `class Veiculo {
  String tipo;

  Veiculo(String tipo) {
    this.tipo = tipo;
  }
}

public class Carro extends Veiculo {
  Carro() {
    super("Carro");
  }

  public static void main(String[] args) {
    System.out.println(new Carro().tipo);
  }
}`);

    java('extends', [
        'A palavra-chave <strong>extends</strong> faz uma classe herdar os atributos e métodos de outra classe (herança). Em Java, uma classe estende apenas uma classe.',
        'La palabra clave <strong>extends</strong> hace que una clase herede los atributos y métodos de otra clase (herencia). En Java, una clase extiende solo una clase.',
        'The <strong>extends</strong> keyword makes a class inherit the attributes and methods of another class (inheritance). In Java, a class extends only one class.',
    ], `class Animal {
  void dormir() {
    System.out.println("Dormindo...");
  }
}

public class Gato extends Animal {
  public static void main(String[] args) {
    new Gato().dormir();
  }
}`);

    java('implements', [
        'A palavra-chave <strong>implements</strong> indica que uma classe cumpre o contrato de uma ou mais interfaces, implementando todos os seus métodos.',
        'La palabra clave <strong>implements</strong> indica que una clase cumple el contrato de una o más interfaces, implementando todos sus métodos.',
        'The <strong>implements</strong> keyword indicates that a class fulfills the contract of one or more interfaces, implementing all their methods.',
    ], `interface Falante {
  void falar();
}

public class Papagaio implements Falante {
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
    ], `interface Forma {
  double area();
}

class Quadrado implements Forma {
  double lado = 3;

  public double area() {
    return lado * lado;
  }
}

public class TesteInterface {
  public static void main(String[] args) {
    Forma f = new Quadrado();
    System.out.println(f.area()); // 9.0
  }
}`);

    java('try', [
        'A palavra-chave <strong>try</strong> delimita um bloco de código que pode lançar uma exceção. É seguida por <strong>catch</strong> (trata o erro) e, opcionalmente, por <strong>finally</strong>.',
        'La palabra clave <strong>try</strong> delimita un bloque de código que puede lanzar una excepción. Va seguida de <strong>catch</strong> (trata el error) y, opcionalmente, de <strong>finally</strong>.',
        'The <strong>try</strong> keyword delimits a block of code that may throw an exception. It is followed by <strong>catch</strong> (handles the error) and, optionally, <strong>finally</strong>.',
    ], ex('try {\n  int resultado = 10 / 0;\n  System.out.println(resultado);\n} catch (ArithmeticException e) {\n  System.out.println("Divisão por zero!");\n}', 'Divisao'));

    java('finally', [
        'A palavra-chave <strong>finally</strong> define um bloco que sempre é executado depois de <strong>try</strong> e <strong>catch</strong>, havendo erro ou não. É usado para liberar recursos.',
        'La palabra clave <strong>finally</strong> define un bloque que siempre se ejecuta después de <strong>try</strong> y <strong>catch</strong>, haya error o no. Se usa para liberar recursos.',
        'The <strong>finally</strong> keyword defines a block that always runs after <strong>try</strong> and <strong>catch</strong>, whether there is an error or not. It is used to release resources.',
    ], ex('try {\n  System.out.println("Tentando...");\n} catch (Exception e) {\n  System.out.println("Erro");\n} finally {\n  System.out.println("Sempre executa");\n}', 'Final'));

    java('throw', [
        'A palavra-chave <strong>throw</strong> lança uma exceção manualmente, interrompendo o fluxo normal do método.',
        'La palabra clave <strong>throw</strong> lanza una excepción manualmente, interrumpiendo el flujo normal del método.',
        'The <strong>throw</strong> keyword throws an exception manually, interrupting the normal flow of the method.',
    ], `public class Validacao {
  static void validarIdade(int idade) {
    if (idade < 0) {
      throw new IllegalArgumentException("Idade inválida");
    }
  }

  public static void main(String[] args) {
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
  static void abrir(String caminho) throws IOException {
    FileReader leitor = new FileReader(caminho);
    leitor.close();
  }

  public static void main(String[] args) {
    try {
      abrir("dados.txt");
    } catch (IOException e) {
      System.out.println("Arquivo não encontrado");
    }
  }
}`);

    java('import', [
        'A palavra-chave <strong>import</strong> traz classes de outros pacotes para o arquivo atual, para que possam ser usadas sem escrever o nome completo.',
        'La palabra clave <strong>import</strong> trae clases de otros paquetes al archivo actual, para poder usarlas sin escribir el nombre completo.',
        'The <strong>import</strong> keyword brings classes from other packages into the current file, so they can be used without writing the full name.',
    ], `import java.util.ArrayList;
import java.util.List;

public class Lista {
  public static void main(String[] args) {
    List<String> nomes = new ArrayList<>();
    nomes.add("Ana");
    nomes.add("Bruno");
    System.out.println(nomes);
  }
}`);

    java('null', [
        'O literal <strong>null</strong> representa a ausência de objeto: uma referência que não aponta para nada. Usar um método em uma referência <strong>null</strong> causa <strong>NullPointerException</strong>.',
        'El literal <strong>null</strong> representa la ausencia de objeto: una referencia que no apunta a nada. Usar un método en una referencia <strong>null</strong> causa <strong>NullPointerException</strong>.',
        'The <strong>null</strong> literal represents the absence of an object: a reference that points to nothing. Calling a method on a <strong>null</strong> reference causes a <strong>NullPointerException</strong>.',
    ], ex('String nome = null;\nif (nome == null) {\n  System.out.println("Nome não informado");\n}', 'Nulo'));

    java('enum', [
        'A palavra-chave <strong>enum</strong> define um conjunto fixo de constantes com nome, como os dias da semana ou os estados de um pedido.',
        'La palabra clave <strong>enum</strong> define un conjunto fijo de constantes con nombre, como los días de la semana o los estados de un pedido.',
        'The <strong>enum</strong> keyword defines a fixed set of named constants, such as the days of the week or the states of an order.',
    ], `enum Status {
  PENDENTE, PAGO, ENVIADO
}

public class Pedido {
  public static void main(String[] args) {
    Status s = Status.PAGO;
    System.out.println(s);
  }
}`);

    java('instanceof', [
        'O operador <strong>instanceof</strong> verifica se um objeto é instância de determinada classe ou interface, devolvendo <strong>true</strong> ou <strong>false</strong>.',
        'El operador <strong>instanceof</strong> verifica si un objeto es instancia de una clase o interfaz determinada, devolviendo <strong>true</strong> o <strong>false</strong>.',
        'The <strong>instanceof</strong> operator checks whether an object is an instance of a given class or interface, returning <strong>true</strong> or <strong>false</strong>.',
    ], `class Animal {}
class Cachorro extends Animal {}

public class Teste {
  public static void main(String[] args) {
    Animal a = new Cachorro();
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

  public synchronized void incrementar() {
    contagem++;
  }

  public int getContagem() {
    return contagem;
  }

  public static void main(String[] args) throws InterruptedException {
    ContadorSeguro contador = new ContadorSeguro();
    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) contador.incrementar();
    });
    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) contador.incrementar();
    });
    t1.start(); t2.start();
    t1.join(); t2.join();
    System.out.println(contador.getContagem()); // 2000
  }
}`);

    java('Thread', [
        'Uma <strong>Thread</strong> é uma linha de execução independente dentro de um programa. Permite que tarefas ocorram simultaneamente, melhorando o desempenho e a responsividade.',
        'Un <strong>Thread</strong> (hilo) es una línea de ejecución independiente dentro de un programa. Permite que las tareas ocurran simultáneamente, mejorando el rendimiento y la capacidad de respuesta.',
        'A <strong>Thread</strong> is an independent line of execution within a program. It allows tasks to happen simultaneously, improving performance and responsiveness.',
    ], `public class MinhaThread extends Thread {
  public void run() {
    for (int i = 1; i <= 3; i++) {
      System.out.println("Executando: " + i);
      try { Thread.sleep(1000); } catch (InterruptedException e) {}
    }
  }

  public static void main(String[] args) {
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
  int idade = 20;
  double altura = 1.75;
  char nome[] = "Ana";
  printf("%s tem %d anos e %.2f m\\n", nome, idade, altura);
  return 0;
}`);

    c('scanf', [
        'A função <strong>scanf</strong>, da biblioteca <strong>stdio.h</strong>, lê valores digitados pelo usuário. É preciso passar o endereço da variável com <strong>&amp;</strong>.',
        'La función <strong>scanf</strong>, de la biblioteca <strong>stdio.h</strong>, lee valores escritos por el usuario. Hay que pasar la dirección de la variable con <strong>&amp;</strong>.',
        'The <strong>scanf</strong> function, from the <strong>stdio.h</strong> library, reads values typed by the user. You must pass the address of the variable using <strong>&amp;</strong>.',
    ], `#include <stdio.h>

int main(void) {
  int idade;
  printf("Digite sua idade: ");
  scanf("%d", &idade);
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
  int *v = malloc(5 * sizeof(int));
  if (v == NULL) return 1;

  for (int i = 0; i < 5; i++) v[i] = i * 10;
  printf("%d\\n", v[4]); // 40

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
  char *texto = malloc(20);
  if (texto == NULL) return 1;

  snprintf(texto, 20, "CodyLingo");
  printf("%s\\n", texto);

  free(texto);
  texto = NULL;
  return 0;
}`, { aliases: ['vazamento de memória', 'memory leak'] });

    c('typedef', [
        'A palavra-chave <strong>typedef</strong> cria um apelido para um tipo existente, deixando o código mais curto e legível, principalmente com <strong>struct</strong>.',
        'La palabra clave <strong>typedef</strong> crea un alias para un tipo existente, haciendo el código más corto y legible, sobre todo con <strong>struct</strong>.',
        'The <strong>typedef</strong> keyword creates an alias for an existing type, making the code shorter and more readable, especially with <strong>struct</strong>.',
    ], `#include <stdio.h>

typedef struct {
  char nome[30];
  int idade;
} Pessoa;

int main(void) {
  Pessoa p = {"Ana", 20};
  printf("%s, %d\\n", p.nome, p.idade);
  return 0;
}`);

    c('union', [
        'A palavra-chave <strong>union</strong> define um tipo cujos membros compartilham o mesmo espaço de memória: só um deles guarda valor válido por vez.',
        'La palabra clave <strong>union</strong> define un tipo cuyos miembros comparten el mismo espacio de memoria: solo uno guarda un valor válido a la vez.',
        'The <strong>union</strong> keyword defines a type whose members share the same memory space: only one of them holds a valid value at a time.',
    ], `#include <stdio.h>

union Valor {
  int inteiro;
  float decimal;
};

int main(void) {
  union Valor v;
  v.inteiro = 42;
  printf("%d\\n", v.inteiro);
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
#include <math.h>
/* #include "meu_arquivo.h"   arquivo do projeto */

int main(void) {
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
  String nome;
  int idade;

  // Construtor
  public Pessoa(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }

  public static void main(String[] args) {
    Pessoa p = new Pessoa("Ana", 25); // Chama o construtor
    System.out.println(p.nome + " tem " + p.idade + " anos.");
  }
}`],
        ['c', `#include <stdio.h>
#include <string.h>

typedef struct {
  char nome[50];
  int idade;
} Pessoa;

// Função que simula um construtor em C
void initPessoa(Pessoa *p, const char *nome, int idade) {
  strcpy(p->nome, nome);
  p->idade = idade;
}

int main(void) {
  Pessoa p;
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
    Calculadora calc = new Calculadora();
    int res = calc.somar(5, 3);
    calc.exibirResultado(res);
  }
}`],
        ['c', `#include <stdio.h>

// Em C, métodos são funções que operam sobre structs
typedef struct {
  int a, b;
} Calculadora;

int somar(Calculadora *c) {
  return c->a + c->b;
}

void exibirResultado(int resultado) {
  printf("Resultado: %d\\n", resultado);
}

int main(void) {
  Calculadora calc = {5, 3};
  int res = somar(&calc);
  exibirResultado(res);
  return 0;
}`],
    ], { aliases: ['method', 'métodos', 'metodos', 'função membro', 'funcao membro'] });

})();

