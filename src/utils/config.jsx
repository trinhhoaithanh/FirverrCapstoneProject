
import axios from 'axios';
import { history } from '../index';
import { isExpired, decodeToken } from "react-jwt";

export const ACCESS_TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';
export const USER_PROFILE = "userProfile";
export const USER_REGISTER  = "userRegister";
export const USER_UPDATE  = "userUpdate";

export const { saveStore,saveStoreJson,getStore,getStoreJson,removeStore} = {
    saveStore: (name, stringValue) => {
        localStorage.setItem(name, stringValue);
        return stringValue;
      },
      saveStoreJson: (name, object) => {
        let stringObject = JSON.stringify(object);
        localStorage.setItem(name, stringObject);
        return stringObject;
      },
      getStore: (name) => {
        if (localStorage.getItem(name)) {
          return localStorage.getItem(name);
        }
        return null;
      },
      getStoreJson: (name) => {
        if (localStorage.getItem(name)) {
          return JSON.parse(localStorage.getItem(name));
        }
        return null;
      },
      removeStore: (name) => {
        if (localStorage.getItem(name)) {
          return localStorage.removeItem(name);
        }
      },
}

const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c'

//Cấu hình cho tất các request api
export const callApi = (method, endPoint, params, data) =>{
    let newParam = ''
    if(params){
        for (const [key, value] of Object.entries(params)) {
            newParam = newParam + key + '=' + value + '&'
        }
        newParam = newParam.substring(0, newParam.length - 1);
    }else {
        params = {}
    }
    return http({
        method,
        baseURL: 'https://fiverrnew.cybersoft.edu.vn' + endPoint + `${Object.keys(params).length>0 ? '?' + newParam : ''}`,
        data
    })
}

export const http = axios.create({
    baseURL:'https://fiverrnew.cybersoft.edu.vn',
    timeout:30000
})


http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        TokenCybersoft: TOKEN_CYBERSOFT
    };
    return config;
}, (err) => {
    return Promise.reject(err);
})


//Cấu hình cho tất cả các response api
http.interceptors.response.use((res)=>{
    return res;
}, (err) => {
    
    //Bắt lỗi 400 hoặc 404
    
    if(err.response?.status === 400 || err.response?.status === 404) {
        //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý
        // alert('Tài khoản đã được đăng ký');
        //chuyển hướng về home
        // history.push('/');
    }
    if (err.response?.status === 401 || err.response?.status === 403) {
        const isMyTokenExpired = isExpired(getStore(ACCESS_TOKEN));
        if (isMyTokenExpired) {
          alert("Hết phiên đăng nhập yêu cầu đăng nhập lại !");
          removeStore(ACCESS_TOKEN);
          removeStore(USER_LOGIN);
          window.location.href = "/login";
        }
        history.push("/login");
      }
      return Promise.reject(err);
})


/* Các status code thường gặp
    200: Request gửi đi và nhận về kết quả thành công
    201: request gửi đi thành công và đã được khởi tạo 
    400: bad request => request gửi đi thành công tuy nhiên không tìm thấy dữ liệu từ tham số gửi đi
    404: Not found (Không tìm thấy api đó), hoặc tương tự 400
    401: Unauthorize token không hợp lệ không có quyền truy cập vào api đó
    403: Forbinden token hợp lệ tuy nhiên chưa đủ quyền để truy cập vào api đó
    500: Error server (Lỗi xảy ra trên server có khả năng là frontend gửi dữ liệu chưa hợp lệ dẫn đến backend xử lý bị lỗi). Backend code lỗi trên server ! => Test bằng post man hoặc swagger nếu api không lỗi => front code sai, ngược lại tail fail trên post man và swagger thì báo backend fix.

*/