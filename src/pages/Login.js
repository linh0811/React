import React from 'react';
import { useForm } from 'react-hook-form';
import LoginForm from '../components/LoginForm';
import { login,register } from '../services/AuthService';
import RegisterForm from '../components/RegisterForm';
const Login = () => {
  
const handleLogin = async (user)=>{
  if(user.email && user.password){
    try {
      const res = await  login(user);
      console.log(res);
      alert("dang nhap thanh cong");
      let jsonData = JSON.stringify(res.data);
      localStorage.setItem("login",jsonData);
      window.location.href="/";
    } catch (error) {
      console.log("Errror deleting product:", error);
      alert("sai ten dang nhap hoac mat khau");
    }
  }
}
const  handleRegister = async (user)=>{
  if (user.password !== user.rePassword)
{
  alert(" Mat khẩu không trung khớp");

} else{
  if(
    user.name &&
    user.password &&
    user.email &&
    user.phone
  ){
    try {
      const res = await register(user);
      console.log(res);
      alert('Đăng ký thành công ');
      window.location.href="/";
    } catch (error) {
      console.log("Error deleting product:", error);
      alert("Đăng ký thành công");
    }
  } else{
    alert("vui lòng nhâp hơpj lệ");
    return console.log("không hợp lệ");
  }
}}
  return (
    <div className="section loginbackground">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h2 className="mb-4 pb-3">Đăng nhập</h2>
                       <LoginForm onLogin={handleLogin}></LoginForm>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">Forgot your password?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h2 className="mb-4 pb-3">Đăng ký</h2>
                        <RegisterForm onRegister={handleRegister}></RegisterForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
