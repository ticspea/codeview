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



//imagem play

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

// ------------------------------- Cenario 3 - Quarta Parte --------------------------------------------- \\

const manIdle3 = document.getElementById("manIdle3");
const cofre3 = document.getElementById("cofre3");
const moeda3 = document.getElementById("moeda3");
const playButton3 = document.getElementById("play3");
const placa003 = document.getElementById("placa003");
const placa03 = document.getElementById("placa03");

let position3 = 0;  // Posição inicial
let direction3 = -1;  // Direção de movimento (-1 para esquerda)
let speed3 = 10;  // Velocidade de movimento
let interval3;  // Intervalo para a animação
let paused3 = false;  // Estado de pausa
const totalSteps3 = 54;  // Número total de passos
const pauseStep3 = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação da quarta parte

function startAnimation3() {
    //alert("Hello! I am an alert box!");

    playButton3.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    // Mostrar imagem inicial
    manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle3.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position3 = 0;  // Reinicia a posição do personagem
    let i3 = 0;  // Reinicia o contador de frames
    paused3 = false;  // Reinicia o estado de pausa

    interval3 = setInterval(function() {
       // alert("Hello! I am an alert box!");
        if (i3 >= totalSteps3) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i3 === pauseStep3 && !paused3) {
            // Pausa no meio do caminho
            paused3 = true;  // Define o estado de pausa para true
            clearInterval(interval3);  // Pausa a animação
            setTimeout(() => {
                // Troca a imagem e continua após 1 segundo
                moeda3.classList.add('hidden'); // Mostra o personagem andando
                manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
                paused3 = false; // Reseta o estado de pausa
                continueAnimation3(i3);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused3) {
            startMoving3();  // Continua a movimentação
        }

        i3++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation3(currentStep3) {
   // alert("Hello! I am an alert box!");

    interval3 = setInterval(function() {
        if (currentStep3 >= totalSteps3) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        
        startMoving3();  // Continua a movimentação
        currentStep3++;  // Incrementa o contador de frames
        if(currentStep3==54){
            manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Troca de imagem
            placa03.style.display = 'none';
            placa003.style.display = 'block';

        }
    }, 54);
}

// Função para continuar o movimento
function startMoving3() {
   // alert("Hello! I am an alert box!");

    position3 += direction3 * speed3;  // Calcula a nova posição (movimento para a esquerda)
    manIdle3.style.transform = `translateX(${position3}px)`;  // Move o personagem para a esquerda
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);

// ----------------------------- Fim da 3a parte --------------------------------------- \\

// ------------------------------- Quarta Parte --------------------------------------------- \\

document.getElementById('play4').addEventListener('click', function() {
    // Exibir o valor de text4
    document.getElementById('texto4').style.display = 'block';
    
    // Exibir msg4 com efeito de máquina de escrever
    var msg4 = document.getElementById('msg4');
    msg4.style.display = 'block';
    var text = msg4.innerHTML;
    msg4.innerHTML = '';
    var i = 0;
    function typeWriter() {
    if (i < text.length) {
    msg4.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
    }
    }
    typeWriter();
    });


// Fim da quarta parte

//---------------------------------------- 5a Parte ------------------------------
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

    manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
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
                manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
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
            manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Troca de imagem
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


// ----------------------------- Fim da 5a parte --------------------------------------- \\
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

            manIdle7.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
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
                        manIdle7.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
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
            const normalize = (str) => str.replace(/\s+/g, '').replace(/\(\s*/g, '(').replace(/\s*\)/g, ')');
            return normalize(userCode) === normalize(correctCode);
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
                    return str ? str.replace(/\s+/g, '').replace(/\(\s*/g, '(').replace(/\s*\)/g, ')') : '';
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


 var initial = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiAgdmFyIHBvdXBhbmNhDQpJbmljaW8NCiAgICAgZXNjcmV2YSjigJxEaWdpdGUgbyB2YWxvciBkYSBwb3VwYW5jYeKAnSkNCnBvdXBhbmNhID0gcG91cGFuY2EgKyAxMA0KZWNyZXZhKHBvdXBhbmNhKQ0KRmltDQo=");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson = new ParsonsWidget({
                'sortableId': 'sortable',
                'trashId': 'sortableTrash',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson.init(initial);
            parson.shuffleLines();
            $("#newInstanceLink").click(function(event){
                event.preventDefault();
                parson.shuffleLines();
            });
            $("#feedbackLink").click(function(event){
                event.preventDefault();
                parson.getFeedback();
            });
        });


    // ------------------------------------------- Fim 6a parte --------------------------------\\
// --------------------------- cenario 7 atribuicao -----------
var initial1 = atob("QWxnb3JpdG1vIEF0cmlidWljYW8NCkluaWNpbw0KIHBvdXBhbmNhID0gMTANCkZpbQ0K");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson1 = new ParsonsWidget({
                'sortableId': 'sortable1',
                'trashId': 'sortableTrash1',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson1.init(initial1);
            parson1.shuffleLines();
            $("#newInstanceLink1").click(function(event){
                event.preventDefault();
                parson1.shuffleLines();
            });
            $("#feedbackLink1").click(function(event){
                event.preventDefault();
                parson1.getFeedback();
            });
        });

// ----------------------------- 8a parte ------------------------
var initial2 = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiB2YXIgcG91cGFuY2ENCkluaWNpbw0KIHBvdXBhbmNhID0gMTANCiBlc2NyZXZhKHBvdXBhbmNhKQ0KRmltDQo=");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson2 = new ParsonsWidget({
                'sortableId': 'sortable2',
                'trashId': 'sortableTrash2',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson2.init(initial2);
            parson2.shuffleLines();
            $("#newInstanceLink2").click(function(event){
                event.preventDefault();
                parson2.shuffleLines();
            });
            $("#feedbackLink2").click(function(event){
                event.preventDefault();
                parson2.getFeedback();
            });
        });

    // ---------------------------------------- 9a parte -------------------------------
    
    var initial3 = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiAgdmFyIHBvdXBhbmNhDQpJbmljaW8NCiBlc2NyZXZhKOKAnERpZ2l0ZSBvIHZhbG9yIGRhIHBvdXBhbmNh4oCdKQ0KIHBvdXBhbmNhID0gcG91cGFuY2EgKyAxMA0KIGVjcmV2YShwb3VwYW5jYSkNCkZpbQ0K");

    function displayErrors(fb) {
        if(fb.errors.length > 0) {
            alert(fb.errors[0]);
        }
    } 

    $(document).ready(function(){
        var parson3 = new ParsonsWidget({
            'sortableId': 'sortable3',
            'trashId': 'sortableTrash3',
            'max_wrong_lines': 1,
            'feedback_cb' : displayErrors
        });
        parson3.init(initial3);
        parson3.shuffleLines();
        $("#newInstanceLink3").click(function(event){
            event.preventDefault();
            parson3.shuffleLines();
        });
        $("#feedbackLink3").click(function(event){
            event.preventDefault();
            parson3.getFeedback();
        });
    });
    
    
    
    
    
    /*var initial = "Algoritmo atribuicao \n" +
    "var poupanca \n" +
    "Inicio \n" +
    "escreva(\"Digite o valor da poupanca\")\n" +
    "poupanca = poupanca + 10\n" +
    "escreva(poupanca)\n" +
    "Fim";

    function displayErrors(fb) {
        if(fb.errors.length > 0) {
            alert(fb.errors[0]);
        }
    } 

    $(document).ready(function(){
        var parson = new ParsonsWidget({
            sortableId: 'sortable',
            trashId: 'sortableTrash',
            max_wrong_lines: 1,
            feedback_cb : displayErrors,
            can_indent: false
        });
        parson.init(initial);
        parson.shuffleLines();
        $("#newInstanceLink").click(function(event){
            event.preventDefault();
            parson.shuffleLines();
        });
        $("#feedbackLink").click(function(event){
            event.preventDefault();
            parson.getFeedback();
        });
    });

*/

