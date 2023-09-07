// import React, { createContext, useContext, useState } from 'react';

// const ShoppoContext = createContext();

// export const AddCartProvider = ({ children }) => {

//     const [count, setCount] = useState(0);
//     return (
//         <ShoppoContext.Provider value={{ count, setCount }}>
//             {children}
//         </ShoppoContext.Provider>
//     )
// }
// export const useAddCart = () => {
//     return useContext(ShoppoContext);
// };