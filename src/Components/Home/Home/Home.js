import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav'
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import DroneView from '../DroneView/DroneView';
import ServicePart from '../ServicePart/ServicePart';
import './home.css'
const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <ServicePart />
            <DroneView />
            <CustomerReview></CustomerReview>
            <Footer></Footer>

        </div>
    );
};

export default Home;