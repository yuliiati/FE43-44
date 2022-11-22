

//// 2) Изменение текста в инпуте
// Кнопка при нажатии на которую в инпуте меняется текст.

// Нажми на кнопку рядом 
// Нажал! Спасибо.

// let inpt = document.querySelector(".inpt")
// let btn = document.querySelector(".btn")

// function btnCallBack() {
//     inpt.value = "thanks for press"
//     btn.removeEventListener("click", btnCallBack)
//  }
//  btn.addEventListener("click", btnCallBack)

let input = document.querySelector(".input")
let unBlock = document.querySelector(".unBlock")
let block = document.querySelector(".block")

block.addEventListener("click", blockInput)
unBlock.addEventListener("click", unBlockInput)

function blockInput(event) {
    input.setAttribute("disabled", true) // <------- типичный набор для способов манипуляции
}
function unBlockInput(event) {
    input.removeAttribute("disabled"); // <-------типичный набор для способов манипуляции
}
