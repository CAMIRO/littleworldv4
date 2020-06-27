import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
    return (
        <Wrapper>
            <MyCoffee />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    padding-top: 30px;
    padding-bottom: 100px;
`;

const MyCoffee = styled.div`
    height: 55px;
    width: 70px;
    border: 5px solid white;
    box-shadow: 0 0 0 3px black;
    margin: auto;
    position: relative;
    border-radius: 0 0 80px 80px;
    background-image: linear-gradient(0deg, #68c3c8 0, #68c3c8 110px, transparent 110px, transparent 230px);
    background-size: 260px 260px;
    background-position: 0 0;
    animation: fill 2s infinite;
    &:before {
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        border: 3px solid black;
        border-radius: 0 30px 30px 0;
        right: -20px;
    }
    @keyframes fill {
        100% {
            background-position: 0 -145px;
        }
    }
`;
