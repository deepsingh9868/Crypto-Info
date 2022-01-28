import React, { useEffect, createContext, useContext, useState } from 'react';



const Crypto = createContext();

const CryptoContent = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);


    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContent;


export const CryptoState = () => {
    return useContext(Crypto);
}