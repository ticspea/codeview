// -------------------------------------------- Exercicio 1 ----------------------------------------
//---------------------- Exercicios 1a Parte ---------------------------------

var initial001 = atob("aW5pY2lvDQogICAgcG91cGFuY2EgPSAyMA0KICAgIGVzY3JldmEocG91cGFuY2EpDQpmaW0=");
let maxAttempts001 = 4; // Número máximo de tentativas
let points001 = 0; // Pontuação inicial
let attempts001 = 0; // Contador de tentativas
let countdownInterval001; // Variável para armazenar o intervalo do contador
let startTime001; // Tempo de início do temporizador

function displayErrors(fb) {
    if(fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
} 


function startCountdown001(duration, display, button) {
    let timer = duration, minutes, seconds;
    startTime001 = Date.now(); // Armazena o tempo de início
    countdownInterval001 = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        // Atualiza o texto da contagem decrescente
        display.text(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);

        if (--timer < 0) {
            clearInterval(countdownInterval01);
            // Desativa o botão após o tempo acabar
            button.prop("disabled", true).addClass("disabled").text("Tempo Esgotado");

            // Remove qualquer função associada ao botão
            button.off("click");
        }
    }, 1000);
}

$(document).ready(function(){
    var parson001 = new ParsonsWidget({
        sortableId: 'sortable001',
        trashId: 'sortableTrash001',
        max_wrong_lines: 1,
        feedback_cb : function (fb) {
            // Incrementa as tentativas
            attempts001++;

            if (fb.errors.length > 0) {
                alert(`Tentativa errada! Você perdeu 1 ponto.`);
                points001 -= 1; // Remove 1 ponto em caso de erro
            } else {
                alert(`Resposta correta! Você ganhou 4 pontos.`);
                points001 += 4; // Adiciona 4 pontos para resposta correta

                // Calcula o tempo decorrido
                const elapsedTime = Math.floor((Date.now() - startTime01) / 1000); // Tempo em segundos
                const minutes = Math.floor(elapsedTime / 60);
                const seconds = elapsedTime % 60;

                // Para o temporizador e exibe a mensagem com o tempo necessário
                clearInterval(countdownInterval001);
                $("#countdown").text(`Parabéns! Tempo interrompido. Você completou a tarefa em ${minutes}:${seconds < 10 ? "0" : ""}${seconds}.`);
            }

            // Atualiza a pontuação na tela
            $("#score").text(`Pontuação: ${points001}`);

            // Verifica se atingiu o número máximo de tentativas
            if (attempts001 >= maxAttempts001) {
                alert(`Número máximo de tentativas atingido. Sua pontuação final é: ${points}`);
                $("#feedbackLink001").prop("disabled", true).addClass("disabled").text("Máximo de Tentativas");
                $("#feedbackLink001").off("click");
                clearInterval(countdownInterval001); // Para o contador, caso não tenha parado ainda
            }
        }
    });

    parson001.init(initial001);
    parson001.shuffleLines();

    $("#newInstanceLink01").click(function (event) {
        event.preventDefault();
        parson001.shuffleLines();
    });

    const feedbackButton = $("#feedbackLink001");
    feedbackButton.click(function (event) {
        event.preventDefault();
        parson001.getFeedback();
    });

    // Adiciona um contador regressivo de 3 minutos
    const countdownDisplay = $("<p id='duracao4'>3:00</p>").insertAfter(feedbackButton);
    const scoreDisplay = $("<a id='score'>Pontuação: 0</a>").insertAfter(countdownDisplay);
    const threeMinutes = 3 * 60; // 3 minutos em segundos
    startCountdown001(threeMinutes, countdownDisplay, feedbackButton);
});
 



 
 
// // Exercicios 2
//---------------------- Exercicios 2a Parte ---------------------------------

var initial01 = atob("SW5pY2lvDQogdmFyIGFubw0KIGFubyA9IDIwMjUgLSAxOTMwDQogZXNjcmV2YShhbm8pDQpmaW0=");
let maxAttempts01 = 4; // Número máximo de tentativas
let points01 = 0; // Pontuação inicial
let attempts01 = 0; // Contador de tentativas
let countdownInterval01; // Variável para armazenar o intervalo do contador
let startTime01; // Tempo de início do temporizador

