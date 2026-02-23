import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoSmall from "../assets/images/logo-small.png";
import whiteLogo from "../assets/images/logo-110-112.png";

const FrontEndLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
                    <NavLink className="nav-link fw-bold text-primary" to="#">
                      登入/註冊
                    </NavLink>
                  </li>
                </ul>

                {/* 未登入狀態 */}
                <div id="auth-block">
                  <button
                    id="loginBtn"
                    className="btn-filled-primary d-none d-lg-block"
                    type="button"
                  >
                    登入/註冊
                  </button>
                </div>

                {/* 已登入狀態 */}
                {/* <div id="member-block" className="dropdown d-none ms-3">
                                    <a
                                        className="d-flex align-items-center dropdown-toggle"
                                        href="#"
                                        id="memberMenu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="../assets/images/profile-pic-1.svg"
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
                                            <a className="dropdown-item my-3" href="#"
                                            ><i className="bi bi-person-circle me-1"></i> 個人資料管理</a
                                            >
                                        </li>
                                        <li>
                                            <a className="dropdown-item my-3" href="#"
                                            ><i className="bi bi-receipt me-1"></i> 訂單記錄</a
                                            >
                                        </li>
                                        <li>
                                            <a id="logoutBtn" className="dropdown-item my-3" href="#"
                                            ><i className="bi bi-box-arrow-right me-1"></i> 登出</a
                                            >
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
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
    </div>
  );
};

export default FrontEndLayout;
