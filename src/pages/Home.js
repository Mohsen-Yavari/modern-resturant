import React,{ Fragment } from 'react';

import Header from "../components/Header";
import HeroSlider from '../components/hero/HeroSlider';
import PupularMenu from "../components/pupularmenu/PupularMenu";
import ChooseUs from "../components/choos-us/ChooseUs";
import MenuPack from "../components/menu-pak/MenuPack";
import TestiMoni from "../components/testimoni/TestiMoni";
import Dawnload from "../components/download-section/Dawnload";
import Footer from "../components/footer/Footer";
const Home = () => {
    return (
        <Fragment>
           <Header />
           <HeroSlider/>
           <PupularMenu />
           <ChooseUs />
           <MenuPack />
           <TestiMoni />
           <Dawnload />
           <Footer />
        </Fragment>
    );
};

export default Home;