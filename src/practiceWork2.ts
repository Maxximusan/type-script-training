// задание 2.1 +
let age: number;
let namePerson: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (agr1: number) => number

age = 50;
namePerson = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };

console.log(callback(5));

// or
// const age = 50;
// const namePerson = 'Max';
// const toggle = true;
// const empty = null;
// const notInitialize = undefined;
// const callback = (a: number) => { return 100 + a };

// задание 2.2 +
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// задание 2.3 +
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some: unknown;
some = 'Text';

let str: string;

if ( typeof some === 'string') {
    str = some;
}
// задание 2.4 +
// Сделайте неизменяемый массив со строго описанными типами. имхо: Tuple
let personn: [string, number]
personn = ['Max', 21];

// задание 2.5 +
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Load { LOADING, READY }

const cheked = {
status: Load.READY
}

if (cheked.status === Load.LOADING) {
    console.log('Now Loading');
    
} else {
    console.log('It is Ready');
    
}
// or
// enum Load {LOADING, READY};

// const page = {
//   load: Load.READY
// }

// if (page.load === Load.LOADING) {
//   console.log('Страница загружается');
// }
// if (page.load === Load.READY) {
//   console.log('Страница загружена');
// }


// задание 2.6
// Сделайте переменную, которая может принимать или строку или число.
// имхо: Union Type
let rr: string | number

rr = 5;
rr = 'rrrrr';


// задание 2.7
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// имхо: literal Type
let literal: 'enable' | 'disable';
literal = 'enable'
if (literal === 'enable') {
    console.log('you can to come in');

    // для disabled
    // console.log('you can NOT to come in')
} 
// or - переключатель
function literalType(literall: 'enable' | 'disable') {
    if (literall === 'enable') {
         console.log('you can to come in here');
    }
    else {
        console.log('you can NOT to come in here');
    }
}
literalType('disable')


// задание 2.8
// Укажите типы для следующих функций
function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


// задание 2.9
// Создайте свой тип данных на основе имеющихся данных.

type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

