// console.log(document.body)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)


// console.log(document.querySelector("button"))// по тегу
// console.log(document.querySelector(".item"))// по классу
// console.log(document.querySelector("#green"))//по id
// console.log(document.querySelector("#red"))//по id - red

// console.log(document.querySelectorAll("button"))//выбор всех эл button
// console.log(document.querySelectorAll(".item"))//выбор всех эл по классу

// let buttonRed = document.querySelector("#red")
// buttonRed.style.backgroundColor = "red"


// // let body = document.querySelector("body")

// document.body.style.backgroundColor = "black" //рабочий варик


//найти нашу кнопку и обозначить
// let buttonRed = document.querySelector("#red") 
// let buttonRedId = buttonRed.getAttribute("id")
// console.log(buttonRed.innerText); //1. RED - text получили с html
// buttonRed.addEventListener("click", function(){ //2. Повесили слушатель
    // document.body.style.background = "red"
    // console.log("клик", buttonRedId)
// })
// let buttons = document.querySelector(".item")


            //_________________
        //Домашка Кнопки
    //_________________

/*1. Project10. Buttons. При нажатии на кнопку менять цвет body.
 У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
Менять фона body на считанный атрибут id. Добавить кнопку blue и orange. =>
*/ 

// let body = document.body
// body.style.backgroundColor = "black"

// let buttonRed = document.querySelector("#red")
//     buttonRed.addEventListener("click", function(){
//     document.body.style.background = "red"
//     console.log("клик", buttonRed.innerText)
//     })
// let buttonGreen = document.querySelector("#green")
// buttonGreen.addEventListener("click", function(){
//     document.body.style.background = "green"
//     console.log("клик", buttonGreen.innerText)
// })
// let buttonBlue = document.querySelector("#blue")
// buttonBlue.addEventListener("click", function(){
//     document.body.style.background = "blue"
//     console.log("клик", buttonBlue.innerText)
// })
// let buttonOrange = document.querySelector("#orange")
// buttonOrange.addEventListener("click", function(){
//     document.body.style.background = "orange"
//     console.log("клик", buttonOrange.innerText)
// })


//________________________
// 2. Создать 5 тегов p в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//  для каждого тега p добавить соотв-ю текст. innerText =>

// let text = document.querySelectorAll(".item-3 p")
// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

// for (let i = 0; i < texts.length; i++) {
//     text[i].innerText = texts[i]
// }

// 3. Есть массив // //В html создаем 3 тега a -  x3. Для каждого из трех, 
   // добавить link в href и title внутрь тега из массива arr

let arr = [
    {
        link : "https://google.com",
        title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
    },
    {
        link : "https://facebook.com",
        title : "Ссылка на фейсбук"
    }
]
let links = document.querySelectorAll("a")
// let title = document.querySelector(".item-4 a")
arr.forEach((element, i) => { // перебираем массив объектов
    links[i].setAttribute("href", element.link) // обращаюсь к конкретному тегу а и меняю у него атрибут href. Меняем "пустоту" на href по ключу link! ключ-значние. присваиваем href
    links[i].innerText = element.title // меняем "текстовый узел" сразу же title через innerText
})
// for(let i = 0; i < arr.length; i++) {
//         arr[i].addEventListener("click", function() {
//             console.log(arr.innerText) // БОже, что я несу?хх
//             //
//         })
//     }





// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//    Создать тег p с начальным значением - 0. 
//    При клике на buttonPlus увеличивать значение в теге p на 1
//    При клике на buttonMinus уменьшать значение в теге p на 1
//    addEventListener. innerText.

let paragraf = document.querySelector(".paragraf")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

plus.addEventListener("click", function(event) {
    paragraf.innerText = Number(paragraf.innerText) +1
})
minus.addEventListener("click", function(event) {
    paragraf.innerText = Number(paragraf.innerText) -1
})

// let b_minus = document.querySelector("#minus")
// let b_plus = document.querySelector("#plus")
// let current_p = document.querySelector(".plusMinus p")

// b_minus.addEventListener("click", function () {
//     current_p.innerText = Number(current_p.innerText) - 1
// })
// b_plus.addEventListener("click", function () {
//     current_p.innerText = Number(current_p.innerText) + 1
// })

// let buttons = document.querySelectorAll("button")
// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         console.log(buttons.innerText)
//         //
//     })
// }
// let buttonImg = document.querySelector("#img")
// buttonImg.addEventListener("click", function(){
//     // document.body.style.background = "URL(./260752.png) no-repeat center center fixed"
//     // document.body.style.backgroundColor = "black"
//     // document.body.style.backgroundBlendMode = "color-burn"
// })

// let buttonRandom = document.querySelector("#random")

// buttonRandom.addEventListener("click", function(buttonRandom){
//     document.body.style.backgroundColor = "green"
// })


/*// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!

// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
*/
//_________________________________________________________________________________
/*  <div class="item">
    <p class="text">Hello World</p>
    <h4 class="title">Hello, Arsen</h4>
    <a href="">Hello, Hello</a>
</div> */
//((((((((((()))))))))))
// let text = document.querySelector(".item-1 p") //Или
// let text1 = document.querySelector(".text") //ИЛИ
// console.log(text.innerText);

// let title = document.querySelector(".item-1 .title")
// console.log(title.innerText);

// let link = document.querySelector(".item-1 a")
// console.log(link.innerText);

// let item = document.querySelector(".item-1")
// let text1 = item.querySelector(".title")
// console.log(text1);

// document.querySelector(".item a") результат!
// _______________________________________________

// let text = document.querySelector("p")
// let text = document.querySelector("h4")
// let text = document.querySelector("a")

// // main.innerText 
// console.log(text.innerText)

// let title = document.querySelector(".title").innerText
// let text = document.querySelector(".text").innerText
// let a = document.querySelector("a").innerText

// let arr = [title, text, a]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
//При наж на теги p внутри item-2 на их содерж

// let newText = document.querySelectorAll(".item-2 p")
// for(let i = 0; i < newText.length; i++) {
//     newText[i].addEventListener("click", function() {
//         console.log("click")
//         //
//     })
// }
//Замена текстa
//____________________
// let text = document.querySelectorAll(".item-1 p")
// console.log(text)

// for(let i = 0; i < text.length; i++) {
//     text[i].innerText = "HELLO MY FRIEND"
// }
// //______________На меня кликнули________________________________
// let butt = document.querySelectorAll(".item")
// // let id = document.querySelectorAll("#id")
// // button.addEventListener("click", function() {
//     // document.body.style.background = "green"
//     for(let i = 0; i < butt.length; i++) {
//     butt[i].addEventListener("click", function() {
//         console.log("На меня кликнули")
//         // butt[i].innerText = "#id"
// })
// }
// //___________________Сама сделала уиииии)))______________________________

