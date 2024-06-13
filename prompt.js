var userName = prompt("what's your name?")
var userAge = prompt("What's your age?")
if (isNaN(userAge) || userAge === "") {
    userAge = 17
}
if (userAge < 18) {
    console.log("سن کمتر از 18");
} else{
    console.log("درست");
}
console.log(userAge);