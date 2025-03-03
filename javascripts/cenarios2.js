// Cenario 2 -----------------------------------------------------------

const manIdle2 = document.getElementById("manIdle"); 
const cofre2 = document.getElementById("cofre");
const manWalking2 = document.getElementById("manWalking");
const playButton2 = document.getElementById("play2");
const messageElement2 = document.getElementById("message");
const placa02 = document.getElementById("placa02");
const placa002 = document.getElementById("placa002");
const article2 = document.getElementById("artigo2");

// Botões a serem desativados
const buttonsToDisable2 = [
    document.getElementById("play2"),
    document.getElementById("replay2"),
    document.getElementById("text2"),
    document.getElementById("sound2"),
    document.getElementById("code2")
];

let position2 = 0;
let speed2 = 10;
let i2 = 0;
let interval2;
let isAnimating2 = false;

// Som contínuo e som de passos
const machineSound2 = new Audio('/Ensino001/sound/machine.mp3');
const stepSound2 = new Audio('/Ensino001/sound/step.mp3');
stepSound2.loop = true;

// Função para ativar/desativar botões
function toggleButtons2(disable) {
    buttonsToDisable2.forEach(button => {
        if (button) {
            button.disabled = disable;
        }
    });
}

// Função para exibir as mensagens com efeito typewriter
function typeWriter2(text2, element2, callback = null) {
    toggleButtons2(true);
    let i2 = 0;
    const speed2 = 50;

    function type() {
        if (i2 < text2.length) {
            element2.innerHTML += text2.charAt(i2);
            i2++;
            setTimeout(type, speed2);
        } else if (callback) {
            setTimeout(() => {
                callback();
                toggleButtons2(false);
            }, 1000);
        } else {
            toggleButtons2(false);
        }
    }

    element2.innerHTML = '';
    type();
}

// Mensagem inicial
const initialMessage2 = "O Régulo precisa realizar diversas operações. O líder da aldeia precisa de recolher as contribuições dos residentes para satisfazer diversas necessidades. Ele decide usar um cofre para guardar o valor arrecadado. Para tal, ele carrega o cofre até o local escolhido para o efeito, estabelecendo assim um local específico para armazenar as contribuições. Clique no botão play para iniciar.";

// Mensagem final
const finalMessage2 = "Na programação, criar uma variável é semelhante a designar um espaço na memória do computador para armazenar um valor específico durante a execução do programa. Uma variável é identificada por um nome único. Para este caso, o cofre é o local onde será guardado o valor, vamos atribuir o nome 'poupança' à nossa variável. Clique no botão do código para exibir a lógica.";

// Exibe a mensagem inicial ao carregar a página
typeWriter2(initialMessage2, messageElement2);

// Função para iniciar a animação da primeira parte
function startAnimation2() {
    if (isAnimating2) return;
    isAnimating2 = true;
    toggleButtons2(true);
    messageElement2.innerHTML = '';

    position2 = 0;
    i2 = 0;

    // Resetar posição das imagens
    manIdle2.classList.add('hidden');
    manWalking2.classList.remove('hidden');
    manWalking2.style.right = "0px";

    machineSound2.play();
    stepSound2.play();

    interval2 = setInterval(() => {
        if (i2 >= 50) {
            manWalking2.classList.add('hidden');
            manIdle2.classList.remove('hidden');

            clearInterval(interval2);
            machineSound2.pause();
            machineSound2.currentTime = 0;
            stepSound2.pause();

            typeWriter2(finalMessage2, messageElement2, () => {
                toggleButtons2(false);
                isAnimating2 = false;
            });

            return;
        }

        if (i2 === 35) {
            manWalking2.style.backgroundImage = "url('/menu/img/cofre-mao-velho.png')";
            cofre2.classList.remove('hidden');
            placa02.style.display = 'none';
            placa002.style.display = 'block';
        }

        position2 -= speed2;
        manWalking2.style.transform = `translateX(${position2}px)`;
        i2++;

    }, 50);
}

// Adiciona um evento de clique ao botão "Play"
playButton2.addEventListener('click', startAnimation2);

// Ajustar imagens no redimensionamento da tela
window.addEventListener("resize", () => {
    manIdle2.style.transform = "translateX(0)";
    manWalking2.style.transform = "translateX(0)";
    cofre2.style.transform = "translateX(0)";
});


