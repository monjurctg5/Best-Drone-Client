import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav'
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import DroneView from '../DroneView/DroneView';
import ServicePart from '../ServicePart/ServicePart';
import './home.css'
import OurLocation from './OurLocation';
const Home = () => {
    return (
        <div>

            <Nav></Nav>
            <Banner></Banner>
            <div className="experience container">
             
                <p className="w-75 mx-auto">h its unique cuisine, rich culture, some of the most beautiful beaches in the world, breathtaking waterfalls, and adventure for everyone’s liking, all you have to do is choose the perfect type of tourism for you and be amazed by the wonders of world</p>
            </div>
            <ServicePart />
            <DroneView />
            <CustomerReview></CustomerReview>
            <OurLocation/>
            <Footer></Footer>

        </div>
    );
};

export default Home;