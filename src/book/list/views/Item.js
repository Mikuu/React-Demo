import React from 'react';

const ItemComponent = (props) => {
  const styleItem = {
    margin: '20px'
  };

  return (
      <div style={styleItem}>
        <div><img src={props.image} /></div>
        <div><h3>Title: {props.title}</h3></div>
        <div><h3>Price: {props.price}</h3></div>
      </div>
  );
};

export default ItemComponent;
