import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './Components/DataProvider/DataProvider';
import { reducer, initialState } from './Utility/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DataProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
