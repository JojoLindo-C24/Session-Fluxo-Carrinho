import Cookies from 'js-cookie'
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Container} from './styled'


export default function DetalhesPacote(props) {
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();


    // Array = é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. Essa estrutura de dados também é conhecida como variável indexada, vetor e matriz.
    // O método JSON. parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto resultante antes de ser retornada.
    // JSON ou JavaScript Object Notation, é um modelo para armazenamento e transmissão de informações no formato texto e que é bastante utilizado por aplicações Web que trabalham com a tecnologia AJAX.

    // Lê os elementos presentes(produtos) no carrinho

    function comprar() {
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined
                        ? JSON.parse (carrinho)
                        : [];
    

    if (carrinho.some(item => item.id === produto.id) === false)
        carrinho.push({...produto, qtd: 1 });

        Cookies.set('carrinho', JSON.stringify(carrinho));

        navigation.push('/carrinho');
      }
      
    return(
        <Container>
            <div>
          <Link to="/"> Voltar </Link>
          <h1> Detalhes do Produto </h1>
          <br /> <br />

          <div> <img src={produto.imagem} alt="" /> </div>
          <div> <h1> {produto.titulo} </h1> </div>
          <div> <h3> {produto.preco} </h3> </div>
          <div> <h2> {produto.componentes} </h2> </div>
        </div>

        <div>
          <h2> Descrição </h2>
          <div> {produto.descricao} </div>

          <h2> Especificações </h2>
          <div> {produto.especificacoes} </div>

          <div> <button onClick={comprar}> Comprar </button> </div>
        </div>

        </Container>
    )
}