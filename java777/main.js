let peso = parseFloat(prompt("Informe o peso: "));
let altura = parseFloat(prompt("Informe sua altura: "));

let imc = (peso/(altura*altura));

document.write("O imc é igual a: ", imc)

if(imc >=18.5 && imc <=24.9){
    document.write("O peso está normal!!")
}else if((imc >=25 && imc <=29.9)){
    document.write("Você está com sobrepesso")
}else if((imc >=30 && imc <=34.9)){
    document.write("Você está com obesidade grau I")
}else{
    document.write("Você está abaixo do peso ou obesidade grau II")
}