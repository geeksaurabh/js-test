//  ANSWER 1--  VAR=Var declarations are globally scoped or function scoped
//                     Var variables can be updated and re-declared within its scope
//                     example of VAR= var greeter = "hey hi";
//                                       var greeter = "say Hello instead";
//                                        var greet = "say NAMASTE";
//                                        it all means in var we can do re initialization and redeclaration of one variable again and again

//  ,  LET = let declarations is block scoped.
//           let variables can be updated but not re-declared
//           EXAMPLE OF LET =    IN LET WE CAN DO THIS
//                               let greeting = "say Hi";
//                               greeting = "say Hello instead";
//                                 BUT WE CAN REDECLARE THE VARIABLE LIKE WE TRIED TO DO BELOW

//                           let greeting = "say Hi";
//                             let greeting = "say Hello instead"; //
//                             in let we cant re declare if we try to re declare it will show us below given error
//                              error: Identifier 'greeting' has already been declared
//  ,  CONST=AND const declarations also is block scoped.
//            Const variables can neither be updated nor re-declared.
//             EXAMPLE OF CONST=  IN CONST WE CANT REINITIALISE OR REASSIGN
//                             const greeting = "say Hi";
//                            greeting = "say Hello instead";// error: Assignment to constant variable.
//                            AND WE CANT REDECLARE ALSO
//                             const greeting = "say Hi";
//                            const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

//  ANSWER 2--- UNDEFINED---1)Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as undefined.
//                             2) When value is not assigned in array or object
//                             3) When functions don’t have a return statement but are called for assigning a value to a variable.

//              Null-----null is a reserved keyword in javascript. We can assign a null value to a variable explicitly using the keyword null.
//               Null essentially represents a non-existent or an empty value i.e. we explicitly tell javascript interpreter that the variable
//               has no value.

//               Not defined----A not defined is a variable which is not declared at a given point of time with declaration keyword like var,
//                let or const.

//  ANSWER 3-PART 1--- Initialisation--Object initializer in JavaScript Javascript Web Development Object Oriented Programming An object initializer is an expression that
//                              allow us to initialize a newly created object. It is a comma-separated list of zero or more pairs of property names and associated values
//                              of an object enclosed in a pair of curly braces {}

//                    Declaration---A function declaration tells the JavaScript engine about a function’s name, return type, and parameters.
//                     When a function has been declared, it can be used anytime inside a class or development scope whenever it’s been called/invoked.
//                     To declare a function, it must start with function name (), just like a variable declaration must start with Var.

//           PART 2----

let length = 10;
let breadth = 20;
if ("length" == "breadth") {
  console.log("it is square");
} else if ("length" != "breadth") {
  console.log("it is rectangle");
}

//  ANSWER 4
let number = 7;
if (number % 2 == 0) {
  console.log("it is even number");
} else {
  console.log("it is odd number");
}

// ANSWER  5
let today = "4";

switch (today) {
  case "1":
    console.log("today is sunday");
    break;
  case "2":
    console.log("today is monday");
    break;
  case "3":
    console.log("today is tuesday");
    break;
  case "4":
    console.log("today is wednessday");
    break;
  case "5":
    console.log("today is thursday");
    break;
  case "6":
    console.log("today is friday");
    break;
  case "7":
    console.log("today is saturday");
    break;

  default:
    console.log("today is holiday");
}
