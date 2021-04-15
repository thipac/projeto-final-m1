function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
            <h1> Dev Filpe</h1>
            <p>Excelente escolha!!! O equilibrio é uma das chaves para o sucesso e você sabe disso.</p> 
            <p class="texto__escolha">Com a vida equilibrada sua carreira decolou e hoje você é requisitado no mundo inteiro pra programar. Você virou um nômade digital e o mundo é sua casa. </p>
            <h4>Parabéns, nós sempre acreditamos em você!</h4> 
            <a href="../../index.html">Voltar para o inicio</a>
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
        <h1> Dev Filipe/h1>
        <p>Eita Filipe, o equilibrio é fundamental, infelziemnte deixar a saúde e família de lado não é saudável e precisou deixar sua carreira de lado pra cuidar de um grave problema de saúde, que pena seu futuro seria brilhante.</p>
        <p class="texto__escolha">/p>
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
    var mensagem = "Digite 1 - Você resolve frear a enpolgação na carreira para cuidar da família, mente e corpo.\nDigite 2 - Você diz que eles precisam entender, você está crescendo muito rápido na carreira e tem um futuro brilhante pela frente."
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

}
escolha()

