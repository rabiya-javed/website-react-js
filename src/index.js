import React from 'react'
import ReactDom from 'react-dom'
import Home from './Pages/Home';
import Prduct from './Pages/Prduct';
import './index.css'
import Categories from './Pages/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menubar from './Components/Navbar'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
function Greeting() {
  return <>

 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Prduct/>} />
      <Route path="/Productcategories/:items" element={<Categories/>} />

    </Routes>
  </BrowserRouter>
  </>
}
ReactDom.render(<Greeting />, document.getElementById('root'));
