import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const chgCurrency = (value) =>{
        dispatch({  type:   'CHG_CURRENCY',
                    payload: value,
        });
    };    

    return (
        <div className='alert alert-success'>
            <label htmlFor="inputGroupSelect03"> Currency:
                <select className="custom-select"
                        value={currency} 
                        id="inputGroupSelect03"
                        onChange={(event) => chgCurrency(event.target.value)}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </label>
        </div>
    );
};

export default Currency;
