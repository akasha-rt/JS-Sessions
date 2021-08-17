// console.log('heloo');

var person = {
    first: "Akasha",
    last: "Shahid",
    age: 22,
    arr: [ "hello", "world" ]
};

// console.log(`My name is ${ person.arr[0] }.`);
// console.log(typeof(person.arr[0]));


function fun(param) {
    // console.log(param);
}

fun('arg');


var fun_Arr = {
    fun1(param1) {
        console.log(param1);
    },
    fun2(param2) {
        console.log(param2 + 'heloooos');
    }
};

// fun_Arr.fun2('CS');
let num = NaN;
// console.log(NaN === NaN);
// console.log(isNaN(num));

// console.log([12, 13, 14] === [12, 13, 14]);
a = [12, 13, 14];
b = a;
// console.log(a === b);








// var arr = [ "1", "10", "100", "1000" ];
// for (let i = 0; i < arr.length && arr[i] < 500; i++) {
//     console.log(arr[i]);
// }


// class Publication {
//     constructor(title,author,pubDate) {
//         this.title = title;
//         this.author = author;
//         this.pubDate = pubDate;
//     }

//     print() {
//         console.log(`
//             Title: ${ this.title }
//             By: ${ this.author }
//             ${ this.pubDate }
//         `);
//     }
// }

// class Book extends Publication {
//     constructor(bookDetails) {
//         super(
//             bookDetails.title,
//             bookDetails.author,
//             bookDetails.publishedOn
//         );
//         this.publisher = bookDetails.publisher;
//         this.ISBN = bookDetails.ISBN;
//     }

//     print() {
//         super.print();
//         console.log(`
//             Publisher: ${ this.publisher }
//             ISBN: ${ this.ISBN }
//         `);
//     }
// }


function Publication(title,author,pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${ title }
                By: ${ author }
                ${ pubDate }
            `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${ bookDetails.publisher }
                ISBN: ${ bookDetails.ISBN }
            `);
        }
    };

    return publicAPI;
}



var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

// YDKJS.print();



/*....................................................................................................*/
//ITERATORS:

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 1);

let result = it.next();
while (!result.done) {
//  console.log(result.value);
 result = it.next();
}

// console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

var it1 = [10, 20, 30];
var vals = [ ...it1 ];  //shallow copy
// console.log(vals);

var greeting = "Hello world!";
var chars = [ ...greeting ];
// console.log(chars);


for (let val of it1) {
    // console.log(`Iterator value: ${ val }`);
}

var buttonNames = new Map();
buttonNames.set(1,"Button 1");
buttonNames.set(2,"Button 2");
//array destructuring
for (let [btn,btnName] of buttonNames) {
    // console.log(btn + " - " + btnName);
}

// var arr = [ 10, 20, 30 ];
var arr1 = [[5,4,3], [2,9,1], [11,12]];

for (let [idx,val] of arr1) {
    console.log(`[${ idx }]: ${ val }`);
}


//Closure
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
    //   console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();