import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import icons from '../../assets';
import * as Actions from "../../reduxComponents/Actions";
import {connect} from "react-redux";

const ItemComponent = (props) => {

    const urlBookDetail = '/detail/'+props.id;

    return (
        <div className="card" style={{margin:'20px'}}>
            <Link to={urlBookDetail}>
                <div className="text-center">
                    <img width={'220px'} height={'300px'} src={props.image}/>
                </div>
            </Link>
            <div className="card-block" style={{padding:'8px'}}>
                <h5 className="card-title" style={{width:'220px', height:'30px'}}>{props.title}</h5>
            </div>
            <div className="card-footer">
                <span className="badge badge-info">$ {props.price}</span>
                <a href="#" onClick={props.onOrderBook}>
                    <img className="float-right" src={icons.shoppingCartItem} style={{width:'20px', height:'20px', marginTop: '2.5px'}}/>
                </a>
            </div>
        </div>
    )
};

function mapStateToProps(state, ownProps) {
    return {
        price: ownProps.price.match(/(\d|\.)+/)[0]
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        onOrderBook: () => {
            dispatch(Actions.shoppingCartAddBook(ownProps));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemComponent));