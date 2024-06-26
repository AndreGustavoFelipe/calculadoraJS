document.addEventListener("DOMContentLoaded", function() {

    const btnC = document.getElementById('btn-C')
    const btnCE = document.getElementById('btn-CE')
    const btnDivisao = document.getElementById('btn-/')
    const btnMultiplicacao = document.getElementById('btn-*');
    const btn7 = document.getElementById('btn-7')
    const btn8 = document.getElementById('btn-8')
    const btn9 = document.getElementById('btn-9')
    const btnMenos = document.getElementById('btn-menos')
    const btn4 = document.getElementById('btn-4')
    const btn5 = document.getElementById('btn-5')
    const btn6 = document.getElementById('btn-6')
    const btnMais = document.getElementById('btn-mais')
    const btn1 = document.getElementById('btn-1')
    const btn2 = document.getElementById('btn-2')
    const btn3 = document.getElementById('btn-3')
    const btnPorcentagem = document.getElementById('btn-porcentagem');
    const btn0 = document.getElementById('btn-0')
    const btnPonto = document.getElementById('btn-ponto')
    const btnIgual = document.getElementById('btn-igual')

    const btnHistorico = document.querySelector('#btnHistorico')
    const telaSuspensa = document.querySelector('.tela-suspensa')
    const conteudoTela = document.querySelector('.conteudo-tela')
    const botaoFechar = document.querySelector('#botao-fechar')

    const listaHistorico = document.querySelector('.lista-historico')

    var array = []
    var historico = []

    var inputVisor = document.getElementById('input-visor')
    
    var equacao = ""


    // -- FUNCAO DE ATUALIZAR O VISOR --

    function atualizarVisor(){

        inputVisor.value = equacao || ''

    }

    // -- BOTOES DE ADICIONAR NUMEROS NA EQUACAO --

    btn0.addEventListener('click', function(){
       
        equacao += "0"
        atualizarVisor()

    })

    btn1.addEventListener('click', function(){

        equacao += "1"
        atualizarVisor()

    })

    btn2.addEventListener('click', function(){

        equacao += "2"
        atualizarVisor()

    })

    btn3.addEventListener('click', function(){

        equacao += "3"
        atualizarVisor()

    })

    btn4.addEventListener('click', function(){

        equacao += "4"
        atualizarVisor()
    })

    btn5.addEventListener('click', function(){

        equacao += "5"
        atualizarVisor()
    })

    btn6.addEventListener('click', function(){

        equacao += "6"
        atualizarVisor()
    })

    btn7.addEventListener('click', function(){

        equacao += "7"
        atualizarVisor()

    })

    btn8.addEventListener('click', function(){

        equacao += "8"
        atualizarVisor()

    })

    btn9.addEventListener('click', function(){

        equacao += "9"
        atualizarVisor()

    })

    // -- BOTOES DE LIMPAR O VISOR --

    btnC.addEventListener('click', function(){

        equacao = ''
        atualizarVisor()

    })

    btnCE.addEventListener('click', function(){

        if(equacao.slice((equacao.length) - 1) === ' '){

            equacao = equacao.slice(0, -3)

        }

        else{

            equacao = equacao.slice(0, - 1)

        }       
        
        atualizarVisor()

    })

    // -- BOTOES ARITIMETICOS E PORCENTAGEM --

    btnMais.addEventListener('click', function(){

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else if(equacao.slice(-1) === " "){

            alert("O operador aritimetico ja foi informado! Agora adicione um número")

        }

        else{

            equacao += ' + '
            atualizarVisor()

        }

    })

    btnMenos.addEventListener('click', function(){

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else if(equacao.slice(-1) === " "){

            alert("O operador aritimetico ja foi informado! Agora adicione um número")

        }

        else{

            equacao += ' - '
            atualizarVisor()

        }

    })

    btnMultiplicacao.addEventListener('click', function(){

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else if(equacao.slice(-1) === " "){

            alert("O operador aritimetico ja foi informado! Agora adicione um número")

        }

        else{

            equacao += ' * '
            atualizarVisor()

        }

    })

    btnDivisao.addEventListener('click', function(){

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else if(equacao.slice(-1) === " "){

            alert("O operador aritimetico ja foi informado! Agora adicione um número")

        }

        else{

            equacao += ' / '
            atualizarVisor()

        }

    })

    btnPorcentagem.addEventListener('click', function(){

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else if(equacao.slice(-1) === " "){

            alert("O operador aritimetico ja foi informado! Agora adicione um número")

        }

        else{

            equacao += ' % '
            atualizarVisor()

        }

    })

    // -- BOTAO DE PONTO/VIRGULA -- 

    btnPonto.addEventListener('click', function(){

        equacao += '.'
        atualizarVisor()

    })

    // -- BOTAO RESPONSÁVEL POR REALIZAR AS CONTAS -- 

    btnIgual.addEventListener('click', function() {        

        if(equacao.length == 0){

            alert("Informe algum número!")

        }

        else{

            array = equacao.split(' ');
            let resultado = parseFloat(array[0]); 
    
            historico.push(equacao);
    
            for (let i = 1; i < array.length; i += 2) {
                const operador = array[i];
                const numero = parseFloat(array[i + 1]);
        
                switch (operador) {
                    case '+':
                        resultado += numero;
                        break;
                    case '-':
                        resultado -= numero;
                        break;
                    case '*':
                        resultado *= numero;
                        break;
                    case '/':
                        resultado /= numero;
                        break;
                    default:
                        console.log("Operador inválido!");
                }
            }
        
            console.log(historico)
        
            equacao = resultado.toString();
            atualizarVisor();

        }

        
    });
    
    /* BOTAO DE HISTORICO */

    btnHistorico.addEventListener('click', function(){

        telaSuspensa.style.display = 'block' /*Sem nenhuma validação pois a tela suspensa não permite que o botão seja clicado mais de uma vez*/

        for(let i = 0; i<historico.length; i++){

            const novoItem = document.createElement('li');
            
            novoItem.textContent = historico[i];

            listaHistorico.appendChild(novoItem);

        }

    });

    /* BOTAO FECHAR HISTORICO */

    botaoFechar.addEventListener('click', function(){

        telaSuspensa.style.display = 'none'

    });

});