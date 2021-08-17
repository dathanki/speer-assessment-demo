import React from 'react';
import './styles.scss';

const Form = props => {
    return (
        <div>
            <form>
                <label>
                    Full Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Billing Address
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>        
        </div>
    );
};

export default Form;