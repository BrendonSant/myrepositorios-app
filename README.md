# MyRepositorios App

**Autor:** Brendon Santos

Este é um projeto criado com o objetivo de estudar e aprofundar os conhecimentos em React. O **MyRepositorios App** é uma aplicação web que permite aos usuários pesquisar e salvar repositórios do GitHub. A aplicação utiliza a API do próprio GitHub para realizar buscas em tempo real.

## :eyes: Visão Geral

O **MyRepositorios App** oferece uma interface simples e intuitiva, onde os usuários podem:

- Pesquisar repositórios do GitHub por nome.
- Salvar repositórios favoritos para referência futura.
- Excluir repositórios salvos.

Este projeto é um excelente exemplo de como utilizar `useState` e `useEffect` para gerenciar o estado e os efeitos colaterais em uma aplicação React.

## :computer: Tecnologias Utilizadas

- **React**: Biblioteca principal utilizada para construir a interface do usuário.
- **Axios**: Biblioteca utilizada para fazer as requisições HTTP à API do GitHub.
- **Tailwind CSS**: Framework de CSS utilizado para a estilização dos componentes.
- **localStorage**: Ultilizado para armazenar os repositórios selecionados.


## :page_with_curl: Funcionalidades Principais

### Pesquisa de Repositórios

A aplicação permite ao usuário pesquisar por repositórios do GitHub. Isso é feito através de uma requisição à API do GitHub, utilizando o nome do repositório como termo de busca.

### Salvamento de Repositórios

Os usuários podem salvar repositórios que acharem interessantes. Esses repositórios são armazenados no localStorage, permitindo que os usuários tenham acesso a eles mesmo após recarregar a página.

### Exclusão de Repositórios

Os usuários podem excluir repositórios previamente salvos. Essa ação remove o repositório do localStorage, refletindo imediatamente na interface do usuário.

## :pencil2: Aprendizados com `useState` e `useEffect`

### `useState`

O hook `useState` é amplamente utilizado neste projeto para gerenciar o estado local dos componentes. Por exemplo:

- **Gerenciamento do Input de Pesquisa**: O estado do campo de pesquisa é gerenciado com `useState`, permitindo que a aplicação reaja às mudanças de entrada do usuário.
  
  ```javascript
  const [input, setInput] = useState("");

- **Gerenciamento de Tarefas: O estado das tarefas (repositórios) é gerenciado utilizando um array de objetos, o que permite à aplicação adicionar, listar e excluir repositórios salvos.
  
  ```javascript
  const [tasks, setTasks] = useState<TaskProps[]>([]);

### `useEffect`

O hook useEffect é utilizado para lidar com efeitos colaterais, como buscar dados da API do GitHub e sincronizar o estado da aplicação com o Firestore.

- Carregamento de Tarefas: Um useEffect é utilizado para carregar e salvar as tarefas no localStorage .

  ```javascript
     
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

- Busca na API do GitHub: Outro exemplo de useEffect é para fazer a requisição à API do GitHub sempre que o usuário submeter uma pesquisa.
    ```javascript
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

## :space_invader: Como executar o projeto.

Para executar este projeto localmente, siga os passos abaixo:
1.Clone o repositório:
    ```bash
    
    git clone https://github.com/BrendonSant/myrepositorios-app.git
    
2.Instale as dependências:
    ```bash
  
      cd myrepositorios-app                  
       
3.Inicie a aplicação:
     ```bash
     
       npm run dev

4.Acesse a aplicação:

  * Abra o navegador e vá para http://localhost:3000.

## :dart: Conclusão

Este projeto serviu como uma excelente oportunidade para aprofundar o conhecimento em React, especialmente na utilização dos hooks `useState` e `useEffect`. Ao trabalhar com estado e efeitos colaterais, foi possível entender melhor como gerenciar e sincronizar o estado da interface com fontes de dados externas como APIs e bancos de dados em tempo real.


  
  





  
  

