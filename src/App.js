import React, {Component, Fragment} from 'react';

import './App.css';
import Header from "./components/Header";
import HeroList from "./components/HerosList";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header
              title="The Rick and Morty API"
              sub_title="Hey, did you ever want to hold a Terry fold?"
              sub_title_hidden="&nbsp;&nbsp;&nbsp;I got one right here, grab my terry flap&nbsp;&nbsp;&nbsp;"
            />
            <HeroList />
        </Fragment>
    );
  }
}

export default App;
