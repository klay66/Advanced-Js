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


let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * (n1.concat(n2).length))