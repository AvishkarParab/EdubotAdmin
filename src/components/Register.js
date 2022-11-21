import {React,useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios"

const Register = () => {

var navigate = useNavigate()
const [userData,setUserData] = useState({
  name:"",email:"",phone:"",password:""
})

const checkUser = async ()=>{
  try {
    var response = await axios.post("https://bot.creativeknox.com/admin/register",{
      name:userData.name,
      email:userData.email,
      phone:userData.phone,
      password:userData.password
  });
  if(response.data)
  navigate("/course")

} catch (error) {
  console.log(error)
}
}


  return (
    <>
      <Container>
      <h2 className="text-center mt-3 fw-bold">REGISTER PAGE </h2>
      <br /><br />
      
        <Form className="mt-3 registerForm" >
        <FloatingLabel
          controlId="floatingInput1"
          label="Full Name"
          className="mb-3"
          >
          <Form.Control type="text" autoComplete="off" placeholder="Avishkar Parab" value={userData.name} onChange={(e)=> setUserData({...userData,name:e.target.value}) } />
          </FloatingLabel><br />
          <FloatingLabel
          controlId="floatingInput2"
          label="Email ID"
          className="mb-3"
          >
          <Form.Control type="email" placeholder="" value={userData.email} onChange={(e)=> setUserData({...userData,email:e.target.value}) } />
          </FloatingLabel><br />
          
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e)=> setUserData({...userData,password:e.target.value}) }/>
          </FloatingLabel>
          <br />
          <FloatingLabel
          controlId="floatingInput3"
          label="Phone Number"
          className="mb-3"
          >
          <Form.Control type="text" placeholder="8208093533" value={userData.phone} onChange={(e)=> setUserData({...userData,phone:e.target.value}) } />
          </FloatingLabel><br />
         
          <Button variant="primary" type="button" onClick={()=> checkUser()}>
            Register
          </Button>

          <div className="mt-2">
            <span className="text-center text-danger fs-6" ><Link to="/">Already a user ? Login Now</Link></span>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Register