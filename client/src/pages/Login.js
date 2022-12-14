import React, {  useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button } from 'react-bulma-components';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../pages/styles/Login.css';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  

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
      const { data } = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const { token, user } = data.login;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='loginForm'>
      <form className='loginContainer'>
        <Form.Field className='inputInfo bigger'>
          <Form.Label className='bigger'>Username</Form.Label>
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
          <Form.Label className='bigger'>Password</Form.Label>
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
            Login
          </Button>
        </Button.Group>
      </form>
    </div>
  );
};

export default Login;