/*const manIdle2 = document.getElementById("manIdle");
const cofre2 = document.getElementById("cofre");
const manWalking2 = document.getElementById("manWalking");
const playButton2 = document.getElementById("play2");
const messageElement2 = document.getElementById("message");
const placa02 = document.getElementById("placa02");
const placa002 = document.getElementById("placa002");

// Botões a serem desativados
const buttonsToDisable2 = [
    document.getElementById("play2"),
    document.getElementById("replay2"),
    document.getElementById("text2"),
    document.getElementById("sound2"),
    document.getElementById("code2")
];

let position2 = 0;
let direction2 = 1;
let speed2 = 10;
let i2 = 0;
let interval2;
let isAnimating2 = false; // Variável de controle para evitar múltiplas execuções

// Som contínuo e som de passos
const machineSound2 = new Audio('/Ensino001/sound/machine.mp3');
const stepSound2 = new Audio('/Ensino001/sound/step.mp3');
stepSound2.loop = true; // Passos repetem enquanto o personagem anda

// Função para desativar e ativar botões
function toggleButtons2(disable) {
    buttonsToDisable2.forEach(button => {
        if (button) {
            button.disabled = disable;
        }
    });
}

// Função para exibir as mensagens com o efeito typeWriter
function typeWriter2(text2, element2, callback = null) {
    toggleButtons2(true); // Desativar botões durante a animação de digitação
    let i2 = 0;
    const speed2 = 50; // Velocidade da digitação

    function type() {
        if (i2 < text2.length) {
            element2.innerHTML += text2.charAt(i2);
            i2++;
            setTimeout(type, speed2);
        } else if (callback) {
            setTimeout(() => {
                callback();
                toggleButtons2(false); // Reativar botões após a digitação
            }, 1000);
        } else {
            toggleButtons2(false); // Reativar botões caso não haja callback
        }
    }

    element2.innerHTML = ''; // Limpa o conteúdo anterior
    type();
}

// Mensagem inicial
const initialMessage2 = "O Régulo precisa realizar diversas operações. O líder da aldeia precisa de recolher as contribuições dos residentes para satisfazer diversas necessidades. Ele decide usar um cofre para guardar o valor arrecadado. Para tal, ele carrega o cofre até o local escolhido para o efeito, estabelecendo assim um local específico para armazenar as contribuições. Clique no botão play para iniciar.";

// Mensagem final
const finalMessage2 = "Na programação, criar uma variável é semelhante a designar um espaço na memória do computador para armazenar um valor específico durante a execução do programa. Uma variável é identificada por um nome único. Para este caso, o cofre é o local onde será guardado o valor, vamos atribuir o nome 'poupança' à nossa variável. Clique no botão do código para exibir o respectivo código.";

// Exibe a mensagem inicial ao carregar a página
typeWriter2(initialMessage2, messageElement2);

// Função para iniciar a animação da primeira parte
function startAnimation2() {
    if (isAnimating2) return; // Impede a execução se já estiver animando

    isAnimating2 = true; // Marca como em execução
    toggleButtons2(true); // Desativar botões durante a animação
    messageElement2.innerHTML = ''; // Remove a mensagem inicial
    position2 = 0;
    i2 = 0;

    // Ocultar imagem parada e mostrar imagem em movimento
    manIdle2.classList.add('hidden');
    manWalking2.classList.remove('hidden');
    manWalking2.style.transform = 'translateX(0px)';

    machineSound2.play();
    stepSound2.play();

    interval2 = setInterval(function () {
        if (i2 >= 50) {
            // Ao final da animação, troca de volta as imagens
            manWalking2.classList.add('hidden');
            manIdle2.classList.remove('hidden');
            manIdle2.style.transform = `translateX(-${position2}px)`;

            clearInterval(interval2);
            machineSound2.pause();
            machineSound2.currentTime = 0;
            stepSound2.pause();

            // Exibir mensagem final e reativar botões
            typeWriter2(finalMessage2, messageElement2, () => {
                toggleButtons2(false);
                isAnimating2 = false; // Libera para novas execuções
            });

            return;
        }

        if (i2 === 35) {
            manWalking2.style.backgroundImage = "url('/menu/img/cofre-mao-velho.png')";
            //manWalking2.style.backgroundSize = "145px 122px";
            //manWalking2.style.width = "145px";
            //manWalking2.style.height = "122px";
            cofre2.classList.remove('hidden');
            placa02.style.display = 'none';
            placa002.style.display = 'block';
        }

        position2 += direction2 * speed2;
        manWalking2.style.transform = `translateX(-${position2}px)`;
        i2++;

    }, 50);
}

// Adiciona um evento de clique ao botão "Play"
playButton2.addEventListener('click', startAnimation2);
*/
//Exibindo o pseudocodigo 2
document.getElementById('code2').addEventListener('click', function() {
    var m2 = document.getElementById("message");
    var c2 = document.getElementById('c2');
        if (c2.style.display === 'none') {
            c2.style.display = 'block';
            m2.style.display = 'none';

        } else {
            c2.style.display = 'none';
            m2.style.display = 'block';
        }
    });
