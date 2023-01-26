import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {Routes, unstable_HistoryRouter as HistoryRouter, Route, Navigate} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import {store} from './redux/configureStore'
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import UserHome from './Pages/User/UserHome/UserHome';
import UserLogin from './Pages/User/UserLogin/UserLogin';
import "./assets/scss/style.scss";
import UserRegister from './Pages/User/UserRegister/UserRegister';
import UserProfile from './Pages/User/UserProfile/UserProfile';
export const history = createBrowserHistory()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
        <Routes >
            <Route path='' element={<HomeTemplate />}>
                <Route index element={<UserHome/>}></Route>
                <Route path='registerUser' element={<UserRegister/>}></Route>
                <Route path='loginUser' element={<UserLogin/>}></Route>
                <Route path='profileUser' element={<UserProfile/>}></Route>
                <Route path='*' element={<Navigate to='/'/>}></Route>
            </Route>
        </Routes>
    </HistoryRouter>
  </Provider>
);

