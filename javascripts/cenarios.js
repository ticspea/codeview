/// Exibindo o texto da constante
var i = 0;
        var txt = document.getElementById("tx2").innerText; // Pega o conteúdo do parágrafo
        var speed = 50; // Velocidade de exibição (milissegundos)
        var isShowing = false; // Para rastrear se o texto está sendo mostrado

        // Função typewriter
        function typeWriter() {
            // Exibe o texto caractere por caractere
            if (i < txt.length) {
                document.getElementById("tx2").innerHTML = txt.substring(0, i + 1); 
                i++;
                setTimeout(typeWriter, speed); // Chama recursivamente até completar o texto
            }
        }

        // Ação ao clicar no botão
        document.getElementById("play1").addEventListener("click", function() {
            var tx2 = document.getElementById("tx2");
            var c1 = document.getElementById('c1');
//            var tx3 = document.getElementById("tx2");
        

            if (c1.style.display === 'block') {
                c1.style.display = 'none';
                //tx3.style.display = 'none';
    
    
          } else {
           //     c1.style.display = 'block';
                //tx3.style.display = 'block';
    
            }
           


            if (isShowing) {
                // Se o texto estiver visível, esconde e redefine
                tx2.style.display = "none";
                tx2.innerHTML = ""; // Limpa o conteúdo para reiniciar o efeito typewriter
                i = 0; // Reseta o índice
                isShowing = false; // Atualiza o estado
            } else {
                // Se o texto estiver escondido, exibe e inicia o efeito typewriter
                tx2.style.display = "block";
                typeWriter();
                isShowing = true; // Atualiza o estado
            }
        });
/*
        function adjustFontSize() {
            var artigo = document.getElementById("artigo");
            var tx2 = document.getElementById("tx2");
        
            // Calcula o tamanho da fonte com base na largura do contêiner
            var containerWidth = artigo.offsetWidth;
            var fontSize = containerWidth * 0.03; // 3% da largura do contêiner
            tx2.style.fontSize = fontSize + "px";
        }
        
        // Ajusta o tamanho da fonte ao carregar a página e ao redimensionar a janela
        window.addEventListener("load", adjustFontSize);
        window.addEventListener("resize", adjustFontSize);
*/
function toggleDisplay(elementId, displayStyle) {
    var element = document.getElementById(elementId);
    if (element) {
    element.style.display = displayStyle;
    }
    }
    
    function addHoverEffect(triggerId, targetId) {
    var triggerElement = document.getElementById(triggerId);
    if (triggerElement) {
         triggerElement.addEventListener('mouseover', function() {
    toggleDisplay(targetId, 'block');
    });
    triggerElement.addEventListener('mouseout', function() {
         toggleDisplay(targetId, 'none');
    });
    }
    }
    
    var elements = [
    { trigger: 'play1', target: 'pt1' },
    { trigger: 'play2', target: 'pt2' },
    { trigger: 'play3', target: 'pt3' },
    { trigger: 'play4', target: 'pt4' },
    { trigger: 'play5', target: 'pt5' },
    { trigger: 'play6', target: 'pt6' },
    { trigger: 'code1', target: 'ps1' },
    { trigger: 'text1', target: 'tt1' },
    { trigger: 'text2', target: 'tt2' },
    { trigger: 'text3', target: 'tt3' },
    { trigger: 'text4', target: 'tt4' },
    { trigger: 'text5', target: 'tt5' },
    { trigger: 'text6', target: 'tt6' },
    { trigger: 'replay1', target: 'rt1' },
    { trigger: 'replay3', target: 'rt3' },
    { trigger: 'replay4', target: 'rt4' },
    { trigger: 'replay5', target: 'rt5' },
    { trigger: 'replay6', target: 'rt6' },
    { trigger: 'sound1', target: 'st1' },
    { trigger: 'sound2', target: 'st2' },
    { trigger: 'sound3', target: 'st3' },
    { trigger: 'sound4', target: 'st4' },
    { trigger: 'sound5', target: 'st5' },
    { trigger: 'sound6', target: 'st6' },
    { trigger: 'code2', target: 'ps2' },
    { trigger: 'code3', target: 'ps3' },
    { trigger: 'code4', target: 'ps4' },
    { trigger: 'code5', target: 'ps5' },
    { trigger: 'code6', target: 'ps6' },
    { trigger: 'replay2', target: 'rt2' }
   
    ];
    
    elements.forEach(function(element) {
    addHoverEffect(element.trigger, element.target);
    });
