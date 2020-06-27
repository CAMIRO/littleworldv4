import React, { Dispatch, SetStateAction } from 'react';
// styles
import styled from 'styled-components';
import { ArrowRight, ArrowLeft } from 'react-feather';

interface ToggleNavBarProps {
    showNavBar: boolean;
    setShowNavBar: Dispatch<SetStateAction<boolean>>;
}

export const ToggleNavBar: React.FC<ToggleNavBarProps> = ({ setShowNavBar, showNavBar }) => {
    return <Wrapper onClick={() => setShowNavBar(!showNavBar)}>{showNavBar ? <ArrowLeft /> : <ArrowRight />}</Wrapper>;
};

const Wrapper = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    display: flex;
    height: 20px;
    width: 20px;
    background-color: #68c3c8;
    position: fixed;
    z-index: 102;
    top: 10px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 0 80px 80px 0;
`;
