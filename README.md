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
- **PostgreSQL/MongoDB**: Banco de dados para persistência de dados.
- **Jest**: Framework de testes para garantir a qualidade do código.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Miqueias-Alves/task-manager-api.git
