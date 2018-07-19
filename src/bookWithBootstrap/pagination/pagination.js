import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import {connect} from 'react-redux';
import * as Actions from "../reduxComponents/Actions";
import React from 'react';

const BooksPagination = (props) => {
    return (
        <div style={{paddingLeft:'30px'}}>
            <Pagination total={props.total} onChange={props.onSelect}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        total: state.books.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: (pageNumber) => {
            dispatch(Actions.selectPage(pageNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPagination);