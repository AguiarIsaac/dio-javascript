const BTN = document.querySelector('button')
const MAIN =document.querySelector('main')
const TITLE_TEXT = document.querySelector('H1')
const FOOTER = document.querySelector('footer')

function darkModeTheme() {
    MAIN.classList.toggle('darkMode')
    FOOTER.classList.toggle('darkMode')

    if(MAIN.className === 'darkMode') {
        TITLE_TEXT.innerHTML = 'Dark Mode On'
        BTN.innerHTML = 'Light Mode'
    } else {
        TITLE_TEXT.innerHTML = 'Light Mode On'
        BTN.innerHTML = 'Dark Mode'
    }
}

BTN.addEventListener('mousemove', () => BTN.style.background = '#7198bd')
BTN.addEventListener('mouseout', () => BTN.style.background = 'darkgrey')
BTN.addEventListener('click', darkModeTheme)