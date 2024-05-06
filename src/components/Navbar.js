import React from "react";

export default function Navbar() {
  return (
    <header class="header">
        <a href="#" class="logo">Portfolio</a>
        
        <i class="fa fa-bars" aria-hidden="true" id="menu-icon"></i>


        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            {/* <a href="#about">About</a> */}
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    );
}