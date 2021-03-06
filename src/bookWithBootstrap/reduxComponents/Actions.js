import * as ActionTypes from './ActionTypes.js';

export const updateSearchCount = (searchCount) => {
  return {
    type: ActionTypes.UPDATESEARCHCOUNT,
    searchCount: searchCount
  };
};

export const updateSearchName = (searchName) => {
  return {
    type: ActionTypes.UPDATESEARCHNAME,
    searchName: searchName
  };
};

export const updateBooks = (books) => {
  return {
    type: ActionTypes.UPDATEBOOKS,
    books: books
  };
};

export const updateBook = (book) => {
  return {
    type: ActionTypes.UPDATEBOOK,
    book: book
  };
};

export const fetchBooks = () => {
    return function (dispatch, getState) {
        const apiUrl = '/v2/book/search?q=' + getState().searchName + '&count=' +getState().searchCount;
        fetch(apiUrl).then(
            response => {
                if (response.status !== 200) {
                    throw new Error('FBI --> Error: failed to get response with status 200');
                }
                response.json().then(
                    responseJson => {
                        dispatch(updateBooks(responseJson.books));
                    },
                    error => {throw error;}
                )
            },
            error => {throw error;},
        )
    }
};

export const fetchBook = (ownProps) => {
    return function (dispatch) {
        const apiUrl = '/v2/book/' + ownProps.match.params.bookId;
        fetch(apiUrl).then(
            response => {
                if (response.status !== 200) {throw new Error("FBI --> Error: failed to get response with status 200");}
                response.json().then(
                    responseJson => {dispatch(updateBook(responseJson));},
                    error => {throw error;}
                )
            },
            error => {throw error;}
        )
    }
};

export const shoppingCartAddBook = (book) => {
    return {
        type: ActionTypes.SHOPPINGCARTADDBOOK,
        bookCount: 1,
        bookPrice: book.price? Number(book.price.match(/(\d|\.)+/)[0]) : 0,
        bookId: book.id,
        bookImage: book.image,
        bookTitle: book.title
    };
};

export const shoppingCartDeleteBook = (bookInShoppingCart) => {
    return {
        type: ActionTypes.SHOPPINGCARTDELETEBOOK,
        bookId: bookInShoppingCart.bookId,
        bookPrice: Number(bookInShoppingCart.bookPrice),
        bookCount: 1
    };
};

export const toggleShoppingCartModal = () => {
    return {
        type: ActionTypes.TOGGLESHOPPINGCARTMODAL
    };
};

export const selectPage = (pageNumber) => {
    return {
        type: ActionTypes.SELECTPAGE,
        pageNumber: pageNumber
    }
};