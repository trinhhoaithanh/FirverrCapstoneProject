import { Dropdown, Space, Form, Input,  Select  } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../index.js';
import { getJobListApi, getTaskListApi } from '../../../redux/reducers/popularReducer';
import { getProfileApi, updateProfileApi } from '../../../redux/reducers/userReducer.jsx';

const UserProfile = () => {
  const { userProfile } = useSelector((state) => state.userReducer);
  const {arrJobList} = useSelector(state=>state.popularReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {arrTaskList} = useSelector(state=>state.popularReducer);
  
  
  useEffect(()=>{
    const action = getTaskListApi();
    dispatch(action);
  },[])
  const items=[]
  const onSubmit = (values) => {
    const updateProfile = updateProfileApi(values)
         dispatch(updateProfile)
  }
  useEffect(() => {
    const getProfile = getProfileApi()
    
      dispatch(getProfile);
    
    form.setFieldsValue(userProfile)
  },[])
  
  return (
    <div className='profile'>
      <hr style={{width:'1800px'}}/>
      <div className='menu-task'>
        <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container">
    
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
     
           {arrTaskList.map((task,index)=>{
            return (           
        <li className="nav-item" key={index}>
          <Dropdown
    menu={{items}}
  >
    <p onClick={(e) => e.preventDefault()}>
      <Space>
        <span onClick={()=>{
          history.push('/taskType')
        }}>{task.tenLoaiCongViec}</span>
        
      </Space>
    </p>
  </Dropdown>
         
        </li>           
            )       
           })}
         </ul>
         </div>
       </div>
     </nav>
        </div>
      </div>
      <hr />
      <div className='container'>
      <div className='profile-layout row'>
          <div className='profile-left col-4'>
          <div className="container-fluid mt-5 ms-2">
        <div className="row">
          <div className=" col-xl-3 col-xs-12 ">
            <div className="avatar avatar-profile m-auto">
              <img src={userProfile?.avatar} alt="..." className='w-75 rounded-circle'></img>
            </div>
          </div>
          <div className=" col-xl-4 col-xs-12 ">
            <Form layout="vertical" name="basic" form={form} wrapperCol={{ span: 25 }} onFinish={onSubmit}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>

              <Form.Item>
                <button className="btn btn-primary mt-3" type="submit"> Update </button>
              </Form.Item>
            </Form>
          </div>
          <div className=" col-xl-4 col-xs-12 ">
            <Form layout="vertical" name="basic" form={form} wrapperCol={{ span: 25 }} onFinish={onSubmit}>
              <Form.Item label="Name" name="name">
                <Input/>
              </Form.Item>

              <Form.Item label="Password" name="newPassword" >
                <Input.Password id="password" />
              </Form.Item>

              <Form.Item name="gender" label="Gender" hasFeedback >
                <Select placeholder="Gender">
                  <Select.Option value={false}>Male</Select.Option>
                  <Select.Option value={true}>Female</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      
          </div>
          <div className='profile-right col-8'>

          </div>
      </div>
      </div>
     
    </div>
  )
}

export default UserProfile