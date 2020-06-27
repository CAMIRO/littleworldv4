import React, { useState } from 'react';
import styled from 'styled-components';
import { AppNavBar } from './components/appNavBar';
import { Routes } from './routes';

const App: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(false)
    console.log(showNavBar)
    return (
        <Wrapper>
            <AppNavBar showNavBar={showNavBar} />
                <MyButtonToggleNavBar onClick={()=> setShowNavBar(!showNavBar)}/>
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

const MyButtonToggleNavBar = styled.div`
 @media (min-width: 768px){
        display: none
    }
    
    display: block;
    height: 20px;
    width: 20px;
    background-color: red;
    position: fixed;
    z-index: 102;
    top: 10px;
    cursor: pointer;
`



export default App;
