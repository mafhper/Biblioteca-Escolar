# Sistema de Gerenciamento - Biblioteca Escolar

## Descrição do Problema

Uma biblioteca escolar precisa de um sistema simples para gerenciar seu acervo de livros. O sistema deve permitir que os bibliotecários realizem tarefas básicas de controle do acervo, incluindo cadastro de livros, gerenciamento de empréstimos e controle de usuários.

---

## Resumo dos Requisitos Principais

### Funcionalidades Básicas

- Cadastrar livros novos
- Listar todos os livros disponíveis
- Buscar livros por título ou autor
- Registrar empréstimos e devoluções

### Qualidades do Sistema

- Interface intuitiva e amigável
- Funcionar em diferentes navegadores
- Ser seguro contra acesso não autorizado
- Responder rapidamente a todas as ações (menos de 2 segundos)

---

## Requisitos Funcionais (RF)

Os Requisitos Funcionais descrevem **o que o sistema deve fazer**. São as funcionalidades e ações que os usuários poderão executar.

### RF01: Gestão do Acervo de Livros

#### RF01.1 - Cadastrar Livro

O sistema deve permitir que o bibliotecário adicione um novo livro ao acervo, informando no mínimo:

- Título
- Autor(es)
- ISBN (código universal do livro)
- Editora
- Ano de Publicação
- Gênero/Categoria (Ex: Ficção, História, Ciências)
- Número de exemplares disponíveis

#### RF01.2 - Listar Livros

O sistema deve exibir uma lista de todos os livros do acervo, mostrando colunas principais como Título, Autor e Quantidade Disponível.

#### RF01.3 - Buscar/Consultar Livro

O sistema deve oferecer uma ferramenta de busca que permita encontrar livros por:

- Título (busca parcial ou completa)
- Autor
- ISBN
- Gênero/Categoria

#### RF01.4 - Editar Informações do Livro

Deve ser possível alterar os dados de um livro já cadastrado.

#### RF01.5 - Remover Livro

O sistema deve permitir a exclusão de um livro do acervo (ação que deve exigir confirmação).

### RF02: Gestão de Usuários (Leitores)

#### RF02.1 - Cadastrar Usuário

O sistema deve permitir o cadastro de leitores (alunos, professores), registrando:

- Nome Completo
- Matrícula ou Código de Identificação
- Tipo de Usuário (Ex: Aluno, Professor)
- Contato (E-mail e/ou Telefone)

#### RF02.2 - Listar Usuários

O sistema deve exibir uma lista de todos os usuários cadastrados.

#### RF02.3 - Buscar Usuário

Deve ser possível buscar um usuário por nome ou por matrícula.

#### RF02.4 - Editar Usuário

Permitir a atualização das informações de um usuário.

#### RF02.5 - Consultar Histórico do Usuário

O sistema deve exibir o histórico de empréstimos (atuais e passados) de um usuário específico.

### RF03: Gestão de Empréstimos e Devoluções

#### RF03.1 - Registrar Empréstimo

O sistema deve permitir que o bibliotecário registre a saída de um livro, associando o exemplar a um usuário e definindo automaticamente a data de devolução (ex: 14 dias a partir da data atual).

#### RF03.2 - Registrar Devolução

O sistema deve permitir a baixa de um empréstimo quando o livro for devolvido, atualizando o status do exemplar para "Disponível".

#### RF03.3 - Renovar Empréstimo

Deve haver a opção de renovar a data de devolução de um empréstimo, caso o livro não esteja reservado.

#### RF03.4 - Listar Empréstimos Ativos

O sistema deve exibir uma lista de todos os livros que estão atualmente emprestados, mostrando o título, o nome do usuário e a data de devolução.

#### RF03.5 - Identificar Empréstimos Atrasados

O sistema deve destacar visualmente (ex: com a cor vermelha) os empréstimos cuja data de devolução já passou.

### RF04: Relatórios e Estatísticas

#### RF04.1 - Relatório de Livros Mais Emprestados

Gerar uma lista dos livros mais populares em um determinado período.

#### RF04.2 - Relatório de Empréstimos Atrasados

Gerar uma lista de todos os usuários com devoluções pendentes.

#### RF04.3 - Inventário Geral

Exibir estatísticas simples sobre o acervo, como:

- Número total de livros
- Número de exemplares emprestados
- Número de exemplares disponíveis

---

## Requisitos Não Funcionais (RNF)

Os Requisitos Não Funcionais descrevem **como o sistema deve ser**. Eles definem as qualidades, restrições e padrões de funcionamento do sistema.

### RNF01: Usabilidade e Interface

#### RNF01.1 - Intuitividade

A interface deve ser clara, organizada e fácil de usar, exigindo o mínimo de treinamento para o bibliotecário.

#### RNF01.2 - Feedback ao Usuário

O sistema deve fornecer respostas visuais imediatas para as ações do usuário (ex: mensagem de "Livro cadastrado com sucesso!" ou "Erro ao salvar").

#### RNF01.3 - Consistência

Os elementos da interface (botões, menus, cores) devem seguir um padrão visual consistente em todas as telas.

#### RNF01.4 - Acessibilidade

O sistema deve seguir práticas básicas de acessibilidade web (WCAG), como bom contraste de cores e navegação por teclado.

### RNF02: Desempenho

#### RNF02.1 - Tempo de Resposta

Todas as operações principais (busca, listagem, cadastro) devem ser concluídas em menos de 2 segundos.

#### RNF02.2 - Tempo de Carregamento

A página principal do sistema deve carregar completamente em menos de 3 segundos em uma conexão de internet padrão.

#### RNF02.3 - Eficiência

A busca e a filtragem de livros devem funcionar de forma fluida, mesmo com um acervo de milhares de títulos.

### RNF03: Segurança

#### RNF03.1 - Autenticação

O acesso ao sistema deve ser protegido por um sistema de login e senha, garantindo que apenas pessoal autorizado (bibliotecários) possa gerenciar o acervo.

#### RNF03.2 - Níveis de Acesso (Opcional)

Poderia haver diferentes perfis de usuário, como:

- **Administrador**: com acesso a todas as funcionalidades
- **Operador**: que pode apenas realizar empréstimos e devoluções

#### RNF03.3 - Integridade dos Dados

O sistema deve garantir que os dados não sejam corrompidos. Por exemplo:

- Um livro não pode estar emprestado e disponível ao mesmo tempo
- A remoção de um usuário só deve ser possível se ele não tiver empréstimos pendentes

### RNF04: Confiabilidade e Disponibilidade

#### RNF04.1 - Persistência de Dados

Os dados inseridos no sistema (livros, usuários, empréstimos) não devem ser perdidos em caso de fechamento do navegador ou reinicialização do computador.

> **Nota**: No exemplo dado, isso é feito com LocalStorage, mas em um sistema real seria um banco de dados.

#### RNF04.2 - Recuperação de Falhas

O sistema deve lidar com erros de forma elegante, exibindo uma mensagem clara ao usuário em vez de travar ou quebrar.

### RNF05: Compatibilidade

#### RNF05.1 - Navegadores

O sistema deve ser totalmente funcional nas versões mais recentes dos principais navegadores:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

#### RNF05.2 - Responsividade

A interface do sistema deve se adaptar a diferentes tamanhos de tela, permitindo o uso em:

- Desktops
- Tablets
- Smartphones (se necessário)

---
