import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import ReactGA from 'react-ga';
import styled from 'styled-components';

export const Home: React.FC = () => {
    const mainCTAButton = (id: number) => {
        const clickHandler = () => {
            ReactGA.event({
                category: 'Button',
                action: `mainCTA clicked id: ${id}`,
            });
        };
        return (
            <Button variant="danger" onClick={clickHandler}>
                CTA
            </Button>
        );
    };

    return (
        <Wrapper>
            <Content>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/background.jpg" alt="First slide" />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            {mainCTAButton(1)}
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/background.jpg" alt="First slide" />

                        <Carousel.Caption>
                            <h3>second slide label</h3>
                            {mainCTAButton(2)}
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: block;
    width: auto;
    height: inherit;
`;
const Content = styled.div`
    width: 100%;
    overflow: auto;
`;
