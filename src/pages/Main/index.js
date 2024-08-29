import React, {useState} from "react";
import '../../index.css';
import {FaGithub} from 'react-icons/fa';
import Form from "./Form";
import Lists from "./Lists";


export default function Main() {

    const [repositorios,setRepositorios] = useState([]);

    return(
        <div className=" flex  max-w-3xl bg-white h-52 mx-6 flex-col w-2/3 min-w-80 rounded-lg mt-8">
            <div className=" flex justify-center mb-4 mt-6 items-center ">
                <FaGithub size={25} />
                <h1 className=" mx-4 font-sans text-xl font-semibold ">Meus Repositorios</h1>
            </div>
            
            
            <Form repositorios={repositorios} setRepositorios={setRepositorios}/>
            <Lists repositorios={repositorios} setRepositorios={setRepositorios} />    
            

        </div>
        
    );
}