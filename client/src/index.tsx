import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Language
import './language/i18next';
// Styles
import GlobalStyles from './globalStyles';
import './styles.scss';

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <GlobalStyles />
    </Suspense>,
    document.getElementById('root'),
);
