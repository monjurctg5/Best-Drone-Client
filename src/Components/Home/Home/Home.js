import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';

import Footer from '../../Shared/Footer/Footer';

import Nav from '../../Shared/Nav/Nav'

import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import ServicePart from '../ServicePart/ServicePart';
const Home = () => {
    return (
        <div>
            <Nav></Nav>
           <Banner></Banner>
        <ServicePart/>
        <CustomerReview></CustomerReview>
           <Footer></Footer>
         
        </div>
    );
};

export default Home;