import {
  Dropdown,
  Space,
  Form,
  Input,
  Select,
  Card,
  Button,
  Alert,
  Avatar,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../index.js";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import {
  getJobListApi,
  getTaskListApi,
} from "../../../redux/reducers/popularReducer";
import {
  getProfileApi,
  updateProfileApi,
} from "../../../redux/reducers/userReducer.jsx";
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const UserProfile = () => {
  const { userProfile } = useSelector((state) => state.userReducer);
  const { arrJobList } = useSelector((state) => state.popularReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { arrTaskList } = useSelector((state) => state.popularReducer);

  useEffect(() => {
    const action = getTaskListApi();
    dispatch(action);
  }, []);
  const items = [];
  const onSubmit = (values) => {
    const updateProfile = updateProfileApi(values);
    dispatch(updateProfile);
  };
  useEffect(() => {
    const getProfile = getProfileApi();

    dispatch(getProfile);

    form.setFieldsValue(userProfile);
  }, []);

  return (
    <div className="profile">
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
      <div className="container">
        <div className="profile-layout row">
          <div className="profile-left col-4">
            <Card
              className="mb-5"
              extra={
                <Button
                  className="rouded"
                  size="small"
                  style={{ color: "green", border: "1px solid green" }}
                >
                  online
                </Button>
              }
              style={{
                width: 500,
              }}
            >
              <div className="user-info text-center">
                <Avatar size={200} icon={<UserOutlined />} />
                <p>name</p>
                <EditOutlined />
              </div>
              <hr />
              <div className="destination">
                <div className="row">
                  <div className="col-6">
                    <p>From</p>
                  </div>
                  <div className="col-6" style={{ textAlign: "right" }}>
                    <p>Vietnam</p>
                  </div>
                  <div className="col-6">
                    <p>Member since</p>
                  </div>
                  <div className="col-6" style={{ textAlign: "right" }}>
                    <p>May 2021</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              style={{
                width: 500,
              }}
            >
              <div className="email-profile">
                <Form
                  layout="vertical"
                  name="basic"
                  form={form}
                  wrapperCol={{ span: 25 }}
                  onFinish={onSubmit}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <Input className="input-form-login" />
                  </Form.Item>
                  <hr />
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true }]}
                  >
                    <Input className="input-form-login" />
                  </Form.Item>

                  <hr />

                  <Form.Item
                    label="Skill"
                    name="skill"
                    rules={[{ required: true }]}
                  >
                    <Input className="input-form-login" />
                  </Form.Item>

                  <Form.Item
                    label="Certificate"
                    name="certificate"
                    rules={[{ required: true }]}
                  >
                    <Input className="input-form-login" />
                  </Form.Item>
                  <hr />
                  <Form.Item>
                    <Button
                      className="bg-primary text-white"
                      style={{ height: "50px" }}
                      type="submit"
                      block
                    >
                      Update
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </div>
          <div className="profile-right col-6 " style={{marginLeft:'150px'}}>
            <div className="noti">
            <Card
              style={{
                width: 700,
              }}
            >
              <p><span>Buying services for work?</span> Help us tallor yor experience to fit your needs. <span> Tell us more about your business</span></p>
            </Card>
            </div>
            <div className="gig">
            <Card
              style={{
                width: 700,
              }}
              className="mt-3"
            >
              <div className="row">
                <div className="col-7">
                  <p>It seems that you don't have any active Gigs. Get selling</p>
                </div>
                <div className="col-5" style={{textAlign:'right'}}>
                <Button
                      className="text-white"
                      style={{ height: "50px", backgroundColor:'#19C074' }}
                      type="submit"
                      
                    >
                      Create a New Gig
                    </Button>
</div>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
