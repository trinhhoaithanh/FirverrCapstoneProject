import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {  registerApi } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const UserLogin = () => {
  const dispatch = useDispatch();
  const form = useFormik({
      initialValues:{
        hoTen:'',
        password:'',
        email:'',
        phone:''

      },
      validationSchema:yup.object().shape({
        taiKhoan:yup.string().required('Tài khoản không được bỏ trống'),
        password:yup.string().required('Mật khẩu không được bỏ trống'),
        passwordconfirm:yup.string().required('Mật khẩu không được bỏ trống'),
        hoTen:yup.string().required('Họ tên không được bỏ trống'),
        email:yup.string().required('Email không được bỏ trống').email('Email không hợp lệ'),
        phone:yup.string().required('Số điện thoại không được bỏ trống').matches(/^[0-9]+$/),
      }),
      onSubmit:(values)=>{
        const actionAsync=registerApi(values);
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
            <h1 style={{color:'#003C15'}} className="text-center">Fiverr Registation</h1>
            <form className="container" onSubmit={form.handleSubmit}>
            <div className="form-group my-5">
            <h5 className="m-0 text-dark">Tài khoản</h5>
          <input
            placeholder="Vui lòng nhập tài khoản"
            className="form-control"
            name="taiKhoan"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.taiKhoan && (
            <p className="text-danger">{form.errors.taiKhoan}</p>
          )}
        </div>
        <div className="form-group my-5">
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
        <div className="form-group my-5">
        <h5 className="m-0 text-dark">Nhập Lại Mật khẩu</h5>
          <input
          type='password'
            placeholder="Vui lòng nhập lại mật khẩu"
            className="form-control"
            name="passwordconfirm"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.passwordconfirm && (
            <p className="text-danger">{form.errors.passwordconfirm}</p>
          )}
        </div>
        <div className="form-group my-5">
        <h5 className="m-0 text-dark">Họ Tên</h5>
          <input
          type='text'
            placeholder="Vui lòng nhập họ tên"
            className="form-control"
            name="hoTen"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.hoTen && (
            <p className="text-danger">{form.errors.hoTen}</p>
          )}
        </div>
        <div className="form-group my-5">
        <h5 className="m-0 text-dark">Email</h5>
          <input
          type='email'
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
        <div className="form-group my-5">
        <h5 className="m-0 text-dark">Số Điện Thoại</h5>
          <input
        
            placeholder="Vui lòng nhập số điện thoại"
            className="form-control"
            name="phone"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.soDienThoai && (
            <p className="text-danger">{form.errors.soDienThoai}</p>
          )}
        </div>
        <div className="row mt-5">
              <div className="col-6" style={{paddingLeft:'150px'}}>
                <button type="submit" style={{padding:'15px 40px'}} className="btn btn-success">Đăng Ký</button>
              </div>
              <div className="col-6 ps-5">
              <button style={{padding:'15px 30px'}} className="btn btn-warning text-white" ><NavLink  className="nav-link active"
                to="/loginUser"
                aria-current="page">Đăng Nhập</NavLink></button>
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
