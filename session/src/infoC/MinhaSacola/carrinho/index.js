import { useState } from 'react';
import Contador from '../contador'
import { Container, RemoverIcon } from './styled'



export default function CarrinhoItem(props) {
  // Carrega a Variável de Estado com o parâmetro recebido da tela Carrinho
  const [produto, setProduto] = useState(props.info);


  function alterarQtd(qtd) {
    // Atualiza a variável de Estado
    setProduto({...produto, qtd });

    // Chama componente PAI para atualizar Cookie
    props.onUpdate(produto.id, qtd)
  }

  

  function remover() {
    props.onRemove(produto.id);
  }



  return (
    <Container>
      
      <div>
      <img className="capa" src={produto.imagem} alt="" />
        <Contador onChange={alterarQtd} value={produto.qtd} />
      </div>

      <div className="titulo"> 
        {produto.titulo} 
      </div>
      
      <div className="preco"> 
        <span>Preço unitário</span> <br /> 
        {produto.preco} 
      </div>

      <div className="components"> 
        <span>Componentes</span> <br /> 
        {produto.components} 
      </div>

      <div className="qtd"> 
        <span>Qtd</span> <br /> 
        {produto.qtd} 
      </div>

      <div className="remover"> <RemoverIcon onClick={remover} /> </div>

    </Container>
  )
}