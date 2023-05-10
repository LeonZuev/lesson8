// Задание 1
//+Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
//+Создайте еще один массив с возрастами: 18, 27, 74, 34;
//+Создайте и заполните при помощи цикла этот новый массив
// новыми элементами по образу: "Семен 18 лет/годов"

// Задание 2
// Используя пройденные на занятии методы массива получите
// из этого массива новый массив, в котором элементы
// идут в обратной последовательности.

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

for (let i = 0; i < names.length; ++i) {
    names[i] =  names[i] + " " + ages[i] + " лет/годa";
}
console.log("First task:");
console.log(names);

const namesReverse = names.slice();
namesReverse.reverse();

console.log("Second task:");
console.log(namesReverse);

// second solution 'for'

const namesReverseSecond = [];
for (let i = names.length - 1; i >= 0; --i) {
    namesReverseSecond.push(names[i]);
}
console.log("Second task, second solution:");
console.log(namesReverseSecond);

// third solution 'Array.from()'
const namesReverseThird = Array.from(names).reverse();
console.log("Second task, third solution:");
console.log(namesReverseThird);

// forth solution 'spread "..."'
const namesReverseForth = [...names].reverse();
console.log("Second task, forth solution:");
console.log(namesReverseForth);

// fifth solution 'Array.map()'
const namesReverseFifth = names.map((_, i, arr) => arr[arr.length -1 - i]);
console.log("Second task, fifth solution:");
console.log(namesReverseFifth);

// sixth solution 'Array.reduce()'
const namesReverseSixth = names.reduce((accumulator, currentValue) => {
    accumulator.unshift(currentValue);
    return accumulator;
}, []);
console.log("Second task, sixth solution:");
console.log(namesReverseSixth);
