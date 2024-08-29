import React from "react";
import { FaPlus } from 'react-icons/fa';  // Você importou o ícone FaPlus corretamente?

export default function Button() {
    return (
        <button>
            <FaPlus className=" ml-1" color="black" size={14} />
        </button>
    );
}
