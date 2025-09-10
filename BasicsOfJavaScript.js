console.log("Initiating Basics Of JavaScript...");

console.log("========TypeOF==============");
let a =10;   console.log(typeof a);
a='Hi'; console.log(typeof a);

let containerID = -6 ;  let ctype = typeof containerID;
console.log("Container " + containerID + "variable Type is :" + ctype);
containerID = "-6ABC" ; ctype = typeof containerID;
console.log("Container " + containerID + "variable Type is :" + ctype);

const companySeries = [1, 2,, 5, 6, 8, 9, ,11, 111, 111];
const z = null;
let y ;
console.log("TypeOf varibale declared are  : ", typeof(companySeries) +" | " +typeof(z)+" | " + typeof(y));

function masterClass(classID) { console.log("\nMain Master Class is : "+ classID); }
masterClass("class1");
console.log("Function's type is "+typeof masterClass);

console.log("========+++++++++++++==============");

console.log("\nVariable Scope in Java Script")
var i = 5;   //Global Scope 
function basic1() {
    var j = 10;     //Functional Scope
}
console.log(i);

var greet1 = "Hi This is JavaScript..";
function printgreet() {
    var gr = "script 1 JS"
    console.log(gr);
}
console.log(greet1);
printgreet();


var browser = "Firefox.";
var browser = "Edge.";
browser = "Chrome";
console.log("Checking in to "+ browser);

var t;
console.log(t);
t = "Text - 1 ";
console.log(t);


// Overriting Variable in Old JS using Var Keyword 

var basic = "This is legacy system login";
var loginTag = 221;
if(loginTag >200) {
    basic = "Login  = OS2 Inititing New Login ....";
}
console.log("Var Keyword : Login begins Info "+basic);

//Use let and Const 
//======================let : scope within {}  =================

let Log1 = "This os1: Legacy login basic...";
let launchId = 10;
if(launchId > 10) {
   let Log2 = "Login  =  OS2 Inititing New Login ....";
   console.log("Login begins Info "+Log2);
}
///   Disply error console.log("Let Keyword : Login begins Info "+Log2);
console.log("Let Keyword : Login begins Info "+Log1);
let v = 1;
//display erorr : Blocked Scope let v = 2;
v = 2
console.log(v);

//Const : If change const variable then Error Display TypeError: Assignment to constant variable.
const c = "const variable";
//c = c + " changes to c variables ";   //Display TypeError: Assignment to constant variable.
console.log("Printing const variable " +c);

//const  price ;  //SyntaxError: Missing initializer in const declaration
const price = 100
console.log(price);







