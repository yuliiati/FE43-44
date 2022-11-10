/* Типы данных. 8 типов данных
1. String - строка - "Hello World", "100565"
1. String - строка - "Hello World", "100565" + 10 = 10056510
2. Number - число - 100565, 2.134453
3. Boolean - Булевые - true/false
4. Object - объект 
@@ -155,3 +155,248 @@

//ДЗ.3. Просить пользователя ввести число дважды. Два prompta. В консоли поочередно вывести их:
// а) сумму + б)разность - в)произведение *  г)деление /
/*
    1. первый +prompt()
    2. второй +prompt()
    3. console складываем, отнимаем, умножаем и делим
*/
//  rgb(40, 50, 200)
// let r = 40
// let g = 50
// let b = 200

// let common = "rgb(" + r + ", " + g + ", " + b + ")" 
// console.log(common);

// let str = `rgb(${r}, ${g}, ${b})` // шаблонный литерал, шаблонная строка "", '', ``. ё
// console.log(str) 

// Пользователь вводит два числа, нужно узнать и отобразить в консоли большее из них.
// Если два числа равны между собой, то выводить "числа равны"
// +prompt()

// Задача. prompt("Введите число") === "100" 
// prompt("Введите число") === "100"  "100" + "100" = "100100"
// let num1 = +prompt("введите 1-е число");
// let num2 = +prompt("введите 2-e число");

// if (num1 > num2) {
//   console.log(num1);
// } else if (num1 == num2) {
//   console.log("равны");
// } else {
//   console.log(num2);
// }


// _________________________________________

// Объекты && массивы

// Объект
// let user = {
    // name : "Arsen",
    // login : "ArsenLen",
    // age : 24,
    // img : "https://img.jpg",
    // hobbies : ["Football", "Design", "Tennis"]
// }
// console.log(user)
// Массив. Использовать, когда важен порядок

// let books = ["HarryPotter1", "HarryPotter2", "HarryPotter3"]
// console.log(books)

// let user = ["Arsen", "ArsenLen", 24, "https://img.jpg", ["football", "design", "tennis"]]

