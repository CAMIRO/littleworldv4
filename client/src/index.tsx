import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Styles
import GlobalStyles from './globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <GlobalStyles />
    </React.StrictMode>,
    document.getElementById('root'),
);
