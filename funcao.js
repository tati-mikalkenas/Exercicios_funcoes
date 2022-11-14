/* Exercício 1) Quantos anos tem o seu pet?
Você sabe quantos anos seu cachorro tem em anos humanos, mas e quanto aos anos de cachorro? 
E se fosse uma baleia? 
E se fosse um canguru? 

Vamos calcular?

Vamos começar com uma pesquisa. 
- Pesquise diferente animais e sua relação de idade com seres humanos. 

Agora, escreva uma função chamada calcularIdadePet que:
- Tem dois argumentos: a idade do seu cachorro e a taxa de conversão que será calculada.
- Calcula a idade do seu pet com base na taxa de conversão (1 ano humano equivale a 7 anos de cachorro, por exemplo).
- Exiba o resultado na tela com a mensagem: "Seu pet tem X anos em anos humanos!"

Chame a função três vezes com diferentes conjuntos de valores. */

alert("Calcularemos a idade do seu pet. Vamos supor que ele tem 1 aninho.");
var resultado=parseFloat(1 /15)*100


function calcularIdadePet(idade, taxa){
resultado;

}

calcularIdadePet();
alert("Seu pet tem: " + resultado + " em anos humanos !");


alert("Exemplo 2. Vamos supor que ele tenha 4 anos.");
resultado=parseFloat(4 /32)*100

calcularIdadePet();
alert("Seu pet tem: " + resultado + " em anos humanos !");

alert("Exemplo 3. Vamos supor que ele tenha 16 anos.");
resultado=parseFloat(16 /80)*100

calcularIdadePet();
alert("Seu pet tem: " + resultado + " em anos humanos !");



// Exercício 2) Não acabou não
// Com base na questão acima, repita todo o procedimento, mas adicione e exiba mais dois valores nos argumentos: o nome do pet e a espécie dele. 

// Então
// - Exiba o resultado na tela com a mensagem: "Batatinha tem X anos em anos de verdade! Um(a) baleia tem uma relação de Y anos de baleia para cada 1 ano humano". (Batatinha, X, baleia e Y são variáveis que serão substituídas)

// Chame a função três vezes com diferentes conjuntos de valores.
alert("Agora iremos ver a idade do pet de acordo com o seu porte. O exemplo 1 considera cães de pequeno porte.")

var nome_do_pet="Tufão"
var espécie="pequeno porte"

// Cachorros de porte pequeno: multiplique os dois primeiros anos do animal por 12,5. Depois disso, acrescente 4,5 a cada aniversário. Exemplo: Cachorro com 2 anos (12,5 X 2 = 25 anos); cachorro com 4 anos (12,5 X 2 + 4,5 + 4,5 = 34);  

resultado=parseFloat(12.5)*2

calcularIdadePet();
alert(nome_do_pet + " tem: " + resultado + " anos em anos humanos !");

// Cachorros de porte médio: multiplique os dois primeiros anos por 10,5 e acrescente 6 a cada aniversário. Cachorro com 2 anos (10,5 X 2 = 21 anos); cachorro com 4 anos (10,5 X 2 + 6 + 6 = 33

alert("Exemplo 2: cachorro de médio porte");
nome_do_pet="Bianca"
espécie="médio porte"

resultado=parseFloat(2)*10.5

calcularIdadePet();
alert(nome_do_pet + " tem: " + resultado + " anos em anos humanos !");

// Cachorros de porte grande e gigante: multiplique os dois primeiros anos por 9 e, a cada aniversário, acrescente 8. Cachorro com 2 anos (9 X 2 = 18 anos); cachorro com 4 anos (9 X 2 + 8 + 8 = 36)

alert("Exemplo 3: cachorro de porte grande/gigante");
nome_do_pet="Kiara"
espécie="grande porte"

resultado=parseFloat(2)*9

calcularIdadePet();
alert(nome_do_pet + " tem: " + resultado + " anos em anos humanos !");


// Exercício 3) Quanta fome a gente tem?
// Você já se perguntou quanto custa um "suprimento vitalício" da sua comida favorita? 
// Não se pergunte mais!

// Escreva uma função chamada calcularMeuLanche que:
// - aceita 2 argumentos: "idade", "quantidade de lanches por dia".
// - calcula a quantidade consumida para o resto da vida (com base em uma idade máxima constante).
// - exibe o resultado na tela da seguinte forma: "Você precisará de NN para durar até a idade X"

// Chame essa função três vezes, passando valores diferentes a cada vez.


alert("Nessa etapa iremos calcular quanto você precisará de suprimento até uma determinada idade. Ficou curioso ? Vamos ver. Vamos supor que você quer saber quantos lanches precisará até os 25 anos.");

var idade=25
var quantidade_de_lanches_por_dia=3
var resultado= idade * quantidade_de_lanches_por_dia

 function calcularMeuLanche(idade, quantidade_de_lanches_por_dia){
 resultado
 }

 alert("Você precisará de: " + resultado + " lanches para durar até os 25 anos.");

//  valor 2

alert("Exemplo 2: Vamos supor que você quer saber quantos lanches precisará ter para durar até os 40 anos.");

var idade=40
var quantidade_de_lanches_por_dia=3
var resultado= idade * quantidade_de_lanches_por_dia

 function calcularMeuLanche(idade,quantidade_de_lanches_por_dia){
 resultado
 }

 alert("Você precisará de: " + resultado + " lanches para durar até os 40 anos.");

//  valor 3

alert("Exemplo 3: Vamos supor que você quer saber quantos lanches precisará ter para durar até os 55 anos.");

var idade=55
var quantidade_de_lanches_por_dia=3
var resultado= idade * quantidade_de_lanches_por_dia

 function calcularMeuLanche(idade, quantidade_de_lanches_por_dia){
 resultado
 }

 alert("Você precisará de: " + resultado + " lanches para durar até os 55 anos.");

//  4) Geometria? Nós dominamos! Crie 2 funções que calculem propriedades de um círculo. Sabe as fórmulas? Vamos pesquisar? Crie uma função chamada calcularCircunferencia:
// - Passe o raio para a função como argumento.
// - Calcule a circunferência com base no raio e gere "A circunferência é X".

// Crie uma função chamada calcularArea:
// - Passe o raio para a função como argumento.
// - Calcule a área com base no raio e gere "A área é Y".

// Escreva os resultados em tela. 

// Chame cada uma  das funções três vezes com diferentes conjuntos de valores.
alert("Calcularemos a circunferência com base no raio dela. Vamos supor que o raio é 5cm.")


var raio_um=5
resultado_um= raio_um* raio_um

function calcularCircunferencia(raio_um){
resultado_um
}

alert("A circunferência é: " + resultado_um + " cm.");

alert("Agora calcularemos a área dessa mesma circunferêcia.")


var area_um=5*5
resultado_dois= area_um * Math.PI

function calcularArea(raio_um){
resultado_dois
}

alert("A área é: " + resultado_dois + " cm.");

// Exemplo 2

alert("Exemplo 2: Vamos supor que o raio é 15cm.")

var raio_dois=15
resultado_um= raio_dois* raio_dois

calcularCircunferencia(raio_dois)
alert("A circunferência é: " + resultado_um + " cm.");

alert("Agora calcularemos a área dessa mesma circunferêcia.")

var area_dois=15*15
resultado_dois=area_dois* Math.PI

calcularArea(raio_dois)
alert("A área é: " + resultado_dois + " cm.");

// Exemplo 3


alert("Exemplo 2: Vamos supor que o raio é 30cm.")

var raio_tres=30
resultado_um=raio_tres* raio_tres

calcularCircunferencia(raio_tres)
alert("A circunferência é: " + resultado_um + " cm.");

alert("Agora calcularemos a área dessa mesma circunferêcia.")

var area_tres=30*30
resultado_dois= area_tres* Math.PI

calcularArea(area_tres)
alert("A área é: " + resultado_dois + " cm.");

// Exercício 5: 5) Tá quente. Muito quente. Quente demaaaais. Vamos fazer um conversor de temperaturas.

// Crie uma função chamada converterCelsiusFahrenheit. 
// Ela deve:
// - Armazenar uma temperatura Celsius em uma variável.
// - Converter-la para  Fahrenheit e escrever a mensagem: "X° C é igual a Y° F". (X e Y são os valores que devem ser substituídos.) 

// Crie uma função chamada converterFahrenheitCelsius. 
// Ela deve: 
// - Armazenar uma temperatura fahrenheit em uma variável.
// - Converter-la para Celsius e escrever a mensagem:  " X° F é igual a Y° C." (X e Y são os valores que devem ser substituídos.) 

alert("Dessa vez vamos converter temperaturas. Começaremos com 26° Celsius")

var resultado=  (1.8* 26 + 32)

function converterCelsiusFahrenheit(){
    var temperatura_celsius= 26
   resultado
}

alert("26°C é igual a: " + resultado+ "°F")


alert("Agora será 50°F convertidos em Celsius")

var resultado_um= ( (50-32)*5/9 )

function converterFahrenheitCelsius(){
    var temperatura_fahrenheit=50
    resultado_um
}

alert("50°F é igual a: " + resultado_um + "°C")


