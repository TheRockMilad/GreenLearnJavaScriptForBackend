//  ^(\d{11}|0098\d{10}|\+98\d{10})$  شماره ایران

const date = "+989192391145";
const dateRegexPattern = /^(\d{11}|0098\d{10}|\+98\d{10})$/;
const dateTestResult = dateRegexPattern.test(date);

if (dateTestResult) {
  console.log("The number is correct");
} else {
  console.log("invalid Number");
}

// Emoji---------------------------------------------------------------------
const comment = "I'm very happy :)";
const commentRegexPattern = /:\)/g;
const newComment = comment.replace(commentRegexPattern, "🙂");
console.log(newComment);

// instagram links------------------------------------------------------------------
const text =
  "I'm learning regex and nodejs from sabzlearn.ir and @sabzlearn_ and @therock_milad";
// رو نزاریم فقط اولی رو درست میکنه g
const linkRegex = /@([\w\.])+/g;

// const newText = text.replace(linkRegex, "💟" )
const newText = text.replace(linkRegex, (result) => {
  console.log(result);
  //   return result;
  return `<a href="https://instagram.com/${result}">${result}</a>`;
});
console.log(newText);

//RegEx for Persian

// ^[ا-ی]{3,12}$