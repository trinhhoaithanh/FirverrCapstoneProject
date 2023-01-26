import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const UserLogin = () => {
  const dispatch = useDispatch();
  const form = useFormik({
      initialValues:{
        email:'',
        password:''
      },
      validationSchema:yup.object().shape({
        email:yup.string().required("Email không được bỏ trống"),
        password:yup.string().required('Mật khẩu không được bỏ trống')
      }),
      onSubmit:(values)=>{
        const actionAsync=loginApi(values);
        dispatch(actionAsync);
      }
  })
  return (
    <div style={{ backgroundColor: "#003C15",padding:'30px' }}>
      <div className="card container">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <img className="w-100 rounded" src="./img/loginbg.jpg" alt="" />
            </div>
            <div className="col-6">
            <h1 style={{color:'#003C15'}} className="text-center">Login To Fiverr</h1>
            <form className="container" onSubmit={form.handleSubmit}>
            <div className="form-group my-5">
          <h5 className="m-0 text-dark">Email</h5>
          <input
            placeholder="Vui lòng nhập email"
            className="form-control"
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.email && (
            <p className="text-danger">{form.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <h5 className="m-0 text-dark">Mật khẩu</h5>
          <input
          type='password'
            placeholder="Vui lòng nhập mật khẩu"
            className="form-control"
            name="password"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.password && (
            <p className="text-danger">{form.errors.password}</p>
          )}
        </div>
        <div className="row mt-5">
              <div className="col-6" style={{paddingLeft:'150px'}}>
                <button type="submit" style={{padding:'15px 30px'}} className="btn btn-success">Đăng Nhập</button>
              </div>
              <div className="col-6 ps-5">
              <button  style={{padding:'15px 30px'}} className="btn btn-warning text-white"><NavLink  className="nav-link active"
                to="/registerUser"
                aria-current="page">Đăng ký</NavLink></button>
              </div>
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
