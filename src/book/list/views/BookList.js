import React from 'react';
import ItemComponent from './Item.js';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: null};
  }

  componentDidMount() {
    const apiUrl = 'v2/book/search?q=react&count=2';
    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        this.setState({books: responseJson.books});
      }).catch((error) => {
        this.setState({books: null});
      });
    }).catch((error) => {
      this.setState({books: null});
    });
  }

  render() {
    if (!this.state.books) {
      return <div>T_T</div>;
    }

    const styleList = {
        margin: '35px'
    };

    const bookList = this.state.books.map((book) =>
        <li key={book.id}>
            <ItemComponent image={book.image} title={book.title} price={book.price} />
        </li>
    );

    return (
      <ul>{bookList}</ul>
    )
  }
}

export default BookList;