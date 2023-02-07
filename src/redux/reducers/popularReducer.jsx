import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/config';

const initialState = {
    arrPopular:[],
    arrTaskList:[],
    arrTaskType:[]
}

const popularReducer = createSlice({
  name: 'popularReducer',
  initialState,
  reducers: {
    getPopularAction:(state,action)=>{
        state.arrPopular=action.payload
    },
    getTaskListAction:(state,action)=>{
      state.arrTaskList=action.payload
    },
    getTaskTypeAction:(state,action)=>{
      state.arrTaskType = action.payload
    }
  }
});

export const {getPopularAction,getTaskListAction,getTaskTypeAction} = popularReducer.actions

export default popularReducer.reducer

export const getPopularApi=()=>{
    return async (dispatch)=>{
        const result = await http.get('/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/a ');
        const action = getPopularAction(result.data.content);
        dispatch(action);
        console.log(action)
    }
    
}
export const getTaskListApi=()=>{
  return async (dispatch)=>{
    const result = await http.get('/api/cong-viec/lay-menu-loai-cong-viec');
    const action = getTaskListAction(result.data.content);
    dispatch(action);

  }
}
export const getTaskTypeApi=(id)=>{
  return async (dispatch)=>{
    const result=await http.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/1`);
    const action = getTaskTypeAction(result.data.content);
    dispatch(action);
  }
}