// let users = [{
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }, {
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }, {
//     name : "Arsen",
//     login : "ArsenLen",
//     age : 24,
//     img : "https://img.jpg",
//     hobbies : ["Football", "Design", "Tennis"]
// }]

// let arr = { 0 : "HarryPotter1", 1 : "HarryPotter2", 2 : "HarryPotter3" }


/*
    let obj = {
        key : value
    }
    key - ключ,
    value - значение
    let arr = [
        0 : "Мастер и Маргарита",
        1 : "Социальная драма"
    ]
*/

// Попробовать создать объект book и перечислить 5 свойств книги.

// let book = ["Мастер и Маргарита", "Социальная драма", 1937]

// console.log(book[0]) // "Мастер и Маргарита"
// console.log(book[1]) //  "Социальная драма"
// console.log(book[2]) // 1937

// posts - посты в инстаграме
// post - объект {title : "My new image", src : "https://img.jpg"}, {title : "My new image 1", src : "https://img.jpg"}
// [{title : "My new image", src : "https://img.jpg"} , {title : "My new image 1", src : "https://img.jpg"}]

// Методы массива. Базовые

// let posts =  [{}, {}, {}, {}]
// {newPost} posts.push(newPost)

// let numbers = [0, 1, 2, 3, 4]
// console.log(numbers)

// ________________________ Метод push 
// numbers.push(5) // позволяет добавить элемент в конец массива
// console.log(numbers)

// __________________________________________

// let num1 = prompt("Введите число")
// Запросить у пользователя 3 числа и добавить их в массив и вывести результат в консоли
// [100, 500, <???>, <400>, <700>]
// let nums = [100, 500]
// Запросить 10 чисел. 
// let num1 = +prompt("enter num 1")
// let num2 = +prompt("enter num 2")
// let num3 = +prompt("enter num 3")

// let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
// nums.push(num1, num2, num3)
// console.log(nums);

// _________________ Цикл for - 
// зима -> весна -> лето -> осень ----> зима -->

// console.log(nums[0]) // 10
// console.log(nums[1]) // 20
// console.log(nums[2]) // 30
// console.log(nums[3]) // 40
// console.log(nums[4]) // 50
// ____________________________
// Задача. вывести каждое число в консоли
// let nums = [10, 20, 30, 40, 50] 
// nums = [0 : 10, 1 : 20, 2 : 30, 3 : 40, 4 : 50]
// Пока i меньше чем количество элемнтов в массив, в консоли отображать каждый элемент
// arr- любой массив arr.length - свойство, которое отображает количество элементов в массиве
// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[i]) 
// }
// nums.length = 5
// 1. i = 0, 0 < 5 ? - true(меньше), console.log(nums[0]) - console.log(10), i++
// 2. i = 1, 1 < 5 ? - true(меньше), console.log(nums[1]) - console.log(20), i++
// 3. i = 2, 2 < 5 ? - true(меньше), console.log(nums[2]) - console.log(30), i++
// 4. i = 3, 3 < 5 ? - true(меньше), console.log(nums[3]) - console.log(40), i++
// 5. i = 4, 4 < 5 ? - true(меньше), console.log(nums[4]) - console.log(50), i++

// 6. i = 5, 5 < 5 ? - false(не меньше - равно), console.log(nums[6])

// __________________________

// Задача. Есть массив arr. В консоль вывести числа из массива, которые больше 50
// 1. сравнивать в условии нужно arr[i] > 50
// let arr = [32, 51, 60, 78, 105, 14, 10]  

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50) {
//         console.log(arr[i]);
//     }
// }


// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только положительные+ числа.
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа. % - вычислить остаток от деления. 10 % 2 = 0. 11 % 2 = 1
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массиве и вывести их в консоль.let sum =  sum + arr[i]
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел  
/* ДЗ.5
    Запросить 10 чисел. 
    let num1 = +prompt("enter num 1")
    let num2 = +prompt("enter num 2")
    let num3 = +prompt("enter num 3")
    let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
    nums.push(num1, num2, num3)
    console.log(nums);
*/

// Задача. Вывести 5 раз число 100 в консоли

// for(let i = 0; i <= 100; i++) {
//     if(i > 30) {
//         console.log("Больше", i)
//     } else {
//         console.log(i)
//     }
// }

// 1. i = 0, i > 30 - false - - console.log(0)
// 2. i = 1, i > 30 - console.log(1)
// ...
// 32. i = 31, 31 > 30 - true, console.log("Больше",)


// 0
// 1
// 2
// ...
// 30
// Больше 31
// Больше 32
// ...
// Больше 100


// Вывести числа от 0 до 100. Если число больше 30, то в консоли нужно вывести "Больше и ${5}"
// 0-30, а числа 31-100 ---- console.log("Больше", i)

// console.log(10)
// console.log("Больше", 50)

// Нам нужно в консоли вывести ваше имя 50раз

// инкремент - увеличение на 1. i = i + 1, i += 1, i++, i = i + 1,5
// 

// 1. i = 1, 1 < 6 ? - true(меньше), console.log(100) - 1-я итерация. i++ - увеличение на 1
// 2. i = 2, 2 < 6 ? - true(меньше), console.log(100) - 2-я итерация. i++ - увел на 1
// 3. i = 3, 3 < 6 ? - true(меньше), console.log(100) - 3-я итерация. i++ - увел на 1
// 4. i = 4, 4 < 6 ? - true(меньше), console.log(100) - 4-я итерация. i++ - увел на 1
// 5. i = 5, 5 < 6 ? - true(меньше) - выходим из цилка --> окончание цикла 

// 1. i = 0, 0 < 1000 - true, console.log(100)
// 2. i = 5, 5 < 1000 - true, consoe.log(100)
// 3. i = 5, 5 < 1000 - true
// 200. i 1000 

/*
    for(начало, условие, шаг) {
        действие
    }
    начало - выражение, которое позволяет создать начало цикла
    условие - действие должно выполняться ограниченное кол-во раз. Условие позволяет остановить цикл,
    когда нужн
    шаг - обновление, увеличение. наше действие должно выполняться с определенным промежутком
*/

// let laptop = {
//     color : "black",
//     mark : "Acer",
//     model : "45564GG",
//     size : "15.6",
//     tech : {
//         ozu : "16GB",
//         processor : "Intel i7",
//         videocard : "Nvidia"
//     },
//     price : 50000
// }
// console.log(laptop.color)
// console.log(laptop.tech.processor)//Intel 7
// consple.log(`<p>${(laptop.color)}</p>`)

let laptop = {
    color : "black",
    mark : "Acer",
    model : "45564GG",
    size : "15.6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000
},
let laptop = {
    color : "white",
    mark : "Acer",
    model : "45564GG",
    size : "15.6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000
}

let.laptops = []

// Задача 1. Вывести в консоли:
// а) все ноутбуки
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков. 

let laptops = [
    {
        mark : "Acer",
        price : 25000
    },
    {
        mark : "Apple",
        price : 37000
    },
    {
        mark : "Asus",
        price : 125500,
    },
    {
        mark : "HP",
        price : 42000
    },
    {
        mark : "Samsung",
        price : 52000
    }
]
