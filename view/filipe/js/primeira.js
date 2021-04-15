proximaFase ()

function proximaFase(){

    while(true){

    var escolha = prompt ("Digite 1 - Migrar de carreira, trabalhar com Tech sempre foi um sonho< \n Digite 2 - Terminar o ultimo ano de medicina e me formar.");

    if (escolha == 1){

        document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Filipe</h1>
            <p>Excelente escolha!!!</p> 
            <p class="texto__escolha">você desde criança estudava programação, mas sendo de cidade pequena, sempre te disseram que não tinha futuro e com isso mudou seus planos, mas agora retomou a coragem de perseguir seu sonhos! Bora!!!!</p>
            <p class="texto__escolha">A linguagem que você domina, é muito usada no mercado mas ela foi aperfeiçoada e você precisa estudar.</p> 
            <div class="perguntas">
                <p>1 - Estudar toda nova documentação por conta própria, eu ja conheço os fundamentos.</p>
                <p>2 - Estudar documentação e ingressar em cursos de aperfeiçoamento.</p>
            </div>
            <a href="./segunda.html">Faça sua escolha</a>
        </div>
        <footer>
        <h2>DevPlay!</h2>
        <small>&copy; Todos direitos reservados</small>
         </footer>
        
    `);
    break;
}

    else if (escolha == 2){
        document.write(`
    <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
    <div class = "abertura" >
        <h1> Dev Filipe</h1>
        <p>É, Você termina a faculdade de medicina, mas percebe que perdeu 5 anos da sua vida em uma profissão que não te motiva, deixou seu sonhos de criança para trás ainda precisa estudar para se especializar, A pergunta que não sai da sua cabeça: "O que eu faço agora?"</p>
        <h3>GAME OVER</h3>   
        <a href="../../index.html">Voltar para o inicio</a>
    </div>
    <footer>
        <h2>DevPlay!</h2>
        <small>&copy; Todos direitos reservados</small>
    </footer>
    `)
      break;
    }
    else{     
        alert ("escolha indevida, responda com 1 ou 2");   
    }

    }
}