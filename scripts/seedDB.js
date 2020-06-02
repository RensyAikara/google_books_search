const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebookslist"
);

const bookListSeed = [
    {
        title: "The Dead Zone",
        authors: "Stephen King",
        description: "Set in the fictional town of Castle Rock, Maine A #1 New York Times bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind—a “compulsive page-turner” (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (The Houston Post), The Dead Zone is a “faultlessly paced…continuously engrossing” (Los Angeles Times) novel of second sight.",
        image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api"
    },
    {
        title: "Lord of the Flies",
        authors: "William Golding",
        description: "William Golding’s unforgettable classic of boyhood adventure and the savagery of humanity comes to Penguin Classics in a stunning Graphic Deluxe Edition with a new foreword by Lois Lowry As provocative today as when it was first published in 1954, Lord of the Flies continues to ignite passionate debate with its startling, brutal portrait of human nature. William Golding’s compelling story about a group of very ordinary boys marooned on a coral island has been labeled a parable, an allegory, a myth, a morality tale, a parody, a political treatise, and even a vision of the apocalypse. But above all, it has earned its place as one of the indisputable classics of the twentieth century for readers of any age. This Penguin Classics Graphic Deluxe Edition features an array of special features to supplement the novel, including a foreword by Lois Lowry, an introduction by Stephen King, an essay by E. M. Forster, an essay on teaching and reading the novel and suggestions for further exploration by scholar Jennifer Buehler, and an extended note by E. L. Epstein, the publisher of the first American paperback edition of Lord of the Flies. For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.",
        image: "http://books.google.com/books/content?id=r6eoCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=r6eoCwAAQBAJ&source=gbs_api"
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookListSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });