
LISTA DE EXERCÍCIOS I

Escreva um programa utilizando a linguagem JS para cada um dos problemas abaixo:

1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro

function area(lado){
    return lado * lado;
}
function area(lado){
    return Math.pow(lado, 2)
}

3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(Math.PI);
  // expected output: 3.141592653589793
  
  console.log(calculateCircumference(10));
  // expected output: 62.83185307179586
  
  19. Escreva um programa que calcule a raiz de uma equação do primeiro grau.

  for (var i = -10 / STEP; i < 10 / STEP; i += 1) {
    var x = i * STEP;
    var y = solveStr(reformat(replaceAll(fxString.toLowerCase(), "x", "(" + x + ")")));