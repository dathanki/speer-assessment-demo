import React, { useState } from 'react';
import './styles.scss';

const Burger = () => {
    const [status, setStatus] = useState('close');

    return (
        <nav>
            <div
                role="button"
                onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
                className="burgerMenuContainer">
                <i className={status}></i>
                <i className={status}></i>
                <i className={status}></i>
                </div>
                <ul className="menuLinks">
                    <li>
                        What is it
                    </li>
                    <li>
                        Perks
                    </li>
                    <li>
                        Pricing
                    </li>
                </ul>
        </nav>

    );
};


export default Burger;