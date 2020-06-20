import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Youtube } from 'react-feather';
// Language
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const { t } = useTranslation();

    return (
        <MyContainer fluid>
            <MyRow className="justify-content-md-center align-items-center">
                <MyCol sm={8}>
                    {t('footer.concerns')}
                    <Atag href="mailto: littleworld0326@gmail.com">littleworld0326@gmail.com</Atag>
                </MyCol>

                <MyCol sm={4}>
                    <Row className="justify-content-around align-items-center">
                        <MyFacebook onClick={() => window.open('https://www.facebook.com/littleworld0326', '_blank')} />
                        <MyYoutube
                            onClick={() =>
                                window.open('https://www.youtube.com/channel/UCkmolif0AZiZjE3TYC8PnNA', '_blank')
                            }
                        />
                        <MyInstagram
                            onClick={() => window.open('https://www.instagram.com/littleworld0326/', '_blank')}
                        />
                    </Row>
                </MyCol>
            </MyRow>
            <MyRow className="justify-content-md-center">
                <Credits>Little World - {currentYear}</Credits>
            </MyRow>
        </MyContainer>
    );
};

const MyContainer = styled(Container)`
    background-color: #68c3c8;
`;

const MyRow = styled(Row)`
    font-size: 0.8rem;
    &:first-child {
        min-height: 68px;
        border-bottom: 0.1px solid #009494;
    }
`;
const MyCol = styled(Col)`
    text-align: left;
    margin: 5px 0;
`;
const Credits = styled(Col)`
    text-align: center;
    font-size: 0.7rem;
    padding: 10px 0;
`;
const Atag = styled.a`
    color: #c82333;
    &:hover {
        text-decoration: none;
        color: #fff;
    }
`;

//// Social Media Buttons

const sharedSocialMediaIconStyle = css`
    color: #fff;
    size: 22;
    &:hover {
        color: #ffad15;
    }
`;
const MyFacebook = styled(Facebook)`
    ${sharedSocialMediaIconStyle}
`;
const MyInstagram = styled(Instagram)`
    ${sharedSocialMediaIconStyle}
`;

const MyYoutube = styled(Youtube)`
    ${sharedSocialMediaIconStyle}
`;
//// Social Media Buttons
