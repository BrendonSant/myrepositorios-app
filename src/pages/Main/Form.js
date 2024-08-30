import React, { useState, useEffect } from "react";
import Button from "./Button";
import api from '../../services/api';

export default function Form({ repositorios, setRepositorios }) {
    const [newRepo, setNewRepo] = useState('');
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // Buscar salvamentos do localStorage
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');
        console.log("Carregando dados do localStorage:", repoStorage);

        if (repoStorage) {
            setRepositorios(JSON.parse(repoStorage));
        }
    }, []);

    // Salvar alterações no localStorage
    useEffect(() => {
        console.log("Salvando dados no localStorage:", repositorios);
        localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAlert(null);

        try {
            if (newRepo === '') {
                throw new Error('Você precisa indicar um repositório!');
            }

            const response = await api.get(`repos/${newRepo}`);
            const hasRepo = repositorios.find(repo => repo.name === newRepo);

            if (hasRepo) {
                throw new Error('Repositório Duplicado');
            }

            const data = {
                name: response.data.full_name,
            };

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        } catch (error) {
            setAlert(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setNewRepo(e.target.value);
        setAlert(null);
    };

    return (
        <form className="flex justify-center items-center" onSubmit={handleSubmit}>
            <input
                className={`h-8 rounded border border-gray-400 focus:bg-gray-200 outline-0 w-3/4 ${alert === true ? 'border-red-300' : ''}`}
                type="text"
                placeholder="  Adicionar repositórios"
                value={newRepo}
                onChange={handleInputChange}
            />
            <Button loading={loading} />
        </form>
    );
}
