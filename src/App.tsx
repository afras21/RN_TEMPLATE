import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const App = () => {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://3410-2401-4900-1cb8-9bbf-b883-a95d-15ef-44b7.ngrok-free.app', //ngrok URL
    cache: new InMemoryCache()
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <ApplicationNavigator />
        </ApolloProvider>
      </PersistGate>
    </Provider>

  )
};

export default App;
