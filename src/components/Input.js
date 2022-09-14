import React from "react";
import { FaSearch } from 'react-icons/fa';
import './input.module.css';



const Input = ({text, submit}) => {
    return(
        <form className="input" onSubmit={submit}>
            <input type="text" placeholder="Ingrese la ubicacion" className="input-value" onChange/>
            <span className="input-icon">
                <FaSearch/>
            </span>
        </form>
    );
}

export default Input;