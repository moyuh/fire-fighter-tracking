import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/Footer';
import Nav from './components/Nav';
import React, { useState } from 'react';


const httpLink = createHttpLink({ uri: '/graphql',});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  let [pageView, setPageView] = useState();
  return (
    <div>
      <ApolloProvider client={client}>
        <Nav pageView = {pageView}
        setPageView = {setPageView}/>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;