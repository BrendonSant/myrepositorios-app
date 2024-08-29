import React from "react";
import { FaPlus } from 'react-icons/fa';

export default function Button({ loading }) {
    return (
        <button type="submit" className="relative">
            <div className="bg-black ml-1 p-2 h-8 w-8 rounded flex items-center justify-center transition-all duration-300">
                {loading ? (
                    <svg
                        className=" h-4 w-4 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="14"
                            cy="14"
                            r="12"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                ) : (
                    <FaPlus color="white" size={14} />
                )}
            </div>
        </button>
    );
}
