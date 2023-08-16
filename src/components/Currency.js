import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const onCurrencyChange = (val) => {
        dispatch({ type: "CHG_CURRENCY", payload: val })
    }
    return (
        <div class="alert alert-secondary">
            <div class="currency-container">
                <span>Currency(</span>
                <select id="currencySelect" class="currency-select" value={currency} onChange={(event) => onCurrencyChange(event.target.value)}>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
                <span>)</span>
            </div>
        </div>
    )
}
export default Currency;