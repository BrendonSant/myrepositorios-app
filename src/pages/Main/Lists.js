import React from "react";
import { FaBars } from 'react-icons/fa';
import DeleteRepo from './DeteleRepo';
import {Link} from 'react-router-dom';

export default function Lists({repositorios, setRepositorios}) {

  const handleDelete = (delrepo) => {
    setRepositorios(prevRepos => prevRepos.filter(r => r.name !== delrepo));
  };

  return (
    <ul className="list-disc w-full mt-6  my-1">
      {repositorios.map((repo, index) => (
        <li key={repo.name} className="px-2 py-1 flex justify-between items-center mx-8 my-1 rounded  bg-gray-200 ">
          <div className="flex items-center">
            <DeleteRepo onClick={() => handleDelete(repo.name)} />
            <span className="mr-4 font-sans">{repo.name}</span>
          </div>
          <Link to={`/repositorio/${encodeURIComponent(repo.name)}`} className="trasition duration-200 ease-in p-1 rounded hover:bg-gray-400">
            <FaBars size={20} />
          </Link>
        </li>  
      ))}
    </ul>    
  );
}
