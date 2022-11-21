import React from 'react'
import Navbar from "./Navbar"
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import { MdOutlineAddBox,MdInput } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';

import { useNavigate } from "react-router-dom";


const Manage = () => {

const navigate = useNavigate()
  return (
    <>
        <Navbar/>
        <br /><br />

        {/* Course Section   */}
        <Container>
                <h3>Manage Courses</h3>
                <div className='courseDiv'>
                   
                    <Card className='courseCard' onClick={()=>navigate("/addcourse")}>
                        <div className='courseImg'>
                            <MdOutlineAddBox  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center'>Add Course</Card.Title>
                        </Card.Body>
                    </Card>
                    
                    <Card className='courseCard' onClick={()=>navigate("/course")}>
                        <div className='courseImg'>
                            <MdInput  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Get Course</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard' onClick={()=>navigate("/course")}>
                        <div className='courseImg'>
                            <FiEdit  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Edit Course</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard' >
                        <div className='courseImg'>
                            <HiOutlineTrash  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Delete Course</Card.Title>
                        </Card.Body>
                    </Card>

                </div>
                
        </Container>

        {/* Topics Section */}
        <Container>
                <h3>Manage Topics</h3>
                <div className='courseDiv'>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <MdOutlineAddBox  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Add Topics</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <FiEdit  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Edit Topics</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <HiOutlineTrash  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Delete Topics</Card.Title>
                        </Card.Body>
                    </Card>

                </div>
                
        </Container>

        {/* Admin Section */}
        <Container>
                <h3>Manage Admin</h3>
                <div className='courseDiv'>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <MdOutlineAddBox  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Add Admin</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <MdOutlineAddBox  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Edit Admin</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className='courseCard'>
                        <div className='courseImg'>
                            <MdOutlineAddBox  className='courselogo'/>
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center '>Delete Admin</Card.Title>
                        </Card.Body>
                    </Card>

                </div>
                
        </Container>
    </>
  )
}

export default Manage