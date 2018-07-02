import React from 'react';
import {Link} from 'react-router-dom';

const ItemComponent = (props) => {

  const styleItem = {
      margin: '20px',
      padding: '10px',
      width: '250px',
      // height: '300px',

      borderWidth: '2px',
      borderColor: '#98AFC7',
      borderStyle: 'solid'
  };

  const urlBookDetail = '/detail/'+props.id;

  return (
      <div style={styleItem}>
          <Link to={urlBookDetail}>
              <img src={props.image} width={'220px'} height={'300px'} />
              <p>{props.title}</p>
              <p>{props.price}</p>
          </Link>
      </div>
  );
};

export default ItemComponent;
