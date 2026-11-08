
// // ## Console & Basics

// // 1. Print `"Hello JavaScript"` in the console.
// let a="Hello JavaScript";
// console.log(a);
// // or
// console.log("Hello JavaScript");
// // 2. Print your name, age, and city using one `console.log()`.    
// let Myname="Mehrouf";
// let age=24;
// let city="Thriprayar";
// console.log(Myname, age, city);
// // 3. Print a warning message using `console.warn()`.
// console.warn("This is a warning message!");
// // 4. Print an error message using `console.error()`.
// console.error("This is an error message!");
// // 5. Use `console.table()` to display an array of 5 numbers.
// let numbers=[1,2,3,4,5];
// console.table(numbers);
// // ---


// ## Variables

// 1. Create a variable called `studentName` and store your name in it.

// 2. Create a variable `age` and print it.
// 3. Create two variables and swap their values.
// 4. Create a constant variable for `PI` and print it.
// 5. Declare a variable without assigning a value and print it.
// 6. Create a variable `score` and increase it by 10.
// 7. Create three variables for first name, last name, and full name.

// ---
// // ## Variables

// // 1. Create a variable called `studentName` and store your name in it.
// let StudentName = "Mehrouf";
// console.log(StudentName);
// // 2. Create a variable `age` and print it.
// let age = 24;
// console.log(age);
// // 3. Create two variables and swap their values.
// var X =5;
// var Y =10;
// var X =10;
// var Y =5;
// console.log(X,Y);
// // 4. Create a constant variable for `PI` and print it.
// const PI ="3.14";
// console.log(PI);
// // 5. Declare a variable without assigning a value and print it.
// let a;
// console.log(a);
// // 6. Create a variable `score` and increase it by 10.
// let score =50;
// console.log(score+10);
// // 7. Create three variables for first name, last name, and full name.
// let FirstName = "Mehrouf";
// let LastName = "KA";
// let FullName = "Mehrouf KA";
// console.log(FirstName, LastName, FullName);
// // ---

// ✅ SAME IDEA, different names
// let cup1 = "tea";
// let cup2 = "coffee";

// let empty = cup1;   // park tea in a third cup
// cup1 = cup2;        // coffee goes into cup1
// cup2 = empty;       // tea goes into cup2

// console.log(cup1, cup2);   // coffee tea

// let drink1="juice"
// let drink2="water"
// let empty=drink1;
// drink1=drink2;
// drink2=empty;
// console.log(drink1,drink2);

// let mi="milk";
// let lk="soda";
// let blah="drink2";
// blah=drink2
// drink1=ik;
// console.log(mi,ik);

// const price = "49";
// const item = "headphones";
// console.log(typeof`the ${item} costs $${price}`);


// const fruit = "mango";
// const qty = "3";

// var b =console.log(`I bought ${qty} ${fruit}s`);   // line 1: just print the sentence
// console.log(typeof b);                    // line 2: separate line for the type




// ## Data Types

// // 1. Create variables of type string, number, boolean, null, and undefined. 
// let a="String";
// let b=10; 
// let c=true;
// let d=null;
// let e;
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e);
// // 2. Check the type of different variables using `typeof`.
// let f="String";
// let g=10; 
// let h=true;
// let i=null;
// let j;
// console.log(typeof f, typeof g, typeof h, typeof i, typeof j);
// // 3. Store your mobile number in a variable and check its type.
// let MobileNumber=8859432931;
// console.log(typeof MobileNumber);
// // 4. Create a variable with value `null` and check its type.
// let jja=null;
// console.log(typeof jja);
// // 5. Create a bigint number and print it.
// let big=2345678987654567876567898767890987654567876545678765n;
// console.log(big);

// // ---



// // ## Type Conversion & Coercion

// // 1. Convert the string `"50"` into a number.
// let a="50"
// console.log(Number(a));
// // 2. Convert the number `100` into a string.
// let b=100;
// console.log(String(b));
// // 3. Convert `"true"` into a boolean.
// let c="true";
// console.log(typeof(Boolean(c)));
// // 4. Check the output of:
// // - `"5" + 2`
// let jja="5"
// let jjb=2;
// console.log(jja+jjb);
// // - `"5" - 2`
// let jjc="5"
// let jjd=2;
// console.log(jjc-jjd);
// // - `true + 1`
// let jje=true
// let jjf=1
// console.log(jje+jjf);
// // 1. Create a variable with value `"123abc"` and convert it into a number.
// let Value="123abc";
// console.log(Number(Value));
// // 2. Use `parseInt()` on `"500px"`.
// let i=parseInt("500px")
// console.log(i);

// // ---

// ## Operators

// 1. Add two numbers and print the result.
// let a = 10;
// let b = 2;
// console.log("a + b =", a + b);    // a + b = 12
// 2. Find the remainder when 25 is divided by 4.
// let a =25
// let b=4
// // console.log(a%b);

// // // 3. Find the square of a number using exponent operator.
// // // let a=2;
// // // let b=4;
// // // console.log(a**b);
// // // 4. Increment a variable using `++`.
// // // let a=100;
// // // a++;
// // // console.log(a);
// // // 5. Decrement a variable using `-`.
// // let b=10;
// // b--;
// // console.log(b);

// // 6. Use `+=` operator to increase a variable by 20.
// // let a=30
// // console.log(a+=20);

// // 7. Compare two numbers using `>`, `<`, `>=`, `<=`.

// let a=10;
// let b=20;
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// // 8. Check if two values are strictly equal using `===`.
// let c="100";
// let d=100;
// console.log(c===d)
// // 9. Compare `"10"` and `10` using both `==` and `===`.
// let e="10"
// let f=10;
// console.log(e==f);
// console.log(e===f);
// // 10. Create two boolean variables and test `&&`, `||`, and `!`.
// let jja=10;
// let jjb=20;
// console.log(a>b && b>a);
// console.log(a>b || b>a); 
// console.log(!jja);
// // ---




// ## Strings

// 1. Create a string and print its length.
let a="Mehrouf"
console.log(a.length);
// 2. Convert a string into uppercase.
let b="Mehrouf"
console.log(b.toUpperCase());
// 3. Convert a string into lowercase.
let c="Mehrouf"
console.log(c.toLowerCase());
// 4. Check if a string includes the word `"JavaScript"`.
let d="i have a love hate relationship with JavaScript";
console.log(d.includes("JavaScript"))
// 5. Extract the word `"World"` from `"Hello World"`.
let e="Hello World";
console.log(e.replace("World","js"))
// 6. Replace `"apple"` with `"mango"` in a sentence.
let hi="hello apple"
console.log(hi.replace("apple","mango"))
// 7. Split `"HTML,CSS,JS"` into an array.
let p="HTML,CSS,JS"
console.log(p.split(","))
// 8. Remove extra spaces from a string.
let r="  sdon  ";
console.log(r.trim());
// 9. Repeat the word `"Hi"` 5 times.
let u="acv"
console.log(u.repeat(10));
// 10. Print the first character of a string.
let k="sdgdsg"
console.log(k.charAt())
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

let name=