import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {Routes, unstable_HistoryRouter as HistoryRouter, Route, Navigate} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import {store} from './redux/configureStore'
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
        <Routes >
            <Route path='' element={<HomeTemplate />}>
                <Route path='*' element={<Navigate to='/'/>}></Route>
            </Route>
        </Routes>
    </HistoryRouter>
  </Provider>
);

