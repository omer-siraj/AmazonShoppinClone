import React, { createContext, useReducer } from 'react';
import { DataContext } from './path-to/DataProvider';



const [state = {}] = useContext(DataContext) || [];
const basket = state.basket || [];



export const DataProvider = ({ reducer, initialState, children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);
