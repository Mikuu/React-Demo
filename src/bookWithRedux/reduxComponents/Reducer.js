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
      default:
          return state
  }
}