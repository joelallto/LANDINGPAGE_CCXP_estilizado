const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const lancamento = "14 apr 2023"

function countDown(){
    const dataLan = new Date(lancamento)
    const dataHoje = new Date()

    const segTotal = (dataLan - dataHoje)/1000;

    const finalDia = Math.floor(segTotal / 60 / 60 / 24);
    const finalhora = Math.floor(segTotal / 60 / 60 ) % 24;
    const finalmin = Math.floor(segTotal / 60 ) % 60;
    const finalseg = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDia);
    hora.innerHTML = formatoTempo(finalhora);
    min.innerHTML = formatoTempo(finalmin);
    seg.innerHTML = formatoTempo(finalseg);

    
}
function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)