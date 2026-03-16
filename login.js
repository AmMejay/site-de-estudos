document.addEventListener('DOMContentLoaded', () => {
  const botaoLogin = document.getElementById('bot')

  botaoLogin.addEventListener('click', e => {
    e.preventDefault()

    const nome = document.getElementById('nm').value
    const senha = document.getElementById('sn').value

    if (nome === 'eduardogay' && senha === 'eduardogay150') {
      window.location.href = 'inicial.html'
    } else if (nome === 'admin' && senha === 'admin') {
      window.location.href = 'inicial.html'
    } else {
      document.getElementById('erro').style.display = 'block'
    }
  })
})
