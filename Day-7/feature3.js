const book = {
    title: "Javascript Challenge",
    author: "Hitesh choudhry",
    year: 2024,
  };

for (const key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }
  
  let info1 = Object.keys(book);
  console.log(info1)
  
  let info2 = Object.values(book);
  console.log(info2)