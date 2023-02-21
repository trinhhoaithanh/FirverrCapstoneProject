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
import TaskList from './Pages/User/TaskList/TaskList';
import TaskDetail from './Pages/User/TaskDetail/TaskDetail';
import TaskType from './Pages/User/TaskType/TaskType';
import DefaultTemplate from './Templates/AdminTemplate/DefaultTemplate';
// import QuanLyNguoiDung from './Pages/Admin/quanLy/NguoiDung'
import router from './router';
import BinhLuan from './Pages/Admin/quanLy/BinhLuan';
export const history = createBrowserHistory()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
        <Routes >
            <Route path='' element={<HomeTemplate />}>
                <Route index element={<UserHome/>}>
                  
                </Route>
                <Route path='registerUser' element={<UserRegister/>}></Route>
                <Route path='loginUser' element={<UserLogin/>}></Route>
                <Route path='profileUser' element={<UserProfile/>}></Route>
                <Route path='taskList' element={<TaskList/>}>
                  <Route path=':id' element={<TaskList/>}></Route>
                </Route>
                <Route path='taskDetail' element={<TaskDetail/>}>
                  <Route path=':id' element={<TaskDetail/>}></Route>
                  

                </Route>
                <Route path='taskType' element={<TaskType/>}>
                  <Route path=':id' element={<TaskType/>}></Route>
                </Route>

                <Route path='*' element={<Navigate to='/'/>}></Route>
            </Route>
            <Route path='admin' element={<DefaultTemplate/>}>
                {router.admin.map(route => <Route path={route.path} element={route.element} key={route.key}></Route>)}
                {/* <Route path='binh-luan' element={<BinhLuan />} key='binh-luan'></Route> */}
            </Route>
        </Routes>
    </HistoryRouter>
  </Provider>
);

