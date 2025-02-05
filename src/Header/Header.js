import React from "react";
import '../var.css';
import './Header.css';
import smallRigth from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'

const Header = () => {
    return(
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow_left">
                    <img src={smallLeft} alt="arrow left"/>
                </button>
                <button className="arrow_rigth">
                    <img src={smallRigth} alt="arrow rigth"/>
                </button>
            </div>
            <div className="header_search">
                <img src={search} alt="search"/>
                <input id="search_input" type="text" maxlength="800" placeholder="O que você quer ouvir?"/>
            </div>
            <div className="header_login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;