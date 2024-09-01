import React from "react";

export default function RadioButton({ filter, setFilter }) {

    function handleFilterChange(event) {
        setFilter(event.target.value); // Atualiza o estado do filtro quando o usuário seleciona uma nova opção
    }

    return (
        <fieldset className="flex justify-between w-3/4">
            <div>
                <input 
                    type="radio" 
                    id="all" 
                    name="filter" 
                    value="all" 
                    checked={filter === 'all'} 
                    onChange={handleFilterChange} 
                />
                <label htmlFor="all">Todas</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    id="open" 
                    name="filter" 
                    value="open" 
                    checked={filter === 'open'} 
                    onChange={handleFilterChange} 
                />
                <label htmlFor="open">Abertas</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    id="close" 
                    name="filter" 
                    value="closed" 
                    checked={filter === 'closed'} 
                    onChange={handleFilterChange} 
                />
                <label htmlFor="close">Fechadas</label>
            </div>
        </fieldset>
    );
}
