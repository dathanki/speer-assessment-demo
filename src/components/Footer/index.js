import React from 'react';
import { MdEmail } from 'react-icons/md';

import './styles.scss';
// Modular footer component ready for reuse wherever needed
// also includes separate stylesheet for easier editing/scrapping 
const Footer = props => {
    return (
        <footer className="footer" >
            <div className="supportMail">
                <MdEmail /> support@experienceconcerts.co
                    <div className="EXP" >
                        EXP|CON
                        <div className="copyright">
                             2019 © All Rights Reserved | Speer Technologies Incorporated
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;