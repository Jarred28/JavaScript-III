/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - bound to the window by default.
* 2. Implicit - Binds to objets when used in methods.
* 3. New - adds new objects to the array.
* 4. Explicit - using specific words to call your function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function hello (param) {
//    console.log(this);
// }
// Principle 2

// code example for Implicit Binding

// const arr = function (){
//    this.name = 'arrName';
//    this.color = 'arrColor';
//  };
 

// Principle 3

// code example for New Binding

// function Animal (food) {
//    this.food = food;
//    this.eat = function() {
//        console.log ('this animal likes to eat ${this.food}');
//    }
// }

// Principle 4

// code example for Explicit Binding

// const arr = function (){
//    this.call(arrName)
// }