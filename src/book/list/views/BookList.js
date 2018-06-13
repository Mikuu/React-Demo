import React from 'react';
import ItemComponent from './Item.js';

class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeCount = this.onChangeCount.bind(this);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.getBooks = this.getBooks.bind(this);

        this.state = {books: [], count: 1};
    }

    componentDidMount() {
        console.log("FBI --> +DidMount Count: "+this.state.count);
        this.getBooks();
        console.log("FBI --> -DidMount Count: "+this.state.count);
    }

    getBooks() {
        const apiUrl = 'v2/book/search?q=react&count='+this.state.count;
        console.log("FBI --> Get Books: apiUrl "+apiUrl);


        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            console.log("FBI --> Get Books: response "+response.status);

            response.json().then((responseJson) => {
                this.setState({books: responseJson.books}, () => {
                    console.log("FBI --> Get Books: "+this.state.count+" "+this.state.books);
                });
            }).catch((error) => {
                this.setState({books: []});
            });
        }).catch((error) => {
            console.log("FBI --> Get Books: error "+error.toString());

            this.setState({books: []});
        });
    }

    onChangeCount(e) {
        this.setState({count: e.target.value});
    }

    onSubmitSearch() {
        console.log("FBI --> -onSubmitSearchCount "+this.state.count);
        this.getBooks();
        console.log("FBI --> +onSubmitSearchCount "+this.state.count);
    }

    render() {
        if (!this.state.books) {
            return <div>T_T</div>;
        }

        const styleList = {
            margin: '35px',
            listStyleType: 'none',
        };

        const bookList = this.state.books.map((book) =>
            <li key={book.id}>
                <ItemComponent image={book.image} title={book.title} price={book.price} />
            </li>
        );

        return (
            <div>
                <form onSubmit={this.onSubmitSearch}>
                    <label>
                        Count:
                        <input type="text" onChange={this.onChangeCount} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <ul style={styleList}>{bookList}</ul>
            </div>

    )
    }
}

export default BookList;