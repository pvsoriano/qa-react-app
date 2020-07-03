import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Questions from './Questions/Questions';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Questions />
                <p>TEST</p>
            </div>
        );
    }
}

export default App;
