import React from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



export default function Pagebutton({onClick, text}){
    

    if(text === 'Voltar'){
        const icon = <FaArrowLeft />              
        }else{
        const icon = <FaArrowRight />   
        }
    

    return(


        <button type='button' onClick={onClick}>
           
           <p>{text}</p>
        </button>
    );
 
}