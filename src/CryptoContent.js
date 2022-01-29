import axios from 'axios';
import React, { useEffect, createContext, useContext, useState } from 'react';
import { CoinList } from './config/api';



const Crypto = createContext();

const CryptoContent = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        console.log(data);

        setCoins(data);
        setLoading(false);
    };

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);


    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContent;


export const CryptoState = () => {
    return useContext(Crypto);
}