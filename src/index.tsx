import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'components/shared/redux/store';

import App from './App';
import './custom.css'
import theme from 'components/shared/theme';
import MainLayout from 'components/shared/components/layout/MainLayout';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(

    <ThemeProvider theme={theme}>
        <Provider store={store}>
      <HelmetProvider>
          <App />
      </HelmetProvider>
      </Provider>
      </ThemeProvider>

);