function proximaFase(){
    document.write(` 
        <img class="background__img" src="../fundo3.jpg" alt="cidade ao fundo">
        <div class = "abertura">
       
            <h1> Dev Vanessa</h1>
            <p>Excelente escolha!!! O seu interesse em melhorar as softskills e assumir cargos de maior responsabilidade foram premiadas.</p> 
            <p class="texto__escolha">Você recebeu uma proposta de trabaçho fantástica em uma empresa lider de IT no mundo.</p>
            <p class="texto__escolha">Hoje você ocupa o cargo de CEO da mesma, pode ser dizer que todas as noites sem dormir, pensamentos em desistir, foram recopensadas e você obteve o tão sonhado sucesso.</p>
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
        <h1> Dev Vanessa</h1>
        <p>Poxa Vanessa, infelizmente a tecnologia que você se espericalizou durante anos era mantida por uma grande empresa, e ela acabou se envolvendo em um processo judicial e decretou falência, complicando a manutenção dela e acabou caindo em desuso no mercado.</p>
        <p class="texto__escolha">O mercado de tecnologia é muito dinâmico, então fique antenada ao que esta acontecendo.</p>escolha
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
    var mensagem = "Digite 1 - Você desenvolve habilidades de liderança.\nDigite2 - Você se torna especialista na tecnolgia que começou a carreira."
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