/*

*/

// ------ Exibindo o pseúdocodigo --------
document.getElementById('code1').addEventListener('click', function() {
    var c1 = document.getElementById('c1');
    var tx3 = document.getElementById("tx2");

   // var txt0 = document.getElementById("tx3");

    if (c1.style.display === 'none') {
            c1.style.display = 'block';
            tx3.style.display = 'none';


      } else {
            c1.style.display = 'none';
            tx3.style.display = 'block';

        }
        });


// Exibindo a mensagem text1
  // Seleciona os elementos HTML pelos IDs
  

//Botão replay
document.getElementById("replay1").addEventListener("click", function() {
window.location.reload();
});

/*----------------------

/* -----------------------------
*/




const manIdle3 = document.getElementById("manIdle3");
const cofre3 = document.getElementById("cofre3");
const moeda3 = document.getElementById("moeda3");
const playButton3 = document.getElementById("play3");
const codeButton3 = document.getElementById("code3");
const message3 = document.getElementById("message3");
const placa003 = document.getElementById("placa003");
const placa03 = document.getElementById("placa03");

let position3 = 0;
let direction3 = -1;
let speed3 = 10;
let interval3;
let paused3 = false;
const totalSteps3 = 54;
const pauseStep3 = 30;
let isAnimating3 = false; // Variável para evitar cliques repetidos

// Função para exibir mensagens interativas com efeito de máquina de escrever
function typeWriterEffect(element, text, speed, callback) {
    element.innerHTML = "";
    element.style.display = "block"; // Exibe a mensagem
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(() => {
                element.style.display = "none"; // Esconde a primeira mensagem
                callback();
            }, 1000);
        }
    }

    type();
}

// Função para iniciar a animação após a mensagem inicial
function startAnimation3() {
    manIdle3.style.backgroundImage = "url('/codeview/img/velho-sem-moeda.png')";
    manIdle3.style.transform = 'translateX(0px)';

    position3 = 0;
    let i3 = 0;
    paused3 = false;

    interval3 = setInterval(function () {
        if (i3 >= totalSteps3) {
            manIdle3.style.transform = `translateX(${position3}px)`;
            clearInterval(interval3);
            showFinalMessage3();
            return;
        }

        if (i3 === pauseStep3 && !paused3) {
            paused3 = true;
            clearInterval(interval3);
            setTimeout(() => {
                moeda3.classList.add('hidden');
                manIdle3.style.backgroundImage = "url('/codeview/img/Regulo10.png')";
                manIdle3.style.height = "18vh";
                paused3 = false;
                continueAnimation3(i3);
            }, 1000);
        } else if (!paused3) {
            startMoving3();
        }

        i3++;
    }, 60);
}

// Função para continuar a animação
function continueAnimation3(currentStep3) {
    interval3 = setInterval(function () {
        if (currentStep3 >= totalSteps3) {
            manIdle3.style.transform = `translateX(${position3}px)`;
            clearInterval(interval3);
            showFinalMessage3();
            return;
        }

        startMoving3();
        currentStep3++;

        if (currentStep3 == 54) {
            manIdle3.style.backgroundImage = "url('/codeview/imagens/velho-sem-moeda.png')";
            placa03.style.display = 'none';
            placa003.style.display = 'block';

            setTimeout(() => {
                cofre3.style.backgroundImage = "url('/codeview/img/cofre10.png')";
                setTimeout(() => {
                    cofre3.style.backgroundImage = "url('/codeview/img/cofre-sem-velho.png')";
                }, 1000);
            }, 1000);
        }
    }, 54);
}

