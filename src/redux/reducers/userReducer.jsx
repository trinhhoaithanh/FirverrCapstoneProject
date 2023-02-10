import { createSlice } from '@reduxjs/toolkit'
import {USER_PROFILE, ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN,USER_REGISTER } from '../../utils/config';
import { history } from '../../index';
const initialState = {
    userLogin:getStoreJson(USER_LOGIN),
    userRegister:getStore(USER_REGISTER),
    userProfile: getStoreJson(USER_PROFILE)
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction:(state,action)=>{
        state.userLogin=action.payload;
    },
    registerAction:(state,action)=>{
      state.userRegister = action.payload;
    },
    getProfileAction: (state,action) => {
      state.userProfile = action.payload
  }, updateProfileAction:(state,action)=>{
    state = action.payload
}
  }
});

export const {loginAction,registerAction,getProfileAction,updateProfileAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin)=>{
    return async dispatch =>{
        const result = await http.post('/api/auth/signin',userLogin);
        const action =loginAction(result.data.content);
        console.log(result);
        dispatch(action);
        saveStoreJson(USER_LOGIN,result.data.content)
        saveStore(ACCESS_TOKEN,result.data.content.token)
        const role = result.data.content.user.role
        if(role === 'ADMIN')
            history.push('/admin/nguoi_dung')
        else history.push('/profileUser');
    }
}
export const registerApi = (userRegister)=>{
  return async dispatch =>{
    const result = await http.post('/api/auth/signup',userRegister);
    const action = registerAction(result.data.content);
    console.log(action);
    dispatch(action);
    alert('Đăng ký thành công');
    history.push('/loginUser');
  }
}
export const getProfileApi = (id) => {
  return async (dispatch) => {
      const result = await http.get(`/api/users/${id}`);
      // cập nhật cho reducer
      const action = getProfileAction(result.data.content);
      dispatch(action);
      console.log(result.data.content)
      saveStoreJson(USER_PROFILE, result.data.content)
    };
}
export const updateProfileApi = (updateProfile) => {
  return async dispatch => {
    await http.post('/api/Users/updateProfile', updateProfile).then((res) => {
      const action = updateProfileAction(res.data.content);
      dispatch(action);
      alert("Update successfully");
    }).catch((err) => {
      alert(`${err.response.data.content}`);
      return;
    })
  }
};