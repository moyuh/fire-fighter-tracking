import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Icon } from 'react-bulma-components';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './styles/Login.css';

function Signup() {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });

      const { token, user } = data.addUser;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='loginForm'>
      <form className='loginContainer' onSubmit={handleFormSubmit}>
        <Form.Field className='inputInfo bigger'>
          <Form.Label className='bigger'>Create Username</Form.Label>
          <Form.Control className='bigger'>
            <Form.Input
              className='med'
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className='inputInfo bigger'>
          <Form.Label className='bigger'> Create Password</Form.Label>
          <Form.Control>
            <Form.Input
              className='med'
              placeholder='Password'
              name='password'
              type='password'
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className='inputInfo bigger'>
          <Form.Label className='bigger'> Repeat Password</Form.Label>
          <Form.Control>
            <Form.Input
              className='med'
              placeholder='Password'
              name='password'
              type='password'
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>
        <Button.Group>
          <Button className='button fire' onClick={handleFormSubmit}>
            Sign Up
          </Button>
        </Button.Group>
      </form>
    </div>
  );
}

export default Signup;
