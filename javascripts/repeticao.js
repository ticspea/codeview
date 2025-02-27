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


//versão sem som

// ------------------------------- Cenario 1 - Para --------------------------------------------- 

const manIdle1 = document.getElementById("manIdle1");
const cofre1 = document.getElementById("cofre1");
const moeda1 = document.getElementById("moeda1");
const playButton1 = document.getElementById("play1");

let position1 = 0;  // Posição inicial
let direction1 = -1;  // Direção de movimento (-1 para esquerda)
let speed1 = 10;  // Velocidade de movimento
let interval1;  // Intervalo para a animação
let paused = false;  // Estado de pausa
const totalSteps = 50;  // Número total de passos
const pauseStep = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação da quarta parte
function startAnimation1() {
    playButton1.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    // Mostrar imagem inicial
    manIdle1.style.backgroundImage = "url('/Ensino001/img/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle1.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position1 = 0;  // Reinicia a posição do personagem
    let i1 = 0;  // Reinicia o contador de frames
    paused = false;  // Reinicia o estado de pausa

    interval1 = setInterval(function() {
        if (i1 >= totalSteps) {
            // Ao final da animação, parar a animação
            manIdle1.style.transform = `translateX(${position1}px)`;  // Atualiza a posição final
            clearInterval(interval1);  // Interrompe o intervalo quando o movimento estiver completo
            playButton1.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i1 === pauseStep && !paused) {
            // Pausa no meio do caminho
            paused = true;  // Define o estado de pausa para true
            clearInterval(interval1);  // Pausa a animação
            setTimeout(() => {
                // Troca a imagem e continua após 1 segundo
                moeda1.classList.add('hidden'); // Mostra o personagem andando
                manIdle1.style.backgroundImage = "url('/Ensino001/img/velho-com-moeda.png')";  // Troca de imagem
                paused = false; // Reseta o estado de pausa
                continueAnimation1(i1);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused) {
            startMoving1();  // Continua a movimentação
        }

        i1++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation1(currentStep) {
    interval1 = setInterval(function() {
        if (currentStep >= totalSteps) {
            // Ao final da animação, parar a animação
            manIdle1.style.transform = `translateX(${position1}px)`;  // Atualiza a posição final
            clearInterval(interval1);  // Interrompe o intervalo quando o movimento estiver completo
            playButton1.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        
        startMoving1();  // Continua a movimentação
        currentStep++;  // Incrementa o contador de frames
        if(currentStep==50){
            manIdle1.style.backgroundImage = "url('/Ensino001/img/velho-sem-moeda.png')";  // Troca de imagem
        }
    }, 50);
}

// Função para continuar o movimento
function startMoving1() {
    position1 += direction1 * speed1;  // Calcula a nova posição (movimento para a esquerda)
    manIdle1.style.transform = `translateX(${position1}px)`;  // Move o personagem para a esquerda
}

// Adiciona um evento de clique ao botão "Play"
playButton1.addEventListener('click', startAnimation1);

// ----------------------------- Fim da quarta parte --------------------------------------- \\

