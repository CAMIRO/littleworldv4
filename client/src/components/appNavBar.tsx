import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppNavBar: React.FC = () => (
    <Wrapper>
        <MenuContainer>
            <Nav>
                <ul>
                    <LI>
                        <StyledLink to="/">
                            <Logo src="/logo.png" alt="Logo" />
                        </StyledLink>
                    </LI>
                    <LI>
                        <StyledLink to="/desserts">desserts</StyledLink>
                    </LI>
                </ul>
            </Nav>
        </MenuContainer>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 96px;
    min-width: 98px;
    z-index: 102;
    box-shadow: inset -7px 0px 22px -7px rgba(0, 0, 0, 0.18);
    border-right: 1px solid #e4e4e4;
`;
const MenuContainer = styled.div`
    min-height: 70px;
    position: fixed;
    width: inherit;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img`
    background: transparent;
    cursor: pointer;
    height: 68px;
    padding: 5px;
`;
const Nav = styled.nav`
    li:hover {
        color: #7c8593;
        border-left: 4px solid #68c3c8;
        box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
        a {
            color: #7c8593;
            text-decoration: none;
        }
    }
`;
const LI = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13px;
    cursor: pointer;
    a {
        color: #7c8593;
        text-decoration: none;
    }
`;
const StyledLink = styled(Link)`
    padding: 20px 0;
    text-decoration: none;
    text-align: center;
    width: 100%;
    align-self: center;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
