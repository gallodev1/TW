const progressBar = document.querySelector(".progress");
const previousBar = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

let progress = 0;

function updateProgressBar(){
    progressBar.style.width = progress + "%";
}
// Avançar --->>
function nextStep(){
    progress += 10;
    if(progress > 100) progress = 100;
    updateProgressBar();
}

//  <<--- Voltar
function previousStep(){
    progress -= 10
    if(progress < 0) progress = 0;
    updateProgressBar();
}

nextBtn.addEventListener("click", nextStep);

previousBar.addEventListener("click", previousStep);

// ;;;***    DESAFIO     ***;;;
// Reduzir as linhas de códigos acima, transformar as 2 functions acima em uma só;