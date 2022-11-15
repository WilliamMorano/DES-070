var start = document.createElement("div")
start.style.width = '100%'
start.style.height = '100%'
start.style.background = 'url("../images/start-garden.png") no-repeat center'
start.style.size = 'cover'

var middle = document.createElement("div")
middle.style.width = '100%'
middle.style.height = '100%'
middle.style.background = 'url("../images/mid-garden.png") no-repeat center'
middle.style.size = 'cover'

var end = document.createElement("div")
end.style.width = '100%'
end.style.height = '100%'
end.style.background = 'url("../images/garden-final.png") no-repeat center'
end.style.size = 'cover'

var first = {el:start, right:second, left:third}
var second = {el:second, right:third, left:first}
var third = {el:end, right:first, left:second}

var current = first
var old = first

document.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowRight') {
        old = current
        current = current.right
        updateCurrent()
    }
});

function updateCurrent() {
    old.el.style.display = 'none'
    current.el.style.display = 'block'
}


// - Navbar opacity and maybe footer
// - logo size
// - variety in images