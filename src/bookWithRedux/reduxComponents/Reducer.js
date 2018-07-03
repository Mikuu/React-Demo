import * as ActionTypes from './ActionTypes.js';

function getBooks(searchName, searchCount) {
    const apiUrl = 'v2/book/search?q='+searchName+'&count='+searchCount;
    fetch(apiUrl).then((response) => {
        if (response.status !== 200) {
            throw new Error('Fail to get response with status ' + response.status);
        }
        response.json().then((responseJson) => {
            console.log('FBI --> fetch.books: '+responseJson.books);
            return responseJson.books;
            // localStorage.setItem(storageItem.count, this.state.count.toString());
            // localStorage.setItem(storageItem.bookName, this.state.bookName.toString());

        }).catch((error) => {
            this.setState({books: []});
        });

    }).catch((error) => {
        this.setState({books: []});
    });
}

export default (state, action) => {

  switch (action.type) {
      case ActionTypes.UPDATESEARCHCOUNT:
          return {...state, ['searchCount']: action.searchCount};
      case ActionTypes.UPDATESEARCHNAME:
          return {...state, ['searchName']: action.searchName};
      case ActionTypes.UPDATEBOOKS:
          const books = getBooks(state.searchName, state.searchCount);
          console.log('FBI --> books: '+books);
          const _state = {...state, ['books']: books};

          console.log('FBI --> state.books: '+state.books);
          return _state;
      default:
          return state
  }
}