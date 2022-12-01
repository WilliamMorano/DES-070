var urban = document.querySelector('#urban-text')
var scapers = document.querySelector('#scapers-text')

window.onload = () => {
    fly()
}

function fly() {
    urban.style.animation = "zoomIn 3s ease-out"
    setTimeout(() => {
        scapers.style.animation = "zoomInScaper 3s ease-out"
      }, "200")
    setTimeout(() => {
        window.location.href = "../html/startup.html";
    }, "3000")
}