import React from 'react';
import Pricing from '../../pages/Pricing';
import Burger from '../../components/Burger';
import Footer from '../../components/Footer';
import './styles.scss'

const PricingLayout = props => {
    return (
        <div>
            <Burger />
                <Pricing />
            <Footer />
        </div>
    );
};

export default PricingLayout;