let attempts = { q1: 0, q2: 0, q3: 0 }; // Contador de tentativas
let points = { q1: 0, q2: 0, q3: 0 }; // Pontuação individual
let totalPoints = 0; // Pontuação total
let maxAttempts = 4; // Número máximo de tentativas
let countdownInterval; // Variável do temporizador
let duration = 5 * 60; // Duração do teste (5 minutos)

// Exibe o tempo restante no elemento com ID "duracao"
function startCountdown() {
    const timerDisplay = document.getElementById("duracao");
    countdownInterval = setInterval(function () {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        timerDisplay.innerText = `Tempo restante: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (--duration < 0) {
            clearInterval(countdownInterval);
            alert("Tempo esgotado! O teste foi encerrado.");
            document.getElementById("submeter").disabled = true;
        }
    }, 1000);
}

// Função para validar e avaliar respostas
function validateAndEvaluate1() {
    const correctAnswers = {
        q1: "Armazenar dados na memória",
        q2: "Fornecer a  uma variável com um valor específico",
        q3: "Adicionar um valor a uma variável existente",
    };

    let allQuestions = ["q1", "q2", "q3"]; // Lista das questões

    allQuestions.forEach((question) => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            attempts[question]++;
            const parentLabel = selectedOption.parentElement;

            // Verifica se a resposta está correta
            if (selectedOption.value === correctAnswers[question]) {
                points[question] = 4; // Resposta correta vale 4 pontos
                parentLabel.style.color = "green";
            } else {
                // Resposta errada reduz a pontuação da questão
                points[question] -= 1; // Perde 1 ponto por tentativa errada
                parentLabel.style.color = "red";
            }

            // Atualiza o número de tentativas e pontuação na interface
            document.getElementById(`t0${question[1]}`).innerText = attempts[question];
            document.getElementById(`p0${question[1]}`).innerText = points[question];

            // Bloqueia novas respostas para a questão após 4 tentativas
            if (attempts[question] >= maxAttempts) {
                alert(`Máximo de tentativas atingido para a questão ${question.toUpperCase()}.`);
                document.querySelectorAll(`input[name="${question}"]`).forEach((input) => {
                    input.disabled = true;
                });
            }
        } else {
            alert(`Você não selecionou nenhuma opção para a questão ${question.toUpperCase()}.`);
        }
    });

    // Calcula e atualiza a pontuação total
    totalPoints = Object.values(points).reduce((a, b) => a + b, 0);
    document.getElementById("ttl").innerText = `Pontuação Total: ${totalPoints}`;

    // Verifica se todas as questões foram respondidas
    if (allQuestions.every((q) => attempts[q] >= maxAttempts)) {
        clearInterval(countdownInterval);
        alert(`Teste encerrado! Sua pontuação final é: ${totalPoints}`);
        document.getElementById("submeter").disabled = true;
    }
}

// Inicializa o contador ao carregar a página
window.onload = function () {
    startCountdown();
};

