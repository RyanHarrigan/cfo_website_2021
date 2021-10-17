import React from 'react';
import './utilities/styling/styled-theme-provider/boostrap.bundler.scss';
import {StyledComponentsProvider} from './utilities';
import {HomePage} from './pages';
import {HeaderNavComponent} from "./components/header-nav";

function App() {
    return (
        <StyledComponentsProvider>
            <HeaderNavComponent />
            <HomePage />
        </StyledComponentsProvider>
    );
}

export default App;
