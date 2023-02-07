import React, {memo} from 'react'
import {NavLink} from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { StarFilled ,HeartFilled} from '@ant-design/icons';
import { history } from '../../index.js';
const TaskCard = ({task}) => {
    
  return (
   
       <div onClick={()=>{
        history.push('/taskDetail')
       }} className="card mt-5" style={{height:'520px',cursor:'pointer'}}>
        <img className="card-img-top" src={task.congViec.hinhAnh} alt="Title" />
        <div className="card-body p-2 mt-2">
        <div className="card-title">
            <div className='row'>
                <div className='col-7'>
                    <div className='row'>
                        <div className='col-3'>
                        <Avatar src={task.avatar} icon={<UserOutlined />} />
                        </div>
                        <div className='col-9'>
                        <h6 className='people'>rajnishbaldha</h6>
                        <p className='level'>Level 2 Seller</p>
                        </div>
                    </div>
                </div>
                <div className='col-5'>

                </div>
            </div>
        </div>
        <div className='description my-2'>
        <h5 className="card-text">{task.congViec.tenCongViec}</h5>
        </div>
        <div className='rate'>
        <StarFilled />
        <span className='ms-1'>{task.congViec.saoCongViec}.0<span className='danh-gia'>({task.congViec.danhGia})</span></span>
        </div>

        </div>
       <hr />

        <div className='row'>
          <div className='col-6 ps-4'>
          <HeartFilled className='heart'/>
          </div>
          <div className='col-6'>
          <p className='price'>STARTING AT ${task.congViec.giaTien}</p>
          </div>
        
        </div>
        </div>

   
  )
}

export default memo(TaskCard);