const book = {
    title: "Chai or js",
    author: "Hitesh choudhry",
    year: 2024,
    info: function () {
        return console.log(`${this.title} by ${this.author} and Published on ${this.year}`);
      }
    }
    book.info()

