import React from 'react';
import styled from 'styled-components';
import { Card, Col } from 'react-bootstrap';
// Language
import { useTranslation } from 'react-i18next';
interface ImageCardProps {
    cardImgLink: string;
    id: string;
    handleOnClick: () => void;
}
export const ImageCard: React.FC<ImageCardProps> = ({ id, cardImgLink, handleOnClick }) => {
    const { t } = useTranslation();
    const ItemNumber = id.charAt(0); 
    return (
        <MyCol sm={3}>
            <MyCard onClick={handleOnClick} className="text-white" style={{ width: '100%' }}>
                <Card.Img variant="top" src={cardImgLink} />
                <Card.ImgOverlay className="column justify-content-end">
                    <Card.Title>{t(`desserts.item${ItemNumber}.title`)}</Card.Title>
                </Card.ImgOverlay>
            </MyCard>
        </MyCol>
    );
};
const MyCol = styled(Col)`
    margin-top: 30px;
`;
const MyCard = styled(Card)`
    border: none;
    :hover {
        cursor: pointer;
        box-shadow: 0 5px 14px rgba(0, 0, 0, 0.4);
    }
`;
