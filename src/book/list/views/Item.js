import React from 'react';

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

  return (
      <div style={styleItem}>
          <img src={props.image} width={'220px'} height={'300px'}/>
          <p>{props.title}</p>
          <p>{props.price}</p>
      </div>
  );
};

export default ItemComponent;
