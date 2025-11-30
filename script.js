const natal = new Date("12/25/2025");

function atualizarHorario(){
    let display = document.getElementById("tempo");
    let tempo = new Date(natal - new Date());
    display.innerHTML = tempo.getDate() + " dias, " + tempo.getHours() + " horas, " + tempo.getMinutes() + " minutos e " + tempo.getSeconds() + " segundos..."
}

setInterval(atualizarHorario, 1000);