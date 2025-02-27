// Type text
	var i = 0;
var txt = ' <p id="constante">Conceito de constante <p> A vila de Quissico foi fundada no ano de 1930 e, desde então, mantém o mesmo nome. A data da sua criação também não muda. Mesmo com o passar do tempo e as mudanças na vila, esses aspectos permanecem inalterados, refletindo a identidade e a história do lugar. <p> Em programação, uma constante é um valor que não muda durante a execução do programa, assim como o nome e o ano de fundação da vila de Quissico que permanecem os mesmos ao longo do tempo.</p> Clique na imagem do código para exibir a lógica na forma de pseudocódigo ';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("t1").innerHTML = txt.substring(0, i + 1); // += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



/* Aciona o typewriter ao passar o mouse sobre o parágrafo */
document.getElementById("t1").onmouseover = function() {
  if (i === 0) { // Só reinicia se ainda não começou
    typeWriter();
  }
};


//imagem play

document.getElementById('play1').addEventListener('mouseover', function() {
  var pt1 = document.getElementById('pt1');
  pt1.style.display = 'block'; // Exibe o texto
});

// Função para ocultar o texto quando o mouse sai
document.getElementById('play1').addEventListener('mouseout', function() {
  var pt1 = document.getElementById('pt1');
  pt1.style.display = 'none'; // Oculta o texto
});


//Exibir comentario na imagem pseudocodigo

document.getElementById('code1').addEventListener('mouseover', function() {
  var ps1 = document.getElementById('ps1');
  ps1.style.display = 'block'; // Exibe o texto
});

// Função para ocultar o texto quando o mouse sai
document.getElementById('code1').addEventListener('mouseout', function() {
  var ps1 = document.getElementById('ps1');
  ps1.style.display = 'none'; // Oculta o texto
});



// Exibindo pseudocodigo na secção constante

/*<img src="sua-imagem.jpg" alt="Imagem" id="imagem" style="cursor: pointer;">
<p id="texto">Este é o texto que será exibido ou ocultado.</p>*/


document.getElementById('code1').addEventListener('click', function() {
    var c1 = document.getElementById('c1');
    if (c1.style.display === 'none') {
        c1.style.display = 'block';
      } else {
        c1.style.display = 'none';
        }
        });



/*function toggleText(code1, t1) {
    // Ocultar todos os textos
    var texto1 = document.getElementById('t1');
    var texto2 = document.getElementById('constante');

    texto1.style.display = 'none';
    texto2.style.display = 'none';

    // Exibir o texto correspondente à imagem clicada
    var texto = document.getElementById(t1);
    texto.style.display = 'block';
}	
*
// Associa o evento de clique para as imagens
document.getElementById('code1').addEventListener('click', function() {
    toggleText('code1', 't1');
});
*/


//Botão replay
document.getElementById("replay").addEventListener("click", function() {
window.location.reload();
});


// --------------------- Primeira Parte - Cenario 2---------------------------------------- 

//versão com som // Botão Play


const manIdle = document.getElementById("manIdle");
const cofre = document.getElementById("cofre");
const manWalking = document.getElementById("manWalking");
const playButton2 = document.getElementById("play2");
const messageElement = document.getElementById("message");

let position2 = 0;
let direction2 = 1;
let speed2 = 10;
let i2 = 0;
let interval2;

// Som contínuo e som de passos
const machineSound = new Audio('/Ensino001/sound/machine.mp3');
const stepSound = new Audio('/Ensino001/sound/step.mp3');
stepSound.loop = true; // Passos repetem enquanto o personagem anda

// Função para exibir as mensagens com o efeito typeWriter
function typeWriter(text, element, callback = null) {
    let i = 0;
    const speed = 50; // Velocidade da digitação

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 1000); // Pequena pausa após a mensagem
        }
    }

    element.innerHTML = ''; // Limpa o conteúdo anterior
    type();
}

// Mensagem inicial
const initialMessage = "O régulo precisa realizar diversas operações. O líder da aldeia precisa de recolher as contribuições dos residentes para satisfazer diversas necessidades. Ele decide usar um cofre para guardar o valor arrecadado. Para tal, ele carrega o cofre até o local escolhido para o efeito, estabelecendo assim um local específico para armazenar as contribuições. Clique no botão play para iniciar.";

