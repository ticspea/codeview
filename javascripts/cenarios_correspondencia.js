let respostasCorretas = {
    'op1': 'atrib', 'op2': 'visu', 'op3': 'calc','op5': 'cri', 'op6': 'acum',
    'op7': 'atrib', 'op8': 'visu', 'op9': 'calc', 'op11': 'cri', 'op12': 'acum'
};
let respostasUsuario = {};

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, categoria) {
    event.preventDefault();
    let itemId = event.dataTransfer.getData("text");
    let item = document.getElementById(itemId);
    let target = event.target;

    if (!target.classList.contains("category")) return;
    target.appendChild(item);
    respostasUsuario[itemId] = categoria;
}

document.querySelectorAll(".option").forEach(item => {
    item.addEventListener("dragstart", drag);
});

function moverOpcoesErradasDeVolta() {
    document.querySelectorAll(".category").forEach(cat => {
        let itensNaCategoria = Array.from(cat.children).filter(el => el.classList.contains("option"));
        itensNaCategoria.forEach(item => {
            if (item.classList.contains("wrong")) {
                // Verifica se a opção é de 1 a 6 (options1) ou de 7 a 12 (options2)
                let opcaoId = item.id;
                let numeroOpcao = parseInt(opcaoId.replace("op", ""));
                if (numeroOpcao >= 1 && numeroOpcao <= 6) {
                    let optionsContainer = document.getElementById("options1");
                    optionsContainer.appendChild(item);
                } else if (numeroOpcao >= 7 && numeroOpcao <= 12) {
                    let optionsContainer = document.getElementById("options2");
                    optionsContainer.appendChild(item);
                }
            }
        });
    });
}

function verificarRespostas() {
    let acertos = 0;
    let total = Object.keys(respostasCorretas).length;
    
    document.querySelectorAll(".category").forEach(cat => {
        let itensNaCategoria = Array.from(cat.children).filter(el => el.classList.contains("option"));
        let categoriaId = cat.getAttribute("ondrop").match(/drop\(event, '(.*?)'\)/)[1];
        
        itensNaCategoria.forEach(item => {
            if (respostasCorretas[item.id] === categoriaId) {
                item.classList.add("correct");
                item.classList.remove("wrong");
                acertos++;
            } else {
                item.classList.add("wrong");
                item.classList.remove("correct");
            }
        });
    });
    
    if (acertos === total) {
        document.getElementById("resultado").innerText = "Parabéns! Você acertou tudo!";
    } else {
        moverOpcoesErradasDeVolta();
        alert("Ainda há erros, tente novamente!");
    }
}