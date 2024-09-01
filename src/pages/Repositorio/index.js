import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Pagebutton from './Pagebutton';
import RadioButton from "./RadioButton";

export default function Repositorio() {
    const name = useParams();
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('all'); // Estado para armazenar o filtro selecionado

    useEffect(() => {
        async function load() {
            const nomeRepo = name.repositorio;

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: filter, // Use o filtro no request
                        per_page: 5,
                        page
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, [filter, page, name.repositorio]); // Reexecuta o efeito quando o filtro ou a página muda

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="p-4 flex bg-white max-lg: bg-white h-fit mx-6 flex-col w-2/3 min-w-80 rounded-lg mt-8 justify-center items-center">
            <div className="w-full">
                <Link to="/">
                    <FaArrowLeft size={16} className="ml-4 hover:fill-slate-400" />
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                <img className="size-20"
                    src={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login}
                />
                <h1 className="text-xl">{repositorio.name}</h1>
                <p className="font-sans">{repositorio.description}</p>
            </div>
            <h1 className="font-sans text-xl font-semibold mt-4">Lista de Issues</h1>

            <div className="flex w-full justify-center my-6">
                <RadioButton filter={filter} setFilter={setFilter} /> {/* Passe o estado do filtro e a função para atualizá-lo */}
            </div>

            <ul className="w-full">
                {issues.map(issue => (
                    <li className="rounded-lg py-2 px-2 flex items-center my-5 w-full divide-x hover:bg-gray-100" key={String(issue.id)}>
                        <img className="size-16 rounded-full mr-3" src={issue.user.avatar_url} alt={issue.user.login} />

                        <div className="px-2">
                            <p className="font-sans font-bold hover:text-green-600">
                                <a href={issue.html_url}>{issue.title}</a>
                                {issue.labels.map(label => (
                                    <span className="text-xs rounded p-1 bg-black mx-1 text-white" key={String(label.id)}>{label.name}</span>
                                ))}
                            </p>
                            <p key={String(issue.id)}>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex w-full justify-between items-center">
                <Pagebutton page={page} text='Voltar' onClick={() => { handlePage('back') }} />
                <Pagebutton text='Próximo' onClick={() => { handlePage('next') }} />
            </div>
        </div>
    );
}
