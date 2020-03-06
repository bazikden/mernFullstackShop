import React from "react";
import {foodReducer} from "./redux/reducers/foodReducer";
import {addFoodItem} from "./redux/actions/foodActions";

const state = {
    items: []
}

describe('foodReducer test',()=>{
    test('add item test',()=>{
        const newItem = foodReducer(state,addFoodItem('hello'))
        expect(newItem).toBeInstanceOf(Object)
    })
})