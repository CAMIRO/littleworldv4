import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Loading } from './components/loading';
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
        uri: '/graphql',
    }),
});
// Apollo //

ReactDOM.render(
    <Suspense fallback={<Loading />}>
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
