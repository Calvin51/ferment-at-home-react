import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import indexSmTitle from "../../assets/images/index-sm-title.png";
import indexTitle from "../../assets/images/index-title.png";
import pizzaBannerOne from "../../assets/images/pizza-banner-1.png";
import pizzaBannerTwo from "../../assets/images/pizza-banner-2.png";
import pizzaBannerThree from "../../assets/images/pizza-banner-3.png";
import lineSmall from "../../assets/images/line-small.png";
import arrowRightCircle from "../../assets/images/arrow_right_circle.png";
import videoFrame from "../../assets/images/video_frame_169.svg";
import quartetOne from "../../assets/images/quartet_1.png";
import quartetTwo from "../../assets/images/quartet_2.png";
import quartetThree from "../../assets/images/quartet_3.png";
import quartetFour from "../../assets/images/quartet_4.png";
import stepFrame from "../../assets/images/step-frame.png";
import tomato from "../../assets/images/tomato.png";
import tomatoHalf from "../../assets/images/tomato-half.png";
import momentOne from "../../assets/images/moment_1.png";
import momentTwo from "../../assets/images/moment_2.png";
import momentThree from "../../assets/images/moment_3.png";

import profilePicOne from "../../assets/images/profile-pic-1.svg";
import profilePicTwo from "../../assets/images/profile-pic-2.svg";
import profilePicThree from "../../assets/images/profile-pic-3.svg";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      {/* <!-- banner區塊 --> */}
      <div className="container-fluid hero-bg position-relative pt-200 pt-lg-252 px-0">
        {/* <!-- banner標題small --> */}
        <img
          src={indexSmTitle}
          alt="材料包都在這裡，去做披薩吧！"
          className="d-lg-none d-block mx-auto mb-5"
        />
        {/* <!-- banner按鈕 --> */}
        <Link to="/products">
          <button
            className="btn-outline-primary px-7 banner-button position-absolute bottom-200 start-50 translate-middle-x z-2 d-lg-block d-none"
            type="button"
          >
            開始發酵
          </button>
        </Link>
        {/* <!-- banner按鈕small --> */}
        <Link to="/products">
          <button
            className="btn-filled-primary px-7 banner-button d-block d-lg-none mx-auto mb-7"
            type="button"
          >
            開始發酵
          </button>
        </Link>

        {/* <!-- 輪播圖 --> */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade position-relative"
          data-bs-ride="carousel"
        >
          {/* <!-- banner標題 --> */}
          <img
            src={indexTitle}
            alt="材料包都在這裡，去做披薩吧！"
            className="d-lg-block d-none position-absolute banner-title start-50 translate-middle-x"
          />
          {/* <!-- 輪播圖圖片 --> */}
          <div className="carousel-inner container-xxl banner-box px-0">
            <div className="carousel-item active">
              <img
                src={pizzaBannerOne}
                className="d-block banner-image"
                alt="瑪格麗特"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pizzaBannerTwo}
                className="d-block banner-image"
                alt="美式臘腸"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pizzaBannerThree}
                className="d-block banner-image"
                alt="披薩"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 最新消息 --> */}
      <section className="container py-6 py-lg-10">
        <div className="text-center">
          {/* <!-- 標題 --> */}
          <div className="mb-5 mb-lg-8">
            <h2 className="section-title fs-2 fs-lg-1 text-primary">
              Latest News
            </h2>
            <img src={lineSmall} alt="" />
          </div>
          {/* <!-- 消息內容 --> */}
          <ul className="list-unstyled mb-5 mb-lg-8">
            <li className="d-flex align-items-center border-dashed">
              <div className="bg-secondary rounded-pill px-4 news-date me-4">
                <p className="lh-sm fs-11 fs-lg-10 text-primary">2025.08.20</p>
              </div>
              <div className="d-flex align-items-center flex-grow-1 news-content py-5 cursor">
                <p className="fs-9 fs-lg-8 news-text">
                  全新｜創意家庭派對包限量開賣！
                </p>
                <img src={arrowRightCircle} alt="" className="ms-auto" />
              </div>
            </li>
            <li className="d-flex align-items-center border-dashed">
              <div className="bg-secondary rounded-pill px-4 news-date me-4">
                <p className="lh-sm fs-11 fs-lg-10 text-primary">2025.08.08</p>
              </div>
              <div className="d-flex align-items-center flex-grow-1 news-content py-5 cursor">
                <p className="fs-9 fs-lg-8 news-text">
                  週末直播｜一起做 Pizza，零失敗上手！
                </p>
                <img src={arrowRightCircle} alt="" className="ms-auto" />
              </div>
            </li>
            <li className="d-flex align-items-center border-dashed">
              <div className="bg-secondary rounded-pill px-4 news-date me-4">
                <p className="lh-sm fs-11 fs-lg-10 text-primary">2025.07.25</p>
              </div>
              <div className="d-flex align-items-center flex-grow-1 news-content py-5 cursor">
                <p className="fs-9 fs-lg-8 news-text">
                  秋季限定｜客製口味披薩包，讓家變披薩工坊
                </p>
                <img src={arrowRightCircle} alt="" className="ms-auto" />
              </div>
            </li>
          </ul>
          {/* <!-- 查看更多按鈕 暫時設定為空連結--> */}
          <a href="#" onClick={(e) => e.preventDefault()}>
            <button className="btn-filled-primary news-button">
              <div className="d-flex align-items-center">
                查看更多<i className="bi bi-arrow-right fs-6 ms-2"></i>
              </div>
            </button>
          </a>
        </div>
      </section>
      {/* <!-- 分隔波浪線 --> */}
      <div className="d-block w-100 wave-line mt-6 mt-lg-10 mb-5 mb-lg-8"></div>
      {/* <!-- Our story區塊 --> */}
      <section className="container pb-6 pb-lg-10">
        <div className="text-center">
          {/* <!-- 標題 --> */}
          <div className="mb-6 mb-lg-8">
            <h2 className="section-title fs-2 fs-lg-1 text-primary">
              Our Story
            </h2>
            <img src={lineSmall} alt="" />
          </div>
          {/* <!-- 圖片區 改 --> */}
          <div className="story-image mx-auto mb-6 mb-lg-8">
            <img src={videoFrame} alt="手繪框" className="d-block w-100" />
          </div>
          {/* <!-- story內容 --> */}
          <div className="mb-5">
            <p className="fs-9 fs-lg-8 text-gray-950 mb-3">
              我們相信，生活中的幸福感，往往來自那些「親手完成」的小小時刻。
            </p>
            <p className="fs-9 fs-lg-8 text-gray-950">
              揉一團麵、等待它在廚房角落慢慢發酵、看著香氣四溢的披薩出爐——這些過程，不只是料理，更是讓人心安的療癒儀式。
            </p>
          </div>
          <div className="mb-5">
            <p className="fs-9 fs-lg-8 text-gray-950 mb-3">
              Ferment at Home
              誕生於對「動手做」的熱愛，也源自於我們對現代生活節奏的理解。
            </p>
            <p className="fs-9 fs-lg-8 text-gray-950">
              只要打開一個材料包，就能展開一段從「揉麵、發酵、創作」到「出爐」的完整旅程。
            </p>
          </div>
          <div className="mb-5">
            <p className="fs-9 fs-lg-8 text-gray-950 mb-3">
              我們希望帶來的不僅僅是一餐，而是一種新的生活方式：
            </p>
            <p className="fs-9 fs-lg-8 text-gray-950">
              在家，也能有派對的熱鬧、陪伴的溫暖，以及創意帶來的樂趣。
            </p>
          </div>
          <div>
            <p className="fs-9 fs-lg-8 text-gray-950">
              無論是一個人、和家人共享，還是邀請朋友們一起動手做，Ferment at
              Home 讓「發酵」成為生活中最簡單、最溫柔的幸福時刻。
            </p>
          </div>
        </div>
      </section>
      {/* <!-- 披薩四重奏 --> */}
      <section className="container-fluid py-6 py-xl-10 bg-secondary pizza-quartet">
        <div className="text-center container-xxl">
          {/* <!-- 標題 --> */}
          <div className="mb-6 mb-lg-8">
            <h2 className="section-title fs-2 fs-lg-1 text-primary">
              Pizza Quartet
            </h2>
            <img src={lineSmall} alt="" />
          </div>
          {/* <!-- 卡片區塊 --> */}
          <div className="row row-gap-4">
            {/* <!-- 卡片1 --> */}
            <div className="col-6 col-lg-3 p-3 p-sm-5 painting-quartetCard-outline">
              <div className="mb-2 mb-xl-3">
                <img
                  src={quartetOne}
                  alt="餅皮"
                  className="d-block rounded-circle quartet-image mx-auto"
                />
              </div>
              <div>
                <h3 className="section-title fs-2 text-primary mb-2 mb-lg-3">
                  Dough
                </h3>
                <p className="fs-9 fs-md-8 text-gray-950">薄脆、厚Q、芝心</p>
              </div>
            </div>
            {/* <!-- 卡片2 --> */}
            <div className="col-6 col-lg-3 p-3 p-sm-5 painting-quartetCard-outline">
              <div className="mb-2 mb-xl-3">
                <img
                  src={quartetTwo}
                  alt="醬汁"
                  className="d-block rounded-circle quartet-image mx-auto"
                />
              </div>
              <div>
                <h3 className="section-title fs-2 text-primary mb-2 mb-lg-3">
                  Sauce
                </h3>
                <p className="fs-9 fs-md-8 text-gray-950">
                  白醬、茄汁、辣醬、BBQ
                </p>
              </div>
            </div>
            {/* <!-- 卡片3 --> */}
            <div className="col-6 col-lg-3 p-3 p-sm-5 painting-quartetCard-outline">
              <div className="mb-2 mb-xl-3">
                <img
                  src={quartetThree}
                  alt="起司"
                  className="d-block rounded-circle quartet-image mx-auto"
                />
              </div>
              <div>
                <h3 className="section-title fs-2 text-primary mb-2 mb-lg-3">
                  Cheese
                </h3>
                <p className="fs-9 fs-md-8 text-gray-950">
                  莫札瑞拉、切達、帕瑪森
                </p>
              </div>
            </div>
            {/* <!-- 卡片4 --> */}
            <div className="col-6 col-lg-3 p-3 p-sm-5 painting-quartetCard-outline">
              <div className="mb-2 mb-xl-3">
                <img
                  src={quartetFour}
                  alt="配料"
                  className="d-block rounded-circle quartet-image mx-auto"
                />
              </div>
              <div>
                <h3 className="section-title fs-2 text-primary mb-2 mb-lg-3">
                  Others
                </h3>
                <p className="fs-9 fs-md-8 text-gray-950">多樣食材任選</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 披薩流程圖 --> */}
      <section className="container-fluid py-10">
        <div className="container-xxl px-0">
          {/* <!-- step-1 --> */}
          <div className="container-fluid px-0 mb-8">
            <div className="row">
              <div className="col-12 col-md-6 text-center position-relative">
                <div className="rounded-circle bg-primary step-num">
                  <h3 className="section-title fs-2 fs-lg-1 lh-1 text-white">
                    1
                  </h3>
                </div>
                <div className="step-one-bg mb-3 mb-lg-5">
                  <img src={stepFrame} alt="" className="d-block w-100" />
                </div>
                <div>
                  <p className="fs-9 fs-lg-8 text-gray-950">
                    將麵團、起司、醬料與新鮮配料一一取出，整齊擺放在餐桌上。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- step-2 --> */}
          <div className="container-fluid px-0 mb-8">
            <div className="row">
              <div className="col-12 col-md-6 text-center position-relative ms-auto">
                <div className="rounded-circle bg-primary step-num">
                  <h3 className="section-title fs-2 fs-lg-1 lh-1 text-white">
                    2
                  </h3>
                </div>
                <div className="step-two-bg mb-3 mb-lg-5">
                  <img src={stepFrame} alt="" className="d-block w-100" />
                </div>
                <div>
                  <p className="fs-9 fs-lg-8 text-gray-950">
                    將麵團放在灑了麵粉的桌面上，用手掌輕壓，再拿起桿麵棍慢慢桿開。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- step-3 --> */}
          <div className="container-fluid px-0 mb-8">
            <div className="row">
              <div className="col-12 col-md-6 text-center position-relative">
                <div className="rounded-circle bg-primary step-num">
                  <h3 className="section-title fs-2 fs-lg-1 lh-1 text-white">
                    3
                  </h3>
                </div>
                <div className="step-three-bg mb-3 mb-lg-5">
                  <img src={stepFrame} alt="" className="d-block w-100" />
                </div>
                <div>
                  <p className="fs-9 fs-lg-8 text-gray-950">
                    在餅皮上抹上特製的醬料，撒上滿滿的起司，再仔細擺上各種食材。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- step-4 --> */}
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12 col-md-6 text-center position-relative ms-auto">
                <div className="rounded-circle bg-primary step-num">
                  <h3 className="section-title fs-2 fs-lg-1 lh-1 text-white">
                    4
                  </h3>
                </div>
                <div className="step-four-bg mb-3 mb-lg-5">
                  <img src={stepFrame} alt="" className="d-block w-100" />
                </div>
                <div>
                  <p className="fs-9 fs-lg-8 text-gray-950">
                    金黃的披薩在烤箱裡閃著光，香氣撲鼻。將它小心拿出來，準備享用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 分隔波浪線 --> */}
      <div className="d-block w-100 wave-line mt-6 mt-lg-10 mb-8"></div>
      {/* <!-- 顧客回饋 --> */}
      <section className="container-fluid text-center pb-6 pb-sm-10 position-relative">
        {/* <!-- 回到頂端按鈕 已新增onClick--> */}
        <button
          className="btn-outline-primary rounded-circle index-top-btn position-fixed"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="bi bi-chevron-up fs-6 fs-md-5 d-flex justify-content-center"></i>
        </button>
        {/* <!-- 標題 --> */}
        <div className="mb-6 mb-lg-8">
          <h2 className="section-title fs-2 fs-lg-1 text-primary">
            Pizza Moments
          </h2>
          <img src={lineSmall} alt="" />
        </div>
        {/* <!-- 顧客回饋輪播 --> */}
        <Swiper
          className="swiper container px-5 position-relative"
          modules={[Navigation]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          spaceBetween={24}
          slidesPerView={1}
          allowTouchMove={false}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => {}} //console.log("slide change")
          onSwiper={() => {}} //(swiper) => console.log(swiper)
        >
          <SwiperSlide>
            {/* <!-- Slide1 --> */}
            <div className="swiper-slide moment-border px-5 pt-28 pb-4 pb-xl-44">
              <div className="mb-4">
                <img
                  src={momentOne}
                  alt=""
                  className="d-block w-100 rounded-4"
                />
              </div>
              {/* <!-- 番茄評等 --> */}
              <div className="d-flex gap-2 justify-content-center mb-4">
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
              </div>
              {/* <!-- 顧客評論 --> */}
              <div className="px-4 pb-4">
                <div className="d-flex align-items-center mb-2">
                  <img src={profilePicOne} alt="" className="d-block me-2" />
                  <p className="text-primary me-auto">吳小姐</p>
                  <p className="text-primary">2025.08.20</p>
                </div>
                <p className="fs-9 fs-xl-8 text-gray-950 text-start">
                  沒想到這麼簡單！麵團好柔軟，過程超好玩，整個廚房都變成義式披薩店的味道了。
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <!-- Slide2 --> */}
            <div className="swiper-slide moment-border px-5 pt-28 pb-4 pb-xl-44">
              <div className="mb-4">
                <img
                  src={momentTwo}
                  alt=""
                  className="d-block w-100 rounded-4"
                />
              </div>
              {/* <!-- 番茄評等 --> */}
              <div className="d-flex gap-2 justify-content-center mb-4">
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomatoHalf} alt="tomato" className="d-block" />
              </div>
              {/* <!-- 顧客評論 --> */}
              <div className="px-4 pb-4">
                <div className="d-flex align-items-center mb-2">
                  <img src={profilePicTwo} alt="" className="d-block me-2" />
                  <p className="text-primary me-auto">王先生</p>
                  <p className="text-primary">2025.08.08</p>
                </div>
                <p className="fs-9 fs-xl-8 text-gray-950 text-start">
                  家庭日直接變成披薩日！小朋友們超愛自己動手加料，我們大家也都愛上這個成果。
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <!-- Slide3 --> */}
            <div className="swiper-slide moment-border px-5 pt-28 pb-4 pb-xl-70">
              <div className="mb-4">
                <img
                  src={momentThree}
                  alt=""
                  className="d-block w-100 rounded-4"
                />
              </div>
              {/* <!-- 番茄評等 --> */}
              <div className="d-flex gap-2 justify-content-center mb-4">
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
              </div>
              {/* <!-- 顧客評論 --> */}
              <div className="px-4 pb-4">
                <div className="d-flex align-items-center mb-2">
                  <img src={profilePicThree} alt="" className="d-block me-2" />
                  <p className="text-primary me-auto">陳小姐</p>
                  <p className="text-primary">2025.07.30</p>
                </div>
                <p className="fs-9 fs-xl-8 text-gray-950 text-start">
                  週末聚會就靠它了！剛出爐的披薩和朋友一起分享，沒有比這更療癒的事。
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <!-- Slide4 --> */}
            <div className="swiper-slide moment-border px-5 pt-28 pb-4 pb-xl-44">
              <div className="mb-4">
                <img
                  src={momentOne}
                  alt=""
                  className="d-block w-100 rounded-4"
                />
              </div>
              {/* <!-- 番茄評等 --> */}
              <div className="d-flex gap-2 justify-content-center mb-4">
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
                <img src={tomato} alt="tomato" className="d-block" />
              </div>
              {/* <!-- 顧客評論 --> */}
              <div className="px-4 pb-4">
                <div className="d-flex align-items-center mb-2">
                  <img src={profilePicOne} alt="" className="d-block me-2" />
                  <p className="text-primary me-auto">黃小姐</p>
                  <p className="text-primary">2025.08.22</p>
                </div>
                <p className="fs-9 fs-xl-8 text-gray-950 text-start">
                  第一次嘗試自己做披薩，好吃又好玩，還可以自由添加配料，製作自己的創意披薩。
                </p>
              </div>
            </div>
          </SwiperSlide>
          <button className="button-prev btn-filled-primary rounded-circle customer-feedback-btn feedback-btn-left me-3 me-sm-0 mb-1 mb-sm-0">
            <i className="bi bi-arrow-left fs-6 fs-sm-5"></i>
          </button>

          <button className="button-next btn-filled-primary rounded-circle customer-feedback-btn feedback-btn-right">
            <i className="bi bi-arrow-right fs-6 fs-sm-5"></i>
          </button>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
