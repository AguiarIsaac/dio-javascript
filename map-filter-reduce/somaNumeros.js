function somaArray(arr) {
    return arr.reduce((prev, current) => {
        return prev + current
    })
}

console.log(somaArray([1,2,3,4]))
