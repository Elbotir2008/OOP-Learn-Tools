class Car {
  constructor(model, speed, size) {
    this.model = model;
    this.speed = speed;
    this.size = size;
  }
  getInfo() {
    let modelCar = document.querySelector(this.model).innerText;
    let modelSpeed = document.querySelector(this.speed).innerText;
    let modelSize = document.querySelector(this.size).innerText;
    console.log(modelCar, modelSpeed, modelSize);
  }
  getConsooleLog() {
    console.log(this.model, this.speed, this.size)
  }
}

let myCar = new Car("Chevrolt", "100km/s", "25m");
console.log(myCar);