// Mensagem final
const finalMessage = "Na programação, criar uma variável é semelhante a designar um espaço na memória do computador para armazenar um valor específico durante a execução do programa. Uma variável é identificada por um nome único. Para este caso, o cofre é o local onde será guardado o valor, vamos atribuir o nome 'poupança' à nossa variável. Clique no botão do código paraexibir o código na forma de pseudocodigo";

// Exibe a mensagem inicial ao carregar a página
typeWriter(initialMessage, messageElement);

// Função para iniciar a animação da primeira parte
function startAnimation2() {
    // Remove a mensagem inicial
    messageElement.innerHTML = '';

    // Reinicializa variáveis para repetir a animação
    position2 = 0;
    i2 = 0;
    
    playButton2.disabled = true; // Desabilita o botão enquanto a animação está em execução

    // Ocultar imagem parada e mostrar imagem em movimento
    manIdle.classList.add('hidden'); // Oculta o personagem parado
    manWalking.classList.remove('hidden'); // Mostra o personagem andando
    manWalking.style.transform = 'translateX(0px)'; // Reseta a posição de "manWalking"

    // Tocar som da máquina
    machineSound.play();

    // Iniciar animação com passos
    stepSound.play();
    interval2 = setInterval(function() {
        if (i2 >= 50) {
            // Ao final da animação, troca de volta as imagens
            manWalking.classList.add('hidden'); // Oculta o personagem em movimento
            manIdle.classList.remove('hidden'); // Mostra o personagem parado na nova posição
            
            // Atualiza a posição de "manIdle" para a posição final de "manWalking"
            manIdle.style.transform = `translateX(-${position2}px)`; 
            
            clearInterval(interval2); // Interrompe o intervalo quando o movimento estiver completo
            playButton2.disabled = false; // Reabilita o botão após o término da animação
            
            // Parar sons
            machineSound.pause();
            machineSound.currentTime = 0; // Reseta o som da máquina
            stepSound.pause(); // Parar passos
            
            // Exibe a mensagem final após a animação
            typeWriter(finalMessage, messageElement);

            return;
        }

        if (i2 === 45) {
            manWalking.style.backgroundImage = "url('/Ensino001/img/cofre-mao-velho.png')";
            manWalking.style.backgroundSize = "130px 150px"; // Define o tamanho da imagem (largura x altura)
            manWalking.style.width = "130px"; // Largura da área onde a imagem é exibida
            manWalking.style.height = "150px";
            cofre.classList.remove('hidden'); 
        }

        position2 += direction2 * speed2;
        manWalking.style.transform = `translateX(-${position2}px)`; // Move o personagem para a esquerda
        i2++;




    }, 50);

    
}

// Adiciona um evento de clique ao botão "Play"
playButton2.addEventListener('click', startAnimation2);


//Exibindo o pseudocodigo 2
document.getElementById('code2').addEventListener('click', function() {
    var c2 = document.getElementById('c2');
        if (c2.style.display === 'none') {
            c2.style.display = 'block';
        } else {
            c2.style.display = 'none';
        }
    });

