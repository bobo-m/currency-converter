import { v4 as uuidv4 } from 'uuid';
import currencies from '../currencies.json'
import { useState } from 'react';

function Input({options, handleValueChange, index, value, currency, handleCurrencyChange}){
    const [isFocused, setFocused] = useState(false);

    const handleFocus=()=>{
        setFocused(!isFocused);
    }

    return(
        <div 
            className={`currency-container h-12 flex items-center bg-black/85 rounded-lg border-2 w-full my-2
            ${isFocused?'border-blue-500':'border-white/50'}`}>

            <input value={value} type="text" onChange={(e)=>{handleValueChange(e.target.value,index)}} onFocus={handleFocus} onBlur={handleFocus} className=
                "h-full w-2/5 rounded-l-lg focus:outline-none px-4 focus:opacity-50 bg-black/85 text-white/75" />

            <span className="seperator block h-4/5 w-px bg-white/50"></span>

            <select onChange={(e)=>handleCurrencyChange(e.target.value,index)} onFocus={handleFocus} onBlur={handleFocus} name="currency" value={currency}
                className="currency h-full w-3/5 px-4 bg-black/85 text-white/75 rounded-r-lg text-right focus:opacity-50 box-border">

                {
                    Object.keys(options).map((currency)=>(
                        <option value={currency} key={uuidv4()}>
                            {currencies[currency].name}
                        </option>
                    ))
                }

            </select>

        </div>
    )
}

export default Input;