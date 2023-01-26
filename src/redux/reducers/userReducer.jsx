import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN,USER_REGISTER } from '../../utils/config';
import { history } from '../../index';
const initialState = {
    userLogin:getStoreJson(USER_LOGIN),
    userRegister:getStore(USER_REGISTER)
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
    }
  }
});

export const {loginAction,registerAction} = userReducer.actions

export default userReducer.reducer

export const loginApi = (userLogin)=>{
    return async dispatch =>{
        const result = await http.post('/api/auth/signin',userLogin);
        const action =loginAction(result.data.content);
        dispatch(action);
        saveStoreJson(USER_LOGIN,result.data.content)
        saveStore(ACCESS_TOKEN,result.data.content.accessToken)

         history.push('/profileUser');
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