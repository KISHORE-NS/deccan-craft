
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Product from './pages/product/Product'
import Contact from './pages/contact/Contact'
import ScrollToTop from './components/ScrollToTop'


function App(){

  return(

     <>
    <ScrollToTop/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </>
  )
}

export default App