// Função para continuar o movimento
function startMoving3() {
    position3 += direction3 * speed3;
    manIdle3.style.transform = `translateX(${position3}px)`;
}

// Exibe a mensagem inicial e inicia a animação após a exibição
function showInitialMessage3() {
    if (isAnimating3) return; // Evita cliques repetidos durante a animação
    isAnimating3 = true;

    playButton3.disabled = true;
    codeButton3.disabled = true;

    typeWriterEffect(
        message3,
        "O Régulo necessita de fazer a primeira coleta e armazená-la no cofre, atribuindo-lhe assim um valor inicial. Ele vai até à primeira casa e recolhe a primeira contribuição de 10 meticais e coloca no cofre, iniciando assim a variável poupança com esse valor.",
        50,
        startAnimation3
    );
}

// Exibe a mensagem final após a animação
function showFinalMessage3() {
    typeWriterEffect(
        message3,
        'Na programação, atribuir um valor a uma variável significa inicializar essa variável com um valor específico. No contexto desse cenário, a variável "poupança" é iniciada com o valor 10 correspondente à contribuição colocada no cofre. A atribuição é feita usando o operador de igualdade = à variavel pretendida seguido do valor a ser atribuido. Clique no botão do código abaixo para exibir a lógica na forma de pseudocódigo.                                   ',
        50,
        () => {
            playButton3.disabled = false;
            codeButton3.disabled = false;
            isAnimating3 = false; // Permite clicar novamente no botão Play
            highlightCodeButton();
        }
    );
}

// Função para destacar o botão code3 com efeito de pisca-pisca
function highlightCodeButton() {
    let blinkCount = 0;
    const interval = setInterval(() => {
        codeButton3.style.visibility = codeButton3.style.visibility === 'hidden' ? 'visible' : 'hidden';
        blinkCount++;
        if (blinkCount >= 12) { // 12 trocas = 6 segundos
            clearInterval(interval);
            codeButton3.style.visibility = 'visible'; // Garante que fica visível no final
        }
    }, 500);
}

// Função para exibir o pseudocódigo no message3
function showPseudocode3() {
    if (isAnimating3) return; // Impede exibição enquanto animação ocorre

    message3.style.display = "block"; // Garante que a mensagem aparece
    message3.innerHTML = `<pre>
Inicio
    <b class="formatacaoc">poupanca</b> = 10
Fim
</pre>`;
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', () => {
    if (isAnimating3) return; // Impede clique repetido
    message3.innerHTML = ""; // Reinicia a mensagem para evitar sobreposição
    showInitialMessage3();
});

codeButton3.addEventListener('click', showPseudocode3);


// ----------------------------- Fim da 3a parte --------------------------------------- \\

// ------------------------------- Cenario 4a Quarta Parte --------------------------------------------- \\
let isAnimating4 = false; // Variável para evitar cliques repetidos

document.getElementById('play4').addEventListener('click', function () {
    let playButton = document.getElementById('play4');
    let codeButton = document.getElementById('code4');
    let msg4 = document.getElementById('msg4');
    let cofre4 = document.getElementById("cofre4");

    // Se a animação já estiver em execução, não faz nada
    if (isAnimating4) return;

    // Bloqueia os botões imediatamente para evitar cliques repetidos
    isAnimating4 = true;
    playButton.disabled = true;
    codeButton.disabled = true;

    // Reinicia a mensagem
    msg4.innerHTML = '';
    msg4.style.display = 'block';

    let text = "O valor da variável poupanca já foi atribuido no cenário anterior. Neste cenário, apenas é exibido o seu respectivo valor. Para isso é usado a palavra chave escreva para exibir o valor. Clique na imagem do código para exibir o exemplo código. ";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            msg4.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);


        } else {
            cofre4.style.backgroundImage = "url('/codeview/img/cofrec10.png')";

            // Após a exibição da mensagem, desbloqueia os botões
            playButton.disabled = false;
            codeButton.disabled = false;
            isAnimating4 = false; // Permite novos cliques no play4


            // Efeito de pisca-pisca no botão code4 por 6 segundos
            let blinkInterval = setInterval(() => {
                codeButton.style.visibility = (codeButton.style.visibility === 'hidden') ? 'visible' : 'hidden';
            }, 500);

            // Para o efeito de pisca-pisca após 6 segundos
            setTimeout(() => {
                clearInterval(blinkInterval);
                codeButton.style.visibility = 'visible';
            }, 6000);
        }
    }

    typeWriter();
});

