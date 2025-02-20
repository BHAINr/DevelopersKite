import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Components/JavaScript/Home';
import Navbar from './Components/JavaScript/Navbar';
import AWSServicesPage from './Components/JavaScript/AWSServicesPage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/awsservices" element={<AWSServicesPage/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
