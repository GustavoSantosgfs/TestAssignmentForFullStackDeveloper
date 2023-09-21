let currentIndex = 0

function move(step) {
    let items = document.querySelectorAll('.header__promo__mobile-item')
    items[currentIndex].classList.remove('active')

    currentIndex += step
    
    if (currentIndex < 0) {
        currentIndex = items.length - 1
    }
    if (currentIndex >= items.length) {
        currentIndex = 0
    }

    items[currentIndex].classList.add('active')
}