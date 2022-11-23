import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import {Form, Button, Icon} from "react-bulma-components"


function Signup(){
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

     if (inputType === 'contactName') {
      setUsername(inputValue);
      
    }
    else if (inputType === 'email') {
      setEmail(inputValue);
      
    }
    else if (inputType === 'password'){
      setPassword(inputValue);
      
    }
  };
return (
    <div className='loginContainer'>
    <Form.Field>
  <Form.Label>Enter Valid Email</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Username" name="username" value={username} onChange={handleInputChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label>Create Username</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Username" name="username" value={username} onChange={handleInputChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label> Create Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" value={password} onChange={handleInputChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label> Repeat Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" value={password} onChange={handleInputChange} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Button.Group>
  <Button fullwidth rounded color="primary" onClick={() => console.log(username)}>Login</Button>
</Button.Group>

</div>
);
}

export default Signup;