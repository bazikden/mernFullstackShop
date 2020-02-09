import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input,Alert} from 'reactstrap';
import axios from 'axios'
import {connect} from "react-redux";
import {Redirect} from "react-router";

const categories ={
    food:["Молочная продукция","Чай","Бакалея","Масло","Хлеб"],
    kitchen:["Металлическая посуда","Пластиковая и стеклянная посуда","Остальное"],
    chemicals:[]
}

const AddItemForm = ({token}) => {

    const [data, setData] = useState({})
    const [errors, setErrors] = useState(null)


    const onFileChange = (e) => {
        setErrors(null)
        setData({...data, file: e.target.files[0]})
    }

    const onInputChange = (e) => {
        setErrors(null)
        setData({...data, [e.target.name]: e.target.value})
    }

    const onCategorySelect = (e) => {
        setErrors(null)
        setData({...data, category: e.target.value.toLowerCase()})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("img", data.file)
        formData.append("category", data.itemCategory)
        formData.append('price', data.price)

        data.category  && axios.post(`/${data.category}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": token
            }
        }).then(res => console.log(res))
            .catch(err => setErrors(err.response.data.msg))
    }

    // if (!token) return <Redirect to="/food"/>
    return (
        <div className='container'>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="select">Select</Label>
                    <Input defaultValue="" onChange={onCategorySelect} type="select" placeholder="Choose a category"
                           name="select"
                           id="select">
                        <option value="" disabled>Choose a category</option>
                        <option>Food</option>
                        <option>Kitchen</option>
                        <option>Chemicals</option>

                    </Input>
                </FormGroup>

                {
                    data && data.category &&
                        <div >
                            <FormGroup>
                                <Label for="itemCategory">Item Category</Label>
                                <Input defaultValue="" onChange={onInputChange} type="select" placeholder="Choose a category"
                                       name="itemCategory"
                                       id="itemCategory">
                                    <option value="" disabled>Choose a category</option>

                                    {
                                        data.category === 'food' && categories.food.map((item, i) => (
                                            <option key={item + i}>{item}</option>
                                        ))}

                                    {
                                        data.category === 'kitchen' && categories.kitchen.map((item, i) => (
                                            <option key={item + i}>{item}</option>
                                        ))}

                                    {
                                        data.category === 'chemicals' && categories.chemicals.map((item, i) => (
                                            <option key={item + i}>{item}</option>
                                        ))}

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={onInputChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Price"
                                    onChange={onInputChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            name="img"
                                            onChange={onFileChange}
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            {
                                                !data.file ?    "Choose file":data.file.name
                                            }
                                        </label>
                                    </div>
                                </div>
                            </FormGroup>
                        </div>

                }




                {errors && <Alert color="danger">{errors}</Alert>}
                <Button  className="mt-3 w-25" type='submit'>Submit</Button>
            </Form>
        </div>

    );
}
const mapStateToProps = state => ({
    token: state.auth.token
})
export default connect(mapStateToProps)(AddItemForm)