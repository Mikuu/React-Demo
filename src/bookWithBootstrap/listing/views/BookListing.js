import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../reduxComponents/Actions';
import ItemComponent from './Item.js';

const storageItem = {
    count: 'reactDemoBookListCount',
    bookName: 'reactDemoBookListBookName',
};

function BookListing(props, context) {
    if (!props.books) {
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
    };

    const styleList = {
        marginLeft: '250px',
        listStyleType: 'none',
    };

    const bookList = props.books.map((book) =>
        <li className="list-item list-inline-item" key={book.id}>
            <ItemComponent image={book.image} title={book.title} price={book.price} id={book.id} />
        </li>
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="navbar-brand">Book Name</div>
                        <input className="mr-sm-2" type="text" defaultValue={props.searchName} onChange={props.onChangeSearchName}/>
                        <div className="navbar-brand">Book Count</div>
                        <input className="mr-sm-2" type="number" defaultValue={props.searchCount} onChange={props.onChangeSearchCount}/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={props.onSubmit}>
                            Search
                        </button>
                    </nav>
                    <ol className="list-unstyled">{bookList}</ol>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        books: state.books,
        searchName: state.searchName,
        searchCount: state.searchCount
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onChangeSearchCount: (e) => {
            dispatch(Actions.updateSearchCount(e.target.value));
        },
        onChangeSearchName: (e) => {
            dispatch(Actions.updateSearchName(e.target.value));
        },
        onSubmit: () => {
            dispatch(Actions.fetchBooks());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);