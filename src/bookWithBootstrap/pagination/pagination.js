import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import {connect} from 'react-redux';
import React from 'react';

const BooksPagination = () => {
    return (
        <div>
            <Pagination total={35}/>
        </div>
    );
};



export default connect(null, null)(BooksPagination);