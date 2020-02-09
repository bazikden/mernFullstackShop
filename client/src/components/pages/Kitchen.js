import React from "react";
import ItemsList from "./ItemsList";
import {connect} from "react-redux";
import {addAllKitchen} from "../../redux/actions/kitchenActions";

const Kitchen = (props) => {
    return <ItemsList addAllItems={props.addAllKitchen} {...props} />
}

const mapStateToProps = state => ({
    items: state.kitchen.items,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, {addAllKitchen})(Kitchen)