var newScroll
var oldScroll=0
var intro = document.querySelector(".intro")
var editedText = document.querySelector(".edited-text")
var introSize = 125
var adjustRate = .005
var first = true
var sticky = true

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
var endHeight = -1
window.addEventListener("scroll", function (event) {
    newScroll = this.scrollY;
    if(introSize >= 0) {
        stickyBackground()
        if(newScroll > oldScroll) {
            shrinkIntro(newScroll, oldScroll)
        }
        else {
            growIntro(newScroll, oldScroll)
        }
    }
    else {
        if(endHeight === -1) {
            endHeight = newScroll
        }
        unstick()
        if(newScroll <= endHeight && introSize < 0) {
            introSize = 3
        }
    }
    oldScroll = newScroll
})

function stickyBackground() {
    if(!sticky) {
        sticky = true
        document.querySelector(".intro-unstick").className = "intro"
        
    }
}

function unstick() {
    if(sticky) {
        document.querySelector(".intro").className = "intro-unstick"
        sticky = false
    }
    
}


function shrinkIntro(newScroll, oldScroll) {
    if(introSize >= 0) {
        editedText.style.fontSize = `${introSize}px`
        introSize -= (newScroll-oldScroll)*adjustRate
    }
    console.log(e)
}

function growIntro(newScroll, oldScroll) {
    editedText.style.fontSize = `${introSize}px`
    introSize += (oldScroll-newScroll)*adjustRate*6.8
    endHeight = -1
}
