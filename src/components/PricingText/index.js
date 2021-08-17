import React from 'react';
import Button from './../Button';
import Burger from '../../components/Burger';
import { useHistory } from 'react-router';
import './styles.scss';


const PricingText = () => {
    const history = useHistory();
    const changeToRed = e => {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }
    const changeToYellow = e => {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }
    const changeToBlue = e => {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }

    return (

        // Pricing Section

        <section className="PricingPage">
            <div className="pricing">
                <h1> PRICING </h1>
                <p> Test out our app today!
                    Choose from three subscription
                    Based payment models.
                </p>
                <div class="pricingContainer">
                    <div class="column">
                        <h2 className="h2Red">
                            BASIC <hr className="hrRed" /> MONTHLY
                        </h2>
                        <div className="dollarAmountRed">$9</div>
                        <ul>
                            <li>
                                Very good
                            </li>
                            <li>
                                Amazing
                            </li>
                            <li>
                                Perfect job
                            </li>
                            <li>
                                Love this
                            </li>
                            <li>
                                It's so good
                            </li>
                            <li>
                                Features
                            </li>
                        </ul>
                        <Button className="btnRed" onMouseOver={changeToRed}
                            onClick={() => history.push('/Payments')}
                        >Select</Button>
                    </div>

                    <div class="column">
                        <div>
                            <h2 className="h2Yellow">
                                ADVANCED <hr className="hrYellow" /> YEARLY
                            </h2>
                            <div className="dollarAmountYellow">$99</div>

                            <ul>
                                <li>
                                    Very very good
                                </li>
                                <li>
                                    Even Amazing
                                </li>
                                <li>
                                    Perfect job
                                </li>
                                <li>
                                    Love this more
                                </li>
                                <li>
                                    It's so so good
                                </li>
                                <li>
                                    More Features
                                </li>
                            </ul>
                            <Button className="btnYellow" onMouseOver={changeToYellow}
                                onClick={() => history.push('/Payments')}
                            >Select</Button>
                        </div>
                    </div>
                    <div class="column">
                        <h2 className="h2Blue">
                            PRO <hr className="hrBlue" /> YEARLY
                        </h2>
                        <div className="dollarAmountBlue">$120</div>
                        <ul>
                            <li>
                                Very very good
                            </li>
                            <li>
                                Even more
                            </li>
                            <li>
                                Perfect job
                            </li>
                            <li>
                                Love this more
                            </li>
                            <li>
                                It's so so good
                            </li>
                            <li>
                                More Features
                            </li>
                        </ul>
                        <Button className="btnBlue" onMouseOver={changeToBlue}
                            onClick={() => history.push('/Payments')}
                        >Select</Button>
                    </div>
                </div>

            </div>

            {/* <Burger /> */}


            {/* Perks Section */}
            <div className="perks">
                <h1>PERKS</h1>
                <div class="perksContainer">
                    <div class="column">
                        <hr />
                        <h2>
                            Subscription Payment Model
                        </h2>
                        <p>
                            No commitment, cancel anytime.
                            Never worry about forgetting a payment again!
                        </p>
                    </div>
                    <div class="column">
                        <hr />
                        <h2>
                            No Fee Cancelation Policy
                        </h2>
                        <p>
                            No commitment, cancel anytime.
                            Never worry about forgetting a payment again!
                        </p>
                    </div>
                    <div class="column">
                        <hr />
                        <h2>
                            Subscription Payment Model
                        </h2>
                        <p>
                            No commitment, cancel anytime.
                            Never worry about forgetting a payment again!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingText;