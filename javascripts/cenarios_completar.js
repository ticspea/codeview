let attempts = { q1: 0, q2: 0, q3: 0 }; // Contador de tentativas
let points = { q1: 4, q2: 4, q3: 4 }; // Pontuação inicial por questão
let totalPoints = 0; // Pontuação total
let maxAttempts = 4; // Número máximo de tentativas por questão
let countdownInterval; // Variável para o temporizador
let duration = 5 * 60; // Duração do teste em segundos (5 minutos)

// Função para iniciar a contagem decrescente
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

// Função para validar e avaliar as respostas
function validateAndEvaluatec() {
    const correctAnswers = {
        q1: ["=10", "= 10"],
        q2: ["saldo = saldo + 50", "saldo=saldo+50"],
        q3: ["soma = numero1 + numero2", "soma=numero1+numero2"],
    };

    let allQuestions = ["q1", "q2", "q3"];
    let allCorrect = true;

    allQuestions.forEach((question) => {
        const userInput = document.querySelector(`input[name="${question}"]`).value.trim();
        const attemptDiv = document.getElementById(`t0${question[1]}`);
        const pointsDiv = document.getElementById(`p0${question[1]}`);
        const inputElement = document.querySelector(`input[name="${question}"]`);

        // Verificar se o campo está vazio
        if (!userInput) {
            alert(`O campo da questão ${question.toUpperCase()} está vazio!`);
            allCorrect = false;
            return;
        }

        // Incrementa as tentativas para a questão
        attempts[question]++;

        if (correctAnswers[question].includes(userInput)) {
            // Resposta correta
            points[question] = Math.max(points[question], 4); // Mantém a pontuação máxima
            inputElement.style.color = "green";
        } else {
            // Resposta errada
            points[question] = Math.max(points[question] - 1, 0); // Reduz a pontuação mas nunca abaixo de 0
            inputElement.style.color = "red";
            allCorrect = false;
            alert(
                `Resposta incorreta para a questão ${question.toUpperCase()}. Tentativas restantes: ${
                    maxAttempts - attempts[question]
                }`
            );
        }

        // Atualiza os valores de tentativas e pontuação na interface
        attemptDiv.innerText = attempts[question];
        pointsDiv.innerText = points[question];

        // Bloqueia o campo se atingir o número máximo de tentativas
        if (attempts[question] >= maxAttempts) {
            inputElement.disabled = true;
            alert(`A questão ${question.toUpperCase()} atingiu o limite de tentativas!`);
        }
    });

    // Atualiza a pontuação total
    totalPoints = Object.values(points).reduce((a, b) => a + b, 0);
    document.getElementById("ttl").innerText = totalPoints;

    // Mensagens de conclusão
    if (allCorrect) {
        alert("Parabéns! Todas as respostas estão corretas!");
        clearInterval(countdownInterval);
        document.getElementById("submeter").disabled = true;
    } else if (allQuestions.every((q) => attempts[q] >= maxAttempts)) {
        alert(`Teste encerrado! Sua pontuação final é: ${totalPoints}`);
        clearInterval(countdownInterval);
        document.getElementById("submeter").disabled = true;
    }
}

// Inicia a contagem regressiva quando a página é carregada
window.onload = function () {
    startCountdown();
};
