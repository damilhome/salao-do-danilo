//RN.03 - Atualizar horários disponíveis:
document.querySelectorAll(".horario").forEach(function(button){
    button.addEventListener("click", function(event) {
        event.preventDefault();
        selecionar(this);
    })
})

function selecionar(elemento) {
    //RN.03 - Atualizar horários disponíveis:
    if (elemento.classList.contains("selecionado")){
        elemento.classList.remove("selecionado");
    } else {
        elemento.classList.add("selecionado");
    }
}

function disponibilizarHorarios() {
    //RN.03 - Atualizar horários disponíveis:
    const horariosDisponibilizados = document.getElementById("mensagemDisponibilizacao");
    const pMensagem = document.createElement("p");
    pMensagem.textContent = "Horários disponibilizados!";
    horariosDisponibilizados.appendChild(pMensagem);
}