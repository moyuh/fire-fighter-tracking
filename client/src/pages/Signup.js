import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import {Form, Button, Icon} from "react-bulma-components"
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(){
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        password: formState.password,
       
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
return (
    <form className='loginContainer' onSubmit={handleFormSubmit}>
<Form.Field>
  <Form.Label>Create Username</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Username" name="username" onChange={handleChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label> Create Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" onChange={handleChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label> Repeat Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" onChange={handleChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Button.Group>
  <Button fullwidth rounded color="primary" >Login</Button>
</Button.Group>

</form>
);
}

export default Signup;