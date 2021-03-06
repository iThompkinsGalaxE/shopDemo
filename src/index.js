import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import  * as CS  from './configureStore'
import { PersistGate } from 'redux-persist/lib/integration/react';

const ReduxWrapper = () => {
  return(
    <Provider store={CS.default().store}>
      <PersistGate loading={null} persistor={CS.default().persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<ReduxWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
