import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';
import styled from 'styled-components';
// Components
import { Footer } from './components/footer';
// Views
import { Home } from './views/home';

export const Routes: React.FC = () => {
    useEffect(() => {
        ReactGa.initialize('UA-165053025-1');

        // To report page view
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <Wrapper>
            <BodyWrapper>
                <Switch>
                    <Route path="/dishes" />
                    <Route path="/contact" />
                    <Route path={'/desserts/:dessertId'} />
                    <Route path="/desserts" />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BodyWrapper>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    flex-direction: column;
`;
const BodyWrapper = styled.div`
    /* Equal to height of footer */
    /* But also accounting for potential margin-bottom of last child */
    min-height: 100%;
    margin-bottom: -100px;
`;