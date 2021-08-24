// console.log(this);

// const object = {
//     message: 'Hello, World!',

//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
//   };

//   console.log(object.getMessage()); // What is logged?


// function Pet(name) {
//     this.name = name;

//     this.getName = () => this.name;
//   }

//   const cat = new Pet('Fluffy');

//   console.log(cat.getName()); // What is logged?

//   const { getName } = cat;
//   console.log(getName());     // What is logged?



//   const object = {
//     message: 'Hello, World!',

//     logMessage() {
//       console.log(this.message); // What is logged?
//     }
//   };

//   setTimeout(object.logMessage.bind(object), 1000);

who = "Jupyter";

const object = {
    who: 'World',
    who: 'Earth',

    greet() {
        return `Hello, ${this.who}!`;
    },

    farewell: () => {
        return `Goodbye, ${this.who}!`;
    }
};

console.log(object.greet());    // What is logged?
console.log(object.farewell()); // What is logged?
console.log(this);
