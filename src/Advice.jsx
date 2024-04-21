import React, { useEffect, useState } from 'react'
import './Advice.css'

export const Advice = () => {
    const [Quote,getQuote] = useState('please click here to get advice');
    const [count,setCount] = useState(0);
    async function getQuotes (){
        const res = await fetch('https://api.adviceslip.com/advice');
        const Data = await res.json();
        getQuote(Data.slip.advice);
        setCount((c)=>c+1)
    }
    useEffect(function (){
        getQuote();
    },[])
  return (
    <div>
        <h1>Quote Generator</h1>
        <h1 className='quote'>{Quote}</h1>
        <button onClick={getQuotes}>Get Quote</button>
        <p>Your Read <b>{count}</b> Quotes</p>
    </div>
  )
}
