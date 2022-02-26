import React,{ useRef } from 'react';

import { Container } from 'reactstrap';

const navList = [
    {
        display:"Home",
        url:"#"
    },
    {
        display:"About",
        url:"#"
    },
    {
        display:"Menu",
        url:"#"
    },
    {
        display:"Recipes",
        url:"#"
    },
    {
        display:"Contact",
        url:"#"
    }

]

const Header = () => {

    const menuRef = useRef()
    const menuToggle = () => menuRef.current.classList .toggle("activ__menu");

    return (
       <header className="header">
           <Container>
               <div className="nanigation">
                   <div className="logo">
                       <h2>
                           <span><i class="ri-restaurant-2-line"></i></span>cheef Food
                       </h2>
                   </div>
                   <div className="nav__menu "  ref={menuRef}>

                       <div className="naV__list__wrapper d-flex align-item-center gap-5">
                            <ul className="nav__list">
                                {
                                    navList.map((item,index)=>(
                                        <li className="nav__item" key={index}>
                                            <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                    </li>

                                    ))
                                }
                                

                            </ul>

                            <div className='menu__right'>
                                <div className="custome__search">
                                    <input type="text" placeholder="Search item ..." />
                                    <span><i class="ri-search-line"></i></span>
                                </div>
                            </div> 
                       </div>
                       
                   </div>
                            
                        <div>
                            <span className="cart-icon">
                            <i class="ri-shopping-basket-line"></i>

                            <span className="bage">2</span>
                            </span>
                        </div>
                   

                       <div className="bobile__menu">
                           <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                       </div>
                   </div>
              
           </Container>
       </header>
    );
};

export default Header;