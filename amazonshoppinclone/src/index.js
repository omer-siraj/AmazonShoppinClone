import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { DataProvider } from './Components/DataProvider/DataProvider';
import { reducer, initialState } from './Utility/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  
);
