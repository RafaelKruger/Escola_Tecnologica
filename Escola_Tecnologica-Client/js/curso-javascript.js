document.querySelector("#btnSave").addEventListener("click", showName);
/////

document.cookie = "NomeUsuario=Rafael";
sessionStorage.setItem("name", "Kruger");
//alert(sessionStorage.getItem("name"));

localStorage.setItem("111", "senha");
//alert(localStorage.getItem("111"));

// console.log(localStorage.getItem("7777"));
//localStorage.getItem("123")
//  ? alert("Novamente Aqui")
//  : alert("Voce é novo aqui");

// 3 >5 ? é verdade faz isso : é falso faz isso;

/////
function showName() {
  let name = document.querySelector("#iptName").value;
  console.log(name);
}

//const number = 12;
//const numbers = [1, 2, "Rohling", 4];
//numbers.push(5);

// console.log(showName("Adair"));

// console.log(show(2));

// const show = (x) => x * x;

// const title = document.querySelector("h1").innerHTML;
// console.log(title);

/////////////////
// CALCULADORA //
/////////////////

document.querySelector("#btnSomar").addEventListener("click", somar);
document.querySelector("#btnDiminuir").addEventListener("click", diminuir);
document.querySelector("#btnMultiplicar").addEventListener("click", mult);
document.querySelector("#btnDividir").addEventListener("click", dividir);

function somar() {
  let number1 = document.querySelector("#iptNumber1").value;
  let number2 = document.querySelector("#iptNumber2").value;
  console.log(parseInt(number1) + parseInt(number2));
}

function diminuir() {
  let number1 = document.querySelector("#iptNumber1").value;
  let number2 = document.querySelector("#iptNumber2").value;
  console.log(number1 - number2);
}

function mult() {
  let number1 = document.querySelector("#iptNumber1").value;
  let number2 = document.querySelector("#iptNumber2").value;
  console.log(number1 * number2);
}

function dividir() {
  let number1 = document.querySelector("#iptNumber1").value;
  let number2 = document.querySelector("#iptNumber2").value;
  console.log(number1 / number2);
}
