import { useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

import lineSmall from "../assets/images/line-small.png";

const Login = () => {
  // 管理表單資料
  // const [formData, setFormData] = useState({
  //   email: "alicehung@gmail.com",
  //   password: "",
  // });

  // 登入狀態管理
  // 從 context 中解構出 isAuth, setIsAuth, userId, setUserId
  const [isAuth, setIsAuth] = useOutletContext();

  const navigate = useNavigate();

  // 表單驗證
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 登入表單輸入處理
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   // console.log(name, value);
  //   setFormData((preData) => ({
  //     ...preData,
  //     [name]: value,
  //   }));
  // };

  // 串接登入Api
  const onSubmit = async (formData) => {
    try {
      // e.preventDefault(); //避免onSubmit預設事件
      const response = await axios.post(
        "https://json-server-auth-ferment.onrender.com/login",
        formData,
      );

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
      Swal.fire({
        title: "登入成功!",
        text: "歡迎回來~",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/accountManage");
    } catch (error) {
      setIsAuth(false);
      Swal.fire({
        title: "登入失敗!",
        text: "帳號或密碼輸入錯誤",
        icon: "error",
        confirmButtonText: "OK",
      });
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
        <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "請輸入Email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email 格式不正確",
                },
              })}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "請輸入密碼",
                minLength: {
                  value: 8,
                  message: "密碼不少於8位數",
                },
              })}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn-filled-primary w-100 mt-5 mb-5"
            disabled={!isValid}
          >
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