function displayErrors(fb) {
    if(fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
} 


function startCountdown01(duration, display, button) {
    let timer = duration, minutes, seconds;
    startTime01 = Date.now(); // Armazena o tempo de início
    countdownInterval01 = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        // Atualiza o texto da contagem decrescente
        display.text(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);

        if (--timer < 0) {
            clearInterval(countdownInterval01);
            // Desativa o botão após o tempo acabar
            button.prop("disabled", true).addClass("disabled").text("Tempo Esgotado");

            // Remove qualquer função associada ao botão
            button.off("click");
        }
    }, 1000);
}

$(document).ready(function(){
    var parson01 = new ParsonsWidget({
        sortableId: 'sortable01',
        trashId: 'sortableTrash01',
        max_wrong_lines: 1,
        feedback_cb : function (fb) {
            // Incrementa as tentativas
            attempts01++;

            if (fb.errors.length > 0) {
                alert(`Tentativa errada! Você perdeu 1 ponto.`);
                points01 -= 1; // Remove 1 ponto em caso de erro
            } else {
                alert(`Resposta correta! Você ganhou 4 pontos.`);
                points01 += 4; // Adiciona 4 pontos para resposta correta

                // Calcula o tempo decorrido
                const elapsedTime = Math.floor((Date.now() - startTime01) / 1000); // Tempo em segundos
                const minutes = Math.floor(elapsedTime / 60);
                const seconds = elapsedTime % 60;

                // Para o temporizador e exibe a mensagem com o tempo necessário
                clearInterval(countdownInterval01);
                $("#countdown").text(`Parabéns! Tempo interrompido. Você completou a tarefa em ${minutes}:${seconds < 10 ? "0" : ""}${seconds}.`);
            }

            // Atualiza a pontuação na tela
            $("#score").text(`Pontuação: ${points01}`);

            // Verifica se atingiu o número máximo de tentativas
            if (attempts01 >= maxAttempts01) {
                alert(`Número máximo de tentativas atingido. Sua pontuação final é: ${points}`);
                $("#feedbackLink01").prop("disabled", true).addClass("disabled").text("Máximo de Tentativas");
                $("#feedbackLink01").off("click");
                clearInterval(countdownInterval01); // Para o contador, caso não tenha parado ainda
            }
        }
    });

    parson01.init(initial01);
    parson01.shuffleLines();

    $("#newInstanceLink01").click(function (event) {
        event.preventDefault();
        parson01.shuffleLines();
    });

    const feedbackButton = $("#feedbackLink01");
    feedbackButton.click(function (event) {
        event.preventDefault();
        parson01.getFeedback();
    });

    // Adiciona um contador regressivo de 3 minutos
    const countdownDisplay = $("<p id='countdown'>3:00</p>").insertAfter(feedbackButton);
    const scoreDisplay = $("<p id='score'>Pontuação: 0</p>").insertAfter(countdownDisplay);
    const threeMinutes = 3 * 60; // 3 minutos em segundos
    startCountdown01(threeMinutes, countdownDisplay, feedbackButton);
});





        
//------------------------------- Exercicio 5a parte --------------------------------------------------------------------------

var initial05 = atob("SW5pY2lvDQp2YXIgdGVtcGMsIHRlbXBmDQp0ZW1wZiA9IDY2DQp0ZW1wYyA9IDUgKiAodGVtcGYgLSAzMikvOQ0KZXNjcmV2YSh0ZW1wYykNCkZpbQ0K");

function displayErrors(fb) {
    if(fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
} 

$(document).ready(function(){
    var parson05 = new ParsonsWidget({
        'sortableId': 'sortable05',
        'trashId': 'sortableTrash05',
        'max_wrong_lines': 1,
        'feedback_cb' : displayErrors
    });
    parson05.init(initial05);
    parson05.shuffleLines();
    $("#newInstanceLink05").click(function(event){
        event.preventDefault();
        parson05.shuffleLines();
    });
    $("#feedbackLink05").click(function(event){
        event.preventDefault();
        parson05.getFeedback();
    });
});



// ----------------------------- Exercicios 3a parte ------------------------
var initial2 = atob("SW5pY2lvDQp2YXIgcG91cGFuY2ENCnBvdXBhbmNhID0gMTANCmVzY3JldmEocG91cGFuY2EpDQpGaW0NCg0K");

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

    // ---------------------------------------- Exercicios 4a parte -----------------------------------------------------------
    
    var initial3 = atob("SW5pY2lvDQp2YXIgcG91cGFuY2EgIA0KZXNjcmV2YSgiRGlnaXRlIG8gdmFsb3IgZGEgcG91cGFuY2EiKQ0KcG91cGFuY2EgPSBwb3VwYW5jYSArIDEwDQplc2NyZXZhKHBvdXBhbmNhKQ0KRmltDQo=");


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
    
 
