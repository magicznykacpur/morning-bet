import {createStore} from 'redux';
import {betReducer} from '../store/reducers';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import BetApp from '../app/BetApp';
import React from 'react';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(betReducer, preloadedState);

hydrate(
    <Provider store={store}>
        <BetApp/>
    </Provider>,
    document.getElementById('react-root')
);
