import React from "react";
import { FaPlus } from 'react-icons/fa';  // Você importou o ícone FaPlus corretamente?

export default function Button() {
    return (
        <button>
            <div className=" bg-black   ml-1 p-2 rounded ">
                <FaPlus  color="white" size={14} />
            </div>

        </button>
    );
}
