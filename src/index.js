import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App'

ReactDOM.render(<App />, document.getElementById("main"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.render(<App />, document.getElementById("main"));
  });
}