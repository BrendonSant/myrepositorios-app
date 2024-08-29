import React from "react";
import { FaGithub } from 'react-icons/fa';
import Button from "./Button";  // Certifique-se de que o caminho está correto

export default function Form() {
    return (
        <form className=" flex justify-center">
            <input className="  h-7 rounded border border-gray-400 "  type="text" placeholder=" Adicionar repositorios" />
            <Button />
        </form>
    );
}
