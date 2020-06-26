import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
// Language
import { useTranslation } from 'react-i18next';

// test
import { Test } from '../components/test';

export const Home: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const mainCTAButton = (id: number) => {
        const clickHandler = () => {
            ReactGA.event({
                category: 'Button',
                action: `mainCTA clicked id: ${id}`,
            });
            id === 1 ? history.push('/desserts/3-DST-MDN-SML') : history.push('/desserts/2-DST-PKE-MID');
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
                        <img className="d-block w-100" src="/images/banner/banner2.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <h3>{t('home.11')}</h3>
                            {mainCTAButton(2)}
                            <p>{t('home.31')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Test />
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
