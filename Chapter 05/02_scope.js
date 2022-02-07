//local scope
function localScope() {
  let local = "로컬";
  console.log(local);
}
//error
//console.log(local);

//global scope
let globalScope = "글로벌";
function getGlobalScope() {
  console.log(globalScope);
}
getGlobalScope();
