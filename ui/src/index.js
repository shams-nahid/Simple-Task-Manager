import React from 'react';
import ReactDOM from 'react-dom';
import { usePromiseTracker } from "react-promise-tracker";
import LoadingOverlay from 'react-loading-overlay';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <LoadingOverlay
      active={promiseInProgress}
      spinner
      text='Loading...'
      >
      <App />
    </LoadingOverlay>
  )
};

ReactDOM.render(<LoadingIndicator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
