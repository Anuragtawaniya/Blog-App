import React, { useState } from "react";
import style from "../style.css";
import {FaBars,FaTimes} from "react-icons/fa";
import {Route,Switch} from "react-router-dom";
import About from "./about";
import Post from "./post";
import Home from "./home";
import {useRef} from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar(){



    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home</Link>
      <Link class="nav-item nav-link" to="/post">Post</Link>
      <Link class="nav-item nav-link" to="/about">about</Link>

    </div>
  </div>
</nav>
    )
}
export default Navbar;