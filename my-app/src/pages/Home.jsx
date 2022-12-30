

import React, {Fragment} from 'react'
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import PopularMenu from "../components/popular-menu/PopularMenu";
import ChooseUs from '../components/choose-us/ChooseUs';
import MenuPack from '../components/menu-pack/MenuPack';
import Form from '../components/form/form';
import Footer from '../components/footer/footer';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HeroSlider/>
            <PopularMenu/>
            <ChooseUs/>
            <MenuPack/>
            <Form/>
<Footer/>
        </Fragment>
    )
}
export default Home;