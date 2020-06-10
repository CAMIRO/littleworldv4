import React from 'react';
import {Button } from 'react-bootstrap'
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Little World</h1>
            <Button onClick={() => console.log('gegege')}>Hello</Button>
        </div>
    );
}

export default App;
