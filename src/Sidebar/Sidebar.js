import React from 'react';
import './Sidebar.css';
import '../var.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div className="logo_spotify">
                    <a href="/">
                        <img src={logoSpotify} alt="lofo do spotify"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span className='textNav'>Início</span>
                        </a>
                    </li>
                    <li>
                    <   a href="">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span className='textNav'>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library_content">
                    <button className="library_button">
                        <span><FontAwesomeIcon icon={faBook} /></span>
                        <span className='libraryTextButton'>Sua biblioteca</span>
                    </button>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </div>
                <section className="section_playlist">
                    <div className="section_playlist_content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section_playlist_button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="#">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages_button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;