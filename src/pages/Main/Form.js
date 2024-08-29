
import React, {useState} from "react";

import Button from "./Button";  // Certifique-se de que o caminho está correto

export default function Form() {

    const [newRepo, setNewRepo] = useState('');

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        console.log(newRepo);
    }

    return (
        <form className=" flex justify-center" onSubmit={handleSubmit}>
            <input className="  h-7 rounded border border-gray-400 "  type="text" 
            placeholder=" Adicionar repositorios"
            value={newRepo}
            onChange={handleinputChange}
             />
            <Button />
        </form>
    );
}
