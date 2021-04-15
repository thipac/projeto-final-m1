function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class="abertura">
            <h1> Dev Vanessa</h1>
            <p>Excelente escolha!!!</p> 
            <p class="texto__escolha">Você é escolhida entre mais de 3.000 participantes em uma longa e cansativa rodada de entrevistas e dinâmicas de grupo para fazer parte da turma que se inicia amanhã.</p>
            <p class="texto__escolha">Você fica muito feliz por ter sido aceita e resolve comemorar, você tem duas opções no dia de hoje.</p> 
            <div class="perguntas">
                <p>1 - Resolve pedir uma pizza pra comemorar com sua família.</p>
                <p>2 - Suas amigas estão muito felizes e te chamam pra uma festa VIP.</p>
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
        <h1> Dev Vanessa</h1>
        <p>É, a vida como autodidata não é tão simples como parecia, você acaba procrastinando os estudos, troca as noites de estudo por festa e infelizmente o seu futuro como Dev termina aqui.</p>
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
    var mensagem = "Digite 1 - Se inscreve em um excelente bootcamp focado em empregabilidade. \nDigite 2 - Resolve estudar por conta própria, pois se considera uma autodidata."
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

}escolha()