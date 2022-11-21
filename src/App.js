import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';
import AddCourseModule from './components/AddCourseModule';
import Module from './components/Module';
import Register from './components/Register';
import Manage from './components/Manage';



function App() {
  return <BrowserRouter>
     <Routes>
      <Route path="/" element= {<Login/>} />
      <Route path="/register" element= {<Register/>} />
      <Route path="/home" element= {<Home/>} />
      <Route path="/manage" element= {<Manage/>}  />
      <Route path="/course" element= {<Course/>} />
      <Route path="/addcourse" element= {<AddCourse/>} />
      <Route path="/editcourse" element= {<EditCourse/>} />
      <Route path="/addmodule" element= {<AddCourseModule/>} />
      <Route path="/module" element= {<Module/>} />

     </Routes>
    </BrowserRouter>

}

export default App;
