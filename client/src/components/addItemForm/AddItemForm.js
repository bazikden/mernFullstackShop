import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios'

const AddItemForm = (props) => {
    const [data, setData] = useState({})
    const onFileChange = (e) => {
        setData({...data, file: e.target.files[0]})
        console.log(e.target.files[0])
    }
    const onInputChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onCategorySelect = (e) => {
        setData({...data, category: e.target.value.toLowerCase()})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("img", data.file)
        formData.append("category", data.itemCategory)


        axios.post('/food', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => console.log(res))
    }

    return (
        <div className='container'>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input onChange={onCategorySelect} type="select" placeholder="Chose a category" name="select" id="exampleSelect">
                        <option>Food</option>
                        <option>Kitchen</option>
                        <option>Chemicals</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="itemCategory">Item Category</Label>
                    <Input
                        type="text"
                        name="itemCategory"
                        id="itemCategory"
                        placeholder="itemCategory"
                        onChange={onInputChange}
                    />
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
                                Choose file
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Upload
                    </button>
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        </div>

    );
}

export default AddItemForm;