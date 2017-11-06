class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.intervalID;
    this.direction="up";
  }

  start() {
    this.intervalID = setInterval(()=> this.update(), 1 * 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }

  update() {
    this.log();
  }

  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {}
  floorDown() {}
  call() {}

  log() {
    console.log( `Elevator is in floor ${this.floor} and go to ${this.direction} `);
  }
}

module.exports = Elevator;
