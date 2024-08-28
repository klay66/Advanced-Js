// let myFriend = ['ali', 'mohamed', 'khaled', ['samy', 'joo', ['omar', 'ahmed']]]

// let [, , , [a, , [, s]]] = myFriend

// console.log(a);
// console.log(s);



// let video = "book";
// let book = "video";

// [video, book] = [book, video];


// console.log(video);
// console.log(book);


// console.log(user);


// let { theName, age, cauntry, skill: { html } } = user

// console.log(theName);
// console.log(age);
// console.log(cauntry);
// console.log(html);

// const { html: h, css: c } = user.skill
// console.log(h);
// console.log(c);

// showDetils(user)

// function showDetils({ theName, age, cauntry, skill: { css } } = user) {
//     console.log(theName);
//     console.log(age);
//     console.log(css);

// }

// const user = {
//     theName: 'nour',
//     age: 19,
//     cauntry: 'bltim',
//     skill: ['html', 'css'],
//     addresses: {
//         egypt: 'cairo',
//         ksa: 'bltim'
//     }
// }

// const {
//     theName: n,
//     age: a,
//     cauntry: c,
//     skill: [, three],
//     addresses: { egypt: e }
// } = user;

// console.log(n);
// console.log(a);
// console.log(three);
// console.log(e);

//


// let mySet = new Set([1, 1, 1, 2, 2, 3, 'a']);

// console.log(mySet);

// console.log(mySet.size);


// let irtretor = mySet.keys()

// console.log(irtretor.next().value);
// console.log(irtretor.next().value);
// console.log(irtretor.next().value);
// console.log(irtretor.next().value);
// console.log(irtretor.next().value);

// mySet.forEach((el) => console.log(el))

// console.log("#".repeat(20));


// let myws = new WeakSet([{ a: 2, o: 1 }])
// console.log(myws);


// let myObject = {}
// let mytEmtyObject = Object.create(null)
// let myMap = new Map();

// console.log(myObject);
// console.log(mytEmtyObject);
// console.log(myMap);

// let myNewObject = {
//     10: "Number",
//     "10": "string"
// }

// console.log(myNewObject);

// let myNewMap = new Map();

// myNewMap.set(10, "number")
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() { }, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);

// let myMap = new Map([
//     ['name', 'nour'],
//     [10, 'number'],
//     [false, 'Boolean']
// ])
// console.log(myMap);

// console.log(myMap.get('name'));
// console.log(myMap.get(10));
// console.log(myMap.get(false));
// console.log("####");

// console.log(myMap.has("Name"));

// console.log("####");
// console.log(myMap.size);

// console.log(myMap.delete('name'));

// console.log(myMap.size);

// myMap.clear()
// console.log(myMap.size);

// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let mMapmUser = { theName: 'nour' }

// let myWeakMap = new WeakMap()

// myWeakMap.set(mMapmUser, 'Object Value"')

// mMapmUser = null;
// console.log(myWeakMap);


// console.log(Array.from('noor'));
// console.log(Array.from('12345',
//     function (n) {
//         return +n + + n
//     }
// ));

// console.log(Array.from('12345',
//     (n) => +n + + n
// ));

// let myArray = [1, 2, 2, 2, 1, 1, 2, 3, 4, 5]

// let mySet = new Set(myArray)

// console.log(Array.from(mySet));


// function af() {
//     return Array.from(arguments)
// }

// console.log(af('nour', 'ali', 'mohamed', 123));

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);


// let nums = [1, 2, 3, 4, 5, 6, 7, 12];

// let myNumber = 1

// let check = nums.some(function (e) {
//     console.log('test');
//     return e > 5;
// })

// let check = nums.some(function (e) {
//     return e > this;
// }, myNumber);
// console.log(check);


// function checkValues(arr, val) {
//     return arr.some(function (e) {
//         return e === val
//     })
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 2));


// let range = {
//     min: 10,
//     max: 20
// }


// let checkRang = nums.some(function (e) {
//     return e >= this.min && e <= this.max;
// }, range)

// console.log(checkRang);


// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     50: "Place 3",
//     40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);
// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n)
// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//     return e > this
// }, mainLocation)

// console.log(check);



// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// let copiedArray = [...myArray1]

// console.log(copiedArray);

// ////////

// let allFriends = ['osama', 'nour', 'omar']
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearFriends)

// console.log(allFriends);

// // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//     a: 1,
//     b: 2,
// };
// let objTwo = {
//     c: 3,
//     d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });


// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(Math.max(...n2) * (n1.concat(n2).length))


////////regular exbression

// let myString = 'Hello Elzero Web School I Love elzero'

// let ragx = /Elzero/ig

// console.log(myString.match(ragx));

// ranges

// let tld = "Com Net Org Info Code Io";
// let tldRg = /(com | info | io)/ig
// console.log(tld.match(tldRg));


// let nums = "12345678910";
// let numsRe = /[0-9]/g
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));


// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /os[5-9]os/ig
// console.log(practice.match(practiceRe));


// let myString = "AaBbcdefG123!234%^&*";

// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-z]/ig
// let notLettersCapsAndSmall = /[^a-z]/ig
// let specials = /[^a-zA-Z0-9]/g;

// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(notLettersCapsAndSmall));
// console.log(myString.match(specials));


// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));



// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));


// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));




// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S



// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=z)/ig));
// console.log(names.match(/\d\w{8}(?!z)/ig));


// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));

// document.getElementById("register").onsubmit = function () {
//     letphoneInput = document.getElementById('phone').value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig;
//     let validationResult = phoneRe.test(letphoneInput);
//     console.log(validationResult);
//     if (validationResult === false) {
//         return false;
//     } else {
//         return true;
//     }
// }




// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.org(:\d{4})?(\S+)?/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));





///////////////OOP\\\\\\\\\\\\\\\\\\\\\


/*
  Constructor Function
*/

// function User(id, username, salary) {
//     this.i = id
//     this.u = username
//     this.s = salary
// }
// let userTwo = new User(101, "ahmed", 13000)
// let userThree = new User(102, "selia", 191200)


// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);


// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username || "Unknowen";
//         this.s = salary < 2000 ? salary + 3000 : salary;
//         this.msg = function () {
//             return `Hello ${this.u} Your Salary Is ${this.s}`;
//         }
//     }
//     writeMsg() {
//         return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
// }

// let userOne = new User(100, "nour", 1200)
// let userTwo = new User(100, "", 2200)


// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.msg);
// console.log(userTwo.writeMsg);

// console.log(userOne instanceof User);
// console.log(userOne.constructor == User);


// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary;

//     }
//     uodeteName(newName) {
//         this.u = newName
//     }
// }


// let userOne = new User(100, "nour", 1200)

// console.log(userOne.u);
// userOne.uodeteName("selia")
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

// class User {
//     static count = 0
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//         User.count++;
//     }
//     static sayHello() {
//         return `hello nour`

//     }
//     static countMembar() {
//         return `${this.count} Membats Creat`
//     }
// }

// let userOne = new User(100, "nour", 1200)
// let userTwo = new User(101, "omar", 3200)


// console.log(userOne.u);
// console.log(userTwo.u);

// console.log(User.count);
// console.log(User.sayHello());


// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// }

// class Admin extends User {
//     constructor(id, username, permission) {
//         super(id, username)
//         this.p = permission;
//     }

// }

// class Superman extends Admin {
//     constructor(id, username, permissions, ability) {
//         super(id, username, permissions);
//         this.a = ability;
//     }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());


// class User {
//     #e;
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.#e = salary;

//     }
//     getSalary() {
//         return parseInt(this.#e);
//     }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Elzero";

// console.log(String.prototype);



// class User {
//     constructor(id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);

// User.prototype.sayWelcome = function () {
//     return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// String.prototype.addDotBeforeAndAfter = function (val) {
//     return `.${this}.`;
// };

// let myString = "Elzero";



/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperty(myObject, "c", {
//     writable: false,
//     enumerable: true,
//     configurable: false,
//     value: 3,
// });

// // Object.defineProperty(myObject, "c", {
// //   writable: false,
// //   enumerable: true,
// //   configurable: true, <= Cannot redefine property
// //   value: 3,
// // });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//     console.log(prop, myObject[prop]);
// }

// console.log(myObject);


/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

// const myObject = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperties(myObject, {
//     c: {
//         configurable: true,
//         value: 3,
//     },
//     d: {
//         configurable: true,
//         value: 4,
//     },
//     e: {
//         configurable: true,
//         value: 5,
//     },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));


//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/


// let dateNow = new Date()

// console.log(dateNow);

// console.log(Date.now());

// let seconds = Date.now() / 1000
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log((`Years ${years}`));


/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("jul 17, 2005");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());



/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// // dateNow.setTime(0);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setTime(10000);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setDate(35);
// // console.log(dateNow);

// // dateNow.setFullYear(2020, 13);
// // console.log(dateNow);

// // dateNow.setMonth(15);
// // console.log(dateNow);

// dateNow.setHours(15);
// console.log(dateNow);




/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404344800000);
// console.log(date2);

// let date3 = new Date("10-25-1982");
// console.log(date3);

// let date4 = new Date("1982-10-25");
// console.log(date4);

// let date5 = new Date("1982-10");
// console.log(date5);

// let date6 = new Date("82");
// console.log(date6);

// let date7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date7);

// let date8 = new Date(1982, 9, 25);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00z");
// console.log(date9);



// let start = new Date()


// for (i = 0; i < 1000; i++) {
//     document.write(`<div>${i}</div>`)
// }


// let end = new Date()
// let duration = end - start;

// console.log(duration);



/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }


// let generator = generateNumbers()

// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// for (let value of generateNumbers()) {
//   console.log(value);

// }


// for (let value of generator) {
//   console.log(value);
// }


/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }


// function* generatorAll() {
//   yield* generateNums()
//   yield* generateLetters()

//   yield* [1, 2, 3]
// }

// let generator = generatorAll()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Nour"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());



/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A";
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


/*
  Modules
  - Import And Export
*/

// let a = 10;
// let arr = [1, 2, 3, 4]

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };


// export default function () {
//   return `Hello`;
// }



/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server

// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// // Convert To JS Object
// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// // Update Data
// myJsObject["Username"] = "Elzero";
// myJsObject["Age"] = 40;

// // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// // Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");