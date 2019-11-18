"use strict";
///////// METHODS //////////
/*
let str = `Hello`;
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (пустая строка)

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
  }
*/

//////// DATA TYPES //////////////
/*
//  || запинается на «правде»,
//  && запинается на «лжи».

alert( 1 && 2 && null && 3 ); // null возвратится первое «ложное»
alert( 1 && 2 && 3 ); // 3 а если его нет – то последнее
alert( 5 || 1 && 0 ); // 5 Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.
alert( 0 || "" || 2 || undefined || true || falsе ); 2 находит первое истинное значение

var number = 2;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {}; 

console.log(4/0);
console.log('string'*5);

let str;
console.log(str); // undefined
let person = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(person.name);
console.log(person["age"]);

let arr = ['plum.png', 'orange.jpg'];
console.log(arr[1]);
//console.log(strrr); // Null

var leftBorderWidth = 1;
{
    let second = 2;
}
const pi = 3.14;
console.log(second);

let a = promt("asd"); // всегда строка
let b = confirm("yes/no?");
let answer = confirm("Are you here?");
let answer0 = prompt("Are you here?", "yes");
console.log(typeof(null)); // object

//3 > 2 > 1 вернёт false, потому что 3 > 2 возвращает true, в свою очередь true > 1 вернёт false
console.log("2" == 2); // по значениям
console.log("2" === 2); // по типам
*/

/////// ANYTHING ////////
/*
for (let key in option) {
    console.log(key);
}
array.forEach(function(item, i, mass){
    console.log(key);
});
*/

////////////// SET TIMEOUT/SET INTERVAL //////////////////
/*
let timetID = setTimeout(sayHello, 3000)
clearTimeout(timetID);

let timetID0 = setInterval(sayHello, 3000) // не учитывает время работы функции
clearTimeout(timetID0);

function sayHello() {
    console.log("Hello");
}
//рекурсивный SET TIMEOUT
let timerID = setTimeout(function log(){
    console.log("Hello");
    setTimeout(log, 2000);
})
*/


////////////// КОНСТРУКТОРЫ и КЛАССЫ //////////////
/*
//КОНСТРУКТОРЫ 
function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" + this.name);
    };
}
 
User.prototype.exit = function(name) {
    console.log("Юзер " + this.name + "ушёл");
}

let ivan = new User('Ivan', 1),
    alex = new User('Alex', 2);


///////////// КЛАССЫ //////////////////
class User{
    constructor(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    }
    hello = function() {
        console.log("Hello" + this.name);
    };
    exit = function(name) {
        console.log("Юзер " + this.name + "ушёл");
    }
}

let ivan = new User('Ivan', 1),
    alex = new User('Alex', 2);
*/

///////////// КОТНТЕКСТ ВЫЗОВА this ////////////////
/*
1) просто вызов фунции - window/undefined(замыкание - не находит в себе и поднимается выше, 
    если было бы с this то возвращается NaN)

function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

let obj = {
    a: 20,
    b: 15, 
    sum: function() {
        console.log(this); //функция
    }
    //окно
};
obj.sum();
// если создан через конструктор(нью), то ссылается на новосозданный обьект=контекст вызова


let user = {
    name: "Jonh"
};

function sayName() {
    console.log(this);
    console.log(this.name);
}

console.log(sayName.call(user, 'Smith')); //принимает ввиде строки
console.log(sayName.apply(user, ['Smith'])); //принимает ввиде массива
let double = sayName.bind('afaf'); //заменит this
// насильно привязываем контекст


// получим кнопку нажатую, вместо event.target(но функция в функции вернёт виндов)

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'red';
});
*/

/////////// ИНТЕРПОЛЯЦИЯ ////////
/*
let name = 'Ivan',
    age = 30;
    mail = 'ex@mail';

document.write('User' + name + 'age' + age + 'email' + mail);
document.write(`User ${name} age ${age} email ${mail}`);
*/

//////////// Стрелочные ф-2ии spread ///////
/*
let fun = () => {
    console.log(this); // нет своего контекста вызова, берёт у родителя и всегда анонимна
};
fun();
*/


//////// Параметры по умолчанию ///////
/*
function calcOrDouble(number, basis = 2){
    //basis = basis || 2;
    console.console(number+basis);
}
*/ 

/////// Spread разворачивает массив в набор данных ...[arr] ////////


//////////// PROMISE /////////////////
/*
var jsonPromise = new Promise(function(resolve, reject) {
  // JSON.parse выдает ошибку, если передать ему
  // невалидный JSON, что прервет выполнение промиса:
  resolve(JSON.parse("Это не JSON!"));
});
 
jsonPromise.then(function(data) {
  // Эта часть не выполнится:
  console.log("Выполнено!", data);
}).catch(function(err) {
  // А вот эта выполнится:
  console.log("Ошибочка вышла!", err);
});
  */



  /////////// ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ /////////////////
  /*
  let box = document.getElementById('box'), // получить элемент по ид
      btn = document.getElementsByTagName('button'), // псевдомасив элементов 
      circle = document.getElementsByClassName('circle'),
      heart = document.querySelectorAll('.wrapper .heart'), // имеет метод foreach
      oneHeart = document.querySelectorAll('.heart');

box.style.backgroundColor = 'red';
btn[1].style.borderRadius = '100%'
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}
heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = 'blue';
});

////добавить на страницу
let div = document.createElement('div'),
    text = document.createTextNode('Text');
div.classList.add('blask');
document.body.insertBefore(div, circle[0]);
document.body.appendChild(div);
document.body.removeChild(circle[1]);
document.body.replaceChild(btn[1], circle[1]);
// добавить хтмл на страницу
div.innerHTML = '<h1>Hello World</h1>';
// для безопасности
div.textContent = 'Hello World';



///////////// СОБИТИЯ ////////////
btn.addEventListener('click', function(event) {
    let target = event.target;
    target.style.display = 'none';
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function(){
        console.log("Leave");
    })
})
*/