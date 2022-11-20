var slideDiv = document.querySelector(".photo-slider")
var slides = ['start', 'middle', 'end']
var circles = ['green', 'white', 'white']
var index = 0
var oldIndex = 0
var moving = false
const d = new Date()
var startTime = d.getTime()

document.addEventListener("keydown", (event) => {
    if(!moving) {
        moving = true
        if (event.key === 'ArrowRight') {
            oldIndex = index
            if (++index > 2) {
                index = 0
            }
            circles[oldIndex] = 'white'
            circles[index] = 'green'
            updateDots()
            rightArrowUpdate()
        }
        else if (event.key === 'ArrowLeft') {
            oldIndex = index
            if (--index < 0) {
                index = 2
            }
            circles[oldIndex] = 'white'
            circles[index] = 'green'
            updateDots()
            leftArrowUpdate()
        }
    }
});

function rightArrowUpdate() {
    var newSlide = document.createElement('div')
    newSlide.id = slides[index]
    newSlide.classList = 'slide-image'
    newSlide.style.left = '100%'
    newSlide.style.top = '-100%'
    slideDiv.insertBefore(newSlide, slideDiv.children[1]);
    newSlide.style.animation = "leftSlideIn 2s linear"
    newSlide.style.animationFillMode = 'forwards'
    document.querySelector(`#${slides[oldIndex]}`).style.animation = "leftSlideOut 2s linear, delete 2s linear"
    document.querySelector(`#${slides[oldIndex]}`).style.animationFillMode = 'forwards' 
    setTimeout(() => { 
        document.querySelector(`#${slides[oldIndex]}`).remove() 
        newSlide.style.top = '0'
        newSlide.style.left = '0'
        moving = false
        const d = new Date()
        startTime = d.getTime()
    }, 2000)
}

function leftArrowUpdate() {
    var newSlide = document.createElement('div')
    newSlide.id = slides[index]
    newSlide.classList = 'slide-image'
    newSlide.style.left = '-100%'
    newSlide.style.top = '-100%'
    slideDiv.insertBefore(newSlide, slideDiv.children[1]);
    newSlide.style.animation = "rightSlideIn 2s linear"
    newSlide.style.animationFillMode = 'forwards'
    document.querySelector(`#${slides[oldIndex]}`).style.animation = "rightSlideOut 2s linear, delete 2s linear"
    document.querySelector(`#${slides[oldIndex]}`).style.animationFillMode = 'forwards' 
    setTimeout(() => { 
        document.querySelector(`#${slides[oldIndex]}`).remove() 
        newSlide.style.top = '0'
        newSlide.style.left = '0'
        moving = false
        const d = new Date()
        startTime = d.getTime()
    }, 2000)
}

function updateDots() {
    document.querySelectorAll('.green-circle').forEach((child) => {
        child.remove()
    })
    document.querySelectorAll('.white-circle').forEach((child) => {
        child.remove()
    })
    circleContainer = document.querySelector('.circle-container')
    for(var i=0; i<3; i++) {
        if(circles[i] === 'green') {
            newCircle = document.createElement('div')
            newCircle.classList = 'green-circle'
            circleContainer.appendChild(newCircle)
        }
        else {
            newCircle = document.createElement('div')
            newCircle.classList = 'white-circle'
            circleContainer.appendChild(newCircle)
        }
    }
}

function checkSlide() {
    const d = new Date()
    if (d.getTime() > startTime+3500) {
        moving = true
        oldIndex = index
        if (++index > 2) {
            index = 0
        }
        circles[oldIndex] = 'white'
        circles[index] = 'green'
        updateDots()
        rightArrowUpdate()
    }
    setTimeout(checkSlide, 3500)
}
checkSlide()