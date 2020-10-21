import React from 'react';
import ReactDOM from 'react-dom';
import { ClientContext, GraphQLClient } from 'graphql-hooks';

import Root from './pages/Root';
const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: 'Bearer c14bcb450451e82bab63bcbcc3d4dc',
  },
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <Root />
  </ClientContext.Provider>,
  document.getElementById('root'),
);
