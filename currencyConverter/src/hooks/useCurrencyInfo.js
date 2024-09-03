// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

import { useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    
    const [data , setdata] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //as a string aata hai then apn usko json me convert kar diye
        .then((res) => setdata(res[currency]))
        console.log(data)
    } , [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;