import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authContext';
import { TweetContextProvider } from './context/tweetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <DarkModeContextProvider>
    <TweetContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </TweetContextProvider>
    </DarkModeContextProvider>
    
  </React.StrictMode>
);
