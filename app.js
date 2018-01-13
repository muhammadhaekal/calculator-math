function add(varA,varB){
  return varA+varB;
}
function substract(varA,varB){
  return varA-varB;
}
function multiply(varA,varB){
  return varA*varB;
}
function divide(varA,varB){
  return varA/varB;
}
function modulo(varA,varB){
  return varA%varB;
}

console.log("------------level 1------------");
var varC = add(2,5)
console.log(varC);
var varC = substract(add(2,5),5)
console.log(varC);

console.log("------------level 2------------");
var varC = modulo(substract(add(25,5),5),7)
console.log(varC);
