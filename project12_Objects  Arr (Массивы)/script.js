// function sum(a, b) { /*сумма*/
//     return a + b
// }

// function mult(a, b) {/*произведение чисел*/
//     return a * b
// }

// console.log(sum (20,25))
// console.log(sum (100,200))
// function calc() {
//     let num = +prompt("Введите число")
//     return mult(num, num)
// }
// console.log(calc())

// function power(a, b) {
//     return Math.pow(a, b) + a
// }
// // console.log(power(5, 2))

// // greeting прин аргум имя и возыр это имя) + Hello 

// function greeting(name){
// return "Hello" + name
// // return `Hello` ${name}
// }
// console.log(greeting("Yuliia"))
// console.log(greeting("ZZz"))

// power(5, 2)

// let a = 5
// let b = 2

// console.log(power(5, 2)) {
//     return(math.pow) 
// }

// let month = +prompt("Введите число")

// const quarterOf = (month) => {
//     if(month <= 3) {
//       return 1
//     } 
//     else if(month >=3 <=6) {
//         return 2
//       } 
//        else if(month >6 <=9) {
//         return 3
//       } 
//      else if(month >9 <=12) {
//         return 4
//       } 
// }
// console.log(quarterOf(12))


// const quarterOf = (month) => {
//     if(month <= 3) {
//       return 1
//     } 
//     if(month <= 6) {
//         return 2
//       } 
//       if(month <= 9) {
//         return 3
//       } 
//       return 4
// }
// console.log(quarterOf(10))


// 23

// let myNum = +prompt("Введите число")
// num(myNum)

// function num(number) {
//     if(number > 50) {
//         console.log("Больше", number)
//     } else {
//         console.log(number)
// }
// }
//2.
// let myNum = +prompt("Введите число 1")
// let myNum2 = +prompt("Введите число 2")
// num(myNum, myNum2)

// function num(number) {
//     if(myNum > myNum2) {
//         console.log(number)
//     } else {
//         console.log("Ничего")
// }
// }
// function num(number) {
//     if(number > 50) {
// return console.log("Больше", number)
//     }
// }

// function num(number) {
//     if(number > 50) {
//         return `Больше`, ${number}
//     } else {
//         console.log(number)
// }
// }


// numberInput = +prompt("Ваше число")
// function num(number) {
//     if (number > 50) {
//         return "Больше"+ number
//     }else {
//         return number
//     }
// }
// console.log(num(numberInput));

//Введите 2 числа. если 1 больше, то б, меньше то м. Равны - р
// let num1 = +prompt("Введите число 1")
// let num2 = +prompt("Введите число 2") 
// if(num1 > num2){
//     alert ("Большее") }
// else if(num2 > num1) {
//     alert ("Меньшее") }
// else {
//     alert("Равны")
//     }
//     console.log(alert)
// ..,,,,((((((((((())))))))))),,,,..
// let num1 = +prompt("Введите число 1")
// let num2 = +prompt("Введите число 2") 

// if(num1 > num2) {
//     console.log(num1)
// } else if(num1 == num2) {
//     console.log("Равны")
// } else {
//     console.log(num2)
// }
//_____________________________
// let num = +prompt("Введите число")

// Задача. Есть массив arr. В консоль вывести числа из массива, которые больше 50
// 1. сравнивать в условии нужно arr[i] > 50
// let arr = [32, 51, 60, 78, 105, 14, 10]  
// // let arr = [32, 51, 60, 78, 105, 14, 10]  

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50) {
//         console.log(arr[i]);
//     }
// }
// function newArray(i) {
//     let array = [i];
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//     }  
//   }
/*
    Функции

1. function declaration
2. function expression
3. arrow function
*/

// function sum(a, b) {
//     return a + b
// }
// function mult(a, b) {
//     return a * b
// }

//_______________________________
//________________ДЗ Функции_____
//_______________________________
// Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.


function biggest(a, b) {
  if (a > b) {
      return console.log(`a - ${a}`);
  }
  console.log(`b - ${b}`)
}
biggest(99, 100)

// Задача2. Написать функцию, которая принимает аргументом число(больше 0)
// и возвращает массив чисел от 0 до этого числа

let prompted = +prompt("Enter Num")
function myArray(x) {
  if (x <= 0) { return "Введите число больше чем 0" }

  let arr = [];

  for (let i = 0; i <= x; i++) {
      arr.push(i);
  }
  return arr
}
console.log(myArray(prompted))



  //_______________________________
//Обьекты и массивы

// let book = {
//     author : "King",
//     pages : 236
//     genre : ["Horror", "Fantasy"]
//     size : "A4"
//     weight : 200
// }

// let books = ["Harry1", "2", "3"]
// console.log(books)

// let user = ["Arsen", "ArsLen", "24", "http", ["Football", "Tennis"]]
// console.log(user)

// let users = [{
// author : "King",
// pages : 236,
// hobbies : ["Horror", "Fantasy"],
// size : "A4",
// weight : 200
// }, 
//     {
//         author : "King",
//         pages : 236,
//         hobbies : ["Horror", "Fantasy"],
//         size : "A4",
//         weight : 200,
//     }, {
//     author : "King",
//     pages : 236,
//     hobbies : ["Horror", "Fantasy"],
//     size : "A4",
//     weight : 200,

// }]
