import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../reduxComponents/Actions';
import {Link} from 'react-router-dom';
import icons from '../../assets';
import ShoppingCartModal from './ShoppingCartModal';

function TopBar(props, context) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light">

                        <div className="navbar-brand">Book Name</div>
                        <input className="mr-sm-2" type="text" defaultValue={props.searchName} onChange={props.onChangeSearchName}/>
                        <div className="navbar-brand">Book Count</div>
                        <input className="mr-sm-2" type="number" defaultValue={props.searchCount} onChange={props.onChangeSearchCount}/>

                        <Link to="/books">
                            <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={props.onSubmit}>
                                Search
                            </button>
                        </Link>

                        <ul className="navbar-nav ml-md-auto">

                            <li className="nav-item active" >
                                <a className="navbar-brand" href="#" onClick={props.onClickShoppingCart}>
                                    <img src={icons.shoppingCartNav} style={{width:"30px", height:"30px"}}/>
                                </a>
                                <span className="navbar-brand">{props.shoppingCart.totalCount}</span>
                                <ShoppingCartModal/>
                            </li>

                            <li className="nav-item active">
                                <a className="navbar-brand">
                                    <img src={icons.bills} style={{width:"30px", height:"30px"}}/>
                                </a>
                                <span className="navbar-brand">{props.shoppingCart.totalPrice}</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        books: state.books,
        searchName: state.searchName,
        searchCount: state.searchCount,
        shoppingCart: {
            totalCount: state.shoppingCart.totalCount,
            totalPrice: state.shoppingCart.totalPrice
        }
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
        },
        onClickShoppingCart: () => {
            dispatch(Actions.toggleShoppingCartModal());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));