import {Link} from 'react-router-dom'
import {Container} from './styled'

export default function Produto(props) {
    return(
        <Container>
            <div className="bloco">
                <img className="imagem" src={props.info.imagem} alt="" />
                <div className="conteudo">
                    <div className="titulo"> {props.info.titulo} </div> <br></br>
                    <div className="componentes"> {props.info.componentes} </div>
                    <div className="preco"> {props.info.preco} </div> <br></br>
                    
                    {/* <Link to={{
                        pathname: './carrinho',
                        state: props.info
                    }}>
                        <button className="bt-compra"> <img className="cestinha" src="https://cdn-icons-png.flaticon.com/512/126/126055.png" alt="" /> </button>
                    </Link> */}

                    <Link to={{
                        pathname: '/detalhe',
                        state: props.info
                    }}>
                        <button className="mais-info"> Mais Informações </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}