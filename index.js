// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
   cats.push("Ralph");
}

function destructivelyPrependCat() {
     cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
     cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [...cats, 'Broom']
    return newCats
}

function prependCat() {
    const newCats = ['Arnold', ...cats]
    return newCats
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}

console.log(removeLastCat())
