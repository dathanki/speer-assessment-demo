import React from 'react'
import './styles.scss';

import Burger from './../Burger';
import Button from './../Button';

const Section = ({children, ...otherProps}) => {
    return (
        <div className="sectionContainer">
            <div className="sectionContent">
            <Button className="sectionBtnWhite">
                    Try it Now
                </Button>
            {children}
            </div>
        </div>
    )
}

export default Section;
