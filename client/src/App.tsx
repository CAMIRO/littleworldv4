import React from 'react';
import styled from 'styled-components';
import { AppNavBar } from './components/appNavBar';
import { Routes } from './routes';

const App: React.FC = () => {
    return (
        <Wrapper>
            <AppNavBar />
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
