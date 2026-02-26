import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

import lineSmall from "../assets/images/line-small.png";

const Login = () => {
  // 管理表單資料
  const [formData, setFormData] = useState({
    email: "alicehung@gmail.com",
    password: "",
  });
  // 登入狀態管理
  // 從 context 中解構出 isAuth, setIsAuth
  const [isAuth, setIsAuth] = useOutletContext();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  // 串接登入Api
  const onSubmit = async (e) => {
    try {
      e.preventDefault(); //避免onSubmit預設事件
      const response = await axios.post(
        "https://json-server-auth-ferment.onrender.com/login",
        formData,
      );
      //   console.log(response);

      const { accessToken } = response.data;
      // 設定 Cookie (max-age=3600: 強制讓 Cookie 有效存在 1 小時，與 Token 同步。 SameSite=Strict: 防止 CSRF 攻擊。)
      document.cookie = `pizzaToken=${accessToken}; SameSite=Strict; Secure; max-age=3600`;
      // 修改實體建立時所指派的預設配置
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      // // 讀取 Cookie
      //   const token = document.cookie
      //     .split("; ")
      //     .find((row) => row.startsWith("pizzaToken="))
      //     ?.split("=")[1];
      //   console.log(token);
      setIsAuth(true);
      alert("登入成功");
      navigate("/accountManage");
    } catch (error) {
      setIsAuth(false);
      alert("登入失敗", error.response);
      console.log(isAuth);
    }
  };

  return (
    <>
      <div className="container login-wrapper d-flex flex-column align-items-center justify-content-center">
        <div className="mb-5 mb-lg-8 text-center">
          <h1 className="section-title fs-2 fs-lg-1 text-primary ">
            Member Login
          </h1>
          <img src={lineSmall} alt="" />
        </div>
        <form className="form-floating" onSubmit={(e) => onSubmit(e)}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn-filled-primary w-100 mt-5 mb-5">
            登入
          </button>
          <button
            type="button"
            className="btn-outline-primary w-100"
            onClick={() => {
              navigate("/register");
            }}
          >
            尚未擁有會員帳號? 點此建立
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
