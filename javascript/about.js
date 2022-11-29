var cards = document.querySelectorAll('.card')
var infoSections = document.querySelectorAll('.hover-block')

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        infoSections[index].style.display = 'block'
    })
})

cards.forEach((card, index) => {
    card.addEventListener('mouseout', () => {
        infoSections[index].style.display = 'none'
    })
})

var form = document.querySelector('form')
var box = document.querySelector('.sticky')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = e.target.querySelector('#fname').value
    box.innerText = name ? `Thanks ${name}, for the submission!` : `Thanks!, for the submission!`
    box.style.fontFamily = 'Raleway'
    box.style.fontSize = '32px'
    box.style.display = 'block'
    box.style.padding = '10px'
    setTimeout(() => {
        box.remove()
    }, 1000)
});