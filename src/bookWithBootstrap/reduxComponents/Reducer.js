import * as ActionTypes from './ActionTypes.js';

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
          newState.shoppingCart.totalPrice += action.bookPrice;
          return newState;
      case ActionTypes.TOGGLESHOPPINGCARTMODAL:
          let state1 = {...state};
          state1.shoppingCart.modal = !state.shoppingCart.modal;

          console.log('FBI --> toggle modal: '+state1.shoppingCart.modal.toString());

          return state1;
      default:
          return state
  }
}