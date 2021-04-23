import React from 'react';
import { CardImg } from 'reactstrap';

const Example = ({ name, img, age, text }) => {
  return (
    <>
      <div class='flip-card card-container'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <CardImg src={img} />
          </div>
          <div class='flip-card-back card-back'>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
