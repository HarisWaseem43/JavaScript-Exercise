class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  displayDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Country:", this.country);
  }
}

const person1 = new Person("Haris", 24, "Pakistan");
const person2 = new Person("Zubair", 25, "Pakistan");

person1.displayDetails();
person2.displayDetails();
