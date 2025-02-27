const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
let poupanca = 40;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


// -------------------------- -- primeira parte seleção simples -----------

// ------------------------------- Cenario 1 - Quarta Parte --------------------------------------------- \\

let isRunning = false; // Controle de execução

document.getElementById("play1").addEventListener("click", function () {
    // Seleciona os elementos HTML necessários
    const reg1 = document.getElementById("reg1");
    const vt = document.getElementById("vt");
    const vh = document.getElementById("vh");
    const rgt = document.getElementById("rgt");
    const rgt1 = document.getElementById("rgt1");
    const ms1 = document.getElementById("ms1");
    const playButton = document.getElementById("play1");
    const code1 = document.getElementById("code1"); // Seleciona a imagem a ser destacada

    // Função para exibir texto no estilo máquina de escrever
    function typewriterEffect(element, text, callback) {
        element.textContent = ""; // Limpa o texto atual
        let index = 0;

        function writeChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(writeChar, 50); // Velocidade de escrita
            } else if (callback) {
                callback(); // Executa o callback após a escrita
            }
        }
        writeChar();
    }

    // Reinicializar elementos para repetição
    function resetElements() {
        ms1.textContent = "";
        reg1.style.transition = "";
        reg1.style.transform = "translateX(0)";
        reg1.classList.remove("hidden");
        vt.classList.remove("hidden");
        vh.classList.add("hidden");
        rgt.classList.add("hidden");
        rgt1.classList.add("hidden");
        code1.classList.remove("highlight"); // Remove a classe de destaque
    }

    // Função principal que executa os passos
    function executeSteps() {
        isRunning = true;
        playButton.disabled = true; // Desativa o botão durante a execução

        // Passo 1: Exibir o texto inicial e iniciar o movimento
        const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
        typewriterEffect(ms1, newText, () => {
            // Movimentar reg1
            reg1.style.transition = "transform 2.0s linear";
            reg1.style.transform = "translateX(-400px)";

            setTimeout(() => {
                // Substituir imagens
                vt.classList.add("hidden");
                vh.classList.remove("hidden");
                reg1.classList.add("hidden");
                rgt.classList.remove("hidden");

                setTimeout(() => {
                    // Substituir rgt por rgt1
                    rgt.classList.add("hidden");
                    rgt1.classList.remove("hidden");

                    setTimeout(() => {
                        // Mover rgt1 da esquerda para a direita
                        rgt1.style.transition = "transform 1s linear";
                        rgt1.style.transform = "translateX(400px)";

                        setTimeout(() => {
                            // Exibir texto final
                            const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica. Está lógica pode ser representado na forma de pseudocódigo clicando na imagem assinalada a verde";
                            typewriterEffect(ms1, finalText, () => {
                                // Adiciona a classe de destaque à imagem
                                code1.classList.add("highlight");

                                isRunning = false; // Permite repetir a execução
                                playButton.disabled = false; // Reativa o botão após a execução
                            });
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 2000);
        });
    }

    // Lógica para iniciar a execução
    if (!isRunning) {
        resetElements(); // Reinicia os elementos
        executeSteps();
    }
});


//programando o pseudocodigo 1
document.getElementById("code1").addEventListener("click", function () {
    // Seleciona os elementos necessários
    const ms1 = document.getElementById("ms1");
    const aselecao = document.getElementById("aselecao");

    // Esconde o texto com id "ms1"
    ms1.style.display = "none";

    // Exibe o texto com id "aselecao"
    aselecao.style.display = "block";
});

//exibir o texto na forma de typewriter
// Texto a ser exibido com o efeito de máquina de escrever

// ------------------------------ cenário 2 - Estrutura Composta ------------------------
let isRunning2 = false; // Controle de execução

document.getElementById("play2").addEventListener("click", function () {
    // Seleciona os elementos HTML necessários
    const reg2 = document.getElementById("reg2");
    const vt2 = document.getElementById("vt2");
    const vh2 = document.getElementById("vh2");
    const rgt2 = document.getElementById("rgt2");
    const rgt02 = document.getElementById("rgt02");
    const ms2 = document.getElementById("ms2");
    const playButton2 = document.getElementById("play2");
    const code2 = document.getElementById("code2"); // Seleciona a imagem a ser destacada

    // Função para exibir texto no estilo máquina de escrever
    function typewriterEffect2(element2, text2, callback) {
        element2.textContent = ""; // Limpa o texto atual
        let index2 = 0;

        function writeChar2() {
            if (index2 < text2.length) {
                element2.textContent += text2.charAt(index2);
                index2++;
                setTimeout(writeChar2, 50); // Velocidade de escrita
            } else if (callback) {
                callback(); // Executa o callback após a escrita
            }
        }
        writeChar2();
    }

    // Reinicializar elementos para repetição
    function resetElements2() {
        ms2.textContent = "";
        reg2.style.transition = "";
        reg2.style.transform = "translateX(0)";
        reg2.classList.remove("hidden");
        vt2.classList.remove("hidden");
        vh2.classList.add("hidden");
        rgt2.classList.add("hidden");
        rgt02.classList.add("hidden");
        code2.classList.remove("highlight"); // Remove a classe de destaque
    }

    // Função principal que executa os passos
    function executeSteps2() {
        isRunning2 = true;
        playButton2.disabled = true; // Desativa o botão durante a execução

        // Passo 1: Exibir o texto inicial e iniciar o movimento
        const newText2 = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
        typewriterEffect2(ms2, newText2, () => {
            // Movimentar reg2
            reg2.style.transition = "transform 2.0s linear";
            reg2.style.transform = "translateX(-310px)";

            setTimeout(() => {
                // Substituir imagens
                vt2.classList.add("hidden");
                vh2.classList.remove("hidden");
                reg2.classList.add("hidden");
                rgt2.classList.remove("hidden");

                setTimeout(() => {
                    // Substituir rgt por rgt1
                    rgt2.classList.add("hidden");
                    rgt02.classList.remove("hidden");

                    setTimeout(() => {
                        // Mover rgt1 da esquerda para a direita
                        rgt02.style.transition = "transform 1s linear";
                        rgt02.style.transform = "translateX(320px)";

                        setTimeout(() => {
                            // Exibir texto final
                            const finalText2 = "22No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica. Está lógica pode ser representado na forma de pseudocódigo clicando na imagem assinalada a verde";
                            typewriterEffect2(ms2, finalText2, () => {
                                // Adiciona a classe de destaque à imagem
                                code2.classList.add("highlight");

                                isRunning2 = false; // Permite repetir a execução
                                playButton2.disabled = false; // Reativa o botão após a execução
                            });
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 2000);
        });
    }

    // Lógica para iniciar a execução
    if (!isRunning2) {
        resetElements2(); // Reinicia os elementos
        executeSteps2();
    }
});

// -------------------- Cenário 3 - Multipla escolha -----------------------------------

let isRunning3 = false; // Controle de execução

document.getElementById("play3").addEventListener("click", function () {
    // Seleciona os elementos HTML necessários
    const reg3 = document.getElementById("reg3");
    const vt3 = document.getElementById("vt3");
    const vh3 = document.getElementById("vh3");
    const rgt3 = document.getElementById("rgt3");
    const rgt03 = document.getElementById("rgt03");
    const ms3 = document.getElementById("ms3");
    const playButton3 = document.getElementById("play3");
    const code3 = document.getElementById("code3"); // Seleciona a imagem a ser destacada

    // Função para exibir texto no estilo máquina de escrever
    function typewriterEffect3(element3, text3, callback) {
        element3.textContent = ""; // Limpa o texto atual
        let index3 = 0;

        function writeChar3() {
            if (index3 < text3.length) {
                element3.textContent += text3.charAt(index3);
                index3++;
                setTimeout(writeChar3, 50); // Velocidade de escrita
            } else if (callback) {
                callback(); // Executa o callback após a escrita
            }
        }
        writeChar3
        ();
    }

    // Reinicializar elementos para repetição
    function resetElements3() {
        ms3.textContent = "";
        reg3.style.transition = "";
        reg3.style.transform = "translateX(0)";
        reg3.classList.remove("hidden");
        vt3.classList.remove("hidden");
        vh3.classList.add("hidden");
        rgt3.classList.add("hidden");
        rgt03.classList.add("hidden");
        code3.classList.remove("highlight"); // Remove a classe de destaque
    }

    // Função principal que executa os passos
    function executeSteps3() {
        isRunning3 = true;
        playButton3.disabled = true; // Desativa o botão durante a execução

        // Passo 1: Exibir o texto inicial e iniciar o movimento
        const newText3 = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
        typewriterEffect3(ms3, newText3, () => {
            // Movimentar reg1
            reg3.style.transition = "transform 2.0s linear";
            reg3.style.transform = "translateX(-400px)";

            setTimeout(() => {
                // Substituir imagens
                vt3.classList.add("hidden");
                vh3.classList.remove("hidden");
                reg3.classList.add("hidden");
                rgt03.classList.remove("hidden");

                setTimeout(() => {
                    // Substituir rgt por rgt1
                    rgt3.classList.add("hidden");
                    rgt03.classList.remove("hidden");

                    setTimeout(() => {
                        // Mover rgt1 da esquerda para a direita
                        rgt03.style.transition = "transform 1s linear";
                        rgt03.style.transform = "translateX(300px)";

                        setTimeout(() => {
                            // Exibir texto final
                            const finalText3 = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica. Está lógica pode ser representado na forma de pseudocódigo clicando na imagem assinalada a verde";
                            typewriterEffect3(ms3, finalText3, () => {
                                // Adiciona a classe de destaque à imagem
                                code3.classList.add("highlight");

                                isRunning3 = false; // Permite repetir a execução
                                playButton3.disabled = false; // Reativa o botão após a execução
                            });
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 2000);
        });
    }

    // Lógica para iniciar a execução
    if (!isRunning3) {
        resetElements3(); // Reinicia os elementos
        executeSteps3();
    }
});

// Puzzle problem 

var initial = "Algoritmo 'SeleçãoSimples'\n" +
										  "Var 'poupanca\n"+
                      "Inicio\n"+
                      "Escreve ('Insira o valor da poupança: ')\n"+
                      "se poupanca >= 20 entao\n"+
										  "escreve('Aquisição de sementes de tomate')\n"+
										  "poupanca = poupanca – 20\n"+
                      "escreva(poupanca)\n"+
                      "Fim-se\n"+
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

// ----------------- Cenario 5 - exercicio multipla escolha -----
var initial5 = 'for (int i=0;i<3;i++) {\nSystem.out.print(\"I \");\nSystem.out.print(\"am \");\nSystem.out.print(\"a Java program \");\n}';
        var parson5;

        $(document).ready(function(){
            parson5 = new ParsonsWidget({
                'sortableId': 'sortable5',
                'max_wrong_lines': 1,
                'vartests': [{initcode: "output = ''", code: "", message: "Testing...", variables: {output: "I am a Java program I am a Java program I am a Java program "}},
                    ],
                'grader': ParsonsWidget._graders.LanguageTranslationGrader,
                'executable_code': "for x in range(3):\n" +
                      "output += 'I '\n" +
                      "output += 'am '\n" +
                      "output += 'a Java program '\npass\n",
                'programmingLang': "java"
            });
            parson5.init(initial5);
            parson5.shuffleLines();
            $("#newInstanceLink5").click(function(event){
                event.preventDefault();
                parson5.shuffleLines();
            });
            $("#feedbackLink5").click(function(event){
                event.preventDefault();
                var fb = parson5.getFeedback();
                $("#unittest").html("<h2>Feedback from testing your program:</h2>" + fb.feedback);
            });
        });


/* Variável de controle global
let isRunning = false; // Controle de execução

document.getElementById("play1").addEventListener("click", function () {
    // Seleciona os elementos HTML necessários
    const reg1 = document.getElementById("reg1");
    const vt = document.getElementById("vt");
    const vh = document.getElementById("vh");
    const rgt = document.getElementById("rgt");
    const rgt1 = document.getElementById("rgt1");
    const ms1 = document.getElementById("ms1");
    const playButton = document.getElementById("play1");

    // Função para exibir texto no estilo máquina de escrever
    function typewriterEffect(element, text, callback) {
        element.textContent = ""; // Limpa o texto atual
        let index = 0;

        function writeChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(writeChar, 50); // Velocidade de escrita
            } else if (callback) {
                callback(); // Executa o callback após a escrita
            }
        }
        writeChar();
    }

    // Reinicializar elementos para repetição
    function resetElements() {
        ms1.textContent = "";
        reg1.style.transition = "";
        reg1.style.transform = "translateX(0)";
        reg1.classList.remove("hidden");
        vt.classList.remove("hidden");
        vh.classList.add("hidden");
        rgt.classList.add("hidden");
        rgt1.classList.add("hidden");
    }

    // Função principal que executa os passos
    function executeSteps() {
        isRunning = true;
        playButton.disabled = true; // Desativa o botão durante a execução

        // Passo 1: Exibir o texto inicial e iniciar o movimento
        const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
        typewriterEffect(ms1, newText, () => {
            // Movimentar reg1
            reg1.style.transition = "transform 2.0s linear";
            reg1.style.transform = "translateX(-400px)";

            setTimeout(() => {
                // Substituir imagens
                vt.classList.add("hidden");
                vh.classList.remove("hidden");
                reg1.classList.add("hidden");
                rgt.classList.remove("hidden");

                setTimeout(() => {
                    // Substituir rgt por rgt1
                    rgt.classList.add("hidden");
                    rgt1.classList.remove("hidden");

                    setTimeout(() => {
                        // Mover rgt1 da esquerda para a direita
                        rgt1.style.transition = "transform 1s linear";
                        rgt1.style.transform = "translateX(400px)";

                        setTimeout(() => {
                            // Exibir texto final
                            const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica.";
                            typewriterEffect(ms1, finalText, () => {
                                isRunning = false; // Permite repetir a execução
                                playButton.disabled = false; // Reativa o botão após a execução
                            });
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 2000);
        });
    }

    // Lógica para iniciar a execução
    if (!isRunning) {
        resetElements(); // Reinicia os elementos
        executeSteps();
    }
});



/*
// --------- Botão play1 -------------------------------------------------
document.getElementById("play1").addEventListener("click", function () {
  // Seleciona os elementos HTML necessários
  const reg1 = document.getElementById("reg1");
  const vt = document.getElementById("vt");
  const vh = document.getElementById("vh");
  const rgt = document.getElementById("rgt");
  const rgt1 = document.getElementById("rgt1");
  const ms1 = document.getElementById("ms1");
  const playButton = document.getElementById("play1");

  // Variável de controle
  let isRunning = false; // Controle de execução

  // Função para exibir texto no estilo máquina de escrever
  function typewriterEffect(element, text, callback) {
      element.textContent = ""; // Limpa o texto atual
      let index = 0;

      function writeChar() {
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              setTimeout(writeChar, 50); // Velocidade de escrita
          } else if (callback) {
              callback(); // Executa o callback após a escrita
          }
      }
      writeChar();
  }

  // Reinicializar elementos para repetição
  function resetElements() {
      ms1.textContent = "";
      reg1.style.transition = "";
      reg1.style.transform = "translateX(0)";
      reg1.classList.remove("hidden");
      vt.classList.remove("hidden");
      vh.classList.add("hidden");
      rgt.classList.add("hidden");
      rgt1.classList.add("hidden");
  }

  // Função principal que executa os passos
  function executeSteps() {
      isRunning = true;
      playButton.disabled = true; // Desativa o botão durante a execução

      // Passo 1: Exibir o texto inicial e iniciar o movimento
      const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
      typewriterEffect(ms1, newText, () => {
          // Movimentar reg1
          reg1.style.transition = "transform 2.0s linear";
          reg1.style.transform = "translateX(-400px)";

          setTimeout(() => {
              // Substituir imagens
              vt.classList.add("hidden");
              vh.classList.remove("hidden");
              reg1.classList.add("hidden");
              rgt.classList.remove("hidden");

              setTimeout(() => {
                  // Substituir rgt por rgt1
                  rgt.classList.add("hidden");
                  rgt1.classList.remove("hidden");

                  setTimeout(() => {
                      // Mover rgt1 da esquerda para a direita
                      rgt1.style.transition = "transform 1s linear";
                      rgt1.style.transform = "translateX(400px)";

                      setTimeout(() => {
                          // Exibir texto final
                          const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica.";
                          typewriterEffect(ms1, finalText, () => {
                              isRunning = false; // Permite repetir a execução
                              playButton.disabled = false; // Reativa o botão após a execução
                          });
                      }, 2000);
                  }, 1000);
              }, 1000);
          }, 2000);
      });
  }

  // Lógica para iniciar a execução
  if (!isRunning) {
      resetElements(); // Reinicia os elementos
      executeSteps();
  }
});


/*
document.getElementById("play1").addEventListener("click", function () {
  // Seleciona os elementos HTML necessários
  const reg1 = document.getElementById("reg1");
  const vt = document.getElementById("vt");
  const vh = document.getElementById("vh");
  const rgt = document.getElementById("rgt");
  const rgt1 = document.getElementById("rgt1");
  const ms1 = document.getElementById("ms1");
  const playButton = document.getElementById("play1");

  // Variável de controle
  let isRunning = false; // Controle de execução

  // Função para exibir texto no estilo máquina de escrever
  function typewriterEffect(element, text, callback) {
      element.textContent = ""; // Limpa o texto atual
      let index = 0;

      function writeChar() {
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              setTimeout(writeChar, 50); // Velocidade de escrita
          } else if (callback) {
              callback(); // Executa o callback após a escrita
          }
      }
      writeChar();
  }

  // Reinicializar elementos para repetição
  function resetElements() {
      ms1.textContent = "";
      reg1.style.transition = "";
      reg1.style.transform = "translateX(0)";
      reg1.classList.remove("hidden");
      vt.classList.remove("hidden");
      vh.classList.add("hidden");
      rgt.classList.add("hidden");
      rgt1.classList.add("hidden");
  }

  // Função principal que executa os passos
  function executeSteps() {
      isRunning = true;
      playButton.disabled = true; // Desativa o botão durante a execução

      // Passo 1: Exibir o texto inicial e iniciar o movimento
      const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
      typewriterEffect(ms1, newText, () => {
          // Movimentar reg1
          reg1.style.transition = "transform 2.0s linear";
          reg1.style.transform = "translateX(-400px)";

          setTimeout(() => {
              // Substituir imagens
              vt.classList.add("hidden");
              vh.classList.remove("hidden");
              reg1.classList.add("hidden");
              rgt.classList.remove("hidden");

              setTimeout(() => {
                  // Substituir rgt por rgt1
                  rgt.classList.add("hidden");
                  rgt1.classList.remove("hidden");

                  setTimeout(() => {
                      // Mover rgt1 da esquerda para a direita
                      rgt1.style.transition = "transform 1s linear";
                      rgt1.style.transform = "translateX(400px)";

                      setTimeout(() => {
                          // Exibir texto final
                          const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica.";
                          typewriterEffect(ms1, finalText, () => {
                              isRunning = false; // Permite repetir a execução
                              playButton.disabled = false; // Reativa o botão após a execução
                          });
                      }, 2000);
                  }, 1000);
              }, 1000);
          }, 2000);
      });
  }

  // Lógica para iniciar a execução
  if (!isRunning) {
      resetElements(); // Reinicia os elementos
      executeSteps();
  }
});


/*
document.getElementById("play1").addEventListener("click", function () {
  // Seleciona os elementos HTML necessários
  const reg1 = document.getElementById("reg1");
  const vt = document.getElementById("vt");
  const vh = document.getElementById("vh");
  const rgt = document.getElementById("rgt");
  const rgt1 = document.getElementById("rgt1");
  const ms1 = document.getElementById("ms1");

  // Variáveis de controle
  let isPaused = false; // Controle de pausa
  let isRunning = false; // Controle de execução

  // Função para pausar/resumir animação
  function togglePauseResume() {
      isPaused = !isPaused; // Alterna entre pausa e execução
      if (!isPaused) executeSteps(); // Retoma a execução se não estiver pausado
  }

  // Função para exibir texto no estilo máquina de escrever
  function typewriterEffect(element, text, callback) {
      element.textContent = ""; // Limpa o texto atual
      let index = 0;

      function writeChar() {
          if (isPaused) {
              setTimeout(writeChar, 100); // Reexecuta enquanto estiver pausado
              return;
          }
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
              setTimeout(writeChar, 50); // Velocidade de escrita
          } else if (callback) {
              callback(); // Executa o callback após a escrita
          }
      }
      writeChar();
  }

  // Reinicializar elementos para repetição
  function resetElements() {
      ms1.textContent = "";
      reg1.style.transition = "";
      reg1.style.transform = "translateX(0)";
      reg1.classList.remove("hidden");
      vt.classList.remove("hidden");
      vh.classList.add("hidden");
      rgt.classList.add("hidden");
      rgt1.classList.add("hidden");
  }

  // Função principal que executa os passos
  function executeSteps() {
      if (isPaused || !isRunning) return;

      // Passo 1: Exibir o texto inicial e iniciar o movimento
      const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
      typewriterEffect(ms1, newText, () => {
          if (isPaused) return;

          // Movimentar reg1
          reg1.style.transition = "transform 2.0s linear";
          reg1.style.transform = "translateX(-400px)";

          setTimeout(() => {
              if (isPaused) return;

              // Substituir imagens
              vt.classList.add("hidden");
              vh.classList.remove("hidden");
              reg1.classList.add("hidden");
              rgt.classList.remove("hidden");

              setTimeout(() => {
                  if (isPaused) return;

                  // Substituir rgt por rgt1
                  rgt.classList.add("hidden");
                  rgt1.classList.remove("hidden");

                  setTimeout(() => {
                      if (isPaused) return;

                      // Mover rgt1 da esquerda para a direita
                      rgt1.style.transition = "transform 1s linear";
                      rgt1.style.transform = "translateX(400px)";

                      setTimeout(() => {
                          if (isPaused) return;

                          // Exibir texto final
                          const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica.";
                          typewriterEffect(ms1, finalText, () => {
                              isRunning = false; // Permite repetir a execução
                          });
                      }, 2000);
                  }, 1000);
              }, 1000);
          }, 2000);
      });
  }

  // Lógica para pausar, continuar ou reiniciar
  if (!isRunning) {
      resetElements(); // Reinicia os elementos
      isRunning = true;
      isPaused = false;
      executeSteps();
  } else {
      togglePauseResume();
  }
});


/*
document.getElementById("play1").addEventListener("click", function () {
  // Seleciona os elementos HTML necessários
  const reg1 = document.getElementById("reg1");
  const vt = document.getElementById("vt");
  const vh = document.getElementById("vh");
  const rgt = document.getElementById("rgt");
  const rgt1 = document.getElementById("rgt1");
  const ms1 = document.getElementById("ms1");

  // Função para exibir texto no estilo máquina de escrever
  function typewriterEffect(element, text, callback) {
      element.textContent = ""; // Limpa o texto atual
      let index = 0;
      const interval = setInterval(() => {
          if (index < text.length) {
              element.textContent += text.charAt(index);
              index++;
          } else {
              clearInterval(interval);
              if (callback) callback(); // Executa o callback após a escrita
          }
      }, 50); // Velocidade de escrita (50ms por caractere)
  }

  // Exibir o texto newText antes de iniciar o movimento
  const newText = "Se a variável poupança tiver o valor igual ou superior a 20 o Régulo irá escolher sementes de tomate e caso contrário nada é escolhido e o Régulo regressará à vila.";
  typewriterEffect(ms1, newText, () => {
      // Após a exibição de newText, iniciar o movimento
      reg1.style.transition = "transform 2.0s linear"; // Define a transição para o movimento
      reg1.style.transform = "translateX(-400px)"; // Movimenta para a posição de 35px à esquerda

      // Passo 2: Após o movimento, substituir imagens
      setTimeout(() => {
          // Substituir a imagem vt pela imagem vh
          vt.classList.add("hidden");
          vh.classList.remove("hidden");

          // Substituir a imagem reg1 pela imagem rgt
          reg1.classList.add("hidden");
          rgt.classList.remove("hidden");

          // Passo 3: Após 1s, substituir rgt por rgt1
          setTimeout(() => {
              rgt.classList.add("hidden");
              rgt1.classList.remove("hidden");

              // Passo 4: Após mais 1s, mover rgt1 da esquerda para a direita em 10px
              setTimeout(() => {
                  rgt1.style.transition = "transform 1s linear";
                  rgt1.style.transform = "translateX(400px)";

                  // Exibir finalText após o tempo necessário para completar as animações
                  setTimeout(() => {
                      const finalText = "No contexto da programação, uma estrutura de seleção simples permite determinar o fluxo da execução do programa mediante uma condição específica.";
                      typewriterEffect(ms1, finalText);
                  }, 2000); // Aguarda o tempo necessário após completar o movimento de rgt1
              }, 1000); // Espera 1s antes de mover rgt1
          }, 1000); // Espera 1s antes de substituir rgt por rgt1
      }, 2000); // Tempo necessário para completar o movimento inicial
  });
});


*/