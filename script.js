var result;
function add(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result = num1 + num2;
  document.getElementById("results").innerHTML = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + result + ".";
}
function sub(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result = num1 - num2;
  document.getElementById("results").innerHTML = 'The difference of ' + num1 + ' and ' + num2 + ' is ' + result + ".";
}
function mul(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result = num1 * num2;
  document.getElementById("results").innerHTML = 'The product of ' + num1 + ' and ' + num2 + ' is ' + result + ".";
}
function div(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result = num1 / num2;
  document.getElementById("results").innerHTML = 'The quotient of ' + num1 + ' and ' + num2 + ' is ' + result + ".";
}
function mod(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  result = num1 % num2;
  document.getElementById("results").innerHTML = 'The remainder of ' + num1 + ' and ' + num2 + ' is ' + result + ".";
}

