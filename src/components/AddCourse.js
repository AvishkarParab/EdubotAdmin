import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const AddCourse = () => {
  var navigate = useNavigate();

  const [coursedata, setCourseData] = useState({
    name: "",
    module: "",
  });

  async function addCourse() {
    try {
      var response = await axios.post("https://bot.creativeknox.com/course/add", {
        cname: coursedata.name,
        module: coursedata.module,
      });
      console.log(response.data.result);
      navigate("/course");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar/>
      <Container>
        <h2 className="text-center mt-3">ADD COURSE PAGE</h2>
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
            <Form.Control
              type="text"
              placeholder="No. of modules/topics"
              onChange={(e)=>{setCourseData({...coursedata,module:e.target.value})}}
              value={coursedata.module}
            />
          </Form.Group>

          <Button variant="primary" type="button"
          onClick={addCourse}>
            ADD
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddCourse;
