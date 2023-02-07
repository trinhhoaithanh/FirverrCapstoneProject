import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularApi, getTaskListApi, getTaskTypeApi } from '../../../redux/reducers/popularReducer';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Switch,Pagination } from 'antd';
import TaskCard from '../../../Components/TaskCard/TaskCard';
import { history } from '../../../index.js';


const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const items=[]
const menuProps = {
  items,
  onClick: handleMenuClick,
};


const TaskList = () => {
  const {arrTaskList} = useSelector(state=>state.popularReducer);
  const {arrPopular} = useSelector(state=>state.popularReducer);
  const {arrTaskType} = useSelector(state=>state.popularReducer);
  const dispatch=useDispatch();
  
  
  const getAllPopularApi=async()=>{
    const action = getPopularApi();
    dispatch(action);
    
  }
  useEffect(()=>{
    getAllPopularApi();
  },[])
  const getAllTaskListApi=async()=>{
    const action = getTaskListApi();
    dispatch(action);
  }
  useEffect(()=>{
    getAllTaskListApi();
  },[])
  const getAllTaskTypeApi=async()=>{
    const action = getTaskTypeApi();
    dispatch(action);
  }
  useEffect(()=>{
    getAllTaskTypeApi();
  },[])
  const [current, setCurrent] = useState(3);
  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (    
    <div className='task-list'>
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
      <div className='result'>
          <div className='container'>
            <h3 className='result-header'>Results for "html"</h3>
            <div className='dropdown-nav'>
             <nav className="navbar navbar-expand-sm navbar-light ">
  <div className="container">
    
   
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
         Category
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </li>
        <li className="nav-item">
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Service Option
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </li>
        <li className="nav-item">
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Seller Detail
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </li>
        <li className="nav-item">
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Budget
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </li>
        <li className="nav-item">
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Delivery Time
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </li>
        
      
      </ul>
      <div className='switching' style={{textAlign:'right'}}>
      <ul className="navbar-nav me-auto mt-2 mt-lg-0" >
      <li className="nav-item">
        <div className='row'>
          <div className='col-3'>
          <Switch  onChange={onChange} />
          </div>
          <div className='col-8'>
          <p>Pro services</p>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <div className='row'>
          <div className='col-3'>
          <Switch  onChange={onChange} />
          </div>
          <div className='col-8'>
          <p>Local sellers</p>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <div className='row'>
          <div className='col-3'>
          <Switch  onChange={onChange} />
          </div>
          <div className='col-8'>
          <p>Online sellers</p>
          </div>
        </div>
      </li>
     </ul>
      </div>
     
    </div>
  </div>
</nav>

              
            </div>
          </div>
      </div>

      <div className='list-task'>
          <div className='container'>
            <div className='row'>
              {arrPopular.map((item,index)=>{
                return (
                  <div className='col-3' key={index}>
                  <TaskCard task={item}/>
                  </div>
                )
               
              })}
              
            </div>
          </div>
      </div>
      <div className='pagination mt-5'>
        <div className='page'>
        <Pagination  current={current} onChange={onChangePage} total={50} />
        </div>
      
      </div>
    </div>
  )
}

export default TaskList