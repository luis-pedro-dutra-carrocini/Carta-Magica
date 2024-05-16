// Variável para verificar em qual imagem está
var cont = 0;

// Função de espera
function espera(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para rodar a carta e depois exibir a imagem correta
async function rotateYDIV(){
    if (cont == 0){
        document.getElementById('card').style.animation = 'rotate180a0 2s';
        document.getElementById('card').style.transform = 'rotateY(0deg)';
        await espera(600);
        document.getElementById('costas').style.display = 'none';
        document.getElementById('ouros').style.display = 'block';
        cont = 1

    }else if (cont == 1){
        document.getElementById('card').style.animation = 'rotate0a180 2s';
        document.getElementById('card').style.transform = 'rotateY(180deg)';
        await espera(600);
        document.getElementById('ouros').style.display = 'none';
        document.getElementById('espada').style.display = 'block';
        cont = 2;

    }else if (cont == 2){
        document.getElementById('card').style.animation = 'rotate180a0 2s';
        document.getElementById('card').style.transform = 'rotateY(0deg)';
        await espera(600);
        document.getElementById('espada').style.display = 'none';
        document.getElementById('copas').style.display = 'block';
        cont = 3

    }else if (cont == 3){
        document.getElementById('card').style.animation = 'rotate0a180 2s';
        document.getElementById('card').style.transform = 'rotateY(180deg)';
        await espera(600);
        document.getElementById('copas').style.display = 'none';
        document.getElementById('paus').style.display = 'block';
        cont = 4;

    }else if (cont == 4){
        document.getElementById('card').style.animation = 'rotate180a0 2s';
        document.getElementById('card').style.transform = 'rotateY(0deg)';
        await espera(600);
        document.getElementById('paus').style.display = 'none';
        document.getElementById('coringa').style.display = 'block';
        cont = 5;
    }else if (cont == 5){
        document.getElementById('card').style.animation = 'rotate0a180 2s';
        document.getElementById('card').style.transform = 'rotateY(180deg)';
        await espera(600);
        document.getElementById('coringa').style.display = 'none';
        document.getElementById('costas').style.display = 'block';
        cont = 0;
    }
};