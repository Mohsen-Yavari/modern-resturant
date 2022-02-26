import React,{useState,useEffect} from 'react';

import {Container,Row,Col} from 'reactstrap';

import ProductCard from "../pupularmenu/ProductCard";
import { fastFoodProducts,riceMenuProducts,pizzaProducts,dessertProducts,coffeeProducts } from "../pupularmenu/Product";

const MenuPack = () => {


    const [filter,setFilter] = useState("RICE-MENU");
    const [poroducts,setProducts] = useState(riceMenuProducts);

    useEffect(()=>{

        if(filter === "RICE-MENU"){
            setProducts(riceMenuProducts)
        }
        if(filter === "FAST-FOOD"){
            setProducts(fastFoodProducts)
        }
        if(filter === "PIZZA"){
            setProducts(pizzaProducts)
        }
        if(filter === "DESSERTS"){
            setProducts(dessertProducts)
        }
        if(filter === "COFFE"){
            setProducts(coffeeProducts)
        }
    },[filter]);

    return (

        

     <section>
         <Container>
             <Row>
                 <Col lg="12" className="text-center mb-4">
                     <h3 className="menu__title">Our Menu Pack</h3>
                 </Col>

                 <Col lg="12" className="text-center mb-5">
                     <button className={`filter-btn ${filter === "FAST-FOOD" ? "active__btn" : ""}`} onClick={()=>setFilter("FAST-FOOD")}>Fast Food</button>
                     <button className={`filter-btn ${filter === "RICE-MENU" ? "active__btn" : ""}`} onClick={()=>setFilter("RICE-MENU")}>Rice Menu</button>
                     <button className={`filter-btn ${filter === "PIZZA" ? "active__btn" : ""}`} onClick={()=>setFilter("PIZZA")}>Pizza</button>
                     <button className={`filter-btn ${filter === "DESSERTS" ? "active__btn" : ""}`} onClick={()=>setFilter("DESSERTS")}>Desserts</button>
                     <button className={`filter-btn ${filter === "COFFE" ? "active__btn" : ""}`} onClick={()=>setFilter("COFFE")}>Coffe</button>
                 </Col>

                 {
                     poroducts.map(item=>(
                        <Col lg="3" md='4' sm='6' xs='6' key={item.id } className="mb-5"> <ProductCard item={item} /></Col>
                     ))
                 }
             </Row>
         </Container>
     </section>
    );
};

export default MenuPack;