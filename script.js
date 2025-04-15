const carrossel = document.getElementById('carrossel');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let scrollPosition = 0;
const scrollAmount = 250; // A quantidade que queremos "rolar" a cada clique

btnNext.addEventListener('click', () => {
    console.log("clicado");
  const maxScroll = carrossel.scrollWidth - carrossel.clientWidth; // Max possível de rolagem
  if (scrollPosition < maxScroll) {
    scrollPosition += scrollAmount;
    carrossel.style.transform = `translateX(-${scrollPosition}px)`; // Move o carrossel
  }
});

btnPrev.addEventListener('click', () => {
    console.log("clicado");
  if (scrollPosition > 0) {
    scrollPosition -= scrollAmount;
    carrossel.style.transform = `translateX(-${scrollPosition}px)`; // Move o carrossel para a esquerda
  }
});

