
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

