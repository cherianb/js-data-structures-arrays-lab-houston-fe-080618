// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver (Name){
  return drivers.push(Name)
  addName('Ralph')
}

function destructivelyPrependDriver(Name){
  return drivers.unshift(Name)
  addName ('Bob')
}

function destructivelyRemoveLastDriver(Name) {
  return drivers.pop(Name)
  addName("Milo", "Otis")
}

function destructivelyRemoveFirstDriver(Name){
  return drivers.shift(Name)
  addName("Otis", "Garfield")
}

