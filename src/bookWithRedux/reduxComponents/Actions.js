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