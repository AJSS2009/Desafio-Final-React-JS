import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([])  
    const [pizza, setPizza] = useState(null) 
    const [total, setTotal] = useState(0) 
    const [pedido, setPedido] = useState([]) 

    return (
        <AppContext.Provider
            value={{
                data, setData,
                pizza, setPizza,
                total, setTotal,
                pedido, setPedido
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

