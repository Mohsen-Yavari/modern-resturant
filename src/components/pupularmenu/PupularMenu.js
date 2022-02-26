import React from 'react';

import {Container,Row,Col} from 'reactstrap';
import {popularMenuFood} from "./Product";
import ProductCard from './ProductCard';

const PupularMenu = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2 className="pupular__menu-title">Pupular food Menu</h2>
                    </Col>
                    {
                        popularMenuFood.map((item)=>(
                            <Col lg="3" md='4' sm='6' xs='6' className="bb-4" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }
             
                </Row>
            </Container>
            
        </section>
    );
};

export default PupularMenu;