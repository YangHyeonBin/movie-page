import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 여기서 전역 store를 한 개 만든 것이군
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </Provider>
);
