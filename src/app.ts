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

class UseStatic {
  private static count = 0;

  constructor () {
    UseStatic.count += 1;
  }

  public static itStaticMethod () {
    console.log('Run static method');
  }

  public showCount () {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
// const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
// obj3.showCount();

UseStatic.itStaticMethod();



abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane () {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}


class Maize extends Plane {
  public startEngine () {
   
    return 'ta-ta-ta';
  }
}

class Boeing extends Plane {
  public startEngine () {
  
    return 'buuuuuu';
  }
}

const maize = new Maize()
const boeing = new Boeing()

maize.sitInPlane()
  boeing.sitInPlane()

console.log(maize.startEngine());
  console.log(boeing.startEngine());
  