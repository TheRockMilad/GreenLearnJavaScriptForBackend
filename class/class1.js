//  Class

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
  //method
  // توی کلاس نیازی به کلمه فانکشن نیست
  startDev() {
    console.log(`${this.name} Started coding`);
  }
}

//برای ساخت نمونه باید نیو رو بنویسیم
const milad = new Person(1, "Milad", "m@gmail.com", 33, "Tehran");
const hamid = new Person(2, "Hamid", "h@gmail.com", 32, "Tehran");

console.log(milad);
// صدا کردن متد خاص از نمونه ساخته شده از کلاس
milad.startDev();
