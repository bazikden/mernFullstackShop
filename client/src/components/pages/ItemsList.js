import React, {useEffect, useState} from 'react'
import ItemCard from './card/Card'
import {smile} from '../../images/images'
import Loader from 'react-loader-spinner'
import PaginationBar from "../PaginationBar/PaginationBar";

const styles = {
    loader: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: '10'
    }
}

const ItemsList = ({items, addAllItems, isLoading}) => {

    useEffect(() => {
        addAllItems()
    }, [addAllItems])

    return (
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
                    items.docs && items.docs.map(item => (
                        <ItemCard
                            key={item._id}
                            id={item._id}
                            category={item.category}
                            name={item.name}
                            price={item.price || 0}
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

export default ItemsList
