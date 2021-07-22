import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Container } from './components';

import store from 'store';
import { Provider } from 'react-redux';

import './index.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <Container />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
