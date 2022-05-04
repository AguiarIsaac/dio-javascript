const items = [
    {name: 'Banana', price: 3.50},
    {name: 'Uva', price: 5.00},
    {name: 'acabate', price: 6.0},
    {name: 'Sabão em pó', price: 50}
]

function calculaSaldo (saldoDisponivel, arr) {
    return arr.reduce(function(prev, current) {
        return prev - current.price
    }, saldoDisponivel)
}

const saldo = 100
console.log(calculaSaldo(saldo, items))
