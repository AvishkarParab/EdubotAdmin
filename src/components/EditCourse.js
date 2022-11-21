import { React,useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import Navbar from "./Navbar"



const AddCourse = () => {
  var location = useLocation();
  var navigate = useNavigate()

  const [coursedata,setCourseData] = useState({
    name:location.state.course.cname,module:location.state.course.tot_module
  });
  
  async function updateCourse(){
      try {
        var response = await axios.put("https://bot.creativeknox.com/course/update",{
          id:location.state.course.id,
          cname:coursedata.name,
          module:coursedata.module
        });
        console.log(response.data.result);
        navigate("/course")
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <>
      <Navbar/>
      <Container>
        <h2 className='text-center mt-3'>EDIT COURSE PAGE</h2>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Course Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the course"
              onChange={(e)=>{setCourseData({...coursedata,name:e.target.value})}}
              value={coursedata.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Total Modules</Form.Label>
            <Form.Control type="text" placeholder="No. of modules/topics"
              onChange={(e)=>{setCourseData({...coursedata,module:e.target.value})}}
              value={coursedata.module}
            />
          </Form.Group>

          <Button variant="primary" type="button"
           onClick={updateCourse} >
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddCourse;
