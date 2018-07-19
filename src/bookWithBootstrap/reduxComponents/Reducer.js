import * as ActionTypes from './ActionTypes.js';

function removeBookFromBookList(bookList, bookId) {
    let bookListCopy = new Array(...bookList);

    // Bug, delete is not working well if there are same books in shoppingCart.
    bookListCopy.forEach((value, index) => {
       if (value.bookId == bookId) {
           bookListCopy.splice(index, 1);
       }
    });

    return bookListCopy;
}

export default (state, action) => {

  switch (action.type) {
      case ActionTypes.UPDATESEARCHCOUNT:
          return {...state, ['searchCount']: action.searchCount};
      case ActionTypes.UPDATESEARCHNAME:
          return {...state, ['searchName']: action.searchName};
      case ActionTypes.UPDATEBOOKS:
          return {...state, ['books']: action.books};
      case ActionTypes.UPDATEBOOK:
          return {...state, ['book']: action.book};
      case ActionTypes.SHOPPINGCARTADDBOOK:
          let newState = {...state};
          newState.shoppingCart.totalCount += action.bookCount;
          newState.shoppingCart.totalPrice = Number(parseFloat(newState.shoppingCart.totalPrice+action.bookPrice).toFixed(2));

          newState.shoppingCart.books.push({
              bookId: action.bookId,
              bookImage: action.bookImage,
              bookTitle: action.bookTitle,
              bookPrice: action.bookPrice
          });
          return newState;
      case ActionTypes.SHOPPINGCARTDELETEBOOK:
          let state2 = {...state};
          state2.shoppingCart.totalCount -= action.bookCount;
          state2.shoppingCart.totalPrice = Number(parseFloat(state2.shoppingCart.totalPrice-action.bookPrice).toFixed(2));
          state2.shoppingCart.books = removeBookFromBookList(state2.shoppingCart.books, action.bookId);
          return state2;
      case ActionTypes.TOGGLESHOPPINGCARTMODAL:
          let state1 = {...state};
          state1.shoppingCart.modal = !state.shoppingCart.modal;
          return state1;
      case ActionTypes.SELECTPAGE:
          return {
              ...state,
              ['pageBookBegin']: state.pageBookSize*(action.pageNumber-1),
              ['pageBookEnd']: state.pageBookSize+state.pageBookSize*(action.pageNumber-1)
          };
      default:
          return state
  }
}