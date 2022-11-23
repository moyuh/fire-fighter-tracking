import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import {Form, Button, Icon} from "react-bulma-components"
import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

function Login(){
  
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

return (
    <form className='loginContainer'>
    <Form.Field>
  <Form.Label>Username</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Username" name="username" onChange={handleChange}  />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field> 
<Form.Field>
  <Form.Label>Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" onChange={handleChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Button.Group>
  <Button fullwidth rounded color="primary" onClick= {handleFormSubmit}>Login</Button>
</Button.Group>

</form>
);
}

export default Login;