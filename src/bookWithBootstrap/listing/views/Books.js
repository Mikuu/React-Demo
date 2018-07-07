import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemComponent from './Item.js';

function Books(props) {

    const bookList = props.books.map((book) =>
        <li className="list-item list-inline-item" key={book.id}>
            <ItemComponent image={book.image} title={book.title} price={book.price} id={book.id} />
        </li>
    );

    return (
        <ol className="list-unstyled">{bookList}</ol>
    )
}

function mapStateToProps(state) {
    return {
        books: state.books,
    }
}

export default withRouter(connect(mapStateToProps)(Books));