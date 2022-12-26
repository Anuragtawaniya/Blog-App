
import { useEffect, useState } from 'react';
import Home from './home';
import NavBar from './navbar';
import About from './about';
import style from "../style.css";

import Post from './post';
import { Route, Routes } from 'react-router-dom';

const Header = () =>{
return(
  <>
 

<NavBar />


  <div className='container'>
<Routes>
  <Route path="/"  element={<Home />} />
 
  <Route path="/about" element={<About />} />
  <Route path="/post/:id" element={<Post />} />
</Routes>
</div>

  </>
)
}

export default Header;