// Exibir pseudocódigo ao clicar no botão code4
document.getElementById('code4').addEventListener('click', function () {
    let msg4 = document.getElementById('msg4');
    msg4.style.display = "block";
    msg4.innerHTML = `<pre>
    Inicio
          <b class="formatacaoc">escreva</b>(poupanca)
        Fim
</pre>`;
});


/*let isAnimating4 = false; // Variável para evitar cliques repetidos

document.getElementById('play4').addEventListener('click', function () {
    let playButton = document.getElementById('play4');
    let codeButton = document.getElementById('code4');
    let msg4 = document.getElementById('msg4');

    // Se a animação já estiver em execução, não faz nada
    if (isAnimating4) return;

    // Bloqueia os botões imediatamente para evitar cliques repetidos
    isAnimating4 = true;
    playButton.disabled = true;
    codeButton.disabled = true;

    // Reinicia a mensagem
    msg4.innerHTML = '';
    msg4.style.display = 'block';

    let text = "O valor da variável poupanca já foi atribuido no cenário anterior. Neste cenário, apenas é exibido o seu respectivo valor. Para isso é usada a palavra reserva <b>escreva</b> para exibir o valor. Clique na imagem do código para exibir o respectivo código. ";
    let i = 0;

   let formattedText = text.replace("escreva", "<strong>escreva</strong>");

    // Exibir a string formatada em um elemento HTML
    document.getElementById("msg4").innerHTML = formattedText;


    function typeWriter() {
        if (i < text.length) {
            msg4.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Após a exibição da mensagem, desbloqueia os botões
            playButton.disabled = false;
            codeButton.disabled = false;
            isAnimating4 = false; // Permite novos cliques no play4

            // Efeito de pisca-pisca no botão code4 por 6 segundos
            let blinkInterval = setInterval(() => {
                codeButton.style.visibility = (codeButton.style.visibility === 'hidden') ? 'visible' : 'hidden';
            }, 500);

            // Para o efeito de pisca-pisca após 6 segundos
            setTimeout(() => {
                clearInterval(blinkInterval);
                codeButton.style.visibility = 'visible';
            }, 6000);
        }
    }

    typeWriter();
});

// Exibir pseudocódigo ao clicar no botão code4
document.getElementById('code4').addEventListener('click', function () {
    let msg4 = document.getElementById('msg4');
    msg4.style.display = "block";
    msg4.innerHTML = `<pre>
   Inicio
         <b class="formatacaoc">escreva</b>(poupanca)
       Fim
</pre>`;
});
*/
//  --------------------------- Fim da 4a parte ---------------------------------------
/*
/*
document.getElementById('play4').addEventListener('click', function () {
    let playButton = document.getElementById('play4');
    let codeButton = document.getElementById('code4');
    let msg4 = document.getElementById('msg4');

    // Bloqueia os botões para evitar loops
    playButton.disabled = true;
    codeButton.disabled = true;

    // Exibir a mensagem msg4 com efeito de máquina de escrever
    msg4.style.display = 'block';
    let text = msg4.innerHTML;
    msg4.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            msg4.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Após a exibição da mensagem, desbloqueia os botões
            playButton.disabled = false;
            codeButton.disabled = false;

            // Efeito de pisca-pisca no botão code4 por 6 segundos
            let blinkInterval = setInterval(() => {
                codeButton.style.visibility = (codeButton.style.visibility === 'hidden') ? 'visible' : 'hidden';
            }, 500);

            // Para o efeito de pisca-pisca após 6 segundos
            setTimeout(() => {
                clearInterval(blinkInterval);
                codeButton.style.visibility = 'visible';
            }, 6000);
        }
    }

    typeWriter();
});

// Exibir pseudocódigo ao clicar no botão code4
document.getElementById('code4').addEventListener('click', function () {
    let msg4 = document.getElementById('msg4');
    msg4.style.display = "block";
    msg4.innerHTML = `<pre>
<b>Algoritmo Visualizacao</b>
    Início
        escreve(poupanca)
    Fim.
</pre>`;
});
*/

