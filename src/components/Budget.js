import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const MAX_BUDGET = 20000;
    const onBudgetChange = (val) => {
        if (val < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
        } else if (val > MAX_BUDGET) {
            alert("Your budget value cannot exceed £20,000")
            dispatch({ type: "SET_BUDGET", payload: MAX_BUDGET })
        } else {
            dispatch({ type: "SET_BUDGET", payload: val })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step='10'
                value={budget}
                style={{ marginLeft: 0, size: 10 }}
                onChange={(event) => onBudgetChange(event.target.value)}
            >
            </input>
        </div>
    );
};
export default Budget;