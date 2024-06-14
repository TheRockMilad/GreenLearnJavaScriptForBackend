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

// این کلاس از کلاس پرسون ارث بری میکنه
class Professor extends Person {
  constructor(id, name, email, age, city, skill) {
    // میاد مقادیر والد رو دریافت و برای والد ارسال میکنه
    super(id, name, email, age, city);
    this.skill = skill;
  }
  // الویت با این مند هستش بعد اگه نباشه میره برای والد
  startDev() {
    console.log(super.startDev()); //فراخوانی تابع والد
    console.log(`${this.name} taught coding`);
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