// -------------------------- 8a parte - Exercicios ---------------------------------------
function validateAndEvaluate() {
    var form = document.getElementById("quizForm");
    var allAnswered = true;
    var correctAnswers = {
        q1: "Armazenar dados na memória",
        q2: "Alterar o valor de uma variável existente",
        q3: "Para armazenar diferentes tipos de dados",
        q4: "10",
        q5: "saldo + 50"
        // Continue adicionando as respostas corretas para as demais perguntas
    };

    var totalQuestions = Object.keys(correctAnswers).length;
    var score = 0;
    var unansweredQuestions = [];

    // Valida se todas as opções estão preenchidas
    for (var key in correctAnswers) {
        var answer = form.elements[key].value;
        if (!answer) {
            allAnswered = false;
            unansweredQuestions.push(key);
        }
    }

    if (!allAnswered) {
        alert("Por favor, responda todas as perguntas antes de submeter.");
        return;
    }

    // Avalia as respostas e destaca as erradas
    for (var key in correctAnswers) {
        var userAnswer = form.elements[key].value;
        var questionLabel = form.querySelector('input[name="' + key + '"]').parentElement.parentElement;

        // Limpa estilos antigos
        questionLabel.classList.remove('correct', 'error');

        if (userAnswer === correctAnswers[key]) {
            score++;
            questionLabel.classList.add('correct'); // Marca as respostas corretas
        } else {
            questionLabel.classList.add('error');   // Marca as respostas erradas
        }
    }

    document.getElementById("result").innerText = "Você acertou " + score + " de " + totalQuestions + " perguntas.";
}