import React from "react";
import ItemsList from "./ItemsList";
import {connect} from "react-redux";
import {addAllFood} from "../../redux/actions/foodActions";

const Food = (props) =>{
    return <ItemsList addAllItems = {props.addAllFood} {...props} />
}

const mapStateToProps = state =>({
    items:state.food.items,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps,{addAllFood})(Food)