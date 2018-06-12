import React from 'react';
import Img from 'react-image';

const DetailComponent = (props) => {
  const styleDetail = {
    margin: '20px'
  }

  return (
      <div style={styleDetail}>
        <div><Img src={props.image}></div>
        <div><h3>Title: {props.title}</h3></div>
        <div><h3>Price: {props.price}</h3></div>
        <div></div>
      </div>
  );
};

export default DetailComponent;