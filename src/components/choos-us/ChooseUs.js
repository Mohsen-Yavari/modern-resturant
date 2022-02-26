import React from 'react';

import {Container,Row,Col} from 'reactstrap';

// img
import pastaImage from '../../images/pasta.png';

const ChooseUs = () => {
    return (
       <section>
           <Container>
               <Row>
                   <Col lg="6" md="6">
                        <img src={pastaImage} alt="pasta" className="w-100" />
                   </Col>


                   <Col lg="6" md="6">
                        <div className="choose__contant">
                            <h4>How we are ?</h4>
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero numquam cupiditate deleniti, voluptate enim rerum</p>
                        </div>

                        <div className="features mt-4">
                            <div className="features1 d-flex align-item-center gap-5">
                                <div className="singgle__features">
                                    <span className="feature-icon-1"><i class="ri-truck-line"></i></span>
                                    <h6>Free delevery</h6>
                                    <p>Lorem ipsum dolor sit am</p>
                                </div>
                                <div className="singgle__features">
                                    <span className="feature-icon-2"><i class="ri-exchange-dollar-line"></i></span>
                                    <h6>Return & Refounde</h6>
                                    <p>Lorem ipsum dolor sit am</p>
                                </div>
                              
                            </div>
                            <div className="features1 mt-3 d-flex align-item-center gap-5">
                                <div className="singgle__features">
                                    <span className="feature-icon-3"><i class="ri-secure-payment-line"></i></span>
                                    <h6>Fscure payment</h6>
                                    <p>Lorem ipsum dolor sit am</p>
                                </div>
                                <div className="singgle__features">
                                    <span className="feature-icon-4"><i class="ri-24-hours-line"></i></span>
                                    <h6>Return & Refounde</h6>
                                    <p>Lorem ipsum dolor sit am</p>
                                </div>
                              
                            </div>

                        </div>
                   </Col>
               </Row>
           </Container>
       </section>
    );
};

export default ChooseUs;