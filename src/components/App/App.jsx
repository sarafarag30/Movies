import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Movies from './../Movies/Movies.jsx';
import Tvshows from '../Tvshows/Tvshows.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Notfound from '../Notfound/Notfound.jsx';
import {Route,Routes } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function App() {
  
  
  let [loginData,setLoginData]=useState(null);

  useEffect(() => {
    if(localStorage.getItem('userData')) // If there is a data in local storage
    {
      getUserData();     // get this data
    }
  }, [])

  function getUserData(){
    let userData=JSON.parse(localStorage.getItem('userData'));    
    setLoginData(userData);
  }

  function logout(){
    localStorage.removeItem('userData');
    setLoginData(null);
    window.location.href='/login';
  }
  return (
    <>
    <Navbar loginData={loginData} logout={logout}/>
    <div className='container py-5'>
       
       <Routes>
        <Route path='/' exact element={<Home/>}></Route>

        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/tvshows' element={<Tvshows/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </div>
    </>
  )
}
