import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Language
import './language/i18next';
// Styles
import GlobalStyles from './globalStyles';
import './styles.scss';
// global state
import { Provider } from './store/state';

// Apollo
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:5000/graphql',
    }),
});
// Apollo //

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <ApolloProvider client={client}>
            <Provider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                <GlobalStyles />
            </Provider>
        </ApolloProvider>
    </Suspense>,
    document.getElementById('root'),
);
