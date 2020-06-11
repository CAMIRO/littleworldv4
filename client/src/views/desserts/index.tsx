import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// subComponents
import { ImageCard } from './components/ImgCard';

const ImageCardArr = [
    { id: 1, title: 'title 1', img: 'https://picsum.photos/150/150?text=First' },
    { id: 2, title: 'title 2', img: 'https://picsum.photos/150/150?text=First' },
    { id: 3, title: 'title 3', img: 'https://picsum.photos/150/150?text=First' },
    { id: 4, title: 'title 4', img: 'https://picsum.photos/150/150?text=First' },
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
