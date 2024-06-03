let numbers = [2, 4, 6, 8, 10]
let currentIndex = 0

function nextNumber(){
    if(currentIndex < numbers.length - 1) {
        currentIndex++
    } else {
        currentIndex = 0
    }
    document.querySelector('#output').value = numbers[currentIndex]
}