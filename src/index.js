import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { UserProvider } from './context/UserContext'
import { RouterProvider } from './context/RouterContext'
import { StylesProvider } from './context/StylesContext'
import { HeritageProvider } from './context/HeritageContext'
import { ApplicationContextProvider } from './context/ApplicationContext'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <HeritageProvider>
      <UserProvider>
        <RouterProvider>
          <StylesProvider>
            <ApplicationContextProvider>
              <App />
            </ApplicationContextProvider>
          </StylesProvider>
        </RouterProvider>
      </UserProvider>
    </HeritageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
