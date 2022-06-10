import React from 'react'
import { BsCartFill } from "react-icons/bs";
import './NavBar.css'

const NavBar = ({greetings}) => {
    return (
        <div> <h2> {greetings} </h2> 
        <BsCartFill />

        <p className= "inicio">Inicio</p>
        <p className= "productos">Productos</p>
        <p className= "cotacto">Contacto</p>
        <p className= "quienesSomos">Quiénes Somos</p>
        </div>
    );
};

export default NavBar