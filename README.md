# API de Gerenciamento de Tarefas

## Visão Geral
Este projeto é uma API de gerenciamento de tarefas desenvolvida com NestJS, seguindo os princípios de Clean Architecture e SOLID. A API permite que os usuários criem, atualizem, deletem e listem tarefas, proporcionando uma estrutura robusta e escalável para o gerenciamento de tarefas.

## Objetivos
- **Praticar Clean Architecture**: Separar claramente as responsabilidades em diferentes camadas (Domain, Application, Infrastructure, Presentation).
- **Aplicar Princípios SOLID**: Garantir que o código seja fácil de manter, entender e escalar.
- **Desenvolver uma API Funcional**: Criar endpoints que permitam operações CRUD (Create, Read, Update, Delete) em tarefas.

## Funcionalidades
1. **Criar Tarefa**: Permite que um usuário crie uma nova tarefa fornecendo detalhes como título, descrição e data de vencimento.
2. **Atualizar Tarefa**: Permite que um usuário atualize os detalhes de uma tarefa existente.
3. **Deletar Tarefa**: Permite que um usuário delete uma tarefa específica.
4. **Listar Tarefas**: Permite que um usuário liste todas as tarefas, com opções de filtragem e ordenação.

## Estrutura do Projeto
- **Domain Layer**: Contém as entidades e interfaces dos repositórios.
- **Application Layer**: Contém os casos de uso e DTOs.
- **Infrastructure Layer**: Implementa os repositórios concretos e mapeadores.
- **Presentation Layer**: Contém os controladores e modelos de visualização.

## Tecnologias Utilizadas
- **NestJS**: Framework para construir a API.
- **TypeScript**: Linguagem de programação utilizada.
- **MySQL**: Banco de dados para persistência de dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Miqueias-Alves/task-manager-api.git
   ```
   2. Instale as dependências:
   ```bash
   npm install
   ```
   3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=task_manager
   ```
   4. Execute as migrations para criar as tabelas no banco de dados:
   ```bash
   npm run typeorm migration:run
   ```
   5. Inicie a aplicação:
   ```bash
   npm run start:dev
   ```
   6. Acesse a API em `http://localhost:3000/docs` para visualizar a documentação da API.
