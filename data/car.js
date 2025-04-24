class Car {
  #brand;
  #model;
  speed = 0;
  isTruncOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand}`);
    console.log(`${this.#model}`);
    console.log(`${this.speed}`);
    console.log(`${this.isTruncOpen}`);
  }

  go() {
    if(this.speed <= 195 && this.isTruncOpen === false) {
      this.speed += 5;
    }
  }

  brake() {
    if(this.speed >= 5) {
      this.speed -= 5;
    }
  }

  openTrunc() {
    if(speed === 0) {
      this.isTruncOpen = true;
    }
  }

  closeTrunc() {
    this.isTruncOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if(this.speed <= 300 - this.acceleration) {
      this.speed += this.acceleration;
    }
  }

  openTrunc() {
    console.log('Race cars do not have a trunc');
  }

  closeTrunc() {
    console.log('Race cars do not have a trunc');
  }


}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

car1.go();
car1.go();

car2.go();
car2.brake();
car2.brake();

car1.displayInfo();
car2.displayInfo();

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});


raceCar1.go();
raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
raceCar1.openTrunc();