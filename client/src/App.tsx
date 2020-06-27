import React, { useState } from 'react';
import styled from 'styled-components';
import { AppNavBar } from './components/navBar/appNavBar';
import { ToggleNavBar } from './components/navBar/toggleNavBar';
import { Routes } from './routes';

const App: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    return (
        <Wrapper>
            <AppNavBar showNavBar={showNavBar} />
            <ToggleNavBar setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
            <Routes />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
    flex-direction: row;
    position: absolute;
`;

export default App;
