import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Router

import { BrowserRouter } from 'react-router-dom';

import Video from './UI/video';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>

          <App>
            <Video></Video>
          </App>

      </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
