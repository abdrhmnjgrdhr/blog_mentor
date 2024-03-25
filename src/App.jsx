import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import Nav from './component/Nav'
import Home from "./pages/Home" 
import Blog from "./pages/Blog" 
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import { info } from 'autoprefixer'
import Footercom from './component/Footer'
export default function App() {

  return (
 <>
 <Router>
 <Nav/>
 <Routes>

  <Route path='/' element={<Home/>}/>
  
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
 </Routes>
 <Footercom/>

 </Router>

 
 
  </>
  )
}
