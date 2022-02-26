import React from 'react';

import { Container,Row,Col } from 'reactstrap';

//img
import appImg from '../../images/app.png';

const Dawnload = () => {
    return (
        <section>
            <Container className="app__container">
                <Row>
                    <Col lg='6' md='6'>
                        <div className="app__img">
                            <img src={appImg} alt="appimg" />
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="app__content">
                            <h5>Dawnload App</h5>
                            <h2 className="mb-4">Never Feel Hungry! Dawnload Mobile App</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempore 
                            consequuntur rerum, ea suscipit repudiandae possimus id. Eos, cumque dolorem?</p>
                            <div className="app__btns align-items-center d-flex  gap-5 mt-4">
                                <button className="btn__apple d-flex align-item-center gap-3">
                                <i class="ri-apple-line"></i><a href="#">Apple Store</a>
                                </button>

                                <button className="btn__google d-flex align-item-center gap-3">
                                <i class="ri-google-play-fill"></i><a href="#">Google Play</a>
                                </button>
                            </div>

                        </div>
                    </Col>


                </Row>
            </Container>
        </section>
    );
};

export default Dawnload;