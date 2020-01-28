import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import  ItemCard  from './card/Card'
import { smile } from '../../images/images'
import { addAllFood } from '../../redux/actions/foodActions'
import Loader from 'react-loader-spinner'
import PaginationBar from "../PaginationBar/PaginationBar";

const styles ={
    loader:{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        zIndex:'10'
    }
}

const Food = ({items,addAllFood,isLoading}) =>{
    useEffect(()=>{
        addAllFood()
    },[addAllFood])

    return(
        <div className='container'>
            {
                isLoading && <Loader style={styles.loader} type="Circles" color="blue" height={280} width={280}/>
            }
            {
                items.pages && <PaginationBar pagesCount={items.pages}/>
            }
            <div
             className='d-flex flex-wrap justify-content-around'>
                {
                    items.docs && items.docs.map(item =>(
                        <ItemCard
                            key={item._id}
                            category={item.category}
                            name={item.name}
                            src={item.img || smile}
                        />
                    ))
                }
            </div>

            {
                items.pages && <PaginationBar pagesCount={items.pages}/>
            }
            
        </div>
    )
}

const mapStateToProps = state =>({
    items:state.food.items,
    isLoading: state.auth.isLoading
})

export default connect(mapStateToProps,{addAllFood})(Food)