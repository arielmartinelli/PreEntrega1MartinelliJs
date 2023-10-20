alert("Hola, este es un convertidor de divisas!");
console.log("Hola, este es un convertidor de divisas!");

let Peso = 1

let Dolar = 425.23;

let Yuan = 47.71;

let LibraEstarlina = 425.23;

let Real = 69.30;

let Euro = 370.20;

let Yen = 2.33;

let resultado = 0
let DivisaConv = 0

let moneda = prompt("Elige tu moneda:\n 1) Peso\n 2) Dolar\n 3) Yuan\n 4) Real\n 5) Libra estarlina\n 6) Euro\n 7) Yen");


while(moneda == 1 | moneda == 2 | moneda == 3 | moneda == 4 | moneda == 5 | moneda == 6 | moneda == 7){
    
if(moneda == 1){
    moneda = "pesos"
}else if(moneda == 2){
    moneda = "dolares"
}else if(moneda == 3){
    moneda = "yuanes"
}else if(moneda == 4){
    moneda = "realales"
}else if(moneda == 5){
    moneda = "libras estarlinas"
}else if(moneda == 6){
    moneda = "euros"
}else{
    moneda = "yens"
}

let divisa = prompt("Elige a que divisa queres hacer la conversión:\n 1) Peso\n 2) Dolar\n 3) Yuan\n 4)Real\n 5) Libra estarlina\n 6) Euro\n 7) Yen\n ")

if(divisa == 1){
    DivisaConv = Peso;
    divisa = "pesos" 
} else if(divisa == 2){
    DivisaConv = Dolar
    divisa = "dolares"
}else if(divisa == 3){
    DivisaConv = Yuan
    divisa = "yuanes"
}else if(divisa == 4){
    DivisaConv = Real
    divisa = "reales"
}else if(divisa == 5){
    DivisaConv = LibraEstarlina
    divisa = "libras estarlinas"
}else if(divisa == 6){
    DivisaConv = Euro
    divisa = "euros"
}else{
    DivisaConv = Yen
    divisa = "yens"
}


console.log("Vas a hacer la conversion a" + ' ' + divisa)

let CanMoneda = Number(prompt("Ingrese la cantidad de" + ' ' + moneda))

function convertirMulti(){
    return(resultado = CanMoneda * DivisaConv)
}
function convertirDiv(){
    return(resultado = CanMoneda / DivisaConv)
}

if(moneda > DivisaConv){
    convertirMulti()
    console.log(CanMoneda + ' ' +  moneda + ' ' + "equivalen a" + ' ' + resultado.toFixed(2) + ' ' + divisa)
    alert(CanMoneda + ' ' + moneda + ' ' + "equivalen a" + ' ' + resultado.toFixed(2) + ' ' + divisa)
}else{
    convertirDiv()
    console.log(CanMoneda + ' ' + moneda + ' ' + "equivalen a" + ' ' + resultado.toFixed(2) + ' ' + divisa)
    alert(CanMoneda + ' ' + moneda + ' ' + "equivalen a" + ' ' + resultado.toFixed(2) + ' ' + divisa)
}

moneda = prompt("Elige tu moneda:\n 1)Peso\n 2)Dolar\n 3)Yuan\n 4)Real\n 5)Libra estarlina\n 6)Euro\n 7)Yen");
}

alert("Por favor recargue e ingrese una opción correcta")
console.log("Por favor recargue e ingrese una opción correcta")    




