import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';


const Container = ({ name, img, age }) => {
  return (
    <div >
      <div className='mt-4'>
        <Card className='card-container'>
          <CardBody className='card-body'>
            <CardTitle tag='h5'>{name}</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              {age}
            </CardSubtitle>
          </CardBody>
          <img width='100%' src={img} alt='Card image cap' />
          <CardBody>
            <CardText></CardText>
            <CardLink href='#'>Card Link</CardLink>
            <CardLink href='#'>Another Link</CardLink>
          </CardBody>
        </Card>{' '}
      </div>
    </div>
  );
};

export default Container;
