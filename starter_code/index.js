const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator =new Elevator();
let person= new Person("per1",7,3);
elevator.start();
/*for (let i=10; i>0;i--){
  elevator.floorDown();
  elevator.log();
}*/
/*
console.log(elevator.floor);

for (let i=10; i>-5;i--){
  elevator.floorDown();
  elevator.log();
}*/

elevator.call(person);
