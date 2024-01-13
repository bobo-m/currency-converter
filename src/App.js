import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';


function App() {
  // const [currencies, setCurrencies] = useState({});
  const [currencyOne, setCurrencyOne] = useState('INR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [conversionResult, setConversionResult] = useState('');

  // useEffect(()=>{
  //   async function fetchExchangeRates(){

  //     try{

  //       const response = await fetch("https://api.freecurrencyapi.com/v1/latest",{
  //         method: 'GET',
  //         mode: 'cors',
  //         headers: {
  //           apikey: 'fca_live_iqiqFpAQQ22mIlCxqTG5rCtY212ORdLtKkQMPnqo'
  //         }
  //       });

  //       if(response.ok){
  //         const data = await response.json();
  //         console.log(data.data)
  //         setCurrencies(data.data);
  //       }else{
  //         console.error("Error fetching currency data");
  //       }

  //     }catch(error){

  //       console.error("Error fetching resources : ", error);

  //     }
  //   }
  //   fetchExchangeRates();
  // },[])

  const convertCurrency = () =>{
    const answer = data[currencyTwo]/data[currencyOne];

    setConversionResult(answer);
  }

  return (

    <div 
      className="App w-1/2 h-1/2 flex flex-col justify-between items-center bg-white rounded-3xl">

      <h1 className='title text-center text-3xl'>Currency Converter</h1>

      <div className="inputContainer flex">
        <form action="#">
          <label htmlFor="currency-one">
            <select 
              name="currency" id="currency-one" value={currencyOne} onChange={(e)=>setCurrencyOne(e.target.value)}
              className='w-40'>
              {
                Object.keys(data).map((currency)=>(
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </form>

        <form action="#">
          <label htmlFor="currency-two">
            <select 
              name="currency" id="currency-two" value={currencyTwo} onChange={(e)=>setCurrencyTwo(e.target.value)}
              className='w-40'>
              {Object.keys(data).map((currency, index)=>(
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>

      <input onClick={convertCurrency} type="submit" id='submit'/>

      <h2 className='answer'>{conversionResult}</h2>

    </div>
  );

}

export default App;
