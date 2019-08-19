const readInput = document.getElementById('event--read-input')
const quantityPlus = document.getElementById('event--quantity-plus')
const quantityMinus = document.getElementById('event--quantity-minus')

const addQuantity = (event) => {
    event.preventDefault()
    if (readInput.value < 9) {
        readInput.value = Number(readInput.value) + 1
        return readInput.value
    }
}
const removeQuantity = (event) => {
    event.preventDefault()
    if (readInput.value > 1) {
        readInput.value = Number(readInput.value) - 1
        return readInput.value
    }
}

quantityMinus.addEventListener('click', removeQuantity, false)
quantityPlus.addEventListener('click', addQuantity, false)