const adiciona = document.querySelectorAll('.controle-ajuste-adiciona');
const subtrai = document.querySelectorAll('.controle-ajuste-subtrai');
const ponto = document.querySelectorAll('.controle-contador');

adiciona.forEach(function (botaoAdicionar, i) {

    botaoAdicionar.addEventListener('click', function (){
        ponto[i].value = parseInt(ponto[i].value) + 1;
    });
});

subtrai.forEach(function (botaoSubtrair, i) {

    botaoSubtrair.addEventListener('click', function (){
        if(ponto[i].value >= 1) {
            ponto[i].value = parseInt(ponto[i].value) - 1;
        } else {
            return;
        }
    });
});

