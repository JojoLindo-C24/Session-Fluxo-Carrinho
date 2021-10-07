import Cookies from 'js-cookie'
import useState from 'react';
import {Link, useHistory} from 'react-router-dom';
import Container from './styled'


export default function DetalheProduto(props) {
    const [produtos, stateProduto] = useState(props.location.state);
    const Navigation = useHistory();


    // Array = é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. Essa estrutura de dados também é conhecida como variável indexada, vetor e matriz.
    // O método JSON. parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto resultante antes de ser retornada.
    // JSON ou JavaScript Object Notation, é um modelo para armazenamento e transmissão de informações no formato texto e que é bastante utilizado por aplicações Web que trabalham com a tecnologia AJAX.

    // Lê os elementos presentes(produtos) no carrinho

    function comprar() {
        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined
                        ? JSON.parse (carrinho)
                        : [];
    }

    return(
        <Container>
            <div>
                <Link to="/"> Voltar </Link>
                <h1> Detalhes do Produto </h1>
                <br /> <br />
            </div>
        </Container>
    )
}