var newScroll
var oldScroll=0
var intro = document.querySelector(".intro")
var editedText = document.querySelector(".edited-text")
var introSize = 125
var first = true

window.onload = () => {
    getBreaks()
    window.addEventListener('resize', getBreaks);
}

function getBreaks() {
    if(first) {
        first = false
    }
    else {
        editedText.style.display = "none"
        document.querySelector(".intro-text-disappear").className = "intro-text"
    } 
    var elements = document.querySelectorAll(".shrinking");
    var str = ""
    var oldOff = Number.MIN_SAFE_INTEGER
    var flag = true
    elements.forEach((element) => {
        if(element.offsetTop > oldOff && flag) {
            flag = false
            oldOff = element.offsetTop      
        }
        else if(element.offsetTop > oldOff){
            str += "<br>"
            oldOff = element.offsetTop  
        }
        str += element.innerHTML
    })
    document.querySelector(".intro-text").className = "intro-text-disappear"
    editedText.innerHTML = str
    editedText.style.display = "block"
}

window.addEventListener("scroll", function (event) {
    newScroll = this.scrollY;
    console.log(newScroll)
    if(newScroll < 1300) {
        if(newScroll > oldScroll) {
            shrinkIntro()
        }
        else {
            growIntro()
        }
    }
    else {
        moveDown()
    }
    oldScroll = newScroll
})

function shrinkIntro() {
    if(introSize >= 0) {
        editedText.style.fontSize = `${introSize}px`
        introSize -= 1
    }
    
}

function growIntro() {
    editedText.style.fontSize = `${introSize}px`
    introSize += 1
}

function moveDown() {

}