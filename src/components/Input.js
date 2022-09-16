import React from "react";
import { FaSearch } from 'react-icons/fa';
import './input.module.css';



const Input = ({text, submit}, {func}) => {
    return(
        <form className="input" onSubmit={submit}>
            <input type={"text"} placeholder="Please enter location" className="input-value" onChange={text}/>
            <span className="input-icon" onClick={func}>
                <FaSearch/>
            </span>
        </form>
    );
}

export default Input;