/**
 innerHTML
 */

//  let item = document.querySelector("main")

let main = document.querySelector("main")
// let name = "Yuliia"

//Внутрь main добавить тег p сo значением из переменной name

//main.innerHTML += name //мое решение

// main.innerHTML +=  `<p>${name}</p>`

// for(let i = 0; i < 5; i++) {
//     main.innerHTML += "<p>Hello</p>"
// }

//// Задача. Добавить внутрь 5 тегов p со значениями Hello от 1 до 5, не удаляя содержимое main.
// <p>Hello 1</p>, <p>Hello 2</p>

//___________________________________________________
//  for(let i = 0; i < 5; i++) {
//      main.innerHTML += `<p>Hello ${i + 1}</p>` //Сама решила!Молодец//
//  }
            //_____________________________________
// Добавить внутрь main тег а, у которого ссылкой будет link, а названием link_name
// <a href="https://google.com">Google</a>


// let links = []
// let link = "https://google.com"
// let link_name = "Google"

// main.innerHTML += `<a href ="${link}">${link_name}</a>`

// let laptop = {
//     mark : "Acer",
//     model : "G444M",
//     price : 15000
// }
// Задача. В main добавить разметку. 
/*
    .innerHTML += `
    <div>
        <h1></h1>
        <p></p>
        ...
    </div>`
    <div>
        <h1>mark</h1>
        <p>model</p>
        <p>price</p>
    </div>
*/

// main.innerHTML += `
// <div>
// <h1>${laptop.mark}</h1>
// <p>${laptop.model}</p>
// <p>${laptop.price}</p>
// </div>
// `
//__________________________________________
// let book = {
//     name : "Капитанская дочка",
//     author : "Пушкин А.С.",
//     count : 700
// }
// main.innerHTML += `
// <div>
// <h1>${book.name}</h1>
// <p>${book.author}</p>
// <p>${book.count}</p>
// </div>
// `
//Задача
// Есть массив объектов. Отобразить одинаковую разметку для каждого из элементов в цикле.

// let laptops = [
//     {
//         mark : "Acer",
//         model : "G444M",
//         price : 18000
//     },
//     {
//         mark : "Asus",
//         model : "705K",
//         price : 25000
//     },
//     {
//         mark : "HP",
//         model : "P500",
//         price : 50000
//     }
// ]
// for(let i = 0; i < laptops.length; i++) {
//     main.innerHTML += `
//         <div class ="laptop">
//              <h1>${laptops[i].mark}</h1>
//              <p class ="first">${laptops[i].model}</p>
//              <p class ="second">${laptops[i].price}</p>
//         </div>
//     `
// }
//forEach

// laptops.forEach(function(laptop) {
//     main.innerHTML += `
//     <div class ="laptop">
//     <h1>${laptop.mark}</h1>
//     <p>${laptop.model}</p>
//     <p>${laptop.price}</p>
//     </div>
//     `
// })

// main.innerHTML += `
// <div>
// <h1>${laptops.mark}</h1>
// <p>${laptops.model}</p>
// <p>${laptops.price}</p>
// </div>
// `

//  console.log(item.innerText)
//  console.log(item.innerHTML)//"<h1>Hello World</h1>" перезаписали ниже

 //item.innerHTML = item.innerHTML + <h2>Hello</h2> //полная запись
//  item.innerHTML += "<h2>Hello</h2>" //+= проще и быстрее - не перезапись, а добавление


 //addClass() - jQuery. JS - .classList.add("className")

//  let num = 10
//  num = 15
//  num = 10 + 5 //num = 15. 
//  num = num + 5 // num 15. Код читается справа на лево. в нум уже есть 10 и мы просто прибавляем 5
//  num += 5 //num 20

// let num = 10
// num += 1
// num++ //с минусом тоже работает

// let greeting = "Hello" //Добавить к Heelo свое имя. УУУ легкотня))) += кайф

// greeting += " Yuliia"
// console.log(greeting)
// __________________________
// laptops.forEach(function(laptop) {
//     main.innerHTML += `
//     <div class ="laptop">
//     <h1>${laptop.mark}</h1>
//     <p>${laptop.model}</p>
//     <p>${laptop.price}</p>
//     </div>
//     `
// })
// let arr = [2, 4, 6, 8, 10]

// arr.forEach(function(num){
//   console.log(num + 2)
// })
//  console.log(arr)

// Есть массив let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]
// В консоли вывести "Hello +имя" для каждого элемента массива
// Hello Arsen, Hello Paul, Hello Lyudmila, Hello Grisha. forEach

//  let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]

//  names.forEach(function(name){
// // console.log(arr + "Hello")
//  })
//  console.log("Hello" + names)

//ДОМАШКА!!!Зробила сама за 1 хвилину:3 Люблю себе! 

//  Есть массив объектов
 let cars = [
    {
        mark : "Mercedes-Benz",
        model : "S600",
        year : "2005",
        price : 50000
    }, 
    {
        mark : "BMW",
        model : "M5",
        year : "2010",
        price : 30000
    },
    {
        mark : "VW",
        model : "Golf5",
        year : "2015",
        price : 25000
    },
    {
        mark : "Toyota",
        model : "Camry",
        year : "2015",
        price : 25000
    }
 ] 

cars.forEach(function(car) {
        main.innerHTML += `
        <div class ="laptop">
        <h1>${car.mark} ${car.model}</h1>
        <p>${car.year}</p>
        <p>${car.price}</p>
        </div>
        `
})

//  Для каждого из элементов массива отобразить разметку
//  <div class="car">  
//     <h1>Mark Model</h1>
//     <p>Год выпуска: year</p>
//     <p>Цена: price</p>
//  </div>
