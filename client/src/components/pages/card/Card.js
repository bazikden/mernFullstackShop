import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {connect} from "react-redux";
import {addToCart} from "../../../redux/actions/cartActions";
import { useLocation} from "react-router";
import {delCardItem} from "../../../redux/actions/cardActions";
import {getInfo} from "../../../redux/actions/authActions";

const styles = {
    del:{
        position:'absolute',
        right:0,
        cursor:"pointer"
    }
}


const ItemCard = ({name, src, category, id, price,addToCart,delCardItem,token,page,getInfo}) => {
    const location = useLocation()

    const onClick = () => {
        const data = {name, category, id, price}
        addToCart(data)
    }

    const onDelClick = (id) =>{
        debugger
        !token?
            getInfo('Please Log In')
            :
        delCardItem(id,location.pathname,token,page)
    }
    return (
        <div className='mx-1  mb-3'>
            <Card className='border-2 rounded'>
                <div style={styles.del} onClick={()=>onDelClick(id)}>&#10006;</div>
                <CardImg top style={{minWidth: "295px",height:"235px"}} src={src} alt="Card image cap"/>
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

const mapStateToProps = state => ({
    token:state.auth.token
})

export default connect(mapStateToProps,{addToCart,delCardItem,getInfo})(ItemCard)