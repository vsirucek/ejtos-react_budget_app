import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

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
            <label htmlFor='budget'>Budget: {currency}</label>    
            <input
                        required='required'
                        type='number'
                        id='budget'
                        step='10'
                        value={budget}
                        style={{ marginLeft: '0rem' , width: '70%'}}
                        onChange={(event) => setBudget(event.target.value)
                       }
                       width= '50%'>                      
            </input>  
           
        </div>
    );
};

export default Budget;
