import lineSmall from "../../assets/images/line-small.png";
import question from "../../assets/images/question.svg";
import questionTwo from "../../assets/images/question-02.svg";
import questionThree from "../../assets/images/question-03.svg";
import curvedLine from "../../assets/images/curved-line.svg";
import fqaPaymentIcon from "../../assets/images/fqa-payment-icon.svg";
import fqaRocketIcon from "../../assets/images/fqa-rocket-icon.svg";
import fqaGiftIcon from "../../assets/images/fqa-gift-icon.svg";
import dropdownQuestionOne from "../../assets/images/dropdown-question-01.png";
import { useState, useCallback } from "react";

// 靜態資料，不需要放在 state 裡

const FAQ_ICON_URLS = {
  plus: "https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg",
  minus:
    "https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg",
};

const TABS = [
  { id: "payment", label: "Payment & Orders", icon: fqaPaymentIcon },
  { id: "shipping", label: "Shipping & Delivery", icon: fqaRocketIcon },
  { id: "products", label: "Products & Gifts", icon: fqaGiftIcon },
];

const FAQ_DATA = {
  payment: [
    {
      question: "有哪些付款方式？",
      answer: {
        intro: "目前提供以下三種付款方式：",
        items: [
          {
            title: "貨到付款",
            details: ["訂購成功後，待收到包裹時再直接付款。"],
          },
          {
            title: "信用卡付款（VISA、MasterCard、JCB）",
            details: [
              "在結帳頁面選擇「信用卡付款」，輸入卡片相關資訊即可完成付款。",
            ],
          },
          {
            title: "銀行轉帳",
            details: [
              "訂單確認後，系統會提供一組銀行帳號，請於 3 日內完成匯款，以確保訂單執行。",
              "若逾期未付款，訂單可能會自動取消。",
            ],
          },
        ],
      },
    },
    {
      question: "訂單可以取消或延後嗎？",
      answer: {
        intro: "訂單取消與延後說明：",
        items: [
          {
            title: "取消訂單",
            details: ["若訂單尚未出貨，可聯繫客服取消訂單。"],
          },
          {
            title: "延後配送",
            details: ["可在訂單出貨前聯繫客服調整配送日期。"],
          },
        ],
      },
    },
    {
      question: "如何開立發票？",
      answer: {
        intro: "發票開立方式：",
        items: [
          {
            title: "電子發票",
            details: ["結帳時填寫發票資訊，發票將於出貨後寄送至您的信箱。"],
          },
          {
            title: "統一編號",
            details: ["需要報帳者，請在結帳時填寫公司統一編號。"],
          },
        ],
      },
    },
  ],
  shipping: [
    {
      question: "有哪些配送方式可以選擇？",
      answer: {
        intro: "提供以下配送方式：",
        items: [
          { title: "宅配到府", details: ["由黑貓宅急便配送到指定地址。"] },
          {
            title: "超商取貨",
            details: ["可選擇 7-11、全家、萊爾富超商取貨。"],
          },
        ],
      },
    },
    {
      question: "商品何時會寄出？送達時間多久？",
      answer: {
        intro: "出貨與送達時間：",
        items: [
          { title: "出貨時間", details: ["付款確認後 1-3 個工作天內出貨。"] },
          {
            title: "送達時間",
            details: ["宅配約 1-2 天，超商取貨約 2-3 天。"],
          },
        ],
      },
    },
    {
      question: "如果收到的商品有問題怎麼辦？",
      answer: {
        intro: "商品問題處理方式：",
        items: [
          {
            title: "商品瑕疵",
            details: ["收到瑕疵商品請於 7 天內聯繫客服，我們將為您更換。"],
          },
          { title: "退換貨", details: ["未開封商品可於 7 天內申請退換貨。"] },
        ],
      },
    },
  ],
  products: [
    {
      question: "想自己在家動手做，可以保持食材新鮮嗎？",
      answer: {
        intro: "食材保鮮說明：",
        items: [
          {
            title: "低溫配送",
            details: ["所有食材採用低溫宅配，確保新鮮送達。"],
          },
          {
            title: "保存方式",
            details: ["收到後請立即冷藏或冷凍保存，並於保存期限內使用完畢。"],
          },
        ],
      },
    },
    {
      question: "如果想把料理包送給親友，可以加上禮物包裝嗎？",
      answer: {
        intro: "禮物包裝服務：",
        items: [
          { title: "精美禮盒", details: ["可加購精美禮盒包裝，適合送禮。"] },
          { title: "客製化卡片", details: ["可附上祝福卡片，傳達您的心意。"] },
        ],
      },
    },
    {
      question: "收到商品後需要如何保存？",
      answer: {
        intro: "商品保存方式：",
        items: [
          { title: "餅皮", details: ["請冷凍保存，可保存 30 天。"] },
          { title: "醬料與配料", details: ["請冷藏保存，開封後請盡快使用。"] },
          {
            title: "起司",
            details: ["依種類不同，請參照包裝標示冷藏或冷凍保存。"],
          },
        ],
      },
    },
  ],
};

// 子組件：單一 FAQ 項目

