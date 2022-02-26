import React from 'react';

import {Container} from "reactstrap";
import Slider from "react-slick";

//img  
import sliderImg01 from "../../images/slider1.png";
import sliderImg02 from "../../images/slider2.png";
import sliderImg03 from "../../images/slider03.png";
    

const sliderData = [
    {
      id: "01",
      title: "We have simple and delicious food for you",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
      imgUrl: sliderImg01,
    },
    {
      id: "02",
      title: "We believe good food over great smile",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
      imgUrl: sliderImg02,
    },
    {
      id: "03",
      title: "Meet, Eat and Enjoy the true test",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias omnis veniam dolor fugiat similique voluptas consectetur corrupti odit quisquam incidunt quia architecto voluptate molestiae?",
      imgUrl: sliderImg03,
    },
  ];
const HeroSlider = () => {


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
                <Slider {...settings}>
               
                    {sliderData.map((item) => (
                          <div key={item.id}>
                            <div className="slider__wapper d-flex align-item-center justify-content-between pt-5">
                               < div className="slider__content w-50 ps-2">
                                   <h2 className="mb-3">{item.title}</h2>
                                   <p>{item.desc}</p>
                                   <button className="btn">Explore Food</button>
                               </div>
                               <div className="slider__imag w-50">
                                   <img src={item.imgUrl} alt="img" className="w-100" />
                               </div>
                            </div>
                          </div>
                           
                          
                        ))
                    }
                </Slider>
            </Container>
            
        </section>
    );
};

export default HeroSlider;