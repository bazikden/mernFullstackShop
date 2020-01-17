import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import  ItemCard  from './card/Card'
import { smile } from '../../images/images'
import { addAllFood } from '../../redux/actions/foodActions'


const Food = ({items,addAllFood}) =>{

    useEffect(()=>{
        addAllFood()
    },[])

    return(
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-around'>

                {
                    items.map(item =>(
                        <ItemCard key={item._id} name={item.name} src={smile}/>
                    ))
                }
            </div>
            
        </div>
    )
}

const mapStateToProps = state =>({
    items:state.food.items
})

export default connect(mapStateToProps,{addAllFood})(Food)