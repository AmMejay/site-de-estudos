document.addEventListener('DOMContentLoaded', () => {
  const bot = document.getElementById('bot')

  bot.addEventListener('click', e => {
    e.preventDefault()

    const nome = document.getElementById('nm').value.trim()
    const senha = document.getElementById('sn').value.trim()

    if (nome === 'eduardoviado' && senha === 'eduardogay150') {
      window.location.href = 'https://github.com/AmMejay/site-de-estudos'
    } else {
      document.getElementById('erro').textContent = 'Nome ou senha incorreto'
    }
  })
})
