
import React, {useState, useCallback} from "react";

import Button from "./Button";  // Certifique-se de que o caminho está correto

import api from '../../services/api';
export default function Form({repositorios,setRepositorios}) {

    const [newRepo, setNewRepo] = useState('');
    
    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState(null);


    const handleSubmit = useCallback((e) =>{
        e.preventDefault();

        async function submit(){
            setLoading(true);
            setAlert(null);
            try{

                if(newRepo === ''){
                    throw new Error('Voce precisa indicar um repositorio!');
                }


                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositorios.find(repo => repo.name === newRepo);
                if(hasRepo){
                    throw new Error('Repositorio Duplicado');
                }

                const data = {
                    name: response.data.full_name,
                }

                setRepositorios(prevRepos => [...prevRepos, data]);
                setNewRepo('');
            }catch(error){
                setAlert(true);
                console.log(error);
            }finally{
                setLoading(false);
            }
            
        
        }

        submit();
    }, [newRepo, setRepositorios]);
       
    function handleinputChange(e){
        setNewRepo(e.target.value);
        setAlert(null);
    }

    return (
        <form  className=" flex justify-center items-center" onSubmit={handleSubmit}>
            <input className= {` h-8 rounded border border-gray-400 focus:bg-gray-200 outline-0 w-3/4  ${alert === true ? 'border-red-300' : ''} `}  type="text" 
            placeholder=" Adicionar repositorios"
            value={newRepo}
            onChange={handleinputChange}
             />
            <Button loading={loading} />
        </form>
    );
}
