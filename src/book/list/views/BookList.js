import React from 'react';
import ItemComponent from './Item.js';

const storageItem = {
    count: 'reactDemoBookListCount',
    bookName: 'reactDemoBookListBookName',
};

class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._getBooks = this._getBooks.bind(this);

        let _count = localStorage.getItem(storageItem.count);
        let _bookName = localStorage.getItem(storageItem.bookName);
        this.state = {books: [], bookName: _bookName? _bookName:'react', count: _count?_count:1};
    }

    _getBooks() {
        const apiUrl = 'v2/book/search?q='+this.state.bookName+'&count='+this.state.count;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                this.setState({books: responseJson.books});
                localStorage.setItem(storageItem.count, this.state.count.toString());
                localStorage.setItem(storageItem.bookName, this.state.bookName.toString());

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

    onChangeBookName(e) {
        this.setState({bookName: e.target.value});
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
        };

        const styleInput = {
            width: '400px',
            float: 'left',
        };

        const styleInputItem = {
            margin: '5px',
        }

        const styleList = {
            marginLeft: '250px',
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
                    <div style={styleInputItem}>
                        <label>
                            Book Name: <input type="text" defaultValue={this.state.bookName} onChange={this.onChangeBookName} />
                        </label>
                    </div>
                    <div style={styleInputItem}>
                        <label>
                            Count: <input type="number" min={"1"} max={"10"} defaultValue={this.state.count} onChange={this.onChangeCount} />
                        </label>
                    </div>

                    <input type="submit" value="Search" onClick={this.onSubmit}/>
                </div>
                <ul style={styleList}>{bookList}</ul>
            </div>

        )
    }
}

export default BookList;