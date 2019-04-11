//pegando o elemento seta e atribuindo na variavel
const seta = document.getElementById('seta');
//pegando o elemento texto seta e atribuindo na variavel
const setaText = document.getElementById('setaText');

//colocando a ação de clicar na seta
seta.addEventListener('click', () => {
  //condicionando; se na variavel setaText tiver a classe setaText--invisible
  if (setaText.classList.contains('setaText--invisible')) {
    //remover a classe invisible
    setaText.classList.remove('setaText--invisible');
    //girar a seta em 180º
    seta.style.transform = 'rotate(180deg)';
    
    //caso contrário
  } else {
    //adicionar a classe invisible
    setaText.classList.add('setaText--invisible');
    //remover a rotação da seta
    seta.style.removeProperty('transform');
  }

});