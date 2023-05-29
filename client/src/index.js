import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EquipmentContextProvider } from './context/EquipmentContext';
import { AuthContextProvider } from './context/AuthContext';
import { LabContextProvider } from './context/LabContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EquipmentContextProvider>
        <LabContextProvider>
        <App />
      </LabContextProvider>
      </EquipmentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


