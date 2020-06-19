import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// subComponents
import { ImageCard } from './components/ImgCard';

// ID : [ 1.PRODUCT TYPE: DESSERT - FAST FOOD | 2. PRODUCT | 3.SIZE ]

const ImageCardArr = [
    { id: 'DST-MEE-SML', title: 'title 1', img: '/images/desserts/item1.jpg' },
    { id: 'DST-PKE-MID', title: 'title 2', img: '/images/desserts/item2.jpg' },
    { id: 'DST-MDN-SML', title: 'title 3', img: '/images/desserts/item3.jpg' },
    { id: 'DST-CKE-LRG', title: 'title 4', img: '/images/desserts/item4.jpg' },
];

export const Desserts: React.FC = () => {
    const history = useHistory();

    const handleOnClick = useCallback((id) => {
        const url = `/desserts/${id}`;
        history.push(url);
    }, []);
    const CardComponent = () =>
        ImageCardArr.map((card) => (
            <ImageCard
                cardImgLink={card.img}
                key={card.id}
                cardTitle={card.title}
                id={card.id}
                handleOnClick={() => handleOnClick(card.id)}
            />
        ));

    return (
        <Wrapper>
            <Content>
                <Container fluid>
                    <Row>{CardComponent()}</Row>
                </Container>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 100%;
    overflow: auto;
    padding-bottom: 100px;
`;
