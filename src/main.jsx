import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from "@apollo/client/react";
import {SetContextLink} from "@apollo/client/link/context";

const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = new SetContextLink(({headers}) => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : "",
        },
    };
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </StrictMode>,
)