//versão sem som
/*
const manIdle = document.getElementById("manIdle");
const cofre = document.getElementById("cofre");
const manWalking = document.getElementById("manWalking");
const playButton3 = document.getElementById("play3");
const messageElement = document.getElementById("message");

let position3 = 0;
let direction3 = 1;
let speed3 = 10;
let i3 = 0;
let interval3;

// Função para exibir as mensagens com o efeito typeWriter
function typeWriter(text, element, callback = null) {
    let i = 0;
    const speed = 50; // Velocidade da digitação

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            setTimeout(callback, 1000); // Pequena pausa após a mensagem
        }
    }

    element.innerHTML = ''; // Limpa o conteúdo anterior
    type();
}

// Mensagem inicial
const initialMessage = "O régulo precisa realizar diversas operações. O líder da aldeia precisa de recolher as contribuições dos residentes para satisfazer diversas necessidades. Ele decide usar um cofre para guardar o valor arrecadado. Para tal, ele carrega o cofre até o local escolhido para o efeito, estabelecendo assim um local específico para armazenar as contribuições. Clique no botão play para iniciar.";

// Mensagem final
const finalMessage = "Na programação, criar uma variável é semelhante a designar um espaço na memória do computador para armazenar um valor específico durante a execução do programa. Uma variável é identificada por um nome único no programa. Para este caso, vamos atribuir o nome 'poupança' à nossa variável.";

// Exibe a mensagem inicial ao carregar a página
typeWriter(initialMessage, messageElement);

// Função para iniciar a animação da primeira parte
function startAnimation3() {
    // Remove a mensagem inicial
    messageElement.innerHTML = '';

    // Reinicializa variáveis para repetir a animação
    position3 = 0;
    i3 = 0;
    
    playButton3.disabled = true; // Desabilita o botão enquanto a animação está em execução

    // Ocultar imagem parada e mostrar imagem em movimento
    manIdle.classList.add('hidden'); // Oculta o personagem parado
    manWalking.classList.remove('hidden'); // Mostra o personagem andando
    manWalking.style.transform = 'translateX(0px)'; // Reseta a posição de "manWalking"

    interval3 = setInterval(function() {
        if (i3 >= 50) {
            // Ao final da animação, troca de volta as imagens
            manWalking.classList.add('hidden'); // Oculta o personagem em movimento
            manIdle.classList.remove('hidden'); // Mostra o personagem parado na nova posição
            
            // Atualiza a posição de "manIdle" para a posição final de "manWalking"
            manIdle.style.transform = `translateX(-${position3}px)`; 
            
            clearInterval(interval3); // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false; // Reabilita o botão após o término da animação
            
            // Exibe a mensagem final após a animação
            typeWriter(finalMessage, messageElement);
            return;
        }

        if (i3 === 45) {
            manWalking.style.backgroundImage = "url('/ensino/imagens/cofre-mao-velho.png')";
            manWalking.style.backgroundSize = "130px 150px"; // Define o tamanho da imagem (largura x altura)
            manWalking.style.width = "140px"; // Largura da área onde a imagem é exibida
            manWalking.style.height = "150px";
            cofre.classList.remove('hidden'); 
        }

        position3 += direction3 * speed3;
        manWalking.style.transform = `translateX(-${position3}px)`; // Move o personagem para a esquerda
        i3++;
    }, 50);
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);



/*const manIdle = document.getElementById("manIdle");
const cofre = document.getElementById("cofre");
const manWalking = document.getElementById("manWalking");
const playButton3 = document.getElementById("play3");

let position3 = 0;
let direction3 = 1;
let speed3 = 10;
let i3 = 0;
let interval3;

// Função para iniciar a animação da primeira parte
function startAnimation3() {
    // Reinicializa variáveis para repetir a animação
    position3 = 0;
    i3 = 0;
    
    playButton3.disabled = true; // Desabilita o botão enquanto a animação está em execução

    // Ocultar imagem parada e mostrar imagem em movimento
    manIdle.classList.add('hidden'); // Oculta o personagem parado
    manWalking.classList.remove('hidden'); // Mostra o personagem andando
    manWalking.style.transform = 'translateX(0px)'; // Reseta a posição de "manWalking"

    interval3 = setInterval(function() {
        if (i3 >= 50) {
            // Ao final da animação, troca de volta as imagens
            manWalking.classList.add('hidden'); // Oculta o personagem em movimento
            manIdle.classList.remove('hidden'); // Mostra o personagem parado na nova posição
            
            // Atualiza a posição de "manIdle" para a posição final de "manWalking"
            manIdle.style.transform = `translateX(-${position3}px)`; 
            
            clearInterval(interval3); // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false; // Reabilita o botão após o término da animação
            return;
        }

        if (i3 === 45) {
            manWalking.style.backgroundImage = "url('/ensino/imagens/cofre-mao-velho.png')";
            manWalking.style.backgroundSize = "130px 150px"; // Define o tamanho da imagem (largura x altura)
            manWalking.style.width = "140px"; // Largura da área onde a imagem é exibida
            manWalking.style.height = "150px";
            cofre.classList.remove('hidden'); 
        }

        position3 += direction3 * speed3;
        manWalking.style.transform = `translateX(-${position3}px)`; // Move o personagem para a esquerda
        console.log(i3);
        i3++;
    }, 50);
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);


*/





