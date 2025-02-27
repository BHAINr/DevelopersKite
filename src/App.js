import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Components/JavaScript/Home';
import Navbar from './Components/JavaScript/Navbar';
import AWSServicesPage from './Components/JavaScript/AWSServicesPage';
import AboutUs from './Components/JavaScript/AboutUs';
import ContactForm from './Components/JavaScript/ContactForm';
import ChatBox from './Components/JavaScript/ChatBox';
 import CloudService from './Components/JavaScript/CloudService';
import Footer from './Components/JavaScript/Footer';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/awsservices" element={<AWSServicesPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/cd" element={<CloudService/>} />
      </Routes>
      <ChatBox/>
      <Footer/>
    </Router>
   
  );
}

export default App;
