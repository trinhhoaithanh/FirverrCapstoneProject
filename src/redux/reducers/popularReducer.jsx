import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/config';

const initialState = {
    arrPopular:[],
    arrTaskList:[],
    arrTaskType:[],
    arrJobList:[],
    arrTaskDetail:[],
    arrComment:[]
    
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
    },
    getJobListAction:(state,action)=>{
      state.arrJobList = action.payload
    },
    getTaskDetailAction:(state,action)=>{
      state.arrTaskDetail=action.payload
    },
    getCommentByIdAction:(state,action)=>{
      state.arrComment = action.payload
    }
  }
});

export const {getCommentByIdAction,getTaskDetailAction,getPopularAction,getTaskListAction,getTaskTypeAction,getJobListAction} = popularReducer.actions

export default popularReducer.reducer

export const getPopularApi=(congViec)=>{
    return async (dispatch)=>{
        const result = await http.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/a`);
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
    const result=await http.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/1`);
    const action = getTaskTypeAction(result.data.content);
    dispatch(action);
    console.log(action)
  }
}
export const getJobListApi=()=>{
  return async (dispatch)=>{
    const result = await http.get('/api/thue-cong-viec/lay-danh-sach-da-thue');
    const action = getJobListAction(result.data.content);
    dispatch(action);
  }
  
}
export const getTaskDetailApi=(id)=>{
  return async (dispatch)=>{
    const result = await http.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`);
    const action = getTaskDetailAction(result.data.content);
    dispatch(action);
  }
}
export const getCommentByIdApi=(id)=>{
  return async (dispatch)=>{
    const result =await http.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`)
    const action = getCommentByIdAction(result.data.content);
    dispatch(action);
  }
}