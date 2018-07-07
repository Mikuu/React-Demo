let bookListCopy = [
    {bookId:1},
    {bookId:2},
    {bookId:3},
    {bookId:4}
];

let bookId = 2;

[2,3].forEach((v) => {
    bookListCopy.forEach((value, index) => {
        if (value.bookId == v) {
            // delete bookListCopy[index];

            console.log('equal: ', value.bookId, v);
            bookListCopy.splice(index,1);
        }
    });
});


console.log(bookListCopy);