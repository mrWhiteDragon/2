const defuser = document.getElementById('defuser-btn') 
let explodeId = 0

defuser.addEventListener('click', () => {
    clearInterval(explodeId)
    defuser.disabled = true
    console.log('Бомба обезврежена!')
})

function explosion(seconds) {
    console.log(seconds + '...')
    explodeId = setInterval(() => {
        seconds--
        if (seconds <= 0) {
            clearInterval(explodeId)
            console.log('БУМ!')
            defuser.disabled = true
        }
        else
            console.log(seconds + '...')

    }, 1000)

}

explosion(5)

/*console.log('3...')

setTimeout(() => {
    console.log('2...')
}, 1000)

setTimeout(() => {
    console.log('1...')
}, 2000)

const timeoutId = setTimeout(() => {
    console.log('Boom!')
}, 3000)


// if (confirm('Хотите обезвредить бомбу?'))
//     clearTimeout(timeoutId)*/