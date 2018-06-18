import React from 'react';
import ItemComponent from './Item.js';

class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeCount = this.onChangeCount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._getBooks = this._getBooks.bind(this);

        this.state = {books: [], count: 1};
    }

    _getBooks() {
        const apiUrl = 'v2/book/search?q=react&count='+this.state.count;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                this.setState({books: responseJson.books});
            }).catch((error) => {
                this.setState({books: []});
            });
        }).catch((error) => {
            this.setState({books: []});
        });
    }

    componentDidMount() {
        this._getBooks();
    }

    onChangeCount(e) {
        this.setState({count: e.target.value});
    }

    onSubmit() {
        this._getBooks();
    }

    render() {
        if (!this.state.books) {
            return <div>T_T</div>;
        }

        const styleContainer = {
            maxWidth: '800px',
            margin: '0 auto',
        }

        const styleInput = {
            width: '200px',
            float: 'left',
        }

        const styleList = {
            marginLeft: '100px',
            listStyleType: 'none',
        };

        const bookList = this.state.books.map((book) =>
            <li key={book.id}>
                <ItemComponent image={book.image} title={book.title} price={book.price} id={book.id} />
            </li>
        );

        return (
            <div style={styleContainer}>
                <div style={styleInput}>
                    <label>
                        Count:
                        <input type="number" min={"1"} max={"10"} onChange={this.onChangeCount} />
                    </label>
                    <input type="submit" value="Search" onClick={this.onSubmit}/>
                </div>
                <ul style={styleList}>{bookList}</ul>
            </div>

        )
    }
}

export default BookList;