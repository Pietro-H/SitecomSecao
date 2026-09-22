// Theme Toggle Logic
const themeBtn = document.getElementById('botao-tema');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeBtn.textContent = isDark ? '☀️ Tema' : '🌚 Tema';
});

// FormSubmit AJAX Handler
const form = document.getElementById('formulario-contato');
const responseText = document.getElementById('resposta-formulario');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  responseText.textContent = "Enviando mensagem...";
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      responseText.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    } else {
      responseText.textContent = "Ocorreu um erro ao enviar. Tente novamente.";
    }
  } catch (error) {
    responseText.textContent = "Erro de conexão. Verifique sua rede.";
  }
});