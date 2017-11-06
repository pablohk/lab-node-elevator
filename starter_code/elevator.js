class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.intervalID;
    this.direction = "up";
    this.passengers = [];
    this.waitingList = [];
  }

  start() {
    this.intervalID = setInterval(() => this.update(), 1 * 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor === this.floor) {
        this.passengers.push(this.waitingList[i]);
        console.log(`${this.waitingList[i].name} has enter the elevator}`);
        this.requests.push(this.waitingList[i].destinationFloor);
        this.waitingList.splice(i, 1);
      }
    }
  }

  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator}`);
        this.passengers.splice(i, 1);
      }
    }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      console.log('Error. floor up reached');
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    } else {
      console.log('Error. floor down reached');
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Elevator is in floor ${this.floor} and go to ${this.direction} `);
  }
}

module.exports = Elevator;
