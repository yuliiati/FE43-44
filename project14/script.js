// /* <div class="item">
//     <p class="text">Hello World</p>
//     <h4 class="title">Hello, Arsen</h4>
//     <a href="">Hello, Hello</a>
// </div> */

// let text = document.querySelector(".item-1 p")
// // let text1 = document.querySelector(".text")
// console.log(text.innerText);

// let title = document.querySelector(".item-1 .title")
// console.log(title.innerText);

// let link = document.querySelector(".item-1 a")
// console.log(link.innerText);

// let item = document.querySelector(".item-1")
// let text1 = item.querySelector(".title")
// console.log(text1);

// // document.querySelector(".item a") результат!
// // _______________________________________________

// // let text = document.querySelector("p")
// // let text = document.querySelector("h4")
// // let text = document.querySelector("a")

// // // main.innerText 
// // console.log(text.innerText)

// // let title = document.querySelector(".title").innerText
// // let text = document.querySelector(".text").innerText
// // let a = document.querySelector("a").innerText

// // let arr = [title, text, a]
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// Задача

// let text = document.querySelector(".text")//Здесь находим тег п с классом текст
// text.innerText = "Привет Мир 2"

// let h4 = document.querySelector(".item-1 h4")
// h4.innerText = "Привет, Юлия"

// Сама решила! Боже это кайф! Быть умным))))

//Задача. Поменять все содержимое тегов h4 с классом title

// let titles = document.querySelectorAll(".title")
// console.log(titles[0].innerText = "Привет, Юлия")
// console.log(titles[1].innerText = "Привет, Юлия")//Обращ.ся внутри
// console.log(titles[2].innerText = "Привет, Юлия")
// console.log(titles[3].innerText = "Привет, Юлия")
// console.log(titles[4].innerText = "Привет, Юлия")


// let titles = document.querySelectorAll(".title")
// console.log(titles)
// // (titles[0].innerText = "Привет, Юлия")
// // (titles[1].innerText = "Привет, Юлия")
// // (titles[2].innerText = "Привет, Юлия")
// // (titles[3].innerText = "Привет, Юлия")
// // (titles[4].innerText = "Привет, Юлия")

// for(let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Привет, Юлия"
// }

let text = document.querySelectorAll(".item-1 p")
console.log(text)

for(let i = 0; i < text.length; i++) {
    text[i].innerText = "HELLO MY FRIEND"
}
// Сама решила! Боже это кайф! Быть умным))))
//Поменять теги p в div на "HELLO MY FRIEND"


//При наж на теги p внутри item-2 на их содерж

let newText = document.querySelectorAll(".item-2 p")
for(let i = 0; i < newText.length; i++) {
    newText[i].addEventListener("click", function() {
        console.log("click")
        //
    })
}