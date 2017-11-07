class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.intervalID;
    this.direction = "stop";
    this.passengers = [];
    this.waitingList = [];
  }

  start() {
    //console.log("---- into start");
    this.intervalID = setInterval(() => this.update(), 1 * 1000);
  }
  stop() {
    //console.log("---- into stop");
    clearInterval(this.intervalID);
  }

  update() {
    //console.log("---- into update");
    this.log();
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor > this.floor) {
        this.floorUp();
      }
      if (this.waitingList[i].originFloor < this.floor) {
        this.floorDown();
      }
      this._passengersEnter();
    }

    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor > this.floor) {
        this.floorUp();
      }
      if (this.passengers[i].originFloor < this.floor) {
        this.floorDown();
      }
      this._passengersLeave();
    }

  }

  _passengersEnter() {
    //console.log("---- into _passengersEnter");
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor === this.floor) {
        console.log(`${this.waitingList[i].name} has enter the elevator`);
        this.passengers.push(this.waitingList[i]);
        this.waitingList.splice(i, 1);
      }
    }
  }

  _passengersLeave() {
    //console.log("---- into _passengersLeave");
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator}`);
        for (let j = 0; j < requests.length; j++) {
          if (this.requests[j].name === this.passengers[i].name) {
            this.requests.splice(j, 1);
          }
        }
        this.passengers.splice(i, 1);
      }
    }
  }
  floorUp() {
    //console.log("---- into _floorUp");
    if (this.floor < this.MAXFLOOR) {
      this.direction = "up";
      this.floor++;
    } else {
      console.log('Error. floorUp reached');
    }
  }

  floorDown() {
    //console.log("---- into _floorDown");
    if (this.floor > 0) {
      this.direction = "down";
      this.floor--;
    } else {
      console.log('Error. floorDown reached');
    }
  }

  call(person) {
    //console.log("---- into call");
    this.waitingList.push(person);
    this.requests.push(person);
  }

  log() {
    //console.log("---- into log");
    console.log(`Elevator is in floor ${this.floor} and go to ${this.direction} `);
    //console.log("passengers length: "+this.passengers.length);
    //console.log("WaitiingList length: "+this.waitingList.length);
  }
}

module.exports = Elevator;
