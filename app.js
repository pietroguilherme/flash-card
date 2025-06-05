function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
        // Esconde ou mostra a pergunta
        const perguntaElemento = cartao.querySelector('.cartao__conteudo__pergunta');
        perguntaElemento.style.display = respostaEstaVisivel ? 'none' : 'block'; // esconde a pergunta se a resposta estiver visível
    }
    
    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}
