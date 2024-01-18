// ========= EXERCICIO 3===========

// aça um programa que pergunte um número que deseja verificar. Se o número número for maior que zero e menor que vinte, imprima no console os números que não são múltiplos de 3 , que não seja múltiplo de 4 e nem de 3 e quatro concomitantemente. Se o número número form maior que vinte e menor ou igual a trinta, imprima no console os números que não são múltiplos de 2 , que não seja múltiplo de 6 e nem de 2 e seis concomitantemente.Se o número número form maior que trinta, imprima no console os números que não são múltiplos de 5 , que não seja múltiplo de 8 e nem de 5 e oito ao mesmo tempo .

let number = Number(prompt("Digite um número: "));

if(number>=0 && number<=20){
    for(let i = 0; i <= number; i++){
        if(i%3 !== 0 && i%4 !== 0){
            document.write(i, "<br>");
        }
    } 
} else if(number>20 && number <=30){
    for(let i = 0; i <= number; i++){
        if(i%2 !== 0 && i%6 !== 0){
            document.write(i, "<br>");
        }
    }
} else if (number>30){
    for(let i = 0; i <= number; i++){
        if(i%5 !== 0 && i%8 !== 0){
            document.write(i, "<br>");
        }
    }
} else {
    alert("número negativo!")
}

// Inicio

// perguntar:
// 	qual número deseja verificar
// ler:
//    	número
// se:
// 	número maior que zero e menor que vinte.
// ler:
// 	números que não são multiplos de 3, que não são seja multiplo de 4 e nem de 3
// 	e quatro concomitantemente.

// e se: 
// 	número for maior que vinte e menor ou menor ou igual a trinta.
// ler:
// 	números que não são multiplos de 2, que não seja múltiplo de 6 e nem de 2 e seis 	concomitantemente.

// senão:
// 	número for maior que trinta.
// ler:
// 	números que não são múltiplos de 5 , que não seja múltiplo
// 	de 8 e nem de 5 e oito ao mesmo tempo.

// Fim
