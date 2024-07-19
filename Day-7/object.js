// Activity - 1

const book = {
  title: "Javascript Challenge",
  author: "Hitesh choudhry",
  year: 2024,
};
console.log(book);
console.log(book.title, book.author);

// Activity 2
// Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
book.info = function () {
  return console.log(`${this.title} by ${this.author} `);
};

book.info();

// Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.

book.update = function (newYear) {
  this.book = newYear;
};
book.update(2022);
console.log(book);

// activity -3
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Chitarpur Library",
  books: [
    { title: "effective c++", author: "Charles", year: 2024 },
    { title: "Python", author: "Pythomn guru", year: 2024 },
  ],
};
console.log(library)

console.log(library.name);
library.books.forEach((book) => {
    console.log(book.title);
});

// Activity
book.getInfo = function () {
  console.log(this.author,this.title)
}

book.getInfo()

// Activity5

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

let info1 = Object.keys(book);
console.log(info1)

let info2 = Object.values(book);
console.log(info2)