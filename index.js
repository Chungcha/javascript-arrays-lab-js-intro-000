var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens;
}

function destructivelyPrependKitten(element){
  kittens.unshift(element);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,-1)
}

function removeFirstKitten(){
  return kittens.slice(1);
}











