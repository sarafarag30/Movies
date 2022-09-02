import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar({loginData,logout}) {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center p-3'>
            <ul className=' d-flex align-items-center list-unstyled'>
                <li className='px-2 h1'>
                    <NavLink to="/home">Noxe</NavLink>
                </li>
                {loginData?
                    <>
                    <li className='px-2'>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink to="/tvshows">Tv shows</NavLink>
                    </li>
                    </>:''}
                </ul>
                <ul className='d-flex list-unstyled'>
                    {loginData? <h5>Hello : {loginData.first_name}</h5> : ''}
                    <i className='fab fa-facebook m-2'></i>
                    <i className='fab fa-instagram m-2'></i>
                    <i className='fab fa-youtube m-2'></i>

                    {loginData?
                    <li className='px-2' onClick={logout}>Logout</li> :
                    <>
                    <li className='px-2'>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    </>
                    }
                </ul>
            </div>
    </div>
  )
}
