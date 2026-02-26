import lineSmall from "../../assets/images/line-small.png";
import userSelfie from "../../assets/images/user-selfie.png";
import upgradeBar from "../../assets/images/upgrade-bar.png";
import { Link } from "react-router-dom";

const AccountManage = () => {
  return (
    <>
      <div className="container pt-lg-152 pt-112">
        <div className="account-container mx-auto">
          {/* 標題 */}
          <div className="mb-7 mb-lg-11 text-center">
            <h2 className="section-title fs-2 fs-lg-1 text-primary">
              My Account
            </h2>
            <img src={lineSmall} alt="" />
          </div>
          {/* 頭像 */}
          <div className="mb-7 mb-lg-8">
            <div className="user-pic position-relative mx-auto">
              <img
                src={userSelfie}
                alt="使用者頭像"
                className="user-pic-image rounded-circle"
              />
              <button
                type="button"
                className="edit-btn rounded-circle position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center border border-2 border-primary"
              ></button>
            </div>
          </div>
          {/* 訂單概況 */}
          <div className="border border-4 border-secondary-300 rounded-3 position-relative mb-5">
            <div className="text-center m-5">
              <h2 className="section-title fs-2 text-primary">Order Status</h2>
            </div>
            <Link
              to="/"
              className="order-list-btn align-items-center py-3 position-absolute d-none d-lg-flex"
            >
              <h4 className="fs-9 fw-bold">查看訂單列表</h4>
              <i class="bi bi-arrow-right-short fs-6"></i>
            </Link>
            <div className="d-flex mb-5 mx-5 justify-content-around">
              <div className="text-center">
                <h2 className="section-title fs-2 mb-2">0</h2>
                <p>待出貨</p>
              </div>
              <div className="text-center">
                <h2 className="section-title fs-2 mb-2">1</h2>
                <p>已出貨</p>
              </div>
              <div className="text-center">
                <h2 className="section-title fs-2 mb-2">0</h2>
                <p>待收貨</p>
              </div>
            </div>
          </div>
          {/* 會籍與年度消費 */}
          <div className="row mb-5">
            {/* 會籍 子元素的position-relative是為了設定背景圖透明度 */}
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="border border-4 border-secondary-300 rounded-3 hero-bg-50 text-end p-6">
                <h2 className="section-title fs-2 text-primary mb-8 position-relative">
                  Topping Master
                </h2>
                <h3 className="fs-6 fw-bold mb-2 position-relative">
                  Alice Hung
                </h3>
                <p className="position-relative">每消費NT$ 5 元，得 3 點</p>
              </div>
            </div>
            {/* 年度消費 */}
            <div className="col-12 col-lg-6">
              <div className="border border-4 border-secondary-300 rounded-3 p-5">
                <div className="row mb-5">
                  <div className="col-6">
                    <p className="mb-2">會籍到期日</p>
                    <h4 className="fs-8 fw-bold">2025/12/31</h4>
                  </div>
                  <div className="col-6">
                    <p className="mb-2">年度累積消費</p>
                    <h4 className="fs-8 fw-bold">NT$ 2,800</h4>
                  </div>
                </div>
                <div>
                  <p className="mb-3">還差 NT$ 7,200</p>
                  <img src={upgradeBar} alt="" className="upgrade-bar mb-3" />
                  <div className="d-flex">
                    <p className="me-auto">Topping Master</p>
                    <p>Pizza Legend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 個人資料 */}
          <div className="mb-10">
            {/* 名稱 */}
            <div className="user-info d-flex justify-content-between align-items-center border-bottom border-1 border-gray-200">
              <div>
                <p className="mb-2">名稱</p>
                <h4 className="fs-8 fw-bold">Alice Hung</h4>
              </div>
              <button
                className="edit-btn rounded-circle d-flex justify-content-center align-items-center border border-2 border-primary"
                type="button"
              ></button>
            </div>
            {/* 編號 */}
            <div className="user-info d-flex justify-content-between align-items-center border-bottom border-1 border-gray-200">
              <div>
                <p className="mb-2">編號</p>
                <h4 className="fs-8 fw-bold">FAH202512201350</h4>
              </div>
              <button
                className="copy-btn rounded-circle d-flex justify-content-center align-items-center border border-2 border-primary"
                type="button"
              ></button>
            </div>
            {/* Email */}
            <div className="user-info d-flex justify-content-between align-items-center border-bottom border-1 border-gray-200">
              <div>
                <p className="mb-2">Email</p>
                <h4 className="fs-8 fw-bold">alicehung@gmail.com</h4>
              </div>
              <button
                className="edit-btn rounded-circle d-flex justify-content-center align-items-center border border-2 border-primary"
                type="button"
              ></button>
            </div>
            {/* 電話 */}
            <div className="user-info d-flex justify-content-between align-items-center border-bottom border-1 border-gray-200">
              <div>
                <p className="mb-2">電話</p>
                <h4 className="fs-8 fw-bold">0987654321</h4>
              </div>
              <button
                className="edit-btn rounded-circle d-flex justify-content-center align-items-center border border-2 border-primary"
                type="button"
              ></button>
            </div>
            {/* 地址 */}
            <div className="user-info d-flex justify-content-between align-items-center border-bottom border-1 border-gray-200">
              <div>
                <p className="mb-2">地址</p>
                <h4 className="fs-8 fw-bold">台東縣無限區好吃鄉666號1樓</h4>
              </div>
              <button
                className="edit-btn rounded-circle d-flex justify-content-center align-items-center border border-2 border-primary"
                type="button"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManage;
