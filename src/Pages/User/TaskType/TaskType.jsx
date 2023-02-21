import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskListApi, getTaskTypeApi } from '../../../redux/reducers/popularReducer';
import { Dropdown, Space,Button} from 'antd';
import { ArrowRightOutlined,PlayCircleFilled} from '@ant-design/icons';
import { history } from '../../../index.js';
import { useParams } from 'react-router-dom';
const TaskType = () => {
  const {arrTaskList} = useSelector(state=>state.popularReducer);
  const {arrTaskType} = useSelector(state=>state.popularReducer);
  const params = useParams();
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const action = getTaskListApi();
    dispatch(action);
  },[])
  
  useEffect(()=>{
    const actionAsync = getTaskTypeApi(params.id)
    dispatch(actionAsync);
  },[params.id])
  console.log('arrTaskType',arrTaskType);
  const items=[]
  return (
    <div className='task-type'>
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
          history.push(`/taskType/${task.id}`)
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
      <div className='banner'>
          <div className='content'>
            <h3>Graphics & Design</h3>
            <p>Designs to make you stand out</p>
            
            <Button className='btn-search' icon={<PlayCircleFilled />}>How Fiverr Work</Button>
            
          </div>
      </div>
      <div className='most-popular my-5'>
          <h2>Most popular In Graphics & Design</h2>
          <Button className='btn-popular h-50'>
          
            <div className='row'>
            <div className='col-3'>
                <img className='w-75' src="./img/logo1.webp" alt="" />
              </div>
              <div className='col-7'>
              <span>Minimalist Logo Design</span>
              </div>
              <div className='col-2'>
              <ArrowRightOutlined className='arrow'/>
              </div>
            </div>
          </Button>
          
          <Button className='btn-popular h-50'>
          
            <div className='row'>
            <div className='col-3'>
                <img className='w-75' src="./img/logo2.webp" alt="" />
              </div>
              
              <div className='col-7'>
              <span >Architecture & Interior Design</span>
              </div>
              <div className='col-2'>
              <ArrowRightOutlined className='arrow'/>
              </div>
              
            </div>
          </Button>

          <Button className='btn-popular h-50'>
          
            <div className='row'>
            <div className='col-3'>
                <img className='w-100' src="./img/logo3.webp" alt="" />
              </div>
              <div className='col-7'>
              <span>Website Design</span>
              </div>
              <div className='col-2'>
              <ArrowRightOutlined className='arrow'/>
              </div>
            </div>
          </Button>

          <Button className='btn-popular h-50'>
          
            <div className='row'>
            <div className='col-3'>
                <img className='w-100' src="./img/logo4.webp" alt="" />
              </div>
              <div className='col-7'>
              <span> Illustration</span>
              </div>
              <div className='col-2'>
              <ArrowRightOutlined className='arrow'/>
              </div>
            </div>
          </Button>
          <Button className='btn-popular h-50'>
          
            <div className='row'>
            <div className='col-3'>
                <img className='w-100' src="./img/logo5.webp" alt="" />
              </div>
              <div className='col-7'>
              <span> Illustration</span>
              </div>
              <div className='col-2'>
              <ArrowRightOutlined className='arrow'/>
              </div>
            </div>
          </Button>
          
          
      </div>
      <div className='explore mb-5'>
        {arrTaskType.map((type,index)=>{
          return <div key={index}>
              <h2 className='mb-5'>Explore {type.tenLoaiCongViec}</h2>
              <div className='list-explore row' >
              {type.dsNhomChiTietLoai.map((item,index1)=>{
                return (
                <div className='explore-item col-4' key={index1}>
                <img className='w-75' src={item.hinhAnh} alt="..." />
                <h6 className='my-4'>{item.tenNhom}</h6>
                <ul style={{marginLeft:'0'}}>
                  {item.dsChiTietLoai.map((list,index)=>{
                    return (
                      <li style={{listStyle:'none'}} key={index}>{list?.tenChiTiet}</li>
                    )
                    
                    
                  })}
                </ul>
                </div>
              
              )
              })}
              </div>
             
          </div>
        })}
          
         
      </div>
      <div className='services'>
        <h3>Servies Related To Graphics & Design</h3>
        <div className='nav1 my-3'>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round" >
            Minimalist logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
            Signature logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
          Mascot logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
          3d logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
          Hand drawn logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
          Vintage logo design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
            Remove background
          </Button>
        </div>
        <div className='nav2 my-3'>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round" >
            Photo restoration
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}}  shape="round">
            Photo retouching
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Image resize
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Product label design 
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
          Custom twitch overlay
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Custom twitch emotes
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Gaming logo
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Children book illustration
          </Button>
          
        </div>
        <div className='nav3 my-3'>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round" >
            Instagram design
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Movie poster design 
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Box design 
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Logo maker
          </Button>
          <Button className='nav-item' style={{backgroundColor:'#ECEFF5'}} shape="round">
            Logo Ideas
          </Button>
          
        </div>
          
      </div>
    </div>
  )
}

export default TaskType