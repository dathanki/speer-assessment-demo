import React from 'react';
import Form from './../../components/Form';
import './styles.scss';

const Payments = props => {
    return (
        <div>
            {/* Hamburger menu (included in main layout)*/}
            <div className="payments">
                <h1> PAYMENT </h1>

            </div>
            {/* radio buttons */}

            <div className="radioPlan">
                <h1>1. Select your plan</h1>
                <div className="radiobtn">
                <input type="radio" value="BASIC" name="subscription"/> BASIC
                <input type="radio" value="ADVANCED" name="subscription"/> ADVANCED
                <input type="radio" value="PRO" name="subscription"/> PRO
                </div>

            </div>

            {/* billing info form  */}

            <div class="row">
                <div class="column">
                    <h1>2. Billing Information</h1>
                    <Form/>
                </div>
                <div class="column">
                    <h1>3. Credit Card Information</h1>
                </div>
            </div>

            {/* footer (included in main layout)*/}


        </div>
    );
};

export default Payments;