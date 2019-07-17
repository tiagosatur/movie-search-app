import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import reducers from './redux/reducers'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//  let store;
 let store = createStore(reducers, applyMiddleware(thunk));

// if (window.navigator.userAgent.includes('Chrome')) {
//     store = createStore(
//       reducers,
//       compose(
//         applyMiddleware(thunk),
//         composeEnhancer
//       )
//     );
//   } else {
//     store = createStore(
//       reducers,
//       compose(
//         applyMiddleware(thunk)
//       )
//     );
//   }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

