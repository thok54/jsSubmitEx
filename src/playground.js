// ****   1.Array operations          ***///
console.log("*** Exercise 1: Arrays ***");

//Head
console.log("Head Exercise");
const head = ([first, ...nums]) => first;
const headArray = [1, 2, 3];
console.log(headArray);
console.log(head(headArray));

//Tail
console.log("Tail Exercise");
const tail = ([first, ...nums]) => nums;
const tailArray = [1, 2, 3];
console.log(tailArray);
console.log(tail(tailArray));

//Init
console.log("Init Exercise");
const init = ([...nums]) => {
    nums.pop();
    return nums;
};
const initArray = [1, 2, 3];
console.log(initArray);
console.log(init(initArray));


//Last
console.log("Last Exercise");
const last = ([...nums]) => nums.pop();
const lastArray = [1, 2, 3];
console.log(lastArray);
console.log(last(lastArray));





// ****   2.Concat operations          ***///
console.log("");
console.log("*** Exercise 2: Concat ***");

console.log("Concat Exercise");
const concat1 = (a, b) => [...a, ...b];
const concatArray1 = [1, 2, 3];
const concatArray2 = [4, 5, 6];
console.log(concatArray1);
console.log(concatArray2);
console.log(concat1(concatArray1, concatArray2));


console.log("Optional Concat Exercise");
const concatArray3 = [7, 8, 9];
const concat2 = (...array) => array.reduce((total, num) => total.concat(num));
console.log(concat2(concatArray1, concatArray2, concatArray3));




// ****   3.Clone Merge operations          ***///
console.log("");
console.log("*** Exercise 3: Clone Merge ***");

console.log("Clone Exercise");
const fruit = { name: "Apple", color: "red" };
const clone = (source) => sClone = { ...source };
console.log(fruit);
console.log(clone(fruit));

console.log("Merge Exercise");
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => clone({ ...target, ...source });
console.log(a);
console.log(b);
console.log(merge(a, b));



// ****   4.Read Books operations          ***///
/*
console.log("");
console.log("*** Exercise 4: Read Books ***");

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
    let rd = false;
    books.forEach(book => {
        if (book.title === titleToSearch) {
            rd = book.isRead;
        }
    });
    return rd;
};

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
*/