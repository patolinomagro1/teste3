// Array de pizzas tradicionais
const pizzasTradicionais = [
    { id: 1, nome: "(#1)Calabresa", ingredientes: "Calabresa, Mussarela, Molho de tomate, Azeitona e Orégano. + Cebola Opcional", preco: 30 },
    { id: 2, nome: "(#2)Baiana", ingredientes: "Calabresa Moída Apimentada, Mussarela, Molho de tomate, Azeitona e Orégano", preco: 35 },
    { id: 3, nome: "(#3)Frango", ingredientes: "Frango, Milho, Molho de tomate, Mussarela, Azeitona e Orégano", preco: 37 },
    { id: 4, nome: "(#4)Frango com Catupiry", ingredientes: "Frango, Catupiry, Molho de tomate, Mussarela, Azeitona e Orégano", preco: 38 },
    { id: 5, nome: "(#5)Napolitana", ingredientes: "Presunto, Tomate picado, Manjericão, Molho de tomate, Mussarela, Azeitona e Orégano", preco: 40 },
    { id: 6, nome: "(#6)Marguerita", ingredientes: "Tomate, Molho de tomate, Mussarela, Azeitona e Orégano", preco: 36 }
];

// Array de pizzas especiais
const pizzasEspeciais = [
    { id: 7, nome: "(#7)Tamo junto", ingredientes: "Calabresa, Frango, Milho, Mussarela, Molho de tomate, Azeitona e Orégano", preco: 38 },
    { id: 8, nome: "(#8)Balakubana", ingredientes: "Presunto, Frango, Bacon, Mussarela, Molho de tomate, Azeitona e Orégano", preco: 36 },
    { id: 9, nome: "(#9)B-R-O BRÓ", ingredientes: "Carne de sol, Geleia de pimenta, Mussarela, Molho de tomate, Azeitona e Orégano", preco: 30 },
    { id: 10, nome: "(#10)Califórnia", ingredientes: "Frango, Geleia de pimenta, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 35 },
    { id: 11, nome: "(#11)Nordestina", ingredientes: "Carne de sol, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 37 },
    { id: 12, nome: "(#12)Frango ao creme", ingredientes: "Frango, Creme de leite, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 40 },
    { id: 13, nome: "(#13)Franbacon", ingredientes: "Frango, Bacon, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 36 },
    { id: 14, nome: "(#14)Calabacon", ingredientes: "Calabresa, Bacon, Mussarela, Tomate, Molho de tomate, Azeitona e Orégano", preco: 30 },
    { id: 15, nome: "(#15)Portuguesa", ingredientes: "Presunto, Calabresa, Bacon, Ovo Cozido, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 35 },
    { id: 16, nome: "(#16)Pizza Fricassê", ingredientes: "Frango, Milho, Batata palha, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 37 },
    { id: 17, nome: "(#17)Pizza pepperoni", ingredientes: "Frango, Presunto, Calabresa, Milho, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 40 },
];

// Array de pizzas premium
const pizzasPremium = [
    { id: 18, nome: "(#18)DESERTO", ingredientes: "Carne Seca, Tomate Seco, Manjericão, Mussarela, Molho de tomate, Azeitona e Orégano.", preco: 40 },
    { id: 19, nome: "(#19)PIZZA SRN", ingredientes: "Carne Seca, Queijo Coalho, Bacon, Manjericão, Mussarela, Molho de tomate, Azeitona e Orégano. + opcional Mel", preco: 45 },
    { id: 20, nome: "(#20)LOMBO CANADENSE", ingredientes: "Lombo, Cebola, Manjericão, Mussarela, Cheddar e Orégano.", preco: 45 },
    { id: 21, nome: "(#21)Pizza La Fúria", ingredientes: "Queijo Especial, Linguiça Calabresa, Molho de tomate e Azeitona.", preco: 0 } // Preço inicial será 0, pois será definido na função de cálculo
];

// Função para buscar informações da pizza pelo número
function buscarPizza() {
    const numeroPizza = document.getElementById('pizzaNumber').value.replace('#', ''); // Obtém o número da pizza do input e remove o caractere '#'
    const pizzaSelecionada = [...pizzasTradicionais, ...pizzasEspeciais, ...pizzasPremium].find(pizza => pizza.id == numeroPizza); // Procura a pizza pelo número (id)

    if (pizzaSelecionada) {
        document.getElementById('pizzaInfo').innerHTML = `
            <h3>${pizzaSelecionada.nome}</h3>
            <p>Ingredientes: ${pizzaSelecionada.ingredientes}</p>
            <p>Preço: R$ ${calcularPrecoPorTamanho(pizzaSelecionada, 'pequena').toFixed(2)} (P), R$ ${calcularPrecoPorTamanho(pizzaSelecionada, 'media').toFixed(2)} (M), R$ ${calcularPrecoPorTamanho(pizzaSelecionada, 'grande').toFixed(2)} (G)</p>
            <div>
                <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizzaSelecionada.id}, 'pequena')">P</button>
                <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizzaSelecionada.id}, 'media')">M</button>
                <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizzaSelecionada.id}, 'grande')">G</button>
            </div>
        `; // Exibe o nome, ingredientes e preço da pizza, além de botões para escolher o tamanho e adicionar ao carrinho
    } else {
        document.getElementById('pizzaInfo').innerHTML = '<p>Pizza não encontrada.</p>'; // Exibe mensagem se a pizza não for encontrada
    }
}

// Função para adicionar pizza ao carrinho
let carrinho = []; // Inicializa o carrinho como um array vazio

function adicionarAoCarrinho(idPizza, tamanho) {
    const pizza = [...pizzasTradicionais, ...pizzasEspeciais, ...pizzasPremium].find(p => p.id === idPizza); // Encontra a pizza pelo id
    if (pizza) {
        const precoTamanho = calcularPrecoPorTamanho(pizza, tamanho); // Calcula o preço da pizza de acordo com o tamanho
        carrinho.push({ ...pizza, tamanho, preco: precoTamanho }); // Adiciona a pizza com o tamanho e preço ajustado ao carrinho
        atualizarCarrinho(); // Atualiza a exibição do carrinho
    }
}

// Função para calcular o preço da pizza de acordo com o tamanho
function calcularPrecoPorTamanho(pizza, tamanho) {
    if (pizzasTradicionais.includes(pizza)) {
        // Preço fixo para pizzas tradicionais
        if (tamanho === 'pequena') return 32.90;
        if (tamanho === 'media') return 37.90;
        if (tamanho === 'grande') return 42.90;
    } else if (pizzasEspeciais.includes(pizza)) {
        // Preço fixo para pizzas especiais
        if (tamanho === 'pequena') return 34.90;
        if (tamanho === 'media') return 41.90;
        if (tamanho === 'grande') return 46.90;
    } else if (pizzasPremium.includes(pizza)) {
        // Preço fixo para pizzas premium
        if (pizza.nome === "(#21)Pizza La Fúria") {
            if (tamanho === 'pequena') return 44.90;
            if (tamanho === 'media') return 50.90;
            if (tamanho === 'grande') return 55.90;
        } else {
            if (tamanho === 'pequena') return 39.90;
            if (tamanho === 'media') return 44.90;
            if (tamanho === 'grande') return 49.90;
        }
    }
}


// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('carrinho'); // Obtém o elemento do carrinho no HTML
    carrinhoElement.innerHTML = ''; // Limpa o conteúdo atual do carrinho

    let total = 0; // Inicializa o total do carrinho

    carrinho.forEach((item, index) => {
        const borda = item.borda ? ` com borda ${item.borda}` : ''; // Verifica se há borda e adiciona descrição
        const precoComBorda = item.preco + (item.borda === 'Cheddar' ? 5 : item.borda === 'Catupiry' ? 5 : item.borda === 'Creme Cheese' ? 10 : 0); // Calcula o preço total com a borda
        total += precoComBorda; // Adiciona o preço ao total
        carrinhoElement.innerHTML += `
            <div>
                ${item.nome} (${item.tamanho})${borda} - R$ ${precoComBorda.toFixed(2)} 
                <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho(${index})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="mostrarBordaMenu(${index})">Adicionar Borda</button>
            </div>
        `; // Exibe cada item do carrinho com o tamanho, preço, botão de remover e botão de borda
    });

    carrinhoElement.innerHTML += `<h4>Total: R$ ${total.toFixed(2)}</h4>`; // Exibe o total do carrinho
}




// Função para remover pizza do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item pelo índice
    atualizarCarrinho(); // Atualiza a exibição do carrinho
}


// Função para adicionar pizzas ao carrossel
function adicionarPizzasAoCarousel(pizzas, listaId) {
    const lista = document.getElementById(listaId);
    pizzas.forEach((pizza, index) => {
        const precoPequena = calcularPrecoPorTamanho(pizza, 'pequena');
        const precoMedia = calcularPrecoPorTamanho(pizza, 'media');
        const precoGrande = calcularPrecoPorTamanho(pizza, 'grande');

        const ativo = index === 0 ? 'active' : ''; // Define o primeiro item como ativo
        lista.innerHTML += `
            <div class="carousel-item ${ativo}">
                <div class="pizzaCard">
                    <h3>${pizza.nome}</h3>
                    <p>${pizza.ingredientes}</p>
                    <p>Preço Pequena: R$ ${precoPequena.toFixed(2)}</p>
                    <p>Preço Média: R$ ${precoMedia.toFixed(2)}</p>
                    <p>Preço Grande: R$ ${precoGrande.toFixed(2)}</p>
                    <div>
                        <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizza.id}, 'pequena')">P</button>
                        <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizza.id}, 'media')">M</button>
                        <button class="btn btn-secondary btn-sm" onclick="adicionarAoCarrinho(${pizza.id}, 'grande')">G</button>
                    </div>
                </div>
            </div>
        `; // Cria um item no carrossel para cada pizza
    });
}

// Chamada das funções para adicionar pizzas aos carrosséis
adicionarPizzasAoCarousel(pizzasTradicionais, 'listaTradicionais');
adicionarPizzasAoCarousel(pizzasEspeciais, 'listaEspeciais');
adicionarPizzasAoCarousel(pizzasPremium, 'listaPremium');

function enviarPedido() {
    if (carrinho.length === 0) {
        alert('Adicione pizzas ao carrinho antes de fazer o pedido.'); // Exibe um alerta se o carrinho estiver vazio
        return;
    }

    const mensagem = carrinho.map(item => {
        // Formata a mensagem para incluir borda e preço
        const borda = item.borda ? ` com borda de ${item.borda} (R$ ${getBordaPreco(item.borda).toFixed(2)})` : '';
        return `${item.nome} (${item.tamanho})${borda} - R$ ${item.preco.toFixed(2)}`;
    }).join('\n'); // Cria uma mensagem com os detalhes das pizzas no carrinho

    const total = carrinho.reduce((soma, pizza) => {
        const precoComBorda = pizza.borda ? pizza.preco + getBordaPreco(pizza.borda) : pizza.preco;
        return soma + precoComBorda;
    }, 0); // Calcula o total do pedido

    // Monta a mensagem final para o WhatsApp com quebras de linha
    const mensagemFinal = `Olá, gostaria de fazer o seguinte pedido:\n\n${mensagem}\n\nTotal: R$ ${total.toFixed(2)}`;

    const numeroWhatsApp = '5589981454044'; // Número do WhatsApp da pizzaria
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFinal)}`; // Usa encodeURIComponent para codificar a mensagem

    window.open(urlWhatsApp, '_blank'); // Abre o WhatsApp em uma nova aba para enviar o pedido
}

// Função para obter o preço da borda
function getBordaPreco(borda) {
    return precosBordas[borda] || 0; // Retorna o preço da borda ou 0 se não existir
}









function mostrarSabores() {
    const quantidade = document.getElementById('quantidadeSabores').value;
    const escolherSaboresDiv = document.getElementById('escolherSabores');
    
    escolherSaboresDiv.innerHTML = ''; // Limpa a área de escolha de sabores

    if (quantidade > 0) {
        for (let i = 1; i <= quantidade; i++) {
            escolherSaboresDiv.innerHTML += `
                <p>Escolha o sabor ${i}:</p>
                <select id="sabor${i}">
                    <option value="0">Selecione um sabor</option>
                    ${[...pizzasTradicionais, ...pizzasEspeciais, ...pizzasPremium].map(pizza => `
                        <option value="${pizza.id}">${pizza.nome}</option>
                    `).join('')}
                </select>
            `;
        }
    }
}


function montarPizza() {
    const quantidade = document.getElementById('quantidadeSabores').value;

    if (quantidade == 0) {
        alert('Por favor, escolha a quantidade de sabores.');
        return;
    }

    const saboresSelecionados = [];
    for (let i = 1; i <= quantidade; i++) {
        const saborId = document.getElementById(`sabor${i}`).value;
        if (saborId == 0) {
            alert(`Escolha todos os ${quantidade} sabores.`);
            return;
        }
        saboresSelecionados.push([...pizzasTradicionais, ...pizzasEspeciais, ...pizzasPremium].find(pizza => pizza.id == saborId));
    }

    const tamanhoSelecionado = document.querySelector('input[name="tamanhoPizza"]:checked'); // Obtém o tamanho selecionado
    if (!tamanhoSelecionado) {
        alert('Por favor, escolha o tamanho da pizza.');
        return;
    }

    const tamanho = tamanhoSelecionado.value; // Armazena o tamanho escolhido

    if (saboresSelecionados.length > 0) {
        // Calcular o preço da pizza mais cara
        const precoPizzaMaisCara = Math.max(...saboresSelecionados.map(pizza => calcularPrecoPorTamanho(pizza, tamanho)));

        // Criação da mensagem para WhatsApp
        const mensagem = saboresSelecionados.map(pizza => `Uma parte de ${pizza.nome}`).join(' + ');

        carrinho.push({
            nome: mensagem,
            tamanho: tamanho,
            preco: precoPizzaMaisCara // Usar o preço da pizza mais cara
        });

        atualizarCarrinho();
    }
}



function adicionarSabor() {
    var sabor = document.getElementById('saborPizza').value;
    var tamanho = document.getElementById('tamanhoPizza').value;
    var listaSabores = document.getElementById('listaSabores');

    if (sabor) {
        var novoSabor = document.createElement('p');
        novoSabor.textContent = `Sabor: ${sabor} - Tamanho: ${tamanho}`;
        listaSabores.appendChild(novoSabor);

        document.getElementById('saborPizza').value = ''; // Limpa o campo de texto
    } else {
        alert("Por favor, insira o sabor da pizza!");
    }
}



// Adicione um objeto com os preços das bordas
const precosBordas = {
    'Creme Cheese': 10,
    'Cheddar': 5,
    'Catupiry': 5
};

function mostrarBordaMenu(index) {
    const saboresBorda = Object.keys(precosBordas); // Obtenha os nomes das bordas
    let menuHtml = '<h4>Escolha o sabor da borda:</h4><select id="bordaSelect">';

    saboresBorda.forEach(borda => {
        menuHtml += `<option value="${borda}">${borda} - R$ ${precosBordas[borda].toFixed(2)}</option>`;
    });

    menuHtml += '</select>';
    menuHtml += `<button class="btn btn-success btn-sm mt-2" onclick="aplicarBorda(${carrinho[index].id}, '${carrinho[index].tamanho}', document.getElementById('bordaSelect').value)">Aplicar</button>`;

    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML += `<div id="bordaMenu${index}">${menuHtml}</div>`;
}

function aplicarBorda(idPizza, tamanho, borda) {
    const pizzaIndex = carrinho.findIndex(item => item.id === idPizza && item.tamanho === tamanho);
    if (pizzaIndex !== -1) {
        carrinho[pizzaIndex].borda = borda; // Aplica a borda selecionada à pizza no carrinho
        atualizarCarrinho(); // Atualiza o carrinho para refletir a nova borda
    }
}

