document.addEventListener('DOMContentLoaded', () => {
  const botalogtela = document.getElementById('botalin')

  if (localStorage.getItem('usuario_logado') !== 'true') window.location.href = 'cadastro.html'
})
