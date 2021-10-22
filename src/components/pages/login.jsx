import React from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";
import app from "../../fb-config";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";


const auth = getAuth(app);

const Logueo = () => {

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{"inicia sesión"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {"inicia sesión"}
          </Button>
        </Form>
      </Stack>
    </Container>
  );
};

export default Logueo;
