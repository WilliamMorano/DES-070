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