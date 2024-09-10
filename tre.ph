// Função para enviar o pedido via WhatsApp
/*function enviarPedido() {
    if (carrinho.length === 0) {
        alert('Adicione pizzas ao carrinho antes de fazer o pedido.'); // Exibe um alerta se o carrinho estiver vazio
        return;
    }

    const mensagem = carrinho.map(pizza => {
        // Formata a mensagem como você deseja
        return `${pizza.nome} (${pizza.tamanho}) - R$ ${pizza.preco.toFixed(2)}`;
    }).join('\n'); // Cria uma mensagem com os detalhes das pizzas no carrinho

    const total = carrinho.reduce((soma, pizza) => soma + pizza.preco, 0); // Calcula o total do pedido

    // Monta a mensagem final para o WhatsApp com quebras de linha
    const mensagemFinal = `Olá, gostaria de fazer o seguinte pedido:\n\n${mensagem}\n\nTotal: R$ ${total.toFixed(2)}`; 

    const numeroWhatsApp = '5589981454044'; // Número do WhatsApp da pizzaria
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFinal)}`; // Usa encodeURIComponent para codificar a mensagem

    window.open(urlWhatsApp, '_blank'); // Abre o WhatsApp em uma nova aba para enviar o pedido
}*/