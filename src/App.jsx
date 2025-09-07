import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Council from './Components/Council/Council';
import Blog from './Components/Blog/Blog';
import Enroll from './Components/Enroll/Enroll';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
      <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path='/council' element = {<Council/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path = '/enroll' element = {<Enroll/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      <Footer />
  </BrowserRouter>
    </>
  );
}
export default App;

