import React from "react";
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/video.mp4';
import Cards from "../../components/cards";
import Logo from '../../assets/batman.jpg';
import { Link} from "react-router-dom";

function Home(){
    return(
        <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        seu navegador nao possui suporte para videos
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas 
                            mais sombrias de Gotham City. Com poucos aliados confiáveis,
                            o vigilante solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className="button">Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <footer >
                <img id="logo" src={Logo} />
                <span>Todos os direitos reservados©</span>
                <span>Desenvolvido por: Gabriel Batista</span>

                <nav className="footer-navigation">
                    <ul className="footer-list">
                        <Link style={{textDecoration: 'none'}} to='/'>
                            <li>Home</li>
                        </Link>

                        <Link style={{textDecoration: 'none'}} to='/contato'>
                            <li>Contato</li>
                        </Link>

                        <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                        </Link>

                        <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentarios</li>
                        </Link>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Home;