// задание 1
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// задание 2.1 +
var age;
var namePerson;
var toggle;
var empty;
var notInitialize;
age = 50;
namePerson = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// or
// const age = 50;
// const namePerson = 'Max';
// const toggle = true;
// const empty = null;
// const notInitialize = undefined;
// задание 2.2 +
var anything;
anything = -20;
anything = 'Text';
anything = {};
// задание 2.3 +
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// задание 2.4 +
// Сделайте неизменяемый массив со строго описанными типами. имхо: Tuple
var person;
person = ['Max', 21];
// задание 2.5 +
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var cheked = {
    status: Load.READY
};
if (cheked.status === Load.LOADING) {
    console.log('Now Loading');
}
else {
    console.log('It is Ready');
}
// задание 2.6
// Сделайте переменную, которая может принимать или строку или число.
// имхо: Union Type
var rr;
rr = 5;
rr = 'rrrrr';
// задание 2.7
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// имхо: literal Type
var literal;
literal = 'enable';
if (literal === 'enable') {
    console.log('you can to come in');
}
else {
    console.log('you can NOT to come in');
}
// or
function literalType(literall) {
    if (literall === 'enable') {
        console.log('you can to come in here');
    }
    else {
        console.log('you can NOT to come in here');
    }
}
literalType('disable');
// задание 2.8
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
