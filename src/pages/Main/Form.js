
import React, {useState, useCallback} from "react";

import Button from "./Button";  // Certifique-se de que o caminho está correto

import api from '../../services/api';
export default function Form() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = useCallback((e) =>{
        e.preventDefault();

        async function submit(){
            setLoading(true);
            try{
                const response = await api.get(`repos/${newRepo}`);

                const data = {
                    name: response.data.full_name,
                }

                setRepositorios([...repositorios, data]);
                setNewRepo('');
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
            
        
        }

        submit();
    }, [newRepo, repositorios]);
       
    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    return (
        <form className=" flex justify-center" onSubmit={handleSubmit}>
            <input className="  h-7 rounded border border-gray-400 "  type="text" 
            placeholder=" Adicionar repositorios"
            value={newRepo}
            onChange={handleinputChange}
             />
            <Button loading={loading} />
        </form>
    );
}
