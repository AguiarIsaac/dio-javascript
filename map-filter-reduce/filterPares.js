const array = [2,4,6,8,10,3,5,7,9,11]

function numberPar(value) {
    if (value % 2 === 0){
        return value
    }
}

console.log(array.filter(numberPar))
