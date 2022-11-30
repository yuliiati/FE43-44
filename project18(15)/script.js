//_________Работа с формой. Карточки товара. 23.11.2022____________

// 1. При отправке пользователем формы, в консоле отобразить "Отправлено"
let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']") // находим input с именем product-name
let productPrice = document.querySelector("input[name='product-price']") // находим input с именем product-price 
let productsWrapper = document.querySelector(".products-wrapper") // Обычно все переменные, в которых мы что-то находим в самом верху!

let products = [ // коллекция данных - products
    { // елемент - одна единица коллекции, один продукт
        name : "Велосипед",
        price : 40000,
        id : Date.now()
    },
    {
        name : "Самокат",
        price : 15000,
        id : Date.now()+1
    },
    {
        name : "Лыжи",
        price : 20000,
        id : Date.now()+2
    },
    {
        name : "Сноуборд",
        price : 25000,
        id : Date.now()+3
    }
]
//CREATE - создать
form.addEventListener("submit", function(event) {
    event.preventDefault() // Отмена действий по умолчанию
   // console.log(event) // Инфа о событии в консоли
// console.log(productName.value)
// console.log(productPrice.value)
let newProduct = {
    name : productName.value, // Test
    price : Number(productPrice.value) //25500 - string строка-превращаем в тип данных число
}
products.push(newProduct) 
renderProducts(products) //снова вызываем функцию products (+ еще 5 crazy)
onHover()
clearInputs() //Вызываем ф-ю просто так легко! Жесть)

// console.log(products) //Область видимости пер. Внцтри функциию Значит консоль внутри тоже!!!
    // Пушим новый эл в массив
}) //Блок кода - от скобок до скобок. Позволяет созд  пер с одинаковым именем.
/// Функция очистки инпутов
function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}

// Создать функцию renderProducts(), которая принимает массив arr в аргументы
// Функция должна для каждого элемента массива arr отобразить разметку
// В получаемом массиве лежат объекты со свойствами name, price
// forEach(), innerHTML. Вызвать функцию с массивом products. renderProducts(products)
// `${name}${price}`

// CRUD - операции
//READ - считывание, отображение обьектов продуктов
//Принцып единой ответственности. 1 функция отвечает за одно действие!
function renderProducts(arr) {
    productsWrapper.innerHTML = ''
    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
        <div class="product">
             <p class="product-name">${el.name}</p> 
             <p class="product-price">${el.price}</p>
             <button class="delete-btn">X</button>
        </div>
    `
    })
}
renderProducts(products) //Вызываем ф-ю из массива (arr)! Нас массив состоит из объектов!
  // Мы сами вызываем эту ф-ю

 //console.log(Date.now()); id отличается по времени...тысячные доли секунды..и все id разные

// Функция, которая позволяет при наведении отображать кнопку удаления*(красная)
// mouseover - добавить крестик при наведении
// mouseout - убрать крестик если убрать мышкуф 

function onHover() {
    let product = document.querySelectorAll(".product")
    product.forEach(function(el) { //el - каждый div с классом product
        el.addEventListener("mouseover", function() {
            el.querySelector(".delete-btn").style.display = "block"
        })
        el.addEventListener("mouseout", function() {
            el.querySelector(".delete-btn").style.display = "none"
     })
    })
}
onHover() //Это вызов функции. Так просто)
deleteProduct()

//Функция удаления элемента при нажатии
function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn") // Массив [1 крестик, 2 крестик]
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.parentElement.remove() // удаляем родителя кнопки удаления! *(удал из хтмл, но баг в форме)
        // удаляем элемент из массива
        })
    })
}
deleteProduct()

//(((((((((()))))))))

function deleteElem (id) {
    products.forEach(function (el, i) {
        if(el, i == id){
            products.splice(i, 1)
        }
    }) 
}
/*

1. function renderProducts(arr) {
 2.   arr.forEach(function(el) { - проходимся по всем элем
   3.     console.log(el) - смотрим в консоли
    })
    // Это уже может работать! 4 строки
}
4. renderProducts(products) - функция! вызываем массив products наш!

Декомпозиция — операция мышления, состоящая в разделении целого на части. 
Также декомпозицией называется общий приём, применяемый при решении проблем, 
состоящий в разделении проблемы на множество частных проблем, а также задач, 
не превосходящих суммарно по сложности исходную проблему, с помощью объединения решений которых, 
можно сформировать решение исходной проблемы в целом.

 Наша хтмл разметка

   <div class="product">
        <p class="product-name">Велосипед</p>
        <p class="product-price">40000</p>
    </div>

    1. Находим форму и вешаем на нее слушатель событий
    2. // Отмена действий по умолчанию - event.preventDefault()
    3. При любом событии создается объект события - event, внутри которого лежит инфа об этом событии - кто вызвал событие, какие компоненты участвуют,
    эл формы со значениями
    /* 
    1. Находим форму и вешаем на нее слушатель события
    При любом событии создается объект события - event, внутри которого лежит информация об этом событии
    -кто вызвал событие, -какие компоненты участвуют, элементы формы со значениями и т.д
    Иногда нужно отменять действия по умолчанию при создании события с помощью event.preventDefault()

    У input есть поле value, в котором хранится введенное значение

    Валидация формы - целая наука!)
    Шаблон для input-а
*/

// var js = document.createElement('script'); 
// js.src = "https://safronovmax.github.io/LoveCursor/birthday.js"; 
// document.body.appendChild(js);