import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../reduxComponents/Actions';
import ItemComponent from './Item.js';

const storageItem = {
    count: 'reactDemoBookListCount',
    bookName: 'reactDemoBookListBookName',
};

function BookList(props, context) {
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
        <li key={book.id}>
            <ItemComponent image={book.image} title={book.title} price={book.price} id={book.id} />
        </li>
    );

    return (
        <div style={styleContainer}>
            <div style={styleInput}>
                <div style={styleInputItem}>
                    <label>
                        Book Name: <input type="text" defaultValue={props.searchName} onChange={props.onChangeSearchName} />
                    </label>
                </div>
                <div style={styleInputItem}>
                    <label>
                        Count: <input type="number" min={"1"} max={"10"} defaultValue={props.searchCount} onChange={props.onChangeSearchCount} />
                    </label>
                </div>
                <input type="submit" value="Search" onClick={props.onSubmit}/>
            </div>
            <ul style={styleList}>{bookList}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookList);