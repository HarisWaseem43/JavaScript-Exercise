class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log("Make: ", this.make);
    console.log("Model: ", this.model);
    console.log("Year: ", this.year);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberofdoors) {
    super(make, model, year);
    this.numberofdoors = numberofdoors;
  }
  displayDetails() {
    super.displayDetails();
    console.log("Number of Doors: ", this.numberofdoors);
  }
}

const car = new Car("Audi", "GT-R", 2018, 2);

car.displayDetails();