// Fim da quarta parte

// Inicio ---------------------------------------- 5a Parte ------------------------------

// ------------------------------- Cenario 5 - Quarta Parte --------------------------------------------- \\
const manIdle5 = document.getElementById("manIdle5");
const cofre5 = document.getElementById("cofre5");
const moeda5 = document.getElementById("moeda5");
const playButton5 = document.getElementById("play5");
const codeButton5 = document.getElementById("code5");
const message5 = document.getElementById("message5");
const placa005 = document.getElementById("placa005");
const placa05 = document.getElementById("placa05");

let position5 = 0;
let direction5 = -1;
let speed5 = 10;
let interval5;
let paused5 = false;
const totalSteps5 = 54;
const pauseStep5 = 30;
let isAnimating5 = false; // Variável para evitar cliques repetidos

// Função para exibir mensagens interativas com efeito de máquina de escrever
function typeWriterEffect5(element, text, speed, callback) {
    element.innerHTML = "";
    element.style.display = "block"; // Exibe a mensagem
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(() => {
                element.style.display = "none"; // Esconde a primeira mensagem
                callback();
            }, 1000);
        }
    }

    type();
}

// Função para iniciar a animação após a mensagem inicial
function startAnimation5() {
    manIdle5.style.backgroundImage = "url('/codeview/img/velho-sem-moeda.png')";
    manIdle5.style.transform = 'translateX(0px)';

    position5 = 0;
    let i5 = 0;
    paused5 = false;

    interval5 = setInterval(function () {
        if (i5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;
            clearInterval(interval5);
            showFinalMessage();
            return;
        }

        if (i5 === pauseStep5 && !paused5) {
            paused5 = true;
            clearInterval(interval5);
            setTimeout(() => {
                moeda5.classList.add('hidden');
                manIdle5.style.backgroundImage = "url('/codeview/img/Regulo20.png')";
                manIdle5.style.height = "18vh";
                paused5 = false;
                continueAnimation5(i5);
            }, 1000);
        } else if (!paused5) {
            startMoving5();
        }

        i5++;
    }, 59);
}

// Função para continuar a animação
function continueAnimation5(currentStep5) {
    interval5 = setInterval(function () {
        if (currentStep5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;
            clearInterval(interval5);
            showFinalMessage5();
            return;
        }

        startMoving5();
        currentStep5++;

        if (currentStep5 == 54) {
            manIdle5.style.backgroundImage = "url('/codeview/imagens/velho-sem-moeda.png')";
            placa05.style.display = 'none';
            placa005.style.display = 'block';

            setTimeout(() => {
                cofre5.style.backgroundImage = "url('/codeview/img/cofre20.png')";
                setTimeout(() => {
                    cofre5.style.backgroundImage = "url('/codeview/img/cofre-sem-velho.png')";
                }, 1000);
            }, 1000);
        }
    }, 60);
}

// Função para continuar o movimento
function startMoving5() {
    position5 += direction5* speed5;
    manIdle5.style.transform = `translateX(${position5}px)`;
}

