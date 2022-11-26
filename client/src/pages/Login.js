import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { Form, Button, Icon } from "react-bulma-components";
import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import "../pages/styles/Login.css"
function Login() {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
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
    <div className="loginForm">
      <form className="loginContainer">
        <Form.Field className="inputInfo bigger">
          <Form.Label className="bigger">Username</Form.Label>
          <Form.Control className="bigger">
            <Form.Input
              className="med"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            {/* <Icon align="left">
      <i className="github" />
    </Icon> */}
          </Form.Control>
        </Form.Field>
        <Form.Field
        className="inputInfo bigger">
          <Form.Label className="bigger">Password</Form.Label>
          <Form.Control>
            <Form.Input
             className="med"
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            {/* <Icon align="left">
      <i className="github" />
    </Icon> */}
          </Form.Control>
        </Form.Field>
        <Button.Group>
          <Button className="button fire" onClick={handleFormSubmit}>
            Login
          </Button>
        </Button.Group>
      </form>
      </div>
  );
}

export default Login;
