/*var x = document.getElementById(chiffre).value;
var y = 0;

function deux(x){
  return x = 2;
}
function cinq(y){
  return y = 5;
}
function plus(x, y){
  var z = 0;
  return (z = (deux() + cinq()));
}
function egal(z){
  alert(z);
}
*/
/*
function nombre(){
  var x = +document.getElementById("chiffre").value;
  alert(x);
}
function calcul(){
  var calc = +document.getElementById("chiffre").value;
}

function addition() {

  var terme1 = +document.getElementById("chiffre").value;
  var terme2 = +document.getElementById("chiffre").value;

  document.getElementById("result").textContent = + (terme1 + terme2);

}   */
/*
function somme(a, b){
  var a = +document.getElementById("chiffre1").value;
  var b = +document.getElementById("chiffre2").value;
  var result = a + b;
  alert(result);
}

function soustraction(a, b){
   var result = a - b;
  return result;
}

function multiplication(a, b){
  var result = a * b;
  return result;
}

function division(a, b){
  var result = a / b;
  return result;
}

function egal(result){
  alert(result);
}
*/
/*
function calcul() {
    var x = parseInt(document.getElementById('chiffre1').value);
    var y = parseInt(document.getElementById('chiffre2').value);

    if (document.getElementById('plus').clicked) {
        var addition = x + y;
        document.getElementById('resultat').innerHTML = addition;
    } else if (document.getElementById('moins').clicked) {
        var soustraction = x - y;
        document.getElementById('resultat').innerHTML = soustraction;
    } else if (document.getElementById('fois').clicked) {
        var multiplication = x * y;
        document.getElementById('resultat').innerHTML = multiplication;
    } else if (document.getElementById('sur').clicked) {
        var division = x / y;
        document.getElementById('resultat').innerHTML = division;
    }
    else {
        document.getElementById('resultat').innerHTML ="Remplir les champs manquants";
    }
}
*/
var x = parseInt(document.getElementById('chiffre2').value);
var y = parseInt(document.getElementById('chiffre5').value);
var z = "";
var a = "";
/*code a tester
function chiffre(){
  return "a = parseInt(document.getElementByTagName('input').value)";
}

if (add()= true || soust()= true || multiplication()= true || division()= true){
  return "y = a";
}
else {
  return 'x = "a';
} */
function add(){
  /*x = parseInt(document.getElementById('chiffre1').value);
  y = parseInt(document.getElementById('chiffre2').value);*/
  z = x + y;
  return "document.getElementById('resultat').innerHTML = z";
}
function soust(){
  /*x = parseInt(document.getElementById('chiffre1').value);
  y = parseInt(document.getElementById('chiffre2').value);*/
  z = x - y;
  return "document.getElementById('resultat').innerHTML = z";
}
function multiplication(){
  /*x = parseInt(document.getElementById('chiffre1').value);
  y = parseInt(document.getElementById('chiffre2').value);*/
  z = x * y;
  return "document.getElementById('resultat').innerHTML = z";
}

function division(){
  /*x = parseInt(document.getElementById('chiffre1').value);
  y = parseInt(document.getElementById('chiffre2').value);*/
  z = x / y;
  return "document.getElementById('resultat').innerHTML = z";
}

function calcul(){
  document.getElementById('resultat').innerHTML = z;
}
