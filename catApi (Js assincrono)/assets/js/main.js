let button = document.querySelector('#btn')
let img = document.querySelector('#catImg')
const LINK = 'https://thatcopy.pw/catapi/rest/'


const getCat = async () => {
    try {
        const data =  await fetch(LINK)
        const json = await data.json()

        return json.webpurl
    }
    catch(e){
        console.log(e.message)
    }
}

const getImg = async() => {
    const imgUrl = await getCat()
    img.src = imgUrl
}

button.addEventListener('click', getImg)

getImg()