var newScroll
var oldScroll=0
var intro = document.querySelector(".intro")
var editedText = document.querySelector(".edited-text")

var introSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--introSize').slice(0, -2))
var ogIntroSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--introSize').slice(0, -2))

var adjustRate = .005
var first = true
var sticky = true
var endHeight = 3800
var hit = false

prev = document.querySelector("#prev")
prev.addEventListener("click", previousPage)

next = document.querySelector("#next")
next.addEventListener("click", nextPage)

rand = document.querySelector("#rand")
rand.addEventListener("click", randomPage)

home = document.querySelector("#home")
home.addEventListener("click", homePage)

fancyNext = document.querySelector("#fancy-next")
fancyNext.addEventListener("click", nextStyle)

window.onload = () => {
    getBreaks()
    window.addEventListener('resize', getBreaks);
}

function getBreaks() {
    if(this.scrollY < 3600) {
        if(first) {
            first = false
        }
        else {
            editedText.style.display = "none"
            document.querySelector(".intro-text-disappear").className = "intro-text"
        } 
        var elements = document.querySelectorAll(".shrinking");
        var oldOff = Number.MIN_SAFE_INTEGER
        var flag = true
        var str = ""
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
    else {
        introSize = -1
    }
}

window.addEventListener("scroll", function (event) {
    newScroll = this.scrollY
    if(introSize >= 0 && newScroll < 3600) {
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
    if (Window.innerWidth <= 900) {
        if (introSize > 100) {
            introSize = 100
        }
    }
    else {
        if (introSize > ogIntroSize) {
            introSize = ogIntroSize
        }
    }
}

async function nextStyle() {
    navBar = document.querySelector(".navbar") 
    bigText = document.querySelector("#five")
    container = document.querySelector(".conclusion")
    var frames = 200
    var navColor = 153
    var navInc = 153/frames
    var lightBackground = 114
    var lightIncrement = 114/frames
    var darkBackground = 57
    var darkIncrement = 57/frames
    var whiteText = 255
    var whiteIncrement = 255/frames
    var endHeight = 0
    var heightIncrement = 50/frames
    var xPos = 0
    var xPosInc = 30/frames

    for(var i=0; i<frames; i++) {
        navBar.style.backgroundColor = `rgb(${navColor}, ${navColor}, ${navColor})`
        navColor -= navInc

        for(var j=0; j<4; j++) {
            navBar.children[0].children[j].style.backgroundColor = `rgb(${whiteText}, ${whiteText}, ${whiteText})`
        }

        bigText.style.backgroundColor = `rgb(${lightBackground}, ${lightBackground}, ${lightBackground})`
        lightBackground -= lightIncrement

        bigText.style.color = `rgb(${whiteText}, ${whiteText}, ${whiteText})`
        whiteText -= whiteIncrement

        container.style.backgroundColor = `rgb(${darkBackground}, ${darkBackground}, ${darkBackground})`
        darkBackground -= darkIncrement

        container.children[0].style.top = `${endHeight}vh`
        endHeight -= heightIncrement

        container.children[0].style.left = `${xPos}%`
        container.children[0].style.transform = `transform: translateX(30%)`
        xPos-=xPosInc

        await sleep(17)
    }
    await sleep(500)
    nextPage()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function nextPage() {
    location.replace("https://clarejachim.github.io/webring/")
}

function previousPage() {
    location.replace("https://avm325.github.io/WebRingProject/")
}

function homePage() {
    location.replace("https://teighmy22.github.io/WebRing/webring_project3/index.html")
}

function randomPage() {
    var myrandom = Math.round(Math.random() * 8)
    var links = new Array()
    links[0] = "https://elenikary.github.io/project3_web_ring/"
    links[1] = "https://ayc325.github.io/DES070/Project3/index.html"
    links[2] = "https://avm325.github.io/WebRingProject/"
    links[3] = "https://clarejachim.github.io/webring/"
    links[4] = "http://www.cse.lehigh.edu/~haz323/WebDesign/Project%203/index.html"
    links[5] = "https://msh223.github.io/WebRing/"
    links[6] = "https://mlk224.github.io/WebRing/"
    links[7] = "https://katiacarnevale.github.io/WebRing/"
    links[8] = "https://ctcooper11.github.io/WEBRING/Web-Ring/webring.html"
    location.replace(links[myrandom])
}