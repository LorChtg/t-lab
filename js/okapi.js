const readInput = document.getElementById('event--read-input')
const quantityPlus = document.getElementById('event--quantity-plus')
const quantityMinus = document.getElementById('event--quantity-minus')

const quantityValue = (event) => {
    event.preventDefault()
    console.log(readInput.value)
}

quantityMinus.addEventListener('click', quantityValue, false)
quantityPlus.addEventListener('click', quantityValue, false)