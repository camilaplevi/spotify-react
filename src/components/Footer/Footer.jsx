import './Footer.css';
import '../var.css';

const Footer = () => {
    return (
        <footer className="disclaimer_premium">
            <div className="text">
                <p className="disclaimer_premium_title">Testar o Premium de graça</p>
                <p className="disclaimer_premium_subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer;