import React from "react";
import "../Main/main";
import "./main.css";
import PlaylistOne from "../assets/playlist/1.jpeg";
import PlaylistTwo from "../assets/playlist/2.png";
import PlaylistTrhee from "../assets/playlist/3.jpeg";
import PlaylistFour from "../assets/playlist/4.jpeg";
import PlaylistFive from "../assets/playlist/5.jpeg";
import PlaylistSix from "../assets/playlist/6.jpeg";
import PlaylistSeven from "../assets/playlist/7.jpeg";
import PlaylistEigth from "../assets/playlist/8.jpeg";
import PlaylistNine from "../assets/playlist/9.jpeg";
import PlaylistTen from "../assets/playlist/10.jpeg";
import PlaylistEleven from "../assets/playlist/11.jpeg";
import PlaylistTwelve from "../assets/playlist/12.jpeg";
import PlaylistThirteen from "../assets/playlist/13.jpeg";
import PlaylistFourteen from "../assets/playlist/14.jpeg";
import PlaylistFifteen from "../assets/playlist/15.jpeg";

const Main = () => {
    return (
        <main>
            <div className="playlist_container">
                <div id="result_playlist">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer_scroll_container">
                        <div className="offer_list">
                            <section className="offer_list_item">
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={PlaylistOne} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={PlaylistTwo} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={PlaylistTrhee} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={PlaylistFour} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={PlaylistFive} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={PlaylistSix} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={PlaylistSeven} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={PlaylistEigth} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={PlaylistNine} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={PlaylistTen} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={PlaylistEleven} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={PlaylistTwelve} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={PlaylistThirteen} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={PlaylistFourteen} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={PlaylistFifteen} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result_artist" className="hidden">
                    <div className="grid_container">
                        <div className="artist_card" id="">
                            <div className="card_img">
                                <img id="artist_img" className="artist_img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card_text">
                                <a title="Foo Fighters" className="vst" href="">
                                    <span className="artist_name" id="artist_name"></span>
                                    <span className="artist_categorie">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
