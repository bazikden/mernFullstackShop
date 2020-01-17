import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddItemForm = (props) => {
  return (
    <div className='container'>
            <Form>
            <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Food</option>
                        <option>Kitchen</option>
                        <option>Chemicals</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>

                
                <Button>Submit</Button>
            </Form>
    </div>  

  );
}

export default AddItemForm;