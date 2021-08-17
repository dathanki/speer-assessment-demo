import React from 'react';
import Burger from './../../components/Burger';
import Footer from './../../components/Footer';
import Landing from '../../pages/Landing';

const MainLayout = props => {
    return (
        <div>
            <Burger/>
            <Landing />
            <Footer />
        </div>
    );

};

export default MainLayout;