// Exibe a mensagem inicial e inicia a animação após a exibição
function showInitialMessage5() {
    if (isAnimating5) return; // Evita cliques repetidos durante a animação
    isAnimating5 = true;

    playButton5.disabled = true;
    codeButton5.disabled = true;

    typeWriterEffect5(
        message5,
        "O Régulo necessita de continuar a sua jornada e desta vez irá coletar o valor noutra casa. Conforme ilustra a figura 19, desta vez caminha até à casa e recolhe o valor de 20Mt e vai até ao cofre para guardá-lo. Assumindo que o depósito anterior já foi realizado inicialmente,conforme ilustrado no cenário 3, o valor do cofre será atualizado para 30 Meticais.",
        50,
        startAnimation5
    );
}

// Exibe a mensagem final após a animação
function showFinalMessage5() {
    typeWriterEffect5(
        message5,
        'Na programação, atualizar o valor de uma variável significa alterar essa variável para um outro valor específico. No contexto deste cenário, o valor da variável “poupança” é atualizado para 30 meticais. A actualização de valor é feita fornecendo um novo valor a variavel. No clique no botão do código para exibir um exemplo de actualização do valor da poupanca via subtração.',
        50,
        () => {
            playButton5.disabled = false;
            codeButton5.disabled = false;
            isAnimating5 = false; // Permite clicar novamente no botão Play
            highlightCodeButton();
        }
    );
}

// Função para destacar o botão code3 com efeito de pisca-pisca
function highlightCodeButton() {
    let blinkCount = 0;
    const interval = setInterval(() => {
        codeButton5.style.visibility = codeButton5.style.visibility === 'hidden' ? 'visible' : 'hidden';
        blinkCount++;
        if (blinkCount >= 12) { // 12 trocas = 6 segundos
            clearInterval(interval);
            codeButton5.style.visibility = 'visible'; // Garante que fica visível no final
        }
    }, 500);
}

// Função para exibir o pseudocódigo no message3
function showPseudocode5() {
    if (isAnimating5) return; // Impede exibição enquanto animação ocorre

    message5.style.display = "block"; // Garante que a mensagem aparece
    message5.innerHTML = `<pre>
Inicio
    <b class="formatacaoc">poupanca</b> = poupanca + 20
Fim
</pre>`;
}

// Adiciona um evento de clique ao botão "Play"
playButton5.addEventListener('click', () => {
    if (isAnimating5) return; // Impede clique repetido
    message5.innerHTML = ""; // Reinicia a mensagem para evitar sobreposição
    showInitialMessage5();
});

codeButton5.addEventListener('click', showPseudocode5);



// ----------------------------- Fim da 5a parte --------------------------------------- \\


/*
const manIdle5 = document.getElementById("manIdle5");
const moeda5 = document.getElementById("moeda5");
const playButton5 = document.getElementById("play5");

let position5 = 0;  // Posição inicial
let direction5 = -1;  // Direção de movimento (-1 para esquerda)
let speed5 = 10;  // Velocidade de movimento
let interval5;  // Intervalo para a animação
let paused5 = false;  // Estado de pausa
const totalSteps5 = 54;  // Número total de passos
const pauseStep5 = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação
function startAnimation5() {
    const input = document.getElementById("fname").value.trim(); // Pega o valor do input e remove espaços
    if (input === "") {
        alert("Por favor, insira a instrução '.");
        return;  // Não inicia a animação
    }

    if (input !== "poupanca+10" && input !== "poupanca + 10") {
        alert("Instrução errada. Tente de novo.");
        return;  // Não inicia a animação
    }

    // Se a instrução estiver correta, prossegue com a animação
    playButton5.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    manIdle5.style.backgroundImage = "url('/codeview/img/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle5.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position5 = 0;  // Reinicia a posição do personagem
    let i5 = 0;  // Reinicia o contador de frames
    paused5 = false;  // Reinicia o estado de pausa

    interval5 = setInterval(function() {
        if (i5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;  // Atualiza a posição final
            clearInterval(interval5);  // Interrompe o intervalo quando o movimento estiver completo
            playButton5.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i5 === pauseStep5 && !paused5) {
            paused5 = true;  // Define o estado de pausa
            clearInterval(interval5);  // Pausa a animação
            setTimeout(() => {
                moeda5.classList.add('hidden'); // Mostra o personagem com a moeda
                manIdle5.style.backgroundImage = "url('/menu/img/velho-com-moeda.png')";  // Troca de imagem
                paused5 = false;  // Reseta o estado de pausa
                continueAnimation5(i5);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused5) {
            startMoving5();  // Continua a movimentação
        }

        i5++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation5(currentStep5) {
    interval5 = setInterval(function() {
        if (currentStep5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;  // Atualiza a posição final
            clearInterval(interval5);  // Interrompe o intervalo quando o movimento estiver completo
            playButton5.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        startMoving5();  // Continua a movimentação
        currentStep5++;  // Incrementa o contador de frames


        if(currentStep5==54){
            manIdle5.style.backgroundImage = "url('/menu/img/velho-sem-moeda.png')";  // Troca de imagem
            placa05.style.display = 'none';
            placa005.style.display = 'block';

        }





    }, 60);
}

// Função para movimentar o personagem
function startMoving5() {
    position5 += direction5 * speed5;  // Atualiza a posição
    manIdle5.style.transform = `translateX(${position5}px)`;  // Move o personagem
}

// Adiciona evento de clique ao botão
playButton5.addEventListener("click", startAnimation5);

*/
// ----------------------------- Fim da 5a parte --------------------------------------- \\





