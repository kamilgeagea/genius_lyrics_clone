import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

// The ApolloClient is the model responsible for connecting to the backend and transmitting the data to the ApolloProvider.
const client = new ApolloClient({
  dataIdFromObject: o => o.id // Caching
});

// The ApolloProvider will take the data from the ApolloClient and pass it to the components so we can display it.
// We wrap the App with the ApolloProvider that will contain the data from the backend
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
