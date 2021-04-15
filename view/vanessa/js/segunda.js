function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class="abertura">
       
            <h1> Dev Vanessa</h1>
            <p>Excelente escolha!!! Você chegou a tempo para sua primeira aula e descobriu que estar presente na mesma era a ultima etapa do processo seletivo.</p> 
            <p class="texto__escolha">No bootcamp, além de se aprofuntar nas tecnologias de programação, você também aprende softskills ganhando habilidades incriveis para o mercado de trabalho.
            Após a conclusão do curso, você ve sua carreira decolar em uma multinacional e chega ao cargo de senior em tempo recorde, e se vê em uma bifurcação na carreira. </p> 
            <div class="perguntas">
                <p>1 - Você desenvolve habilidades de liderança.</p>
                <p>2 - Você se torna especialista na tecnolgia que começou a carreira.</p>
            </div>
            <a href="./final.html">Faça sua escolha</a>
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
        <p>Poxa Vanessa, infelizmente o processo seletivo ainda não tinha terminado e chegar na hora do curso era um teste de comprometimento e você acabou ficando 3 dias seguidos comemorando. Vamos ter mais foco na próxima vez?</p>
        <p class="texto__escolha"> Você sabe onde quer chegar!</p>
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
    var mensagem = "Digite 1 - Resolve pedir uma pizza pra comemorar com sua família.\nDigite 2 - Suas amigas estão muito felizes e te chamam pra uma festa VIP."
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