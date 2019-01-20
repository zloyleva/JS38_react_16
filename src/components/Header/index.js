import React from 'react';
import './style.css'


function Header() {

    return(
        <section className="Header ">
            <h1 className="Home__Title">The Rick and Morty API</h1>
            <div className="Home__SubTitleWrapper">
                <h2 className="Home__SubTitle">Hey, did you ever want to hold a Terry fold?</h2>
                <h2 className="Home__HiddenSubTitle">&nbsp;&nbsp;&nbsp;I got one right here, grab my terry flap&nbsp;&nbsp;&nbsp;</h2>
            </div>
        </section>
    )
}

export default Header;