// Classe: Livro - Representa um livro
class Livro {
    constructor(titulo, autor) {
        this.id = new Date().getTime().toString(); // ID único baseado no tempo
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }
}

// Classe: UI - Lida com as tarefas da Interface do Usuário
class UI {
    static exibirLivros() {
        const livros = Store.getLivros();
        livros.forEach((livro) => UI.adicionarLivroNaLista(livro));
    }

    static adicionarLivroNaLista(livro) {
        const lista = document.querySelector('#book-list');
        const linha = document.createElement('tr');
        
        linha.setAttribute('data-id', livro.id); // Adiciona ID à linha da tabela

        const status = livro.disponivel 
            ? '<span class="status disponivel">Disponível</span>'
            : '<span class="status emprestado">Emprestado</span>';
        
        const botaoAcao = livro.disponivel
            ? `<button class="button button-warning emprestar">Emprestar</button>`
            : `<button class="button button-success devolver">Devolver</button>`;

        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${status}</td>
            <td>
                ${botaoAcao}
                <button class="button button-danger remover">Remover</button>
            </td>
        `;

        lista.appendChild(linha);
    }

    static limparCampos() {
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
    }
    
    static removerLivro(elemento) {
        if(elemento.classList.contains('remover')){
            elemento.parentElement.parentElement.remove();
        }
    }
    
    static mostrarAlerta(mensagem, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensagem));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Desaparecer em 2 segundos (atende ao requisito de performance)
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
}

// Classe: Store - Lida com o Armazenamento (LocalStorage)
class Store {
    static getLivros() {
        let livros;
        if(localStorage.getItem('livros') === null) {
            livros = [];
        } else {
            livros = JSON.parse(localStorage.getItem('livros'));
        }
        return livros;
    }

    static adicionarLivro(livro) {
        const livros = Store.getLivros();
        livros.push(livro);
        localStorage.setItem('livros', JSON.stringify(livros));
    }

    static removerLivro(id) {
        const livros = Store.getLivros();
        const livrosAtualizados = livros.filter(livro => livro.id !== id);
        localStorage.setItem('livros', JSON.stringify(livrosAtualizados));
    }

    static alterarStatusLivro(id) {
        const livros = Store.getLivros();
        livros.forEach(livro => {
            if (livro.id === id) {
                livro.disponivel = !livro.disponivel;
            }
        });
        localStorage.setItem('livros', JSON.stringify(livros));
    }
}


// --- EVENTOS ---

// Evento: Exibir Livros
document.addEventListener('DOMContentLoaded', UI.exibirLivros);

// Evento: Adicionar Livro
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.querySelector('#titulo').value.trim();
    const autor = document.querySelector('#autor').value.trim();

    // Validação
    if(titulo === '' || autor === '') {
        UI.mostrarAlerta('Por favor, preencha todos os campos.', 'danger');
    } else {
        const livro = new Livro(titulo, autor);
        UI.adicionarLivroNaLista(livro);
        Store.adicionarLivro(livro);
        UI.mostrarAlerta('Livro adicionado com sucesso!', 'success');
        UI.limparCampos();
    }
});

// Evento: Ações na Lista de Livros (Emprestar, Devolver, Remover)
document.querySelector('#book-list').addEventListener('click', (e) => {
    const target = e.target;
    const idLivro = target.parentElement.parentElement.getAttribute('data-id');

    // Remover livro
    if (target.classList.contains('remover')) {
        Store.removerLivro(idLivro);
        UI.removerLivro(target);
        UI.mostrarAlerta('Livro removido.', 'success');
    }
    // Emprestar ou Devolver
    else if (target.classList.contains('emprestar') || target.classList.contains('devolver')) {
        Store.alterarStatusLivro(idLivro);
        // Recarregar a lista para refletir a mudança
        document.querySelector('#book-list').innerHTML = '';
        UI.exibirLivros();
    }
});

// Evento: Buscar Livros (filtro dinâmico)
document.querySelector('#filtro').addEventListener('keyup', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    const linhas = document.querySelectorAll('#book-list tr');

    linhas.forEach(linha => {
        const titulo = linha.children[0].textContent.toLowerCase();
        const autor = linha.children[1].textContent.toLowerCase();

        if (titulo.includes(termoBusca) || autor.includes(termoBusca)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
});
