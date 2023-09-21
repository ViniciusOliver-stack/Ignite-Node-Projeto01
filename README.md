<div align="center">
<img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/a11afefe824866f24dd3f9e1cc6e6e9530376ad1/%40assets/img/logo.svg" width="138px"/>
</div>
<p align="center">
   <a href="https://www.linkedin.com/in/viniciussantos-oliveira/">
      <img alt="Vinicius Santos" src="https://img.shields.io/badge/-Vinicius Santos-01B755?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-01B755">
</p>

>**:rocket:  Ignite - Projeto 01**


<h2 text="center">API de Gerenciamento de Tarefas</h2>



## Sobre o Desafio

Neste desafio, desenvolvemos uma API para realizar operações CRUD em tarefas (tasks). A API oferece funcionalidades como criação, listagem, atualização e remoção de tarefas, além da capacidade de marcar tarefas como completas ou incompletas. Além disso, enfrentamos o desafio de importar tarefas em massa a partir de um arquivo CSV.

### Funcionalidades Principais
Aqui estão as principais funcionalidades da API:

-   **Criação de Tarefas**: A API permite a criação de tarefas. Ao criar uma tarefa, os campos como ID, data de criação (created_at), data de atualização (updated_at) e data de conclusão (completed_at) são preenchidos automaticamente. Inicialmente, a data de conclusão é definida como nula.
    
-   **Listagem de Tarefas**: É possível listar todas as tarefas salvas no banco de dados. Além disso, é possível realizar buscas e filtrar tarefas com base em seus títulos (title) e descrições (description).
    
-   **Atualização de Tarefas**: A API permite a atualização de tarefas com base em seu ID. O corpo da requisição deve conter apenas o título (title) e/ou descrição (description) a serem atualizados. Se apenas o título for enviado, a descrição não será atualizada e vice-versa. Antes de realizar a atualização, a API valida se o ID pertence a uma tarefa existente no banco de dados.
    
-   **Remoção de Tarefas**: É possível remover tarefas com base em seus IDs. Antes de realizar a remoção, a API valida se o ID pertence a uma tarefa existente no banco de dados.
    
-   **Marcação de Tarefas como Completas/Incompletas**: A API permite marcar tarefas como completas ou incompletas. Isso significa que uma tarefa concluída pode ser marcada como incompleta e vice-versa. A API valida se o ID pertence a uma tarefa existente antes de realizar a alteração.
    
-   **Importação de Tarefas em Massa a partir de um Arquivo CSV**: O desafio incluiu a implementação da importação em massa de tarefas a partir de um arquivo CSV. Cada linha do CSV representa uma tarefa, e as tarefas são importadas para o banco de dados. Isso permite a rápida criação de várias tarefas de uma vez.
    

### Rotas e Regras de Negócio

As rotas da API e suas respectivas regras de negócio são as seguintes:

-   **POST - /tasks**: Permite a criação de uma nova tarefa. Os campos title e description devem ser enviados no corpo da requisição. Os campos ID, created_at, updated_at e completed_at são preenchidos automaticamente.
    
-   **GET - /tasks**: Lista todas as tarefas no banco de dados. Também permite a busca e filtragem de tarefas com base em seus títulos e descrições.
    
-   **PUT - /tasks/:id**: Permite a atualização de uma tarefa existente com base em seu ID. Somente o título e/ou descrição podem ser atualizados no corpo da requisição. A validação é realizada para garantir que o ID pertence a uma tarefa existente.
    
-   **DELETE - /tasks/:id**: Permite a remoção de uma tarefa com base em seu ID. A validação é realizada para garantir que o ID pertence a uma tarefa existente.
    
-   **PATCH - /tasks/:id/complete**: Permite marcar uma tarefa como completa ou incompleta com base em seu ID. A validação é realizada para garantir que o ID pertence a uma tarefa existente.
    

### Como Usar

Para utilizar a API, siga os passos abaixo:

```bash
# Clone o Repositório
$ https://github.com/ViniciusOliver-stack/Ignite-Node-Projeto01.git
```
```bash
# Baixe as dependendências
Instale as dependências do projeto usando npm install.
```

```bash
# Execute
Inicie o servidor da API usando npm run dev
```
> Acesse as rotas da API conforme necessário, utilizando ferramentas como Postman ou Insomnia.
> Para a importação em massa de tarefas a partir de um arquivo CSV, utilize a rota apropriada e siga as instruções fornecidas.
