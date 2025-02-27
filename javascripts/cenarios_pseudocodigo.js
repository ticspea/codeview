function updateLineNumbers() {
    const editor = document.getElementById('editor1');
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
    const editor = document.getElementById('editor1');
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = editor.scrollTop;
    }
    
    // Initialize line numbers
    updateLineNumbers();

    function updateLineNumbers() {
        const editor = document.getElementById('editor1');
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
        const editor = document.getElementById('editor1');
        const lineNumbers = document.getElementById('lineNumbers');
        lineNumbers.scrollTop = editor.scrollTop;
        }
        
        // Initialize line numbers
        updateLineNumbers();
    


        function validateAndEvaluatep() {
            const editor = document.getElementById("editor1");
            const pseudocode = editor.value.trim();
            const lines = pseudocode.split("\n").map((line) => line.trim());
            
            const expectedStart = "Algoritmo atribuicao";
            const expectedVarDeclaration = "var cofre";
            const expectedInitialAssignment = "cofre = 200";
            const expectedAddition = "cofre = cofre + 100";
            const expectedPrint = "escreva(cofre)";
            const expectedEnd = "Fim";
        
            // Verificar início e estrutura geral
            if (!lines[0].startsWith(expectedStart)) {
                alert("O pseudocódigo deve começar com 'Algoritmo atribuicao'.");
                return;
            }
        
            if (!lines.includes(expectedVarDeclaration)) {
                alert("Por favor, declare a variável 'cofre' usando 'var cofre'.");
                return;
            }
        
            if (!lines.includes(expectedInitialAssignment)) {
                alert("Por favor, atribua o valor inicial de 200 à variável 'cofre' usando 'cofre = 200'.");
                return;
            }
        
            if (!lines.includes(expectedAddition)) {
                alert("Certifique-se de adicionar 100 ao valor de 'cofre' usando 'cofre = cofre + 100'.");
                return;
            }
        
            if (!lines.includes(expectedPrint)) {
                alert("Por favor, exiba o valor de 'cofre' usando 'escreva(cofre)'.");
                return;
            }
        
            if (!lines[lines.length - 1].startsWith(expectedEnd)) {
                alert("O pseudocódigo deve terminar com 'Fim'.");
                return;
            }
        
            // Se a solução estiver correta, simular execução
            if (
                pseudocode.includes(expectedStart) &&
                pseudocode.includes(expectedVarDeclaration) &&
                pseudocode.includes(expectedInitialAssignment) &&
                pseudocode.includes(expectedAddition) &&
                pseudocode.includes(expectedPrint) &&
                pseudocode.includes(expectedEnd)
            ) {
                alert("Parabéns! O pseudocódigo está correto!");
                
                // Simular a execução do pseudocódigo
                let cofre = 200;
                cofre += 100;
                alert(`Resultado da execução: ${cofre}`);
            } else {
                alert("O pseudocódigo contém erros. Por favor, revise-o.");
            }
        }
        
        // Função para atualizar a numeração de linhas
        function updateLineNumbers() {
            const editor = document.getElementById("editor1");
            const lineNumbers = document.getElementById("lineNumbers");
            const lines = editor.value.split("\n").length;
            lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join("<br>");
        }
        
        // Função para sincronizar a rolagem entre o editor e a numeração de linhas
        function syncScroll() {
            const editor = document.getElementById("editor1");
            const lineNumbers = document.getElementById("lineNumbers");
            lineNumbers.scrollTop = editor.scrollTop;
        }
        
        // Atualizar a numeração de linhas ao carregar a página
        window.onload = updateLineNumbers;
        
    