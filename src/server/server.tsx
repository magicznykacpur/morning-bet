import Express from 'express'
import {createStore} from 'redux';
import {betReducer} from '../store/reducers';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import React from 'react';
import BetApp from '../app/BetApp';
import {BetState} from '../store/types';

const app = Express();
const port = 3000;

app.use(handleRender);

function handleRender(request: any, response: any) {
    const betStore = createStore(betReducer);
    const preloadedState = betStore.getState();

    const html = renderToString(
        <Provider store={betStore}>
            <BetApp/>
        </Provider>
    );

    response.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html: string, preloadedState: BetState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="react-root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}
        </script>
      </body>
    </html>
    `
}
