import React from 'react';
import Burger from './../../components/Burger';
import Footer from './../../components/Footer';

const PaymentLayout = props => {
    return (
        <div>
            <Burger/>
                {props.children}
            <Footer />
        </div>
    );

};

export default PaymentLayout;