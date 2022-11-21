import {React, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom';
import axios from "axios"

const Module = () => {

let location = useLocation()
const [modules,setModules] = useState([]);

useEffect(() => {
    const getmodule = async()=>{
        try {
            var response = await axios.get(`https://bot.creativeknox.com/module/?cid=${location.state.cid}`);
            console.log(response.data.result);
            setModules(response.data.result)

        } catch (error) {
            console.log(error);
            setModules("")

        }
    }
    getmodule();
}, [location.state.cid])


  return (
    <>
        <Navbar/>
        <Container>
            <h2 className='text-center mt-3'>MODULE LIST</h2>
            <br />
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Module Type</th>
                    <th>Video Link</th>
                    <th>Image File</th>
                    <th>Question</th>
                    <th>Option 1</th>
                    <th>Option 2</th>
                    <th>Option 3</th>
                    <th>Option 4</th>
                    <th>Correct Option</th>

                    </tr>
                </thead>
                <tbody>

                {(!modules)?
                    <tr>
                        <td colSpan={10}>NO RESULTS FOUND</td>
                    </tr>
                    :
                    modules.map((elem)=>{
                       return(
                        <tr key={elem.id}>
                        <td>{elem.id}</td>
                        <td>{elem.mtype}</td>
                        <td 
                            style={{"cursor":"pointer","color":"blue"}}
                            onClick={()=>{window.open(elem.videolink)}}>
                            {elem.videolink}
                        </td>
                        <td style={{"cursor":"pointer","color":"blue"}}>
                            {/* {elem.image}  */}
                            {elem.mtype === "image"?
                            <a href="https://play-lh.googleusercontent.com/KtFwMsqVzBBpTFc8vR5SZRCNBvqknlWurnzTRl4J-2kdZhoM04LjklX9Vh8pl-fYfpU" target="_blank" rel="noopener noreferrer">Yes me</a>
                            :""
                            }    
                        </td>
                        <td>{elem.question}</td>
                        <td>{elem.option1}</td>
                        <td>{elem.option2}</td>
                        <td>{elem.option3}</td>
                        <td>{elem.option4}</td>
                        <td>{elem.correctopt}</td>
                        </tr>
                       )

                    })}
                   
                    
                </tbody>
            </Table>

        </Container>
    </>
  )
}

export default Module