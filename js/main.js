// alert("hello"); //test js file.
var x;
let y;
x = 10;
y = 5;
console.log(x, " ", y);
x = 20;
console.log(x);

x++; // (x++; x=x+1) (x--; // x=x-1)
x += x; // (x=x+x)
console.log(x);
console.log(x % 4); // if x=42 will result equal 2

// var number1 = 5;
// number1 = 3;
// number1 = number1 + 5; // 3 + 5 = 8
// number1 = number1 - 6; // 8 - 6 = 2
// var number2 = number1 * 10;
// console.log(number2);

// Topic: Types of Variables //
// var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
// var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to
// 9,223,372,036,854,775,807)
// var myFloat = 5.5; // 32-bit floating-point number (decimal)
// var myDouble = 9310141419482.22; // 64-bit floating-point number
// var myBoolean = true; // 1-bit true/false (0 or 1)
// var myBoolean2 = false;

var xx = 123;
var yy = "Hello";
var zz = xx == yy; //ture % false
var ar = ["apple", "orange", "banana"]; // 0=apple, 1=oragne, 2=banana
console.log(typeof xx);
console.log(typeof yy);
console.log(typeof zz);
console.log(zz, typeof zz);
console.log(typeof ar);
console.log(ar.length, ar[2]);
ar.push("grape");
console.log(ar);
var obj = {
  name: "Jone",
  lastname: "Robert"
};
console.log(obj.name, obj.lastname);
//console.log(obj["name"], obj["lastname"]);
obj.age = 20;
console.log(obj);

var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);

console.log(un == nu); // Check value
console.log(un === nu); // Check value+typevalue
