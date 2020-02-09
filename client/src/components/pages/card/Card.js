import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {connect} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";

const ItemCard = ({name, src, category, id, price,addToCart}) => {
    const onClick = () => {
        const data = {name, category, id, price}
        addToCart(data)
    }
    return (
        <div className='mx-1  mb-3'>
            <Card className='border-2 rounded'>
                <CardImg top style={{minWidth: "295px"}} src={src} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{category}</CardTitle>
                    <CardSubtitle>{name}</CardSubtitle>
                    <CardText>Price {price}</CardText>
                    <Button onClick={onClick} className='w-100' color='primary'>Buy</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default connect(null,{addToCart})(ItemCard)