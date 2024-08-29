import React, {useCallback} from "react";
import { FaBars } from 'react-icons/fa';
import DeleteRepo from './DeteleRepo';


export default function Lists({repositorios, setRepositorios}) {

  const handleDelete = useCallback((delrepo) => {
    setRepositorios(prevRepos => prevRepos.filter(r => r.name !== delrepo));
}, [setRepositorios]);


    return (
        <ul className="list-disc  bg-gray-300 w-full mt-6">
            {repositorios.map((repo, index) => (
              <li key={repo.name} className="py-1 flex justify-between items-center mx-8">
                <div className=" flex items-center">
                  <DeleteRepo onClick={() => handleDelete(repo.name)} />
                  <span className=" mr-4 font-sans">{repo.name}</span>
                </div>
                
                <a href="" className=" trasition duration-200 ease-in p-1 rounded hover:bg-gray-400">
                    <FaBars size={20} />
                </a>
              </li>  
            ))}
        </ul>    
    );
}