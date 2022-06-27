const elemento = document.querySelectorAll('[data-controle]');

const estatistica = document.querySelectorAll('[data-estatistica]');


elemento.forEach(function (controle){
    controle.addEventListener('click', function(evento){
        pontosDeEquipamentos(evento.target.parentNode, evento.target.dataset.controle);
        calculaEstatistica(evento.target.dataset.pecas);
    })
})

function pontosDeEquipamentos(elemento, operador){
    const ponto = elemento.querySelector('[data-contador]');

    if(operador === '+'){
        ponto.value = parseInt(ponto.value) + 1;
    } else {
        if(ponto.value >= 1) {
            ponto.value = parseInt(ponto.value) - 1;
        } else {
            return;
        }
    }

}

function calculaEstatistica(equipamento) {
    const valorDasPecas = estatisticaValores();
    
    estatistica.forEach(function (elemento){
        elemento.textContent = parseInt(elemento.textContent) + valorDasPecas[equipamento][elemento.dataset.estatistica];
    })
}

