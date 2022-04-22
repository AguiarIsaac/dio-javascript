let inputText = document.getElementById('to-do')
let button = document.getElementById('btn')
let list = document.getElementById('list')

button.addEventListener('click', () => {
    list.innerHTML += `<li><input type="checkbox" id="check_${inputText.value}"><label for="check_${inputText.value}"> ${inputText.value}</label>;</li>`
    inputText.value = ''
})
