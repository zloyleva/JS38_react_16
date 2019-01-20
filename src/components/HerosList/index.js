import React from 'react';
import './style.css';

const HeroList = () => {

    return(
        <section className="Home__ShowcaseWrapper">
            <div className="Home__ShowcaseInner">

                <article className="CharacterCard__Wrapper">
                    <div data="card header" className="CharacterCard__ImgWrapper">
                        <div className="card-image">
                            <img src="https://rickandmortyapi.com/api/character/avatar/65.jpeg"
                                                         alt="Chris"/>
                        </div>
                        <div className="CharacterCard__Title">
                            <h2 className="CharacterCard__Name">Chris</h2>
                            <p className="CharacterCard__Description">id: 65 - created a year ago</p>
                        </div>
                    </div>
                    <div data="card info" className="CharacterCard__InfoWrapper">
                        <div className="CharacterCard__TextWrapper"><span>STATUS</span><p>Alive</p>
                        </div>
                        <div className="CharacterCard__TextWrapper"><span>SPECIES</span><p>Humanoid,
                            Microverse inhabitant</p></div>
                        <div className="CharacterCard__TextWrapper"><span>GENDER</span><p>Male</p>
                        </div>
                        <div className="CharacterCard__TextWrapper"><span>ORIGIN</span><p>Rick's
                            Battery Microverse</p></div>
                        <div className="CharacterCard__TextWrapper"><span>LAST LOCATION</span>
                            <p>Rick's Battery Microverse</p></div>
                    </div>
                </article>

                <article className="CharacterCard__Wrapper">
                    <div data="card header" className="CharacterCard__ImgWrapper">
                        <div className="card-image">
                            <img src="https://rickandmortyapi.com/api/character/avatar/65.jpeg"
                                 alt="Chris"/>
                        </div>
                        <div className="CharacterCard__Title">
                            <h2 className="CharacterCard__Name">Chris</h2>
                            <p className="CharacterCard__Description">id: 65 - created a year ago</p>
                        </div>
                    </div>
                    <div data="card info" className="CharacterCard__InfoWrapper">
                        <div className="CharacterCard__TextWrapper"><span>STATUS</span><p>Alive</p>
                        </div>
                        <div className="CharacterCard__TextWrapper"><span>SPECIES</span><p>Humanoid,
                            Microverse inhabitant</p></div>
                        <div className="CharacterCard__TextWrapper"><span>GENDER</span><p>Male</p>
                        </div>
                        <div className="CharacterCard__TextWrapper"><span>ORIGIN</span><p>Rick's
                            Battery Microverse</p></div>
                        <div className="CharacterCard__TextWrapper"><span>LAST LOCATION</span>
                            <p>Rick's Battery Microverse</p></div>
                    </div>
                </article>

            </div>
        </section>
    )
};

export default HeroList;