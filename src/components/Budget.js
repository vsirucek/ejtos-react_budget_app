import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const { action, setAction} = useState('');

    const setBudget = (value) =>{
        if ( value>20000) {
            alert("The budget may not exceed £20.000");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if ( value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            return;            
        }
        
        dispatch({  type:   'SET_BUDGET',
                    payload: value,
        });
    };    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                        required='required'
                        type='number'
                        id='budget'
                        step='10'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)
                        }>
            </input>
        </span>
        </div>
    );
};

export default Budget;
