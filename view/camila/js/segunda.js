function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Camila</h1>
            <p>Excelente escolha!!! Você sabia que hoje o mercado é autamente competitivo, faculdade somente não garante emprego e temos que nos especializar cada vez mais.</p> 
            <p class="texto__escolha">Você adquire enorme experiência em grandes empresas, se torna uma Dev desejada no mercado mas tem algumas dúvidas de qual caminho seguir.</p> 
            <div class="perguntas">
                <p>1 - Você resolve continuar na emrpesa atual. </p>
                <p>2 - Você deseja fundar uma empresa Tec. </p>
        
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
        <h1> Dev Camila</h1>
        <p>Poxa Camila, infelizmente o mercado é muito dinámico e somente faculdade ou um excelente curso não garante emprego. Por mais difícil que seja, o sacrifício é importante para obter o sucesso.</p>
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
    var mensagem = "Digite 1 - Se inscreve no curso de WebDev em paralelo a faculdade.\nDigite 2 - Estou na melhor faculdade do país e ela vai me dar base necessária para carreira."
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