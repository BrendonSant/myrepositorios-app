import React from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



export default function Pagebutton({onClick, text, page}){
    
    const isDisabled = text === 'Voltar' && page === 1;

    if (text === 'Voltar'){
        return(
            <button
            disabled={isDisabled}
            className={`flex mx-1 items-center hover:underline ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            type='button'
            onClick={onClick}
        >
            <FaArrowLeft/>  
            <p>{text}</p>  
            </button>
        );
                 
        }else{
            return(
                <button  className=" flex mx-1 items-center hover:underline" type='button' onClick={onClick}>
                   
                <p>{text}</p>
                <FaArrowRight /> 
                </button>
            )  ;
        }
    

    
 
}