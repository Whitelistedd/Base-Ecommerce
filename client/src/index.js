import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { FontStyles } from './font-styles';
import { persistor, store } from './redux/store';

const domain = process.env.REACT_APP_domain
const clientId = process.env.REACT_APP_clientId
const redirectUri = process.env.REACT_APP_redirectUri

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={redirectUri}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FontStyles />
        <App />
      </PersistGate>
    </Provider>
  </Auth0Provider>
);
