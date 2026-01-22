const array = [1,2,3,4,5]

const todoItensSaoNumeros = array.every(items => typeof items === "number")

document.body.innerText = todoItensSaoNumeros