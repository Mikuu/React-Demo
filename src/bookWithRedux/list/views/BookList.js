import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../reduxComponents/Actions';
import store from '../../reduxComponents/Store';
import ItemComponent from './Item.js';

const storageItem = {
    count: 'reactDemoBookListCount',
    bookName: 'reactDemoBookListBookName',
};

function BookList({searchName, searchCount, books, onChangeSearchName, onChangeSearchCount, onSubmit}) {
    if (!books) {
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

    const bookList = books.map((book) =>
        <li key={book.id}>
            <ItemComponent image={book.image} title={book.title} price={book.price} id={book.id} />
        </li>
    );

    return (
        <div style={styleContainer}>
            <div style={styleInput}>
                <div style={styleInputItem}>
                    <label>
                        Book Name: <input type="text" defaultValue={searchName} onChange={onChangeSearchName} />
                    </label>
                </div>
                <div style={styleInputItem}>
                    <label>
                        Count: <input type="number" min={"1"} max={"10"} defaultValue={searchCount} onChange={onChangeSearchCount} />
                    </label>
                </div>
                <input type="submit" value="Search" onClick={onSubmit}/>
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

    function getBooks(dispatch) {

        const searchName = store.getState().searchName;
        const searchCount = store.getState().searchCount;

        const apiUrl = 'v2/book/search?q='+searchName+'&count='+searchCount;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                dispatch(Actions.updateBooks(responseJson.books));

                // localStorage.setItem(storageItem.count, this.state.count.toString());
                // localStorage.setItem(storageItem.bookName, this.state.bookName.toString());

            }).catch((error) => {
                console.log('FBI --> Error Response: ' + error.toString());
                throw new Error('Fail to get response with status ' + response.status);
            });

        }).catch((error) => {
            console.log('FBI --> Error: ' + error.toString());
        });
    }

    return {
        onChangeSearchCount: (e) => {
            dispatch(Actions.updateSearchCount(e.target.value));
        },
        onChangeSearchName: (e) => {
            dispatch(Actions.updateSearchName(e.target.value));
        },
        onSubmit: () => {
            getBooks(dispatch);
            // dispatch(Actions.updateBooks(books));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);