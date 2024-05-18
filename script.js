const imgcontainer = document.querySelector(".rightimages")
let isPlayinng = false

const drum = document.createElement("img")
const trombone = document.createElement("img")
const guitar = document.createElement("img")
const cymbal = document.createElement("img")

let drumaudio = new Audio('drumsound.mp3')
let guitaraudio = new Audio('guiter.wav')
let tromboneaudio = new Audio('trombone.wav')
let cymbalaudio = new Audio('cymbal.wav')

imgcontainer.appendChild(drum)
imgcontainer.appendChild(trombone)
imgcontainer.appendChild(guitar)
imgcontainer.appendChild(cymbal)

drum.src = "drum.jpeg"
trombone.src = "trombone.webp"
guitar.src = "guitar.jpg"
cymbal.src = "cymbal.jpg"

drum.classList.add("rightimg")
trombone.classList.add("rightimg", "trombone")
guitar.classList.add("rightimg")
cymbal.classList.add("rightimg")

addEventListener("keyup", (e) => {

    switch (e.key) {
        case "d": {
            drumaudio.play()
            // tromboneaudio.pause()
            // guitaraudio.pause()
            // guitaraudio.currentTime = 0

        }
            break;
        case "t": {
            tromboneaudio.play()
            // guitaraudio.pause()
            // drumaudio.pause()
        }
            break;
        case "g": {
            guitaraudio.play()
        }
            break;
        case "c": {
            cymbalaudio.play()
        }
            break;
        default: console.log("oops insturument not available");
    }
})

drum.addEventListener("click", () => {
    drumaudio.play()
    // guitaraudio.pause()
    // tromboneaudio.pause()
})

guitar.addEventListener("click", () => {
    guitaraudio.play()
    // drumaudio.pause()
    // tromboneaudio.pause()
})
trombone.addEventListener("click",()=>{
    tromboneaudio.play()
    // guitaraudio.pause()
    // drumaudio.pause()
})
cymbal.addEventListener("click", ()=>{
    cymbalaudio.play()
})