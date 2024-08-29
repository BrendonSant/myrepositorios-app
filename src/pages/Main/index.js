import React from "react";
import 'C:/Users/brend/myrepositorios-app/src/index.css';
import {FaGithub} from 'react-icons/fa';
import Form from "./Form";


export default function Main(){
    return(
        <div className=" flex  max-w-3xl bg-white h-52 mx-6 flex-col w-1/4 min-w-80 rounded-lg mt-8">
            <div className=" flex justify-center mb-4 mt-6">
                <FaGithub size={25} />
                <h1 className=" mx-4">Meus Repositorios</h1>
            </div>
            
            
            <Form  />
                
            

        </div>
        
    );
}