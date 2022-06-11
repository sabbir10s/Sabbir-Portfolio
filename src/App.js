import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/Portfolio/ProjectDetails';


function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projectDetails/:projectId' element={<ProjectDetails />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
