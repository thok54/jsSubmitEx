// ****   4.Read Books operations          ***///
console.log("");
console.log("*** Exercise 4: Read Books ***");
console.log("Optional Read Books");

type book = {
    title: string;
    isRead: boolean;
}

const bookLot: book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead2(books: book[], titleToSearch: string) {
    let rd: boolean = false;
    books.forEach(element => {
        if (element.title === titleToSearch) {
            rd = element.isRead;
        }
    });
    return rd;
};

console.log(isBookRead2(bookLot, "Devastación"));
console.log(isBookRead2(bookLot, "Canción de hielo y fuego"));
console.log(isBookRead2(bookLot, "Los Pilares de la Tierra"));




// ****   5.Slot Machine operations          ***///
console.log("");
console.log("*** Exercise 5: Slot Machine ***");



class SlothMachine {
    constructor(private coins: number = 1) { }
    play() {
        let coins: number = this.coins++;
        let result1: boolean = !Math.round(Math.random());
        let result2: boolean = !Math.round(Math.random());
        let result3: boolean = !Math.round(Math.random());
        if (result1 === true && result2 === true && result3 === true) {
            console.log("Congrats, you won " + coins + " coins!!");
            this.coins = 1;
        }
        else console.log("No luck!!");
        return coins;
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play(); 