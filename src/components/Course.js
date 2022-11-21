import {React,useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar"
import { FaEdit,FaPlusCircle,FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Course = () => {

var navigate = useNavigate();
const [courses,setCourses] = useState([]);
const [isDelete,setIsDelete] = useState(0)

useEffect(() => {
    const getcourse = async()=>{
        try {
            var response = await axios.get("http://localhost:8000/course/all");
            console.log(response.data.courses);
            setCourses(response.data.courses)

        } catch (error) {
            console.log(error);
            setCourses("")

        }
    }
    getcourse();
}, [isDelete])

async function deleteCourse(id){
    try {
        var response = await axios.delete(`https://bot.creativeknox.com/course/?id=${id}`);
        if(response.data.result)
            setIsDelete(1)
            // navigate("/course");
      } catch (error) {
        console.log(error);
      }
}

  return (
    <>
      <Navbar/>
        <Container className='tableCont'>
            <h2 className='text-center mt-3'>COURSE PAGE</h2>
            <br />
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Total Module</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Add module</th>
                    </tr>
                </thead>
                <tbody>

                {(!courses)?
                    <tr>
                        <td colSpan={10}>NO RESULTS FOUND</td>
                    </tr>
                    :
                    courses.map((elem)=>{
                       return(
                        <tr key={elem._id}>
                        <td>{elem._id}</td>
                        <td>{elem.cname}</td>
                        <td style={{"cursor":"pointer","color":"blue"}}
                        onClick={()=>{navigate("/module",{state:{cid:elem.id}})}}>
                        <strong>{elem.topicIds.length}</strong>
                        </td>
                        <td className='d-flex justify-content-center align-items-center'> 
                            <Button className='btn' variant="" type="button"
                                onClick={()=>{navigate("/editcourse",{state:{course:elem}})}}>
                                <FaEdit className='fs-5 text-warning'/>
                            </Button> </td>
                        <td>
                            <Button variant="" type="button"
                            onClick={()=>{deleteCourse(elem.id)}}>
                                <FaTrashAlt className='fs-5 text-danger'/>
                            </Button>
                        </td>
                        <td>
                            <Button variant="" type="button"
                            onClick={()=>{navigate("/addmodule",{state:{cid:elem.id}})}}>
                                <FaPlusCircle className='fs-5 text-success'/>
                            </Button>
                        </td>
                        </tr>
                       )

                    })}
                </tbody>
            </Table>

        </Container>
        
    </>
  )
}

export default Course