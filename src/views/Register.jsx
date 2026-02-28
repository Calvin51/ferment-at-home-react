import axios from "axios";

import lineSmall from "../assets/images/line-small.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  // 管理表單資料
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

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

  // 串接註冊Api
  const onSubmit = async (formData) => {
    try {
      // e.preventDefault(); //避免onSubmit預設事件
      const response = await axios.post(
        "https://json-server-auth-ferment.onrender.com/register",
        formData,
      );
      alert("註冊成功，前往登入");
      navigate("/login");
      // console.log(response);
    } catch (error) {
      alert("註冊失敗", error.response);
    }
  };

  return (
    <>
      <div className="container login-wrapper d-flex flex-column align-items-center justify-content-center">
        <div className="mb-5 mb-lg-8 text-center">
          <h1 className="section-title fs-2 fs-lg-1 text-primary ">
            Member Register
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
            註冊
          </button>
          <button
            type="button"
            className="btn-outline-primary w-100"
            onClick={() => {
              navigate("/login");
            }}
          >
            已擁有會員帳號? 前往登入
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
