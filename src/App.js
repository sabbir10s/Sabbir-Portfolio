import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/Projects/ProjectDetails';


function App() {

  return (
    <div className='bg-neutral'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projectDetails/:projectId' element={<ProjectDetails />} />
      </Routes>

    </div>
  );
}

export default App;
