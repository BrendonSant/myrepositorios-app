import React from "react";
import { FaSpinner } from 'react-icons/fa';


export default function Loading(){
    return (
        
            <div className=" flex justify-center items-center  h-screen">
                        < FaSpinner className="animate-spin mx-4" size={24} />
                        <h1 className=" text-base font-sans ">Carregando...</h1>
            </div>
            
    );
   
}