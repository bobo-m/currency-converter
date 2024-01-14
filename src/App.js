import './App.css';
import { useEffect, useState } from 'react';
import Input from './components/Input'
import Answer from './components/Answer';


function App() {
  const [currencies, setCurrencies] = useState({});
  const [currencyOne, setCurrencyOne] = useState('INR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [valueOne, setValueOne] = useState(1)
  const [valueTwo, setValueTwo] = useState(0)

 useEffect(()=>{
   async function fetchExchangeRates(){

    try{

      const response = await fetch("https://api.freecurrencyapi.com/v1/latest",{
        method: 'GET',
        mode: 'cors',
        headers: {
          apikey: 'fca_live_iqiqFpAQQ22mIlCxqTG5rCtY212ORdLtKkQMPnqo'
        }
      });

      if(response.ok){
       const data = await response.json();
       setCurrencies(data.data);
      }else{
        console.error("Error fetching currency data");
      }

      }catch(error){

       console.error("Error fetching resources : ", error);

      }
    }
    fetchExchangeRates();
  },[])

  useEffect(()=>{
    setValueTwo(calculateRate(valueOne, currencyOne, currencyTwo));
  },[currencies])

  const calculateRate = (val, rate1, rate2)=>{
    return (val*(currencies[rate2]/currencies[rate1])).toFixed(3);
  }

  const handleInputChange = (val, index) => {
    if(index === 0){
      setValueOne(val);
      setValueTwo(calculateRate(val, currencyOne, currencyTwo));
    }else{
      setValueTwo(val);
      setValueOne(calculateRate(val, currencyTwo, currencyOne))
    }
  }

  const handleSelectChange = (curr, index) =>{
    if(index === 0){
      setCurrencyOne(curr);
      setValueTwo(calculateRate(valueOne, currencyOne, currencyTwo));
    }else{
      setCurrencyTwo(curr);
      setValueOne(calculateRate(valueTwo, currencyTwo, currencyOne));
    }
  }
  

  return (

    <div 
      className="App container w-2/5 h-3/4 flex flex-col justify-center items-center">

      <h1 className='title text-center text-5xl text-white/75 mb-auto mt-24'>Currency Converter</h1>

      <Answer
        val1={valueOne} 
        val2={valueTwo}
        curr1={currencyOne}
        curr2={currencyTwo}
      />

      <Input 
        index={0} 
        options={currencies} 
        handleValueChange={handleInputChange}
        handleCurrencyChange={handleSelectChange}
        value={valueOne}
        currency={currencyOne} 
      />

      <Input 
        index={1}
        options={currencies} 
        handleValueChange={handleInputChange} 
        handleCurrencyChange={handleSelectChange}
        value={valueTwo} 
        currency={currencyTwo}
      />

      

    </div>
  );

}

export default App;
