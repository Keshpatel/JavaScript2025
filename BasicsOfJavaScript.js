console.log("Initiating Basics Of JavaScript...");


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







