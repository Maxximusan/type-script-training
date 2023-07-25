// задание 1
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

// практикую вместе с видео 4модуля:
// class House {
//     private tenants: string[] = []
//   constructor( public readonly type: string, protected street: string) {
//     }

//   public showAdress(this: House, add: string) :void{
//     console.log('Adress: ' + this.street + ' ' + add);
    
//   }
//   public showType(this: House): void{
    
//     console.log('Type: ' + this.type);
    
//   }
//   public addTenant(name: string) {
//     this.tenants.push(name)
//   }
//   public showTenants() {
//     console.log(this.tenants);
    
//   }
// }

// // const house = new House('wood','middle-earht')
// // // house.showAdress()
// // // const copyHouse = { showAdress: house.showAdress, street: 'NEW adress' }
// // // copyHouse.showAdress('for add')
// // house.addTenant('Tony')
// // house.addTenant('Avi')
// // house.showTenants()
// // house.showAdress('hgh')
// // house.showType()

// class StoneHouse extends House{
//   private mainTenant: string
//   constructor(street: string, general: string) {
//     super('stone', street)
//     this.mainTenant = general
//   }
//   public showTenants() {
//     console.log('General: ' + this.mainTenant);
//     super.showTenants()
//   }
//   public showAdress() :void{
//     console.log('Adress: ' + this.street);
    
//   }
// }

// const stoneHouse = new StoneHouse('stone', 'Max')
// stoneHouse.addTenant('Boris')
// stoneHouse.addTenant('Franky')
// stoneHouse.showTenants()

// class UseStatic {
//   private static count = 0;

//   constructor () {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod () {
//     console.log('Run static method');
//   }

//   public showCount () {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// // const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// // obj3.showCount();

// UseStatic.itStaticMethod();



// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane () {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): string;
// }


// class Maize extends Plane {
//   public startEngine () {
   
//     return 'ta-ta-ta';
//   }
// }

// class Boeing extends Plane {
//   public startEngine () {
  
//     return 'buuuuuu';
//   }
// }

// const maize = new Maize()
// const boeing = new Boeing()

// maize.sitInPlane()
//   boeing.sitInPlane()

// console.log(maize.startEngine());
//   console.log(boeing.startEngine());
  

//практикую 5е дз
const input3 = document.getElementById('inputValue') 

if (input3) {
  // (input3 as HTMLInputElement).value
  const newInput = input3 as HTMLInputElement
  newInput.value
  
  
}
//Дженерик для ф-и
function entity<T>(args: T): T {
  return args
}
entity<number>(1)
entity<string>('1')

// стрелочная ф-я
const entoty2 = <T>(args: T): T => {
  return args
}

entoty2<number>(1)
entoty2<string>('1')

// Дженерик для класса

class Channel <T>{
  private name: T;
  
  constructor(name: T) {
     this.name = name
  }
  
  getName(): T {
    return this.name
  }
}

const channel1 = new Channel<string>('fuck')
const channel2 = new Channel<number>(55)

// Дженерик для Интерфейсов

interface IPair <K, V>{
  key: K
  value: V
}

const pair1: IPair <string, number> = { 
  key: '1',
  value: 1
}

const pair2: IPair <number, boolean>= {
  key: 33,
  value: true
}

// Тип Дженерика по умолчанию

type TypeLength = {
  length: number
}

function getNameLength <T extends TypeLength>(entity: T): number {
  return entity.length
}

getNameLength('ghvhjgvjhgv')
getNameLength([1, 2, 3, 4])
getNameLength(['sd','sff','df'])
getNameLength(['sd', 'sff', 1])

//практикую 6е дз
// 6.1
function Logger(logString: string) {
  return function(constructor: Function){
  console.log(logString);
  
  console.log(constructor);
  }
}

function AddProperty() {
  return function(constructor: Function){
  constructor.prototype.modify = true
  
  console.log('add property');
  }
}

@Logger('Loading - controller')
  @AddProperty()
class Controller{
  public id = 1;
  public modify = false
}

const controller = new Controller()
console.log('it is modify', controller.modify);


// 6.3
function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('target', target);
  console.log('name', name);
    console.log('descriptor', descriptor);
}


class Notifier {
  @ShowParams
  showMessage() {
    console.log('show this message');
    
  }
}

// 6.4
function CheckEmail(target: any, name: string, position: number) {
  console.log('target', target);
  console.log('name', name);
    console.log('position', position);
}

class Personn {
  setEmail(@CheckEmail email: string){
    console.log(email);
    }
  
}