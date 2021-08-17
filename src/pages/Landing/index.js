import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './../../components/Button';
import CarouselContainer from './../../components/CarouselContainer';
import SmallSpeaker1 from './../../assets/Imgs/SmallSpeaker1-03.png';
import SmallSpeaker2 from './../../assets/Imgs/SmallSpeaker2-03.png';
import LargeSpeaker1 from './../../assets/Imgs/medium17.png';
import LargeSpeaker2 from './../../assets/Imgs/medium27.png';
import Section from './../../components/Section';

import './styles.scss';

const Landing = props => {

    const history = useHistory();

    return (
        <div className="Main">
            {/* <div className="carouselWrapper" > */}
            {/* <CarouselContainer/> */}
            <div className="carouselInner" >

                <h1>Interactive concert experience</h1>
                <p>
                    Experience your favourite artists like never before and
                    from the comfort of your own home.
                </p>
                <Button className="btn-mix-noborder" onClick={() => {
                    history.push('/Pricing')
                }}>
                    Try it now</Button>
            </div>
            <Section >
                <div className="sectionTwo">
                <img src={LargeSpeaker1} className="largeSpeakerOne" />
                    <br />
                <img src={LargeSpeaker2} className="largeSpeakerTwo" />
                    <h1>
                        Superior Sound
                    </h1>
                    <p>
                        Experience live versions of your favourite songs.
                    </p>
                    <Button className="demoBtnWhite" >See Demo</Button>

                </div>

            </Section>
            <Section >
                <div className="sectionThree">
                    <h1>
                        Front Row Seats
                    </h1>
                    <p>
                        Experience concerts up close and personal.
                    </p>
                    <Button className="demoBtnWhite">See Demo</Button>

                </div>

            </Section>
            <Section >
                <div className="sectionFour">
                    <h1>PERKS</h1>
                    <div class="perksContainer">
                        <div class="column">
                            <hr className="hrRed" />
                            <h2 className="h2Red">
                                Subscription Payment Model
                            </h2>
                            <p>
                                No commitment, cancel anytime.
                                Never worry about forgetting a payment again!
                            </p>
                        </div>
                        <div class="column">
                            <hr className="hrYellow" />
                            <h2 className="h2Yellow">
                                No Fee Cancelation Policy
                            </h2>
                            <p>
                                No commitment, cancel anytime.
                                Never worry about forgetting a payment again!
                            </p>
                        </div>
                        <div class="column">
                            <hr className="hrBlue" />
                            <h2 className="h2Blue">
                                Subscription Payment Model
                            </h2>
                            <p>
                                No commitment, cancel anytime.
                                Never worry about forgetting a payment again!
                            </p>
                        </div>
                    </div>

                </div>

            </Section>
            <Section >
                <div className="sectionFive">

                    <img src={SmallSpeaker1} className="smallSpeakerOne" />
                    <br />
                    <img src={SmallSpeaker2} className="smallSpeakerTwo" />

                    <h1>
                        Reviews
                    </h1>
                    <div class="reviewContainer">
                        <div class="column">
                            <h2>
                                Artist
                            </h2>
                            <p>
                                "Love it. it's the Best. I can't live without it!"
                            </p>
                        </div>
                        <div class="column">
                            <h2>
                                Producer
                            </h2>
                            <p>
                                "Love it. it's the Best. I can't live without it!"
                            </p>
                        </div>
                        <div class="column">
                            <h2>
                                Music Fan
                            </h2>
                            <p>
                                "Love it. it's the Best. I can't live without it!"
                            </p>
                        </div>
                    </div>


                </div>

            </Section>
            <Section >
                <div className="sectionSix">
                    <h1>
                        Get EXP|CON Now
                    </h1>
                    <p>
                        Purchase and download the app.
                    </p>
                    <Button className="btn-mix-noborder" onClick={() => {
                        history.push('/Pricing')
                    }}>
                        Try it now</Button>
                </div>

            </Section>
        </div>

        // </div>






        // {/* 
        //         <a className="text">Eiffel Dummy Text</a>
        //         <div className="hover-container">
        //             <span className="hover-text">Eiffel Dummy Text</span>
        //             <span className="img-container">
        //                 <span className="img-inner" >
        //                     <img src="./../../assets/Imgs/slideOne.jpg" />
        //                 </span>

        //             </span>

        //         </div> */}

        //             {/* <Section/> */}




        // <div className="mainWrapper">

        //     <div className="mainContainer">
        //         <div className="one">

        //             Section 1
        //         </div>
        //     </div>

        //     <div className="mainContainer">
        //         <div className="two">
        //             <h1> Superior Sound </h1>
        //             <p>
        //                 Experience Live versions of your favourite songs.
        //             </p>
        //             <Button>See Demo</Button>
        //         </div>
        //     </div>

        //     <div className="mainContainer">
        //         <div className="three">
        //             Section 3
        //         </div>
        //     </div>

        //     <div className="mainContainer">
        //         <div className="four">
        //             <div className="perks">
        //                 <h1>PERKS</h1>
        //                 <div class="container">
        //                     <div class="column">
        //                     <hr className="hr-red" />
        //                         <h2 className="h2-red">
        //                             Subscription Payment Model
        //                         </h2>
        //                         <p>
        //                             No commitment, cancel anytime.
        //                             Never worry about forgetting a payment again!
        //                         </p>
        //                     </div>
        //                     <div class="column">
        //                         <hr className="hr-yellow" />
        //                         <h2 className="h2-yellow">
        //                             No Fee Cancelation Policy
        //                         </h2>
        //                         <p>
        //                             No commitment, cancel anytime.
        //                             Never worry about forgetting a payment again!
        //                         </p>
        //                     </div>
        //                     <div class="column">
        //                     <hr className="hr-blue" />
        //                         <h2 className="h2-blue">
        //                             Subscription Payment Model
        //                         </h2>
        //                         <p>
        //                             No commitment, cancel anytime.
        //                             Never worry about forgetting a payment again!
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="mainContainer">
        //         <div className="five">
        //             Section 5
        //         </div>
        //     </div>

        //     <div className="mainContainer">
        //         <div className="six">
        //             Section 6
        //         </div>
        //     </div>

        // </div>

    );
};

export default Landing;