import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api';
import Loading from './Loading';
import { FaArrowRight } from 'react-icons/fa';


//{decodeURIComponent(match.params.repositorio)}
export default function Repositorio(match){
    const name = useParams();
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {

        async function load(){
        const nomeRepo = name.repositorio;    


            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`,{
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, []);

    if(loading){
        return(
            <Loading />
        )
    }
    return(
        
        <div className=" p-4 flex bg-whiteflex  max-w-3xl bg-white h-fit mx-6 flex-col w-2/3 min-w-80 rounded-lg mt-8 justify-center items-center" > 
            <div className=" flex flex-col justify-center items-center"> 
               <img className=" size-20 "
               src= {repositorio.owner.avatar_url}
               alt={repositorio.owner.login}
               />
               <h1 className=" text-xl">{repositorio.name}</h1>
              <p className="font-sans" >{repositorio.description}</p>
            </div>
        </div>
    );
}