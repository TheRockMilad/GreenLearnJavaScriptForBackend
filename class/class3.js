// Static keyword

// Inheritance Class

class Person {
  // به محض ساختن یک نمونه از کلاس سازنده اون صدا زده میشه
  constructor(id, name, email, age, city) {
    // دیز به خود این کلاس اشاره میکنه
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.city = city;
  }
  startDev() {
    console.log(`${this.name} Started coding`);
  }
}

class Professor extends Person {
  constructor(id, name, email, age, city, skill) {
    super(id, name, email, age, city);
    this.skill = skill;
  }
  startDev() {
    console.log(`${this.name} taught coding`);
  }
  // وقتی استاتیک میشه بدون نیاز به ساخت نمونه میشه ازش استفاده کرد
  static testMethod() {
    console.log("Mission successfull");
  }
}

const personMilad = new Person(1, "Milad", "m@gmail.com", 33, "Tehran");
const professorHamid = new Professor(
  1,
  "hamid",
  "h@mail.com",
  32,
  "tehran",
  "trader"
);

console.log(professorHamid);
professorHamid.startDev();
personMilad.startDev();
// میشه با اسم خود کلاس و متد بهش دسترسی پیدا کرد
Professor.testMethod();
