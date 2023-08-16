import React, { useState } from 'react';
const Currency = () => {
    const DEFAULT_CURRENCY = '£';
    const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
    const onCurrencyChange = (val) => {
        setCurrency(val);
    }
    return (
        <div class="alert alert-secondary">
            <div class="currency-container">
                <label for="currencySelect">Currency</label>
                <select id="currencySelect" class="currency-select" value={currency}>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}
export default Currency;