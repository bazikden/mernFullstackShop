import React, {useEffect, useState} from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {connect} from "react-redux";
import {addAllFood} from "../../redux/actions/foodActions";

const PaginationBar = ({pagesCount, addAllFood, activePage}) => {
    const [pages, setPages] = useState(null)

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= pagesCount; i++) {
            arr.push(i)
        }
        setPages(arr)
    }, [pagesCount])

    const onPageClick = page => {
        addAllFood(page)
    }
    return (
        <Pagination size="md" aria-label="Page navigation example">
            <div className='mx-auto d-flex'>
                <PaginationItem>
                    <PaginationLink first href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#"/>
                </PaginationItem>

                {
                    pages && pages.map((item, i) => (

                        <PaginationItem className={activePage === item ?'active':null} onClick={() => onPageClick(item)}
                                        key={'page_' + i}>
                            <PaginationLink href="#">
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    ))

                }


                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#"/>
                </PaginationItem>
            </div>

        </Pagination>
    );
}

const mapStateToProps = state => {
    return {
        activePage: Number(state.food.items.page)
    }
}

export default connect(mapStateToProps, {addAllFood})(PaginationBar)