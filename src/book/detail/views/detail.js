import React from 'react';
import Img from 'react-image';

const BookDetail = ({match}) => {
  const styleDetail = {
    margin: '20px'
  };

  return (
      <div style={styleDetail}>
          {/*<Img src={props.image}/>*/}
          {/*<h3>Title: {props.title}</h3>*/}
          {/*<p>Price: {props.price}</p>*/}
          {match.params.bookId}
      </div>
  );
};

export default BookDetail;