/*
// ----------------------------- 6a Parte ---------------------------------------------- //
function updateLineNumbers() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
    const lineNumber = document.createElement('div');
    lineNumber.textContent = i;
    lineNumbers.appendChild(lineNumber);
    }
    }
    
    function syncScroll() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = editor.scrollTop;
    }
    
    // Initialize line numbers
    updateLineNumbers();


//Programando o textarea

        // Texto correto do pseudocódigo
        const pseudocodeCorreto = `Algoritmo atribuicao
Inicio
var poupanca
poupanca = poupanca + 10
escreva(poupanca)
Fim`;

        // Função para "compilar" o pseudocódigo
        const manIdle7 = document.getElementById("manIdle7");
        const moeda7 = document.getElementById("moeda7");
        const playButton7 = document.getElementById("play7");
        const editor = document.getElementById("editor");
        const highlightedCodeDiv = document.getElementById("highlightedCode");


        let position7 = 0;  // Posição inicial
        let direction7 = -1;  // Direção de movimento (-1 para esquerda)
        let speed7 = 10;  // Velocidade de movimento
        let interval7;  // Intervalo para a animação
        let paused7 = false;  // Estado de pausa
        const totalSteps7 = 54;  // Número total de passos
        const pauseStep7 = 30;  // Passo onde ocorre a pausa

        // Pseudocódigo correto
        const correctPseudocode = `Algoritmo atribuicao
Inicio
var poupanca
poupanca = poupanca + 10 

escreva(poupanca)
Fim`;

        // Função para iniciar a animação
        function startAnimation7() {
            const userCode = editor.value.trim(); // Pega o valor do editor

            // Verificação do pseudocódigo no editor
            if (userCode === "") {
                alert("Por favor, insira o pseudocódigo.");
                return;
                } else if (!comparePseudocode(userCode, correctPseudocode)) {
                if (isPartiallyCorrect(userCode, correctPseudocode)) {
                alert("Pseudocódigo parcialmente incorreto, continue tentando.");
                } else {
                alert("Pseudocódigo incorreto. Tente novamente.");
                }
                highlightErrors(userCode, correctPseudocode);
                return;
                } else {
                alert("Parabéns, você acertou!");
                }

                     

            // Se a instrução estiver correta, prossegue com a animação
            playButton7.disabled = true;  // Desabilita o botão enquanto a animação está em execução

            manIdle7.style.backgroundImage = "url('/menu/img/velho-sem-moeda.png')";  // Define a imagem inicial
            manIdle7.style.transform = 'translateX(0px)';  // Reseta a posição inicial
            
            position7 = 0;  // Reinicia a posição do personagem
            let i7 = 0;  // Reinicia o contador de frames
            paused7 = false;  // Reinicia o estado de pausa

            interval7 = setInterval(function() {
                if (i7 >= totalSteps7) {
                    manIdle7.style.transform = `translateX(${position7}px)`;  // Atualiza a posição final
                    clearInterval(interval7);  // Interrompe o intervalo quando o movimento estiver completo
                    playButton7.disabled = false;  // Reabilita o botão após o término da animação
                    return;
                }

                if (i7 === pauseStep7 && !paused7) {
                    paused7 = true;  // Define o estado de pausa
                    clearInterval(interval7);  // Pausa a animação
                    setTimeout(() => {
                        moeda7.classList.add('hidden'); // Mostra o personagem com a moeda
                        manIdle7.style.backgroundImage = "url('/menu/img/velho-com-moeda.png')";  // Troca de imagem
                        paused7 = false;  // Reseta o estado de pausa
                        continueAnimation7(i7);  // Continua a animação após a pausa
                    }, 1000);  // Pausa por 1 segundo
                } else if (!paused7) {
                    startMoving7();  // Continua a movimentação
                }

                i7++;  // Incrementa o contador de frames
            }, 60);
        }



        function comparePseudocode(userCode, correctCode) {
            const normalize = (str) => str.replace(/\s+/g, '').replace(/\(\s*/ /*g, '(').replace(/\s*\)/g, ')');
  /*          return normalize(userCode) === normalize(correctCode);
            }
            


            function isPartiallyCorrect(userCode, correctCode) {
                const userLines = userCode.split('\n');
                const correctLines = correctCode.split('\n');
                let correctCount = 0;
                
                for (let i = 0; i < correctLines.length; i++) {
                if (normalize(userLines[i]) === normalize(correctLines[i])) {
                correctCount++;
                }
                }
                
                return correctCount > 0 && correctCount < correctLines.length;
                }

                function normalize(str) {
                    return str ? str.replace(/\s+/g, '').replace(/\(\s*/ /*g, '(').replace(/\s*\)/g, ')') : '';
                    }

        // Função para continuar a animação após a pausa
        function continueAnimation7(currentStep7) {
            interval7 = setInterval(function() {
                if (currentStep7 >= totalSteps7) {
                    manIdle7.style.transform = `translateX(${position7}px)`;  // Atualiza a posição final
                    clearInterval(interval7);  // Interrompe o intervalo quando o movimento estiver completo
                    playButton7.disabled = false;  // Reabilita o botão após o término da animação
                    return;
                }
                startMoving7();  // Continua a movimentação
                currentStep7++;  // Incrementa o contador de frames
            }, 60);
        }

        // Função para movimentar o personagem
        function startMoving7() {
            position7 += direction7 * speed7;  // Atualiza a posição
            manIdle7.style.transform = `translateX(${position7}px)`;  // Move o personagem
        }

        // Adiciona evento de clique ao botão
        playButton7.addEventListener("click", startAnimation7);

        // Função para destacar erros no pseudocódigo inserido
        function highlightErrors(userCode, correctCode) {
            const userLines = userCode.split('\n');
            const correctLines = correctCode.split('\n');
            
            let highlightedCode = '';
            let missingVar = true;
            
            for (let i = 0; i < correctLines.length; i++) {
            if (normalize(userLines[i]) !== normalize(correctLines[i])) {
            highlightedCode += `<span style="background-color: yellow;">${userLines[i] || ''}</span>\n`;
            }
            if (normalize(userLines[i]) === 'varpoupanca') {
            missingVar = false;
            }
            }
            
            if (missingVar && userCode.includes('poupanca = poupanca + 10') && userCode.includes('escreva(poupanca)')) {
            alert("Você precisa declarar a variável 'poupanca'.");
            }
            
            highlightedCodeDiv.innerHTML = highlightedCode;
            }


*/
