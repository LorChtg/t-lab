const openMenu = document.getElementById('event--open-menu')
const closeMenu = document.getElementById('event--close-menu')
const slideMenu = document.getElementById('event--slide-menu')

const openOrClose = () => slideMenu.style.display === 'none'? slideMenu.style.display = 'block' : slideMenu.style.display = 'none'

openMenu.addEventListener('click', openOrClose)
closeMenu.addEventListener('click', openOrClose)