import React from 'react';
import ReactDOM from 'react-dom';
import { ClientContext, GraphQLClient } from 'graphql-hooks';

import Root from './pages/Root';

require('dotenv').config();

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${process.env.REACT_APP_API_DATO_CMS}`,
  },
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <Root />
  </ClientContext.Provider>,
  document.getElementById('root'),
);
