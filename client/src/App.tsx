import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { AppNavBar } from './components/appNavBar';

const App: React.FC = () => {
    return (
        <Wrapper>
            <AppNavBar />
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
