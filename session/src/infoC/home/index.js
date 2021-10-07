import { Container } from './styled'

import Produto from '../produto'
import { useState } from 'react'




export default function Home() {
  const [produtos, setProdutos] = useState([]);

  function listar() {
    const r = [
      {
        id: 1,
        imagem: "https://blog.hopihari.com.br/wp-content/uploads/2021/01/hopi-hari-hora-de-agradecer-profissionais-de-saude.jpg",
        titulo: "Hopi Hari",
        componentes: "- 2 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg"
      },
      {
        id: 2,
        imagem: "../../../public/assets/images/HopiHari1.png",
        titulo: "Hopi Hari",
        componentes: "- 2 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg"
      },
      {
        id: 3,
        imagem: "../../../public/assets/images/HopiHari1.png",
        titulo: "Hopi Hari",
        componentes: "- 2 ingressos",
        preco: "R$ 160,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        botao: "../../../public/assets/images/compra(1).svg"
      }
    ]

    setProdutos(r);
  }



  return (
    <Container>

      <h1> Sejam bem-vindos ao TuriSPace! </h1>
      <br />
      
      <button onClick={listar}> Listar Promoções da Temporada </button>
      <br />

      <div className="lista-produtos">
        
        {produtos.map(item => 
            <Produto info={item} />
        )}

      </div>


    </Container>
  )

}