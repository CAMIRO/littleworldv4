import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import ReactGA from 'react-ga';
import styled from 'styled-components';
// Language
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
    const { t } = useTranslation();

    const mainCTAButton = (id: number) => {
        const clickHandler = () => {
            ReactGA.event({
                category: 'Button',
                action: `mainCTA clicked id: ${id}`,
            });
        };
        return (
            <Button variant="danger" onClick={clickHandler}>
                {t('home.2')}
            </Button>
        );
    };

    return (
        <Wrapper>
            <Content>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/banner1.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h3>{t('home.1')}</h3>
                            {mainCTAButton(1)}
                            <p>{t('home.3')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/banner2.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h3>{t('home.11')}</h3>
                            {mainCTAButton(2)}
                            <p>{t('home.31')}</p>
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
