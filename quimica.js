document.addEventListener("DOMContentLoaded" , () => {

    const btn = document.querySelector("#btn1")
  
    const btn1 = document.querySelector("#btn2")

    const gabarito = {
        q1: "B",
        q2: "B",
        q3: "C",
        q4: "C",
        q5: "B"
      };

    //   function corrigi () { alert ( "Funcionou!" ); } 
      function concorda() {
        let pontuacao = 0;
      
        for (let questao in gabarito) {
      
          const resposta = document.querySelector(`input[name="${questao}"]:checked`);
      
          if (resposta && resposta.value === gabarito[questao]) {
            pontuacao++;
          }
        }
        
        const total = Object.keys(gabarito).length;
      
        document.getElementById("resultado").innerText =
          `Você acertou ${pontuacao} de ${total}`;

        const porcentagem = (pontuacao / total) * 100;

        document.getElementById("resultado").innerText =
        `Você acertou ${pontuacao}/${total} (${porcentagem.toFixed(0)}%)`;
      }
      
    //    btn1.addEventListener("click" , (e) => {
    //     e.preventDefault();

    //     corrigi()

    //    })

       btn.addEventListener("click" , (e) => {
        e.preventDefault();

      
        
        // console.log("aaaa");
        
        concorda()
       })
   
      
})