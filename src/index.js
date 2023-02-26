import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { TriggerProvider } from './context/TriggerContext';
import { UserProvider } from './context/UserContext';
import { NotifProvider } from './context/NotifContext';
import { ViewProvider } from './context/ViewContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotifProvider>
      <ViewProvider>
        <TriggerProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </TriggerProvider>
      </ViewProvider>
    </NotifProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
