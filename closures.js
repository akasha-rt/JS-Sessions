// (function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged?
//     })(1);
//   })(0);




//   let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();



// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }



//   function createIncrement() {
//     let count = 0;
//     function increment() { 
//       count++;
//     }
  
//     let message = `Count is ${count}`;
//     function log() {
//       console.log(message);
//     }
    
//     return [increment, log];
//   }
  
//   const [increment, log] = createIncrement();
//   increment(); 
//   increment(); 
//   increment(); 
//   log(); // What is logged?






function createStack() {
    const items = [],
    return {
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  
  stack.items; // => [10]
  stack.items = [10, 100, 1000]; // Encapsulation broken!







//   function multiply(num1, num2) {
//     // Write your code here...
//   }
//   multiply(4, 5); // => 20
//   multiply(3, 3); // => 9
  
//   const double = multiply(2);
//   double(5);  // => 10
//   double(11); // => 22