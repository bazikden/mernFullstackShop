import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ItemCard = ({name,src,category}) => {
  return (
    <div  className='mx-1  mb-3'>
      <Card className='border-2 rounded'>
        <CardImg top width="100%" src={src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{category}</CardTitle>
            <CardSubtitle>{name}</CardSubtitle>
          <CardText>Price</CardText>
          <Button className='w-100' color='primary'>Buy</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemCard;