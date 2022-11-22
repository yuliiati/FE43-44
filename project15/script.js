/*
setAttribute('attrName', 'attrValue') - добавляет атрибут тегу
setAttribute('attrName') - получает значение атрибута у тега

<img src="" alt="">, img- тег, src-атрибут, "" - значение атрибута
<div class="item" id="hello"></div>  class-это атрибут, id - атрибут


*/ 


// let item = document.querySelector("div")

// let itemClass = item.getAttribute("class")
// console.log(itemClass)
// let itemId = item.getAttribute("id") //null

// let itemClass1 = document.querySelector("div").getAttribute("class")
// console.log(itemId)

//Задача Получить значение атрибута href > a 
// let link = document.querySelector("a").getAttribute("href")
// console.log(itemLink)


//Задача Получить значение атрибута href > a 

// let link = document.querySelector("a") // <a href="https://google.com">Google</a>
// let googleLink = link.getAttribute("href") // Если пер будет еще использоваться!
// console.log(googleLink)


// let googleLink1 = document.querySelector("a").getAttribute("href") //Лучше так не делать, а в переменную
// document.querySelector("a").innerText("Ссылка на гугл") // Если пер с тегом больше не нужна

//      ПОЛУЧЕНИЕ АТРИБУТА

// let text = document.querySelector("p")
// let textId = text.getAttribute("id")
// console.log(textId)

// let text1 = document.querySelector(".text")
// let text2 = text.getAttribute("#text-1")

/* <div class="item">
        <a href="https://google.com">Google</a>
        <img src="" alt="">
        <p class="text" id="text-1"></p>
        <button></button>
    </div> */

    //      ДОБАВЛЕНИЕ АТРИБУТА

    // let item = document.querySelector("div")

    // item.setAttribute("id", "item-1") //добавить для тега div атрибут id со значением item-1
    // console.log(item.getAttribute("id")) //После доб атрибута id, сразу получаем его

    // let item1 = document.querySelector("img")
    // item1.setAttribute("src", "./images/ka.jpg")
    // console.log(item1.getAttribute("src")) 
//______________________________________________________
//      По нажатию на картинку менять атрибут src

    // let item1 = document.querySelector("img")
    //  let button = document.querySelector("button")
    //  item1.setAttribute("src", "./images/ua.jpg")

    // button.addEventListener("click", function(){
    //     item1.setAttribute("src", "./images/ka.jpg")
    // })
    //_________________________________________________

//     let item1 = document.querySelector("img")
//     let button = document.querySelector("button")

//     function addAttr() {
//          item1.setAttribute("src", "./images/ua.jpg")
// }
// //  addAttr() //immediately invoke - немедленный/принудительный вызов функции

//     button.addEventListener("click", addAttr) // Обычный *вызов ф происходит с помощью скобок!!!()

/*
    addEventListener("eventType", callback)

    addAttr - callback функция обратного вызова - вызов передаем в др функцию/метод, круглуе скобки не ставим
    Колбэк функция - которую запускает кто-то, не мы *напр EventListener
*/

// Задача. Добавить src с соотв картинкой

    // let button = document.querySelector("button")
    // button.addEventListener("click", function(){
    //     let imgSrc = document.querySelector("img")
    //     if(imgSrc.hasAttribute("src")){
    //         imgSrc.removeAttribute("src")
    //         button.innerText = "добавить картинку"
    //     }else{
    //         imgSrc.setAttribute("src", "./images/Rectangle1.png")
    //         button.innerText = "Удалить картинку"
    //     }
    // })
//--------------------------------------------------------
    //ЦИКЛ!!!

//     let images = document.querySelectorAll("img")
//     console.log(images)

//     for(let i = 0; i < images.length; i++) {
//         images[i].setAttribute("src", `./images/img-${i+1}.jpg`)
// }
    //___________________________________________________

//     let text = document.querySelectorAll(".item-1 p")
// console.log(text)
// setAttribute("src", "./images/1.jpg")
// setAttribute("src", "./images/2.jpg")
// setAttribute("src", "./images/3.jpg")
// for(let i = 0; i < text.length; i++) {
//     text[i].innerText = "HELLO MY FRIEND"
// }
// let item1 = document.querySelector("img")
//     item1.setAttribute("src", "")
//     console.log(item1.getAttribute("src")) 
//     for(i=0; i < img.length; i++) {
//         console.log(img[i].getAttribute("src"))
//     }
    