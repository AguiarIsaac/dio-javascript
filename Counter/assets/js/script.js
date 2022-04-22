let incrementButton = document.getElementById('increment')
let decrementButton = document.getElementById('decrement')
let valueCounter = document.getElementById('value')
let counter = 0

function validations(value) {
    if ( value < 0 ) {
        valueCounter.style.color = 'red'
    } else if ( value > 0 ) {
        valueCounter.style.color = 'blue'
    } else {
        valueCounter.style.color = 'white'
    }
}

function incrementValue() {
    counter = counter + 1
    valueCounter.innerHTML = counter
    validations(counter)
}

function decrementValue() {
    counter = counter - 1
    valueCounter.innerHTML = counter
    validations(counter)   
}

incrementButton.addEventListener('click', incrementValue)
decrementButton.addEventListener('click', decrementValue)

