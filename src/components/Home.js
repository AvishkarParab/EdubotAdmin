import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "./Navbar"
import Container from 'react-bootstrap/Container';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Container className='mt-3'>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Your Response</Form.Label>
            <Form.Control type="text" placeholder="This is my expample Response" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Keyword</Form.Label>
            <Form.Control type="text" placeholder="Format:- Course_Question" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Display name for coressponding keyword" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Enter Suggestion</Form.Label>
            <Form.Control type="text" placeholder="Sugesstions for Qustion" />
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Home