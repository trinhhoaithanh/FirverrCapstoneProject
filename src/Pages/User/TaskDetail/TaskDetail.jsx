import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, Col, Dropdown, Progress, Row, Space } from "antd";
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
  ClockCircleOutlined,
  SyncOutlined,CheckOutlined
} from "@ant-design/icons";
import { history } from "../../../index.js";
const TaskDetail = () => {
  const { arrTaskDetail } = useSelector((state) => state.popularReducer);
  const { arrComment } = useSelector((state) => state.popularReducer);
  const { arrTaskList } = useSelector((state) => state.popularReducer);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getTaskListApi();
    dispatch(action);
  }, []);
  useEffect(() => {
    const actionAsync = getTaskDetailApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);
  console.log(arrTaskDetail);
  useEffect(() => {
    const actionAsync = getCommentByIdApi(params.id);
    dispatch(actionAsync);
  }, [params.id]);

  const items = [];
  const gridStyle = {
    width: "100%/3",
    textAlign: "center",
  };
  const gridStyleGreen = {
    color:'#1CC072',
    textAlign: "center",
    borderBottom:'3px solid #1CC072'
  };
  return (
    <div className="task-detail p-5">
      <hr style={{ width: "1800px" }} />
      <div className="menu-task">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light ">
            <div className="container">
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  {arrTaskList.map((task, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        <Dropdown menu={{ items }}>
                          <p onClick={(e) => e.preventDefault()}>
                            <Space>
                              <span
                                onClick={() => {
                                  history.push("/taskType");
                                }}
                              >
                                {task.tenLoaiCongViec}
                              </span>
                            </Space>
                          </p>
                        </Dropdown>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <hr />
      <div>
        {arrTaskDetail?.map((item, index) => {
          return (
            <Row>
              <Col className="col" span={12}>
                <div classname="content">
                  <p
                    className="nav"
                    style={{ color: "#446ee7", fontSize: "18px" }}
                  >
                    {item.tenLoaiCongViec}
                    <RightOutlined style={{ color: "#62646a" }} />
                    {item.tenNhomChiTietLoai}
                    <RightOutlined style={{ color: "#62646a" }} />
                    {item.tenChiTietLoai}
                  </p>
                  <p className="mt-3 display-6" style={{ fontWeight: "500" }}>
                    {item.congViec.tenCongViec}
                  </p>
                  <div className="info-user" style={{fontSize:'16px'}}>
                    <Avatar src={item.avatar} icon={<UserOutlined />} />
                    <span className="mx-2 fw-bold">{item.tenNguoiTao}</span>
                    <span style={{ color: "#62646a" }}>
                      <span style={{ color: "#ffb33e" }}>
                        Top Rated Seller{" "}
                      </span>{" "}
                       |
                      <span className="ms-1">
                        <StarFilled style={{ color: "#ffb33e" }} />
                        <span style={{ color: "#ffb33e" }}>
                          {item.congViec.saoCongViec}
                        </span>
                        <span className="danh-gia">
                          ({item.congViec.danhGia})
                        </span>
                      </span>
                       | 4 Orders in Queue
                    </span>
                    <hr className="w-100" />
                  </div>
                  <div className="buyer">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="https://static.vecteezy.com/system/resources/previews/000/653/099/original/vector-trophy-cup-icon.jpg"
                      alt="..."
                    />
                    <span style={{fontSize:'16px'}}>
                      <span className="fw-bold">People keep coming back!</span>{" "}
                      logoflow has an exceptional number of repeat buyers.
                    </span>
                  </div>
                  <div className="img">
                    <img src={item.congViec.hinhAnh} alt="" />
                  </div>
                  <div className="about-gig mt-5 fs-5 ">
                    <h5>About This Gig</h5>
                    <h6 className="my-3">
                      <span style={{ backgroundColor: "#ffecd1" }}>
                       
                        Top Rated Seller with all positive reviews
                      </span>
                    </h6>
                    <div className="description">
                      <p>{item.congViec.moTa}</p>
                    </div>

                    <div className="list-offer ">
                      <h6 className="my-3 fs-5">Things I offer</h6>
                      <ul>
                        <li>CRM development</li>
                        <li>E-commerce Development</li>
                        <li>
                          Custom website development (both front-end and
                          back-end) with Laravel, PHP and MySQL
                        </li>
                        <li>
                          Vue Js, HTML, CSS, Bootstrap, Javascript/Jquery, PHP
                          single/multi web page
                        </li>
                        <li>
                          Complete website creation from scratching using
                          Laravel Rest Api and Vue Js
                        </li>
                        <li>Web Application with proper exception handling</li>
                        <li>
                          Can work with APIs, Integrate API's in your
                          applications.
                        </li>
                        <li>Responsive - Mobile Friendly sites</li>
                        <li>Great UI/UX for your site </li>
                        <li>
                          PSD to HTML, XD to HTML or any other design to HTML
                          with best quality and pixel perfect design
                        </li>
                        <li>
                          Fix issues in front-end or add some changes to it
                        </li>
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
                    <h6>

                      <span style={{ backgroundColor: "#ffecd1" }}>
                        {" "}
                        I will do the work until you are satisfied with fast and
                        responsive communication
                      </span>
                    </h6>
            <hr className="w-100" />
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
                    <div className="about-seller my-5">
                      <h4>About The Seller</h4>
                      <Row>
                        <Col span={4}>
                          <Avatar className="w-100 h-100" src={item.avatar} icon={<UserOutlined />} />
                        </Col>
                        <Col className="ms-3 " span={12}>
                          <h6 style={{marginBottom:'10px',color:'#62646a'}}>{item.tenNguoiTao}</h6>
                          <div className="ms-1">
                            
                            <StarFilled style={{ color: "#ffb33e",fontSize:'16px'  }} />
                            <span style={{ color: "#ffb33e",fontSize:'16px' }}>
                              {item.congViec.saoCongViec}
                            </span>
                            <span style={{ color: "grey ",fontSize:'16px' }} className="danh-gia">
                              ({item.congViec.danhGia})
                            </span>
                          </div>
                          <Button style={{width:'130px',height:'40px',backgroundColor:'transparent',color:'#62646a',border:'1px solid #62646a'}}  className="mt-5" type="primary">Contact Me</Button>
                        </Col>
                      </Row>
                    </div>
                    <div className="faq my-5">
                      <h4>FAG</h4>
                      <div className="row">
                        <div className="col-6 my-2">
                          <h6 >Do you provide regular updates on order</h6>
                        </div>
                        <div className="col-6 " style={{textAlign:'right'}}>
                          <DownOutlined />
                        </div>
                        <hr className="w-100" />
                        <div className="col-6 my-2" >
                          <h6>
                            How do you guarantee product quality and reliability
                          </h6>
                        </div>
                        <div className="col-6" style={{textAlign:'right'}}>
                          <DownOutlined />
                        </div>
                        <hr className="w-100" />
                        <div className="col-6 my-2">
                          <h6>Do you give post-development support</h6>
                        </div>
                        <div className="col-6" style={{textAlign:'right'}}>
                          <DownOutlined />
                        </div>
                        <hr className="w-100" />
                        <div className="col-6 my-2">
                          <h6>Do you convert PSD to HTML</h6>
                        </div>
                        <div className="col-6"  style={{textAlign:'right'}}>
                          <DownOutlined />
                        </div>
                      </div>
                    </div>
                    <div className="rate">
                      <div className="row">
                        <div className="col-6">
                          <h4>
                            355 Reviews
                            <span className="ms-2" style={{color:'#ffb33e'}}><StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />
                            <StarFilled />5</span>
                            
                          </h4>
                        </div>
                        <div className="col-6">
                          <span>
                            Sort by <span className="fw-bold">Most relevant</span>  <DownOutlined />
                          </span>
                        </div>
                        <div className="col-6">
                          <div className="row">
                            <div className="col-3">
                              <p className="text-primary">5 stars</p>
                            </div>
                            <div className="col-7">
                            <span><Progress percent={100} showInfo={false} /></span>
                            </div>
                            <div className="col-2">
                            <span className="text-primary">(333)</span>
                            </div>
                            <div className="col-3">
                              <p className="text-primary">4 stars</p>
                            </div>
                            <div className="col-7">
                            <span><Progress percent={2} showInfo={false} /></span>
                            </div>
                            <div className="col-2">
                            <span className="text-primary">(2)</span>
                            </div>
                            <div className="col-3">
                              <p>3 stars</p>
                            </div>
                            <div className="col-7">
                            <span><Progress percent={0} showInfo={false} /></span>
                            </div>
                            <div className="col-2">
                            <span>(0)</span>
                            </div>
                            <div className="col-3">
                              <p>2 stars</p>
                            </div>
                            <div className="col-7">
                            <span><Progress percent={0} showInfo={false} /></span>
                            </div>
                            <div className="col-2">
                            <span>(0)</span>
                            </div>
                            <div className="col-3">
                              <p>1 star</p>
                            </div>
                            <div className="col-7">
                            <span><Progress percent={0} showInfo={false} /></span>
                            </div>
                            <div className="col-2">
                            <span>(0)</span>
                            </div>
                          </div>
                         
                          
                      </div>
                      <div className="col-6">
                            <h5>Rating Breakdown</h5>
                            <div className="row" style={{color:'grey'}}>
                              <div className="col-7">
                                <h5>Seller communication level </h5>
                              </div>
                              <div className="col-5">
                                5 <StarFilled style={{color:'#ffb33e'}}/>
                              </div>
                              <div className="col-7">
                                <h5>Recommend to a friend</h5>
                              </div>
                              <div className="col-5">
                                5 <StarFilled style={{color:'#ffb33e'}}/>
                              </div>
                              <div className="col-7">
                                <h5>Service as described</h5>
                              </div>
                              <div className="col-5">
                                5 <StarFilled style={{color:'#ffb33e'}}/>
                              </div>
                              
                            </div>
                      </div>
                      </div>
                      
                      <h4>Filters</h4>
                      <span>
                        Industry <span className="fw-bold">All industries</span>  <DownOutlined />
                      </span>
                    </div>
                    <hr className="w-100" />       
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
                              <p className="date">
                                Ngày bình luận: {comment.ngayBinhLuan}
                              </p>
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
                          <Avatar icon={<UserOutlined />} />{" "}
                          <input type="text" />
                        </span>
                      </div>
                      <div className="comment-btn my-3">
                        <Button style={{backgroundColor:'#1CC072',height:'50px'}} type="primary">Thêm Bình Luận</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col span={12}>
                <div className="card-table mt-5 ms-5 ps-5">
                <Card
                  style={{
                    width: 600,
                  }}
                >
                  <Card.Grid style={gridStyle}>Basic</Card.Grid>
                  <Card.Grid style={gridStyleGreen}>Standard</Card.Grid>
                  <Card.Grid style={gridStyle}>Premium</Card.Grid>
                </Card>
                <Card
                  style={{
                    width: 600,
                  }}
                >
                  <div className="card-content row">
                    {arrTaskDetail.map((item, index) => {
                      return (
                        <>
                          <div className="col-6" key={index}>
                            <h5>Standard</h5>
                          </div>
                          <div
                            style={{ textAlign: "right" }}
                            className="col-6"
                            key={index}
                          >
                            <h3>${item.congViec.giaTien}</h3>
                          </div>
                          <p style={{fontSize:'18px'}} className="my-5">
                            Create a simple web application for your business
                          </p>
                          <h6>
                            <span >
                              <ClockCircleOutlined className="me-2"/>
                              30 Days Delivery
                            </span>
                            <span className="ms-3">
                              <SyncOutlined  className="me-2"/>1 Revision
                            </span>
                          </h6>
                          <div className="mo-ta-ngan">
                            <ul style={{listStyle:'none', paddingLeft:'0px'}}>
                              <li className="my-2">
                                <span style={{color:'#95979d',fontSize:'18px'}}><CheckOutlined style={{color:'#1CC072'}}/></span> Design Customization
                              </li>
                              <li className="my-2">
                                <span style={{color:'#95979d',fontSize:'18px'}}><CheckOutlined  style={{color:'#1CC072'}}/></span> Content Upload
                              </li>
                              <li className="my-2">
                                <span style={{color:'#95979d',fontSize:'18px'}}><CheckOutlined style={{color:'#1CC072'}}/></span> Responsive Design
                              </li>
                              <li className="my-2">
                                <span style={{color:'#95979d',fontSize:'18px'}}><CheckOutlined style={{color:'#1CC072'}}/></span> Include Source Code
                              </li>
                              <li className="my-2">
                                <span style={{color:'#95979d',fontSize:'18px'}}><CheckOutlined style={{color:'#1CC072'}}/></span> 1 Page
                              </li>
                            </ul>
                          </div>
                          <div className="btn">
                            <Button style={{backgroundColor:'#1CC072',height:'50px'}} type="primary" block>
                             Continue (${item.congViec.giaTien})
                            </Button>
                          
                          </div>
                          <p style={{color:'#1CC072'}} className="text-center mt-2">Compare Packages</p>
                        </>
                      );
                    })}
                  </div>
                </Card>
                </div>
                
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default TaskDetail;
