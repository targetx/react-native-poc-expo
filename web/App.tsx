import React from "react";
import AppContainer from './components/AppContainer';
import { hot } from 'react-hot-loader/root';

function App() {
    return (
        <div>
            <h1>React from Scratch</h1>
          <AppContainer/>
        </div>
    );
}

export default hot(App);