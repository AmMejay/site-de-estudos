document.addEventListener('DOMContentLoaded', () => {
  const botalogtela = document.getElementById('botalin')
  const botquimica = document.getElementById("quimica")

  botquimica.addEventListener("click" , () => {
    window.location.href = "quimica.html"
  })

  botalogtela.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
})
