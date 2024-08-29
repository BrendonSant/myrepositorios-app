import React from "react";
import { FaTrash } from 'react-icons/fa';



export default function DeleteRepo({onClick}){

    return(
        <div onClick={onClick} className=' p-2 mr-3 cursor-pointer' type='button'>
            <FaTrash size={14} className=' hover:fill-gray-500' />
        </div>
    );
 
}