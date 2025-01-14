function mudarImagem() {
  const imagem = document.getElementById('sujeira');
  const imagemAtual = imagem.src;
  const mensagens = document.querySelectorAll('spam');
  
  if (imagemAtual.includes('sujeira1.png')) {
    imagem.src = 'sujeira2.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira2.png')) {
    imagem.src = 'sujeira3.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira3.png')) {
    imagem.src = 'sujeira4.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira4.png')) {
    imagem.src = 'sujeira5.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'block';
    });
  } else {
    imagem.src = 'sujeira1.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  }
}