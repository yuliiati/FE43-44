/**
.classList.add() - мктод, который позволяет добавить любой класс к имеющимся классам элемента
.classList.remove()
.className - свойство, которое позволяет получить и заменить класс элемента
.classList - это объект, внутри которого есть удобные методы для добавления и удаления класса
.classList.value - свойство, которое позволяет получить все классы элемента
.classList.add(className) - метод, который позволяет добавить любой класс к имеющимся классам элемента
.classList.remove(className) - метод, который позволяет удалить определенный класс элемента

 */
// При нажатии на button, добавить класс "active" к main

let main = document.querySelector("main")
// main.className += "block"
// main.classList.add("active")
// let button = document.querySelector("button")
// for(let i = 0; i < button.length; i++) {
//     button.addEventListener("click", function() {
//         console.log(main.classList.add("active"))
//         ////коллбэк функция, анонимная, синтаксис всегда одинаковый
//     })
// }
// При нажатии на button удалить, удалять класс active у main


// let buttonAdd = document.querySelector(".add")
//     buttonAdd.addEventListener("click", function() { 
//         main.classList.add("active")
//     }) 
//     let buttonRem = document.querySelector(".rem")
//     buttonRem.addEventListener("click", function() { 
//         main.classList.remove("active")
//     }) 

// При нажатии на кнопку, добавлять или удалять класс active. Если класс active есть, то удаляем и наоборот

//При наж на актив удаляем или добавляем класс

// let button = document.querySelector(".btn")
// button.addEventListener("click", function() {
//     main.classList.toggle("active")
// })

// Создать 10 тегов p с числами от 1 до 10 с помощью forEach(). При нажатии на любой из тегов p, 
// менять цвет текста на красный
// При еще одном нажатии, возвращать обратно на черный


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function(num) {
//     main.innerHTML += `<p>${num}</p>`
 
// })

// let texts = document.querySelectorAll("p") //Выбрать все теги и заставить работать
// texts.forEach(function(text) { //На массив нельзя вешать слушатель!Поэтому forEach!
//     text.addEventListener("click", function() {
//         text.classList.toggle("red")
//     })
// })

// Есть массив объектов. Нужно отобразить разметку в html. Внутрь div, 
// положить тег p c текстом из этого массива объектов
/*
    <div class="todo">
        <p>{Вынести мусор}</p>
    </div>
    <div class="todo">
        <p>{Проверить ДЗ}</p>
    </div>
*/

// let todos = [
//     {
//         name : "Вынести мусор"
//     },
//     {
//         name : "Проверить ДЗ"
//     },
//     {
//         name : "Создать веб-приложение"
//     },
//     {
//         name : "Помыть посуду"
//     }
// ]

// todos.forEach(function(todo) {
//     console.log(todo.name)
//     main.innerHTML += `
//     <div class ="todo">
//     <p>${todo.name}</p>
//     </div>
//     `
// })

// при нажатии на тег div, добавлять класс line для тега p этого div
// children
// div.querySelector("p")
// element.children - список дочерних элементов(тегов) тега

// let items = document.querySelectorAll(".todo")
// // console.log(items)
// items.forEach(function(item) {
//     item.addEventListener("click", function() {
//         // console.log(item.children[0].classList.toggle("line"))
//       //    let text = item.querySelector("p")
//     //    text.classList.toggle("line")
// item.querySelector("p").classList.toggle("line")
//     })
// }) 
// div.addEventListener("click", function() {
//     main.classList.toggle("line")
// })

// let todo = document.querySelector(".todo")
// let text = document.querySelector("p")

// text.addEventListener("click", function() {
//     console.log("Клик по тегу p")
// })

// todo.addEventListener("click", function() {
//     console.log("Клик по div")
// })
// // todo.children[1].innerText = "Hello"

// console.log(todo.children[1].innerText = "Hello")

// let text = document.querySelectorAll(".item-1 p")
// console.log(text)

// for(let i = 0; i < text.length; i++) {
//     text[i].innerText = "HELLO MY FRIEND"//bad
// }


// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 
let arr = [
    {
        name : "Acer",
        price : 50000,
        img : "./images/img1.jpg"
    },
    {
        name : "Asus",
        price: 45000
    },
    {
        name : "HP",
        price: 60000
    }
]

arr.forEach(function(arr) {
    console.log(arr.name)
    main.innerHTML += `
    <div class ="laptops">
    <p>${arr.name}</p>
    <p>${arr.price}</p>
    </div>
    `
})
// let card = document.querySelector(".laptops")
// let text = document.querySelector("p")

let cards = document.querySelectorAll("div") //Выбрать все теги и заставить работать
cards.forEach(function(card) { //На массив нельзя вешать слушатель!Поэтому forEach!
    card.addEventListener("click", function() {
        card.classList.toggle("laptops")
    })
})