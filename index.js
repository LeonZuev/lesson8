console.log('Привет Js');

let x = 9;
// или
let w;
w = 5;

const y = 12;
x = 144;

// string
let str1 = "Текст";
str1 = "Новый текст";

let str2 = 'Текст 2';

// number
let num1 = 2;
let num2 = 2.2;
console.log('Это максимальный интеджер ' + Number.MAX_SAFE_INTEGER);
console.log('Это минимальный интеджер ' + Number.MIN_SAFE_INTEGER);

// арифметические операции: + - / * % **

// сумма
let sum = num1 + num2;
console.log(sum);
// вычитание
let dif = num1 - num2;
console.log(dif);
// деление
let dev = num1 / num2;
console.log(dev);
// остаток
let rem = 9 % 8;
console.log(rem);
// степень
let pow = 2 ** 3;
console.log(pow);

// сравнения boolean
let cond1 = 9 > 10; // false
console.log(cond1);

const cond2 = 10 >= 10; // true
console.log(cond2);
const cond3 = 10 <= 9; // false
console.log(cond3);
const cond4 = 5 < 20; // ture
console.log(cond4);

let isDrunk = true;
console.log("isDrunk - " + isDrunk);
let isClever = false;
console.log("isClever - " + isClever);

// тип bigint
let bigNumber = 12312n;
console.log(bigNumber);

let variable;
console.log(variable); // не определено. создано, но не обозначено
variable = null; // положили null
console.log(variable);

// sybmbol
let symbol = Symbol("slovo");
console.log(symbol);
console.log(Symbol);

// сравнение "==" и "==="
// "===" - строгое, с учётом типов
console.log(9 === "9"); // false
// "==" - с преобразованием типов - после преобразования происходит сравнение
console.log(9 == "9"); // true
console.log("9" == 9);

// correction
let c1 = 9 + "15"; // "915"
console.log(c1);
let c2 = 11 + 9 + "15"; // "2015" - слева на право. сначало сложил, потом приклеил
console.log(c2);
let c3 = "15" + 11 + 9;

const c4 = 1 + false;
console.log(c4);
const c5 = 5 + true;
console.log(c5);
const c6 = false + " thought ";
console.log(c6);
const c7 = 1 + false + " thought "
console.log(c7);
console.log(false + true);

console.log("12" / 6); // преобразовал строку в число

//преобразование типов
// неявное преобразование
let c8 = 12 + "";
console.log(typeof c8); // typeof определяет тип указанной переменной
console.log(typeof c8 === 'string');

// неявное преобразование
// "12" -> 12
let c9 = + "12";
console.log(typeof c9 === 'number');

let c10 = 15 + +"12";
console.log(c10);
console.log(typeof c10);

// явное преобразование
// в стринг
let c11 = String(12);
console.log(typeof c11 === 'string');

// в число
let c12 = Number("12");
console.log(typeof c12 === 'number');
console.log(c12);

let c13 = Number("пять");
console.log(c13);
console.log(typeof Nan); // number
Number.NaN // такое специальное значение
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

// в булеан
let c14 = Boolean("Apple");
console.log(c14);
let c15 = Boolean("");
console.log(c15);

let c16 = Boolean(12);
console.log(c16);

let c17 = Boolean(-12);
console.log(c17);

let c18 = Boolean(0);
console.log(c18);

// массив
// массив number
const arr = [1, 4, 7, 11];
console.log(arr);

// массив string
const arr2 = ["one", "two"]
console.log(arr2);

// как получить второй элеимент
console.log(arr2[1]); //two

// заменим второй элемент на "orange"
arr2[1] = "orange";
console.log(arr2);

// пройдёмся циклом for по arr
for (i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}
// можем создать с помощью конструктора
const arr3 = new Array(10).fill("HEY"); // без fill будет 10 пустых итемов
console.log(arr3);
// console.log(newLength);
// методы для добавления
arr3.push("В конец");
console.log(arr3);
// добавляем в начало
arr3.unshift("В начало");
console.log(arr3);

// методы для удаления из массива: 
// удалить с конца 
// все эти методы мутируют исходный массив
// удаляет и возвращает элемент с конца 
const lastElement = arr3.pop();
console.log(arr3);
// удаляет и возвращает элемент с начала 
const firstElement = arr3.shift();
console.log(lastElement);
console.log(firstElement);
console.log(arr3);