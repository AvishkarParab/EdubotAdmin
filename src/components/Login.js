import {React,useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios"

const Login = () => {

var navigate = useNavigate()
const [userData,setUserData] = useState({
  phone:"",password:""
})

const checkUser = async ()=>{
  try {
    var response = await axios.post("http://localhost:8000/admin/login",{
      username:userData.phone,
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
      <h2 className="text-center mt-3 fw-bold">LOGIN PAGE </h2>
      <br /><br />
        <Form className="mt-3 loginForm" >
          <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3"
          >
          <Form.Control type="text" placeholder="8208093533" value={userData.phone} onChange={(e)=> setUserData({...userData,phone:e.target.value}) } />
          </FloatingLabel><br />
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e)=> setUserData({...userData,password:e.target.value}) }/>
          </FloatingLabel>
          <br />
          <Button variant="primary" type="button" onClick={()=> checkUser()}>
            Login
          </Button>

          <div>
            <span className="text-center text-danger fs-6" ><Link to="/register">Register Now</Link></span>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
