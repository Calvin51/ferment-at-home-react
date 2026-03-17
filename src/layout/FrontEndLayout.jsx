import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoSmall from "../assets/images/logo-small.png";
import whiteLogo from "../assets/images/logo-110-112.png";
import userSelfie from "../assets/images/user-selfie.png";
import axios from "axios";
// import Swal from "sweetalert2";

const FrontEndLayout = () => {
  // 登入狀態管理
  const [isAuth, setIsAuth] = useState(false);
  // 手機版漢堡選單開關狀態管理
  const [isOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate();

  // 身分驗證
  useEffect(() => {
    const checkLogin = async () => {
      try {
        // 讀取 Cookie
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("pizzaToken="))
          ?.split("=")[1];
        // console.log("目前token", token);
        // 先寫死id之後改
        const res = await axios.get(
          `https://json-server-auth-ferment.onrender.com/600/users/1`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 注意 Bearer 後方有一個空格
            },
          },
        );
        // console.log(res.status);
        if (res.status === 200) {
          setIsAuth(true);
        } else {
          return;
        }
      } catch {
        setIsAuth(false);
        // Swal.fire({
        //   title: "身分驗證失敗!",
        //   text: "請重新登入",
        //   icon: "error",
        //   confirmButtonText: "OK",
        // });
        // navigate("/login");
      }
    };
    checkLogin();
  }, []);

  // 登出
  const handleLogout = () => {
    setIsAuth(false);
    document.cookie = `pizzaToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return (
    <>
      {!isAuth ? (
        <header>
          <div className="fixed-top z-3">
            <nav
              className="navbar navbar-expand-lg py-4 bg-white blurred-background"
              style={{ "--bs-bg-opacity": "0.04" }}
            >
              <div className="container-lg">
                {/* Logo */}
                <NavLink className="navbar-brand py-0" to="/">
                  <img
                    src={logo}
                    alt="Ferment-at-home"
                    className="d-none d-lg-block"
                  />
                  <img
                    src={logoSmall}
                    alt="Ferment-at-home"
                    className="d-lg-none"
                  />
                </NavLink>

                {/* 手機版漢堡選單 */}
                <button
                  className="navbar-toggler border border-2 border-primary rounded-circle p-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-primary fs-6">
                    <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* 未登入導覽連結 */}
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/products">
                        商品列表
                      </NavLink>
                    </li>
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/about">
                        品牌故事
                      </NavLink>
                    </li>
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/fqa">
                        常見問題
                      </NavLink>
                    </li>
                    <li className="nav-item me-5 d-block d-lg-none">
                      <NavLink
                        className="nav-link fw-bold text-primary"
                        to="/login"
                      >
                        登入/註冊
                      </NavLink>
                    </li>
                  </ul>

                  {/* 未登入狀態 */}
                  <div id="auth-block">
                    <Link
                      id="loginBtn"
                      className="btn-filled-primary d-none d-lg-block"
                      type="button"
                      to="/login"
                    >
                      登入/註冊
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <header>
          <div className="fixed-top z-3">
            <nav
              className="navbar navbar-expand-lg py-4 bg-white blurred-background"
              style={{ "--bs-bg-opacity": "0.04" }}
            >
              <div className="container-lg">
                {/* Logo */}
                <NavLink className="navbar-brand py-0" to="/">
                  <img
                    src={logo}
                    alt="Ferment-at-home"
                    className="d-none d-lg-block"
                  />
                  <img
                    src={logoSmall}
                    alt="Ferment-at-home"
                    className="d-lg-none"
                  />
                </NavLink>

                {/* 手機版漢堡選單 */}
                <button
                  className="navbar-toggler border border-2 border-primary rounded-circle p-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-primary fs-6">
                    <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* 已登入導覽連結 */}
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/products">
                        商品列表
                      </NavLink>
                    </li>
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/about">
                        品牌故事
                      </NavLink>
                    </li>
                    <li className="nav-item me-5">
                      <NavLink className="nav-link fw-bold" to="/fqa">
                        常見問題
                      </NavLink>
                    </li>
                    <li className="nav-item me-5 d-block d-lg-none">
                      <NavLink
                        className="nav-link fw-bold text-primary"
                        to="/accountManage"
                      >
                        個人資料管理
                      </NavLink>
                    </li>
                    <li className="nav-item me-5 d-block d-lg-none">
                      <NavLink className="nav-link fw-bold text-primary" to="#">
                        訂單記錄
                      </NavLink>
                    </li>
                    <li className="nav-item me-5 d-block d-lg-none">
                      <NavLink
                        className="nav-link fw-bold text-primary"
                        to="/"
                        onClick={() => handleLogout()}
                      >
                        登出
                      </NavLink>
                    </li>
                  </ul>

                  {/* 已登入狀態 */}
                  <div id="member-block" className="dropdown ms-3">
                    <a
                      className="d-flex align-items-center dropdown-toggle"
                      href="#"
                      id="memberMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={userSelfie}
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="會員頭像"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end mx-4 my-2"
                      aria-labelledby="memberMenu"
                    >
                      <li>
                        <Link
                          className="dropdown-item my-3"
                          to="/accountManage"
                        >
                          <i className="bi bi-person-circle me-1"></i>{" "}
                          個人資料管理
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item my-3" to="#">
                          <i className="bi bi-receipt me-1"></i> 訂單記錄
                        </Link>
                      </li>
                      <li>
                        <Link
                          id="logoutBtn"
                          className="dropdown-item my-3"
                          to="/"
                          onClick={() => handleLogout()}
                        >
                          <i className="bi bi-box-arrow-right me-1"></i> 登出
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )}
      <main>
        {/* 用context 而不是 props 傳遞資料 */}
        <Outlet context={[isAuth, setIsAuth]} />
      </main>
      <footer className="container-fluid bg-primary py-8 rounded-top-5">
        <div className="container text-center">
          <img src={whiteLogo} alt="logo" className="mb-5" />
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li className="me-5">
              <NavLink
                to="/products"
                className="link-white lh-sm footer-link d-block fw-bold"
              >
                商品列表
              </NavLink>
            </li>
            <li className="me-5">
              <NavLink
                to="/about"
                className="link-white lh-sm footer-link d-block fw-bold"
              >
                品牌故事
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fqa"
                className="link-white lh-sm footer-link d-block fw-bold"
              >
                常見問題
              </NavLink>
            </li>
          </ul>
          <p className="text-white fs-10 fs-sm-9">
            &copy; 2026 Ferment at Home Inc. All Rights Reserved.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li className="me-5">
              <NavLink
                to="#"
                className="link-white lh-sm footer-link d-block fw-bold"
              >
                隱私權政策
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="link-white lh-sm footer-link d-block fw-bold"
              >
                使用者條款
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FrontEndLayout;
