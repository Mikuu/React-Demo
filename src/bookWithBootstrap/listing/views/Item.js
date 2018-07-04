import React from 'react';
import {Link} from 'react-router-dom';

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
                <span className="badge badge-info">{props.price}</span>

            </div>
        </div>
    )
};

export default ItemComponent;
