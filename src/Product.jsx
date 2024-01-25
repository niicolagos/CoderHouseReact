import React from 'react'

const Product = (props) => {
  return (
    <div>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Product
