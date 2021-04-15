function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Camila</h1>
            <p>Excelente escolha!!!</p> 
            <p class="texto__escolha">Você teve uma nota fantástica no ENEM e conseguiu entrar pra melhor faculdade do país. Parabéns</p>
            <p class="texto__escolha">Mas sua jornada está apenas começando. Você precisa tomar novas decisões para sua carreira:</p> 
            <div class="perguntas">
                <p>1 - Se inscreve no curso de WebDev em paralelo a faculdade.</p>
                <p>2 - Estou na melhor faculdade do país e ela vai me dar base necessária para carreira.</p>
            </div>
            <a href="./segunda.html">Faça sua escolha</a>
        </div>
        <footer>
        <h2>DevPlay!</h2>
        <small>&copy; Todos direitos reservados</small>
         </footer>
        
    `)
}

function gameover(){
    document.write(`
    <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
    <div class = "abertura" >
        <h1> Dev Camila</h1>
        <p>É, não é tão simples como parecia, tendo muita dificuldade com os fudamentos da programação, acaba desanimando da carreira, pois acha muito complicada e resolve abrir uma loja de roupas no bairro.</p>
        <h3>GAME OVER</h3>   
        <a href="../../index.html">Voltar para o inicio</a>
    </div>
    <footer>
        <h2>DevPlay!</h2>
        <small>&copy; Todos direitos reservados</small>
    </footer>
    `)
}

function escolha(){
    var mensagem = "Digite 1 - Entrar pra faculdade de Sistemas para Internet \n Digite 2 - Resolve estudar por conta própria."
    var escolha = prompt(mensagem)
    var certo = "1"
        if(escolha == 1 || escolha == 2){
        if(certo == escolha){
            proximaFase()
        }
        else
            gameover()
    }else{
        alert("Digite 1 ou 2 para escolher!")
        escolha()
    }

} escolha()