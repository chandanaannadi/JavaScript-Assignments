const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
    collapseActiveClasses()
        card.classList.add('active')
    })
})


function collapseActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}