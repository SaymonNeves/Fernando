function mudarImagem() {
  const input = document.getElementById('senha').value;
  const imagem = document.getElementById('sujeira');
  const imagemAtual = imagem.src;
  const mensagens = document.querySelectorAll('spam');
  
  if (imagemAtual.includes('sujeira1.png')) {
    imagem.src = 'sujeira2.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira2.png') && input === "Pou") {
    imagem.src = 'sujeira3.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira3.png') && input === "Saymon") {
    imagem.src = 'sujeira4.png';
    mensagens.forEach(mensagem => {
      mensagem.style.display = 'none';
    });
  } else if (imagemAtual.includes('sujeira4.png') && input === "Orfanato") {
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
  document.getElementById('senha').value = "";
}