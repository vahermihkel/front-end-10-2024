import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import './i18n';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { CartSumContextProvider } from './store/CartSumContext';
import { AuthContextProvider } from './store/AuthContext';
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <CartSumContextProvider>
          <AuthContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </AuthContextProvider>
        </CartSumContextProvider>
      </BrowserRouter>

  </React.StrictMode>
);