import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {

  switch (action.type) {
    case ActionTypes.UPDATESEARCHCOUNT:
      return {...state, ['searchCount']: action.searchCount};
    case ActionTypes.UPDATESEARCHNAME:
      return {...state, ['searchName']: action.searchName};
    default:
      return state
  }
}