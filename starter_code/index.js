const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator =new Elevator();
let person= new Person("per1",7,5);
//elevator.start();
//setTimeout(()=>elevator.stop(),5*1000);
/*for (let i=0; i<=12;i++){
  elevator.floorUp();
  elevator.log();
}*/
/*
console.log(elevator.floor);

for (let i=10; i>-5;i--){
  elevator.floorDown();
  elevator.log();
}*/

elevator.call(person);
console.log("Waiting");
console.log(elevator.waitingList);
console.log("Request");
console.log(elevator.requests);
