function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Camila</h1>
            <p>Excelente escolha!!!</p> 
            <p class="texto__escolha">Você fundou uma das maiores empresas Techs do mundo</p>
            <p class="texto__escolha">Tech Hit é conhecida no mundo todo, e hoje você tem a certeza que fez a escolha certa, seguiu seu coraçãoo, buscou conhecimentos, se aperfeiçou, lutou contra seus medos e conseguiu transformar um sonho em um império Tec.</p>
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
        <h1> Dev Camila</h1>
        <p>Poxa Camila, você conseguiu conquistar grandes coisas na carreira Techescolha, mas sempre ficou com aquela vontade de empreender, e se...</p>
        <p class="texto__escolha">Infelizmente nunca saberemos, o que a Tech Hit poderia ter sido? <br>O sonho morreu, tenha coragem sempre!<p>    
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
    var mensagem = "Digite 1 - Você resolve continuar na emrpesa atual.\n Digite 2 - Você deseja fundar uma empresa Tec."
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