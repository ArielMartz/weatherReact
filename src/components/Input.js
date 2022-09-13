import React from "react";
import { FaSearch } from 'react-icons/fa';
import './input.module.css';



const Input = () => {
    return(
        <form className="input">
            <input type="text" placeholder="Ingrese la ubicacion" className="input-value"/>
            <span className="input-icon">
                <FaSearch/>
            </span>
        </form>
    );
}

export default Input;