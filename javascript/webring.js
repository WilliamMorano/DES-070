var newScroll
var oldScroll=0
var intro = document.querySelector(".intro")
var editedText = document.querySelector(".edited-text")
var introSize = 125
var adjustRate = .005
var first = true
var sticky = true
var endHeight = 3800
var hit = false

prev = document.querySelector("#prev")
prev.addEventListener("click", previousPage)

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
        unstick()
        if(newScroll <= endHeight && introSize <= 0 && !hit && newScroll-oldScroll<0) {
            introSize = 3
        }
    }
    
    oldScroll = newScroll
})

function stickyBackground() {
    if(!sticky) {
        sticky = true
        document.querySelector(".intro-unstick").className = "intro"
        hit = false
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
    if(introSize > 125) {
        introSize = 125
    }
}



function randomlinks(){
    var myrandom=Math.round(Math.random()*5)
    var links=new Array()
    links[0]="http://www.amazon.com"
    links[1]="http://www.apple.com"
    links[2]="http://www.w3schools.com"
    links[3]="http://www.youtube.com"
    links[4]="http://www.news.com"
    links[5]="http://www.netflix.com"
    window.location=links[myrandom]
}

function next() {
    window.location.href = "http://www.w3schools.com";
}

function previousPage() {
    console.log("here")
    window.location.href = "https://avm325.github.io/WebRingProject/";
}