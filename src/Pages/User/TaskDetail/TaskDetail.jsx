import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Col, Dropdown, Row, Space } from "antd";
import { useParams } from "react-router-dom";
import {
  getCommentByIdApi,
  getTaskDetailApi,
  getTaskListApi,
} from "../../../redux/reducers/popularReducer";
import {
  RightOutlined,
  UserOutlined,
  StarFilled,
  DownOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { history } from "../../../index.js";
const TaskDetail = () => {
  const { arrTaskDetail } = useSelector((state) => state.popularReducer);
  const { arrComment } = useSelector((state) => state.popularReducer);
  const {arrTaskList} = useSelector(state=>state.popularReducer);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    const action = getTaskListApi();
    dispatch(action);
  },[])
  useEffect(() => {
    const actionAsync = getTaskDetailApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);
  console.log(arrTaskDetail);
  useEffect(() => {
    const actionAsync = getCommentByIdApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);
  console.log(arrComment);
  const items=[]
  return (
    <div className="task-detail p-5">
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
      <div>
      {arrTaskDetail?.map((item,index)=>{
        return <Row>

        <Col className="col" span={12}>
              <div classname="content">
                <p className="nav" style={{color:'#446ee7',fontSize:'18px'}}>
                  {item.tenLoaiCongViec}
                  <RightOutlined style={{color:'#62646a'}}/>
                  {item.tenNhomChiTietLoai}
                  <RightOutlined style={{color:'#62646a'}}/>
                  {item.tenChiTietLoai}
                </p>
                <p className="mt-3 display-6" style={{fontWeight:'500'}}>{item.congViec.tenCongViec}</p>
                <div className="info-user">
                  <Avatar src={item.avatar} icon={<UserOutlined />} />
                  <span className="mx-2 fw-bold">{item.tenNguoiTao}</span>
                  <span style={{color:'#62646a'}}>
                    <span style={{color:'#ffb33e'}}>Top Rated Seller </span> |
                    <span className="ms-1">
                      {" "}
                      <StarFilled style={{color:'#ffb33e'}} />
                      <span style={{color:'#ffb33e'}}>{item.congViec.saoCongViec}</span> 
                      <span className="danh-gia">
                        ({item.congViec.danhGia})
                      </span>
                    </span>{" "}
                    | 4 Orders in Queue
                  </span>
                 <hr className="w-25"/>
                </div>
                <div className="buyer">
                  <img style={{width:'40px',height:'40px'}} src="https://static.vecteezy.com/system/resources/previews/000/653/099/original/vector-trophy-cup-icon.jpg" alt="..." />
                  <span><span className="fw-bold">People keep coming back!</span> logoflow has an exceptional number of repeat buyers.</span>
                </div>
                <div className="img">
                  <img src={item.congViec.hinhAnh} alt="" />
                </div>
                <div className="about-gig mt-5">
                  <h5 >About This Gig</h5>
                  <h6 className="my-3"><span style={{backgroundColor:'#ffecd1'}}> Top Rated Seller with all positive reviews </span></h6>
                  <div className="description">
                  <p>{item.congViec.moTa}</p>
                  </div>
                  
                  <div className="list-offer ">
                    <h6 className="my-3">Things I offer</h6>
                    <ul>
                      <li>CRM development</li>
                      <li>E-commerce Development</li>
                      <li>
                        Custom website development (both front-end and back-end)
                        with Laravel, PHP and MySQL
                      </li>
                      <li>
                        Vue Js, HTML, CSS, Bootstrap, Javascript/Jquery, PHP
                        single/multi web page
                      </li>
                      <li>
                        Complete website creation from scratching using Laravel
                        Rest Api and Vue Js
                      </li>
                      <li>Web Application with proper exception handling</li>
                      <li>
                        Can work with APIs, Integrate API's in your
                        applications.
                      </li>
                      <li>Responsive - Mobile Friendly sites</li>
                      <li>Great UI/UX for your site </li>
                      <li>
                        PSD to HTML, XD to HTML or any other design to HTML with
                        best quality and pixel perfect design
                      </li>
                      <li>Fix issues in front-end or add some changes to it</li>
                      <li>Bug Investigation and Bug Fixing</li>
                      <li>
                        My SQL database design and integration in websites
                      </li>
                      <li>
                        My SQL database bugs fixing and integration issues
                        fixing
                      </li>
                    </ul>
                  </div>
                  <h6 >
                    <span style={{backgroundColor:'#ffecd1'}}> I will do the work until you are satisfied with fast and
                    responsive communication</span>
                  </h6>
                 
                  <div className="language">
                    <div className="row">
                      <div className="col-3">
                        <h6>Programming language</h6>
                        <p>PHP</p>
                      </div>
                      <div className="col-3">
                        <h6>Expertise</h6>
                        <p>
                          Cross Browser <br /> Compatibility, <br /> PSD to
                          HTML, Performance
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-seller">
                  <Row>
      <Col span={12}><Avatar src={item.avatar} icon={<UserOutlined />} /></Col>
      <Col span={12}><p>{item.tenNguoiTao}</p>
                      <div className="ms-1">
                      {" "}
                      <StarFilled style={{color:'#ffb33e'}} />
                      <span style={{color:'#ffb33e'}}>{item.congViec.saoCongViec}</span> 
                      <span className="danh-gia">
                        ({item.congViec.danhGia})
                      </span>
                    </div>{" "}
                      <Button type="primary">Contact Me</Button></Col>
    </Row>
                   
                  </div>
                  <div className="faq">
                    <h4>FAG</h4>
                    <div className="row">
                      <div className="col-6">
                        <h6>Do you provide regular updates on order</h6>
                      </div>
                      <div className="col-6">
                        <DownOutlined />
                      </div>
                     
                      <div className="col-6">
                        <h6>
                          How do you guarantee product quality and reliability
                        </h6>
                      </div>
                      <div className="col-6">
                        <DownOutlined />
                      </div>
                     
                      <div className="col-6">
                        <h6>Do you give post-development support</h6>
                      </div>
                      <div className="col-6">
                        <DownOutlined />
                      </div>
                     
                      <div className="col-6">
                        <h6>Do you convert PSD to HTML</h6>
                      </div>
                      <div className="col-6">
                        <DownOutlined />
                      </div>
                    </div>
                  </div>
                  <div className="rate">
                    <div className="row">
                      <div className="col-6">
                        <span>
                          355 Reviews
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />5
                        </span>
                      </div>
                      <div className="col-6">
                        <span>
                          Sort by Most relevant <DownOutlined />
                        </span>
                      </div>
                    </div>
                    <h6>Filters</h6>
                    <span>
                      Industry All industries <DownOutlined />
                    </span>
                  </div>
                 
                  <div className="binh-luan">
                    {arrComment.map((comment, index) => {
                      return (
                        <div key={index}>
                          <div>
                            <span>
                              <Avatar
                                src={comment.avatar}
                                icon={<UserOutlined />}
                              />
                              {comment.tenNguoiBinhLuan} <StarFilled />
                              {comment.saoBinhLuan}
                            </span>
                            <p className="date">Ngày bình luận: {comment.ngayBinhLuan}</p>
                            <p className="noi-dung">{comment.noiDung}</p>
                            <p className="publish">Published 10 months ago</p>
                            <span>
                              <LikeOutlined />
                              Helpful <DislikeOutlined />
                              Not Helpful
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="them-binh-luan">
                    <div className="input-field">
                      <span>
                        <Avatar icon={<UserOutlined />} /> <input type="text" />
                      </span>
                    </div>
                    <div className="comment-btn">
                      <Button type="primary">Thêm Bình Luận</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          
        <Col span={12}>
              <div className="card">
                <img
                  className="card-img-top"
                  src="holder.js/100x180/"
                  alt="Title"
                />
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </Col>      
      </Row>
      })}
    
    
     
    </div>
    </div>
  );
};

export default TaskDetail;
