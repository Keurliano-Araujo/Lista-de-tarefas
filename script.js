// Criação de um array vazio para armazenar os valores de forma dinâmica
var task = [];

// Selecionando os elementos no documento HTML
const inputTask = document.getElementById('task-add');  // Input de tarefa
const btnTask = document.getElementById('btn-add');     // Botão de adicionar tarefa
const ulTasklist = document.getElementById('to-do-list'); // Lista de tarefas

// Criando um evento de clique no botão, para recuperar os valores ao clicar
btnTask.addEventListener('click', function (event) {

    // Variável que acessa o valor do input e remove espaços em branco
    const tarefaADD = inputTask.value.trim();

    // Verifica se o valor não é uma string vazia
    if (tarefaADD !== '') {

        //Criação da div para agrupar os elementos da lista e dar efeito de animação
        let div = document.createElement('div');
        div.className = 'task-box';

        // Cria um item de lista (<li>)
        let li = document.createElement('li');
        li.textContent = tarefaADD;  // Coloca o texto da tarefa no item de lista

        // Adicionando o li dentro da div
        div.appendChild(li);

        // Agora, você pode adicionar essa div onde precisar, por exemplo, em uma lista:
        ulTasklist.appendChild(div);  // Adiciona a div (com li dentro) à lista de tarefas (<ul>)

        // Cria o botão de concluir tarefa
        let btnConcluir = document.createElement('button');
        btnConcluir.className = 'btn-task';   // Adiciona uma classe ao botão
        btnConcluir.title = 'Concluir tarefa'; // Adiciona um título ao botão
        btnConcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-check2-all" viewBox="0 0 16 16">
                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
            </svg>`;  // Ícone de concluir

        //Criação do botão de excluir tarefa
        let btnExcluir = document.createElement('button');
        btnExcluir.className = 'btn-delete';
        btnExcluir.title = 'Excluir tarefa';
        btnExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
             <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>`;

        // Adiciona o botão "Concluir" ao item da lista (<li>)
        li.appendChild(btnConcluir);

        // Adiciona o botão de "Excluir" ao item da lista (<li>)
        li.appendChild(btnExcluir);

        // Evento de clique no botão "Concluir" que vai marcar a tarefa
        btnConcluir.addEventListener('click', function () {
            concluirTask(li);  // Chama a função para marcar a tarefa como concluída
        });


        // Função para excluir a tarefa quando o botão de deletar for clicado
        btnExcluir.addEventListener('click', function () {
        // Remove a div 'task-box' associada a este botão
            div.remove();
        });

        // Limpa o campo de input após adicionar a tarefa
        inputTask.value = '';

    } else {
        alert("Digite uma tarefa");
    }

});

// Função para marcar a tarefa como concluída
function concluirTask(li) {
    li.style.textDecoration = 'line-through';  // Marca a tarefa como concluída
    li.style.color = 'gray';  // Muda a cor da tarefa para cinza
}



