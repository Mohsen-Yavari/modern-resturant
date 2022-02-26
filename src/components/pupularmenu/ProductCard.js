import React from 'react';



const ProductCard = (props) => {

    const {title,price,imgUrl} = props.item
  
    return (
        <div className="single__product">
        <div className="product__img">
            <img src={imgUrl} alt="imgu" className="w-100" />
        </div>

        <div className="product__content">
            <div className="rating text-center">
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
            </div>

            <h6>{title}</h6>
            
      

            <div className="d-flex align-item-center justify-content-between">
                <span className="price d-flex align-item-center justify-content-between">Price : $<span>{price}</span></span>

                  <span className="shopping__icon">
                      <i class="ri-shopping-cart-line"></i>
                </span>
            </div>
        </div>
        
      </div>  
      
    );
};

export default ProductCard;