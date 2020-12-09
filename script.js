const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const button = document.querySelector('button')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++
    if(load > 99){
        clearInterval(int)
        button.style.opacity = '1'
        button.classList.toggle('no-event')
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
button.addEventListener('click', () =>{
    window.location.reload()
})


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}