import lineSmall from "../../assets/images/line-small.png";
import mapImage from "../../assets/images/mapImage.png";
import externalLink from "../../assets/images/external-link.svg";
import valueFirstTime from "../../assets/images/value-1.png";
import valueFamily from "../../assets/images/value-2.png";
import valuePizzaTime from "../../assets/images/value-3.png";
import bigLogo from "../../assets/images/logo-story-big.png";
import videoFrame from "../../assets/images/video_frame_169.svg";

const About = () => {
  return (
    <>
      {/* container-fluid px-0 */}
      <div className="about-container about-hero-photo d-flex justify-content-center align-items-center">
        <img src={bigLogo} alt="LOGO" />
      </div>
      {/* Our Story */}
      <div className="container-fluid py-6 py-md-10">
        <div className="container text-center">
          <div className="mb-6 mb-md-8">
            <h2 className="section-title fs-2 fs-md-1 text-primary">
              Our Story
            </h2>
            <img src={lineSmall} alt="底線" />
          </div>
          <div className="about-story-image mx-auto mb-6 mb-lg-8">
            <img src={videoFrame} alt="手繪框" className="d-block w-100" />
          </div>
          <div className="mb-5">
            <p className="mb-3">
              我們相信，生活中的幸福感，往往來自那些「親手完成」的小小時刻。
            </p>
            <p>
              揉一團麵、等待它在廚房角落慢慢發酵、看著香氣四溢的披薩出爐——這些過程，不只是料理，更是讓人心安的療癒儀式。
            </p>
          </div>
          <div className="mb-5">
            <p className="mb-3">
              Ferment at Home
              誕生於對「動手做」的熱愛，也源自於我們對現代生活節奏的理解。
            </p>
            <p>
              只要打開一個材料包，就能展開一段從「揉麵、發酵、創作」到「出爐」的完整旅程。
            </p>
          </div>
          <div className="mb-5">
            <p className="mb-3">
              我們希望帶來的不僅僅是一餐，而是一種新的生活方式：
            </p>
            <p>在家，也能有派對的熱鬧、陪伴的溫暖，以及創意帶來的樂趣。</p>
          </div>
          <p>
            無論是一個人、和家人共享，還是邀請朋友們一起動手做，Ferment at Home
            讓「發酵」成為生活中最簡單、最溫柔的幸福時刻。
          </p>
        </div>
      </div>
      {/* Location */}
      <div className="container-fluid py-6 py-md-10 bg-secondary rounded-4">
        <div className="container text-center">
          <div className="mb-6 mb-md-8">
            <h2 className="section-title fs-2 fs-md-1 text-primary">
              Location
            </h2>
            <img src={lineSmall} alt="底線" />
          </div>
          <div className="mb-3">
            <img
              src={mapImage}
              alt="地圖"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="d-md-flex justify-content-start justify-content-md-between">
            <div className="d-flex flex-column flex-md-row text-start mb-2 mb-md-0 py-0 py-md-3">
              <span className="fw-bold text-primary mb-2 mb-md-0 me-md-2">
                地址
              </span>
              <span>台北市美味區好吃街 88 巷 24 號 1 樓</span>
            </div>
            <a href="https://maps.app.goo.gl/N7Kru7ozqSxbUn2c9">
              <div className="d-flex py-3">
                <span className="fw-bold text-dark me-2">Google Map</span>
                <img src={externalLink} alt="外部連結icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Made For */}
      <div className="container-fluid py-6 py-md-10">
        <div className="container text-center">
          <div className="mb-6 mb-md-8">
            <h2 className="section-title fs-2 fs-md-1 text-primary">
              Made For
            </h2>
            <img src={lineSmall} alt="底線" />
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={valueFirstTime}
                alt="給第一次做Pizza的人"
                style={{ width: "196px", height: "196px", objectFit: "cover" }}
              />
              <div className="py-5">
                <h6 className="fw-bold mb-4">給第一次做 Pizza 的人</h6>
                <span className="fs-8">
                  不用技巧，也能做出屬於自己的第一張 Pizza
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={valueFamily}
                alt="給想和家人一起下廚的人"
                style={{ width: "196px", height: "196px", objectFit: "cover" }}
              />
              <div className="py-5">
                <h6 className="fw-bold mb-4">給想和家人一起下廚的人</h6>
                <span className="fs-8">把下廚，變成一段可以一起記住的時光</span>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={valuePizzaTime}
                alt="給想慢慢來、享受過程的人"
                style={{ width: "196px", height: "196px", objectFit: "cover" }}
              />
              <div className="py-5">
                <h6 className="fw-bold mb-4">給想慢慢來、享受過程的人</h6>
                <span className="fs-8">發酵有自己的節奏，生活也是</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
