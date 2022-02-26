import React from 'react';

import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';


const footerQuickLinks = [
    {
        display: 'terms & conditions',
        url:"#"
    },
    {
        display: 'provicy policy',
        url:"#"
    },
    {
        display: 'return & refund',
        url:"#"
    },
    {
        display: 'metod',
        url:"#"
    }
]

const FooterLinks = [
    {
        display: 'About Us',
        url:"#"
    },
    {
        display: 'Menu',
        url:"#"
    },
    {
        display: 'Recipes',
        url:"#"
    },
    {
        display: 'Contact',
        url:"#"
    },
]

const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="6">
                            <div className="logo">
                                <h2>
                                    <span><i class="ri-restaurant-2-line"></i></span>cheef Food
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet conse
                                ctetur adipisicing elit. Accusantium ex minima
                                dolor neque iste dignissimos.
                                </p>
                            </div>
                        </Col>

                        <Col lg="2" md="4" sm="6">
                            <h5 className="footer__link_title">
                                Info Links
                            </h5>
                            <ListGroup>
                                {
                                    FooterLinks.map((item,index)=>(
                                        <ListGroupItem key={index} className="link__item">
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                    ))
                                }
                               
                            </ListGroup>
                        </Col>


                        <Col lg="3" md="4" sm="6">
                            <h5 className="footer__link_title">
                                Quik Links
                            </h5>
                            <ListGroup>
                                {
                                    footerQuickLinks.map((item,index)=>(
                                        <ListGroupItem key={index} className="link__item">
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                    ))
                                }
                               
                            </ListGroup>
                        </Col>

                        <Col lg="3" md="4" sm="6">
                        <h5 className="footer__link_title">
                                Contant
                            </h5>

                            <ListGroup>
                                <ListGroupItem className="link__item d-flex align-item-center gap-3">
                                <i class="ri-map-pin-line"></i>Tehran,Iran{" "}
                                </ListGroupItem>
                                <ListGroupItem className="link__item d-flex align-item-center gap-3">
                                <i class="ri-mail-star-line"></i>mohsenyavari713@gmail.com{" "}
                                </ListGroupItem>
                                <ListGroupItem className="link__item d-flex align-item-center gap-3">
                                <i class="ri-phone-line"></i>+989198282713{" "}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        
                    </Row>

                </Container>
            </div>
            <div className="footer__buttom">
                <Container>
                    <Row>
                        <Col lg="12">copyright 2022, developed by mohsen.</Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;