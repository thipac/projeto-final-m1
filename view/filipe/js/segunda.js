function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Filipe</h1>
            <p>Excelente escolha!!! O curso que você ingressou te deu 2 anos de aulas de inglês e a doc ficou bem mais fácil de entender.</p> 
            <p class="texto__escolha">Você começou a trabalhar na área, mas deixou de se exercitar, sua família não tem notícias suas, mas o  CEO da empresa que você deseja trabalhar vem ao Brasil pra um grande evento Tech.</p> 
            <div class="perguntas">
                <p>1 - Você resolve frear a enpolgação na carreira para cuidar da família, mente e corpo.</p>
                <p>2 - Você diz que eles precisam entender, você está crescendo muito rápido na carreira e tem um futuro brilhante pela frente.</p>
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
        <h1> Dev Filipe</h1>
        <p>Poxa Filpe, a documentação está toda em inglês e você não consegue entender quase nada por não dominar a lingua, acabou desanimando de aperfeiçoar seus conhecimentos e ficou focou em freelas simples onde não demandavam muito conhecimento e por conta disso não cresceu na profissão. Uma pena, seu futuro seria brilhante.</p>
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
    var mensagem = "Digite 1 - Estudar toda nova documentação por conta própria, eu ja conheço os fundamentos. \nDigite 2 - Estudar documentação e ingressar em cursos de aperfeiçoamento."
    var escolha = prompt(mensagem)
    var certo = "2"
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