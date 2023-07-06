interface IPerson {
    readonly name: string
    age: number

    greet(phrase: string): void
}

interface IPilot {
flymessage(): void
}

class Pilot implements IPerson, IPilot{
    constructor(public readonly name: string, public age: number) {
        this.checkAge
    }
    private checkAge() {
        if (this.age < 28 ) {
            throw new Error ('Pilot too young')
        }
    }
    public greet(phrase: string){
        console.log(phrase + ' ' + this.name);
        
    }
    public flymessage(): void {
        console.log('Самолет набрал высоту, приятного полёта');
        
    }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane (pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}




class Boeing extends Plane {
  public startEngine () {
      if (!this.pilot) {
      throw new Error("No pilot. The boing don't up in the sky")
      }
      console.log('Запуск турбин');
      this.pilot.flymessage()
      return true;
  }
}

class Terrorist implements IPilot {
    bluff(pharse: string) {
        console.log(pharse);
        
    }
    public flymessage(): void {
        console.log('Мы вас на хую вертел! Наши требования 9 милёнов баксов, суки! Или всех убить!');
    }
}

const boeing = new Boeing
const pilot = new Terrorist
boeing.sitInPlane(pilot)
pilot.bluff('Мы захватили самалот')
boeing.startEngine()
// const pilot = new Pilot('Max', 32)



// pilot.greet('Вас приветсвует капитан судна')
// boeing.sitInPlane(pilot)
// boeing.startEngine()






// let user: IPerson

// user = {
//     name: 'Max',
//     age: 21,

//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
        
//     }
// }

// user.greet('hello everybody, я ')