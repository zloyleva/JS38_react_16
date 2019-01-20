import React, {Component} from 'react';
import './style.css';
import HeroListElement from "../HeroListElement";

class HeroList extends Component {

    render() {
        return(
            <section className="Home__ShowcaseWrapper">
                <div className="Home__ShowcaseInner">

                    <HeroListElement />
                    <HeroListElement />
                    <HeroListElement />
                    <HeroListElement />

                </div>
            </section>
        )
    }
}

export default HeroList;