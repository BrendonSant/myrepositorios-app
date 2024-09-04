# MyRepositorios App

**Autor:** Brendon Santos

Este é um projeto criado com o objetivo de estudar e aprofundar os conhecimentos em React. O **MyRepositorios App** é uma aplicação web que permite aos usuários pesquisar e salvar repositórios do GitHub. A aplicação utiliza a API do próprio GitHub para realizar buscas em tempo real.

## Visão Geral

O **MyRepositorios App** oferece uma interface simples e intuitiva, onde os usuários podem:

- Pesquisar repositórios do GitHub por nome.
- Salvar repositórios favoritos para referência futura.
- Excluir repositórios salvos.

Este projeto é um excelente exemplo de como utilizar `useState` e `useEffect` para gerenciar o estado e os efeitos colaterais em uma aplicação React.

## Tecnologias Utilizadas

- **React**: Biblioteca principal utilizada para construir a interface do usuário.
- **Axios**: Biblioteca utilizada para fazer as requisições HTTP à API do GitHub.
- **Tailwind CSS**: Framework de CSS utilizado para a estilização dos componentes.
- **localStorage**: Ultilizado para armazenar os repositórios selecionados.


## Funcionalidades Principais

### Pesquisa de Repositórios

A aplicação permite ao usuário pesquisar por repositórios do GitHub. Isso é feito através de uma requisição à API do GitHub, utilizando o nome do repositório como termo de busca.

### Salvamento de Repositórios

Os usuários podem salvar repositórios que acharem interessantes. Esses repositórios são armazenados no localStorage, permitindo que os usuários tenham acesso a eles mesmo após recarregar a página.

### Exclusão de Repositórios

Os usuários podem excluir repositórios previamente salvos. Essa ação remove o repositório do localStorage, refletindo imediatamente na interface do usuário.

## Aprendizados com `useState` e `useEffect`

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

- Carregamento de Tarefas: Um useEffect é utilizado para carregar as tarefas salvas do Firestore quando o componente é montado. A função onSnapshot é usada para escutar as alterações em tempo real.

  ```javascript
      useEffect(() => {
      async function loadTarefas() {
        const tarefasRef = collection(db, "tarefas");
        const q = query(tarefasRef, orderBy("created", "desc"), where("user", "==", user?.email));
        onSnapshot(q, (snapshot) => {
          let lista = [] as TaskProps[];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              ...doc.data(),
            } as TaskProps);
          });
          setTasks(lista);
        });
      }
      loadTarefas();
    }, [user?.email]); 

- Busca na API do GitHub: Outro exemplo de useEffect é para fazer a requisição à API do GitHub sempre que o usuário submeter uma pesquisa.
    ```javascript
     useEffect(() => {
  if (input) {
    // Função para buscar repositórios no GitHub
    const fetchRepos = async () => {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${input}`);
      setRepos(response.data.items);
    };
    fetchRepos();
  }}, [input]);

## Como executar o projeto.

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

## Conclusão

Este projeto serviu como uma excelente oportunidade para aprofundar o conhecimento em React, especialmente na utilização dos hooks `useState` e `useEffect`. Ao trabalhar com estado e efeitos colaterais, foi possível entender melhor como gerenciar e sincronizar o estado da interface com fontes de dados externas como APIs e bancos de dados em tempo real.


  
  





  
  

