import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Container, Col, Carousel, Table, Button } from 'react-bootstrap';
import { ShoppingBag } from 'react-feather';
// Language
import { useTranslation } from 'react-i18next';

export const DetailDessert: React.FC = () => {
    const { dessertId } = useParams();
    const ItemNumber = dessertId.charAt(0);
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Content>
                <Container fluid>
                    <Row>
                        <MyCol lg={8}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`/images/desserts/item${ItemNumber}/item${ItemNumber}1.jpg`}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`/images/desserts/item${ItemNumber}/item${ItemNumber}2.jpg`}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`/images/desserts/item${ItemNumber}/item${ItemNumber}3.jpg`}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <MYDivDescription>
                                <h4>{t('desserts.ingredients')}</h4>
                                <p>
                                    flour, lukewarm water, yeast, raisins, cranberries, citrus peel (chopped), nuts,
                                    rum, sugar, salt, ground cinnamon, eggs, butter, marzipan, butter (melted and
                                    cooled), powder sugar (for dusting)
                                </p>
                            </MYDivDescription>
                        </MyCol>
                        <MyCol>
                            <h2>{t(`desserts.item${ItemNumber}.title`)}</h2>
                            <p>
                                {t('desserts.code')}: {dessertId}
                            </p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>{t('desserts.quantity')}</th>
                                        <th>{t('desserts.discount')}</th>
                                        <th>{t('desserts.price')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>30 NT</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10%</td>
                                        <td>50 NT</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button
                                block
                                size="lg"
                                variant="danger"
                                onClick={(e: { preventDefault: () => void }) => {
                                    e.preventDefault();
                                    window.location.href = `mailto: littleworld0326@gmail.com?subject=ORDER:%20${dessertId}`;
                                }}
                            >
                                {t('desserts.order_now')} <ShoppingBag color="#FFF" size={19} />
                            </Button>
                            <MYDivDescription>
                                <h4>{t('desserts.product_description')}</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </p>
                            </MYDivDescription>
                        </MyCol>
                    </Row>
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
const MyCol = styled(Col)`
    margin-top: 30px;
`;
const MYDivDescription = styled.div`
    margin-top: 30px;
`;
