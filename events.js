// Seleciona os botões
const watchBtn = document.getElementById('watchBtn');
const trailerBtn = document.getElementById('trailerBtn');

// Adiciona evento de clique ao botão "Assistir"
watchBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    watchBtn.classList.remove('btn-inactive'); // Remove a classe inativa
    watchBtn.classList.add('btn-active'); // Adiciona a classe ativa
    trailerBtn.classList.remove('btn-active'); // Remove a classe ativa do botão "Trailer"
    trailerBtn.classList.add('btn-inactive'); // Adiciona a classe inativa
});

// Adiciona evento de clique ao botão "Trailer"
trailerBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    trailerBtn.classList.remove('btn-inactive'); // Remove a classe inativa
    trailerBtn.classList.add('btn-active'); // Adiciona a classe ativa
    watchBtn.classList.remove('btn-active'); // Remove a classe ativa do botão "Assistir"
    watchBtn.classList.add('btn-inactive'); // Adiciona a classe inativa
});t