const FaqItem = ({ item, isOpen, onToggle, showIcon = true }) => (
  <div className="d-flex gap-3 mb-4">
    {showIcon && (
      <div className="d-lg-block d-none">
        <img src={dropdownQuestionOne} alt="dropdownQuestionOne" />
      </div>
    )}
    <div className="flex-grow-1">
      <button
        className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8 text-start"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {item.question}
        <span>
          <img
            className="toggle-icon"
            src={isOpen ? FAQ_ICON_URLS.minus : FAQ_ICON_URLS.plus}
            alt={isOpen ? "收合" : "展開"}
          />
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
          <p className="fs-8 fw-bold mb-2">{item.answer.intro}</p>
          <ol className="add-decimal w-100 fs-8 mb-0 ps-5">
            {item.answer.items.map((sub, i) => (
              <li key={i} className="mb-3">
                <span className="fw-bold">{sub.title}</span>
                <ul className="add-disc ps-3">
                  {sub.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  </div>
);

// 子組件：FAQ 列表

const FaqList = ({ items, openIndex, onToggle }) => (
  <div className="dropdown dropdown-push w-100 mb-5">
    {items.map((item, index) => (
      <FaqItem
        key={index}
        item={item}
        isOpen={openIndex === index}
        onToggle={() => onToggle(index)}
      />
    ))}
  </div>
);

// 主組件

const Fqa = () => {
  const [activeTab, setActiveTab] = useState("payment");
  // 統一管理所有分類的展開狀態：{ payment: 0, shipping: null, products: null }
  const [openIndexes, setOpenIndexes] = useState({});

  const handleToggle = useCallback((category, index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  }, []);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <main className="bg-gray-50 mt-md-10 mt-8 py-lg-10 py-5">
      {/* 頂部三張卡片 */}
      <section>
        <div className="container">
          <div className="text-center pb-lg-11 pb-7">
            <h2 className="h2 fw-bold answer-font">FAQ</h2>
            <img className="mx-auto" src={lineSmall} alt="lineSmall" />
          </div>

          <div className="row pb-100">
            {[
              {
                img: question,
                q: "如何購買 Pizza 材料包？",
                a: "進入官網首頁後，先選擇你想要的類別（如餅皮、醬料），加入購物車後依步驟結帳即可。",
              },
              {
                img: questionTwo,
                q: "可以製作專屬於我的 Pizza 嗎？",
                a: "當然可以！我們提供客製化 Pizza 材料包服務，可依照喜好自由搭配餅皮、醬料與配料。",
              },
              {
                img: questionThree,
                q: "Pizza 材料應該如何保存？",
                a: "餅皮冷凍保存、醬料與配料冷藏保存，起司依種類需冷凍或冷藏，並於建議期限內使用完畢。",
              },
            ].map(({ img, q, a }, i) => (
              <div key={i} className={`col-lg-4 ${i < 2 ? "mb-5" : ""}`}>
                <div className="text-center pb-3">
                  <img className="img-fluid" src={img} alt="img" />
                </div>
                <p className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950">
                  {q}
                </p>
                <p className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51 lh-base text-gray-950">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
        <figure className="overflow-hidden">
          <img src={curvedLine} alt="curvedLine" />
        </figure>
      </section>

      {/* 桌面版：Tab 切換 */}
      <section>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mt-11 mb-5">
            {/* Tab 導航 */}
            <div className="col-lg-3">
              <ul
                className="nav nav-underline gap-1 flex-column"
                role="tablist"
              >
                {TABS.map((tab, i) => (
                  <li
                    key={tab.id}
                    className={`nav-item dashed-to-solid text-lg-start text-center mb-lg-0 ${i === 0 ? "mb-4" : ""} ${i > 0 ? "d-lg-block d-none" : ""}`}
                    role="presentation"
                  >
                    <button
                      className={`border-0 bg-gray-50 text-color text-font lh-base ${activeTab === tab.id ? "active" : ""}`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      onClick={() => handleTabChange(tab.id)}
                    >
                      <span className="me-2">
                        <img src={tab.icon} alt="icon" />
                      </span>
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tab 內容（桌面版只顯示 activeTab） */}
            <div className="col-lg-8">
              <FaqList
                items={FAQ_DATA[activeTab]}
                openIndex={openIndexes[activeTab] ?? null}
                onToggle={(index) => handleToggle(activeTab, index)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 手機版：Shipping & Products 各自展開 */}
      {TABS.filter((t) => t.id !== "payment").map((tab) => (
        <section key={tab.id}>
          <div className="container d-lg-none d-block">
            <div className="row justify-content-center flex-column mb-5">
              <div className="col-lg-3">
                <ul
                  className="nav nav-underline gap-1 flex-column"
                  role="tablist"
                >
                  <li
                    className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                    role="presentation"
                  >
                    <button
                      className="border-0 active bg-gray-50 text-color text-font lh-base"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <span className="me-2">
                        <img src={tab.icon} alt="icon" />
                      </span>
                      {tab.label}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <FaqList
                  items={FAQ_DATA[tab.id]}
                  openIndex={openIndexes[tab.id] ?? null}
                  onToggle={(index) => handleToggle(tab.id, index)}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Fqa;