/*
const manIdle = document.getElementById("manIdle");
const cofre = document.getElementById("cofre");
const manWalking = document.getElementById("manWalking");
const playButton3 = document.getElementById("play3");

let position3 = 0;
let direction3 = 1;
let speed3 = 10;
let i3 = 0;
let interval3;

// Função para iniciar a animação da primeira parte
function startAnimation3() {
    
    playButton3.disabled = true; // Desabilita o botão enquanto a animação está em execução

    // Ocultar imagem parada e mostrar imagem em movimento
    manIdle.classList.add('hidden'); // Oculta o personagem parado
    manWalking.classList.remove('hidden'); // Mostra o personagem andando
    manWalking.style.transform = 'translateX(0px)'; // Reseta a posição de "manWalking"

    interval3 = setInterval(function() {
        if (i3 >= 50) {
            // Ao final da animação, troca de volta as imagens
            manWalking.classList.add('hidden'); // Oculta o personagem em movimento
            
            manIdle.classList.remove('hidden'); // Mostra o personagem parado na nova posição
            
            // Atualiza a posição de "manIdle" para a posição final de "manWalking"
            manIdle.style.transform = `translateX(-${position3}px)`; 
            
            clearInterval(interval3); // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false; // Reabilita o botão após o término da animação
            return;
        }

        if (i3 === 45) {
            manWalking.style.backgroundImage = "url('/ensino/imagens/cofre-mao-velho.png')";
            manWalking.style.backgroundSize = "130px 150px"; // Define o tamanho da imagem (largura x altura)
        manWalking.style.width = "140px"; // Largura da área onde a imagem é exibida
        manWalking.style.height = "150px";
            cofre.classList.remove('hidden'); 
        }

        position3 += direction3 * speed3;
        manWalking.style.transform = `translateX(-${position3}px)`; // Move o personagem para a esquerda
        console.log(i3);
        i3++;
    }, 50);
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);
*/

// ------------------------------- Cenario 3 - Quarta Parte --------------------------------------------- \\

const manIdle3 = document.getElementById("manIdle3");
const cofre3 = document.getElementById("cofre3");
const moeda3 = document.getElementById("moeda3");
const playButton3 = document.getElementById("play3");

let position3 = 0;  // Posição inicial
let direction3 = -1;  // Direção de movimento (-1 para esquerda)
let speed3 = 10;  // Velocidade de movimento
let interval3;  // Intervalo para a animação
let paused = false;  // Estado de pausa
const totalSteps = 50;  // Número total de passos
const pauseStep = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação da quarta parte
function startAnimation3() {
    playButton3.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    // Mostrar imagem inicial
    manIdle3.style.backgroundImage = "url('/Ensino001/img/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle3.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position3 = 0;  // Reinicia a posição do personagem
    let i3 = 0;  // Reinicia o contador de frames
    paused = false;  // Reinicia o estado de pausa

    interval3 = setInterval(function() {
        if (i3 >= totalSteps) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i3 === pauseStep && !paused) {
            // Pausa no meio do caminho
            paused = true;  // Define o estado de pausa para true
            clearInterval(interval3);  // Pausa a animação
            setTimeout(() => {
                // Troca a imagem e continua após 1 segundo
                moeda3.classList.add('hidden'); // Mostra o personagem andando
                manIdle3.style.backgroundImage = "url('/Ensino001/img/velho-com-moeda.png')";  // Troca de imagem
                paused = false; // Reseta o estado de pausa
                continueAnimation3(i3);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused) {
            startMoving3();  // Continua a movimentação
        }

        i3++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation3(currentStep) {
    interval3 = setInterval(function() {
        if (currentStep >= totalSteps) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        
        startMoving3();  // Continua a movimentação
        currentStep++;  // Incrementa o contador de frames
        if(currentStep==50){
            manIdle3.style.backgroundImage = "url('/Ensino001/img/velho-sem-moeda.png')";  // Troca de imagem
        }
    }, 50);
}

// Função para continuar o movimento
function startMoving3() {
    position3 += direction3 * speed3;  // Calcula a nova posição (movimento para a esquerda)
    manIdle3.style.transform = `translateX(${position3}px)`;  // Move o personagem para a esquerda
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);

// ----------------------------- Fim da quarta parte --------------------------------------- \\

