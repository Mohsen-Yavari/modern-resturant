import React from 'react';

import { Container,Row,Col } from 'reactstrap';

// img
import testimoni from "../../images/review1.png";

import Slider from 'react-slick';

const TestiMoni = () => {

    const settings = {
        infinite: true,
        speed:500,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed: 3000
      }

    return (
        <section>
            <Container>
                <Row >
                    <Col lg="8" sm='12' md='12'  className="m-auto">
                        <div className="slider__warper d-flex align-item-center gap-5 ">
                            <div className="slider__content w-50">
                            <h2 className="mb-3">Lorem ipsum dolor sit</h2>
                            <Slider {...settings}>
                            <div>
                            <div className="single__testimoni">
                                <p className="reviw__content">
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eos, sint aliquid, 
                                ullam veritatis officiis debitis at 
                                praesentium repellendus voluptates 
                                possimus accusamus expedita. Dolor 
                                earum temporibus unde tempore autem, illum aliquam.
                                earum temporibus unde tempore autem, illum aliquam.
                                earum temporibus unde tempore autem, illum aliquam.
                                </p>
                                <h6>Mohsen Yavaei</h6>
                                <p>Web Developer</p>
                            </div>
                            </div>
                            
                            <div>
                            <div className="single__testimoni">
                                <p className="reviw__content">
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eos, sint aliquid, 
                                ullam veritatis officiis debitis at 
                                praesentium repellendus voluptates 
                                possimus accusamus expedita. Dolor 
                                earum temporibus unde tempore autem, illum aliquam.
                                </p>
                                <h6>Jon Villiam</h6>
                                <p>Web Developer</p>
                            </div>
                            </div>
                           
                        
                        </Slider>
                        </div>
                        <div className="slider__img w-50">
                            <img src={testimoni} alt="test" className="w-100" />

                            </div>
                        </div>
                       
                    </Col>

                   
                </Row>
            </Container>
        </section>
    );
};

export default TestiMoni;