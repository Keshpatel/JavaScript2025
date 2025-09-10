function sayHello(){
    console.log("Hello ");
}

function sayHello(name){
    console.log("Hello " +name);
}

function sayHello(name , location){
    console.log("Hello " + name +" From " +location);
}

sayHello();
sayHello("Keshini ");
sayHello("Keshini ", " yyz")
/***** sayHello method will use latest method  displying undefined for empty parameter
 * Displaying results  
 * Hello undefined From undefined
   Hello Keshini  From undefined
   Hello Keshini  From  yyz
 */

// using if else.... for unique function name 
function sayHelloNew(name, location) {
    if(typeof name != undefined  && typeof location!= undefined) {
        console.log("Hello " + name +" From " +location);
    } else if(typeof name!= undefined) {
        console.log("Hello " +name);
    } else {
           console.log("Hello ");
    }
}

sayHelloNew();
sayHelloNew("Keshini ");
sayHelloNew("Keshini ", " yyz")

/**** Displaying results 
 * Hello undefined From undefined
Hello Keshini  From undefined
Hello Keshini  From  yyz
*/

/****USE : each purpose , seperate Function with Unoque name of Function  */

