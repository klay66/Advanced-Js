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


let mySet = new Set([1, 1, 1, 2, 2, 3, 'a']);

console.log(mySet);

console.log(mySet.size);


let irtretor = mySet.keys()

console.log(irtretor.next().value);
console.log(irtretor.next().value);
console.log(irtretor.next().value);
console.log(irtretor.next().value);
console.log(irtretor.next().value);

mySet.forEach((el) => console.log(el))

console.log("#".repeat(20));


let myws = new WeakSet([{ a: 2, o: 1 }])
console.log(myws);
