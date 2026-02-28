import lineSmall from '../../assets/images/line-small.png'
import question from '../../assets/images/question.svg'
import questionTwo from '../../assets/images/question-02.svg'
import questionThree from '../../assets/images/question-03.svg'
import curvedLine from '../../assets/images/curved-line.svg'
import fqaPaymentIcon from '../../assets/images/fqa-payment-icon.svg'
import fqaRocketIcon from '../../assets/images/fqa-rocket-icon.svg'
import fqaGiftIcon from '../../assets/images/fqa-gift-icon.svg'
import dropdownQuestionOne from '../../assets/images/dropdown-question-01.png'
import { useState } from 'react'

const Fqa = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [shippingOpen, setShippingOpen] = useState(null);
    const [productsOpen, setProductsOpen] = useState(null);
    // FAQ 資料結構
    // 用 useState 管理 FAQ 資料
    const [faqData] = useState({
        payment: [
            {
                question: "有哪些付款方式？",
                answer: {
                    intro: "目前提供以下三種付款方式：",
                    items: [
                        {
                            title: "貨到付款",
                            details: ["訂購成功後，待收到包裹時再直接付款。"]
                        },
                        {
                            title: "信用卡付款（VISA、MasterCard、JCB）",
                            details: ["在結帳頁面選擇「信用卡付款」，輸入卡片相關資訊即可完成付款。"]
                        },
                        {
                            title: "銀行轉帳",
                            details: [
                                "訂單確認後，系統會提供一組銀行帳號，請於 3 日內完成匯款，以確保訂單執行。",
                                "若逾期未付款，訂單可能會自動取消。"
                            ]
                        }
                    ]
                }
            },
            {
                question: "訂單可以取消或延後嗎？",
                answer: {
                    intro: "訂單取消與延後說明：",
                    items: [
                        {
                            title: "取消訂單",
                            details: ["若訂單尚未出貨，可聯繫客服取消訂單。"]
                        },
                        {
                            title: "延後配送",
                            details: ["可在訂單出貨前聯繫客服調整配送日期。"]
                        }
                    ]
                }
            },
            {
                question: "如何開立發票？",
                answer: {
                    intro: "發票開立方式：",
                    items: [
                        {
                            title: "電子發票",
                            details: ["結帳時填寫發票資訊，發票將於出貨後寄送至您的信箱。"]
                        },
                        {
                            title: "統一編號",
                            details: ["需要報帳者，請在結帳時填寫公司統一編號。"]
                        }
                    ]
                }
            }
        ],
        shipping: [
            {
                question: "有哪些配送方式可以選擇？",
                answer: {
                    intro: "提供以下配送方式：",
                    items: [
                        {
                            title: "宅配到府",
                            details: ["由黑貓宅急便配送到指定地址。"]
                        },
                        {
                            title: "超商取貨",
                            details: ["可選擇 7-11、全家、萊爾富超商取貨。"]
                        }
                    ]
                }
            },
            {
                question: "商品何時會寄出？送達時間多久？",
                answer: {
                    intro: "出貨與送達時間：",
                    items: [
                        {
                            title: "出貨時間",
                            details: ["付款確認後 1-3 個工作天內出貨。"]
                        },
                        {
                            title: "送達時間",
                            details: ["宅配約 1-2 天，超商取貨約 2-3 天。"]
                        }
                    ]
                }
            },
            {
                question: "如果收到的商品有問題怎麼辦？",
                answer: {
                    intro: "商品問題處理方式：",
                    items: [
                        {
                            title: "商品瑕疵",
                            details: ["收到瑕疵商品請於 7 天內聯繫客服，我們將為您更換。"]
                        },
                        {
                            title: "退換貨",
                            details: ["未開封商品可於 7 天內申請退換貨。"]
                        }
                    ]
                }
            }
        ],
        products: [
            {
                question: "想自己在家動手做，可以保持食材新鮮嗎？",
                answer: {
                    intro: "食材保鮮說明：",
                    items: [
                        {
                            title: "低溫配送",
                            details: ["所有食材採用低溫宅配，確保新鮮送達。"]
                        },
                        {
                            title: "保存方式",
                            details: ["收到後請立即冷藏或冷凍保存，並於保存期限內使用完畢。"]
                        }
                    ]
                }
            },
            {
                question: "如果想把料理包送給親友，可以加上禮物包裝嗎？",
                answer: {
                    intro: "禮物包裝服務：",
                    items: [
                        {
                            title: "精美禮盒",
                            details: ["可加購精美禮盒包裝，適合送禮。"]
                        },
                        {
                            title: "客製化卡片",
                            details: ["可附上祝福卡片，傳達您的心意。"]
                        }
                    ]
                }
            },
            {
                question: "收到商品後需要如何保存？",
                answer: {
                    intro: "商品保存方式：",
                    items: [
                        {
                            title: "餅皮",
                            details: ["請冷凍保存，可保存 30 天。"]
                        },
                        {
                            title: "醬料與配料",
                            details: ["請冷藏保存，開封後請盡快使用。"]
                        },
                        {
                            title: "起司",
                            details: ["依種類不同，請參照包裝標示冷藏或冷凍保存。"]
                        }
                    ]
                }
            }
        ]
    });

    const toggleOpen = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const toggleShippingOpen = (index) => {
        setShippingOpen(shippingOpen === index ? null : index);
    };

    const toggleProductsOpen = (index) => {
        setProductsOpen(productsOpen === index ? null : index);
    };

    return (
        <>
            <main className="bg-gray-50 mt-md-10 mt-8 py-lg-10 py-5">
                <section>
                    <div className="container">
                        <div className="text-center pb-lg-11 pb-7">
                            <h2 className="h2 fw-bold answer-font">FAQ</h2>
                            <img
                                className="mx-auto"
                                src={lineSmall}
                                alt="line-small"
                            />
                        </div>
                        <div className="row pb-100">
                            <div className="col-lg-4 col-12 mb-5">
                                <div className="text-center pb-3">
                                    <img
                                        className="img-fluid"
                                        src={question}
                                        alt="question"
                                    />
                                </div>
                                <p
                                    className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950"
                                >
                                    如何購買 Pizza 材料包？
                                </p>
                                <p
                                    className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51 lh-base text-gray-950"
                                >
                                    進入官網首頁後，先選擇你想要的類別（如餅皮、醬料），加入購物車後依步驟結帳即可。
                                </p>
                            </div>
                            <div className="col-lg-4 col-12 mb-5">
                                <div className="text-center pb-3">
                                    <img
                                        className="img-fluid"
                                        src={questionTwo}
                                        alt="question-02"
                                    />
                                </div>
                                <p
                                    className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950"
                                >
                                    可以製作專屬於我的 Pizza 嗎？
                                </p>
                                <p
                                    className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51 lh-base text-gray-950"
                                >
                                    當然可以！我們提供 客製化 Pizza
                                    材料包服務，可依照喜好自由搭配餅皮、醬料與配料。
                                </p>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="text-center pb-3">
                                    <img
                                        className="img-fluid"
                                        src={questionThree}
                                        alt="question"
                                    />
                                </div>
                                <p
                                    className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950"
                                >
                                    Pizza 材料應該如何保存？
                                </p>
                                <p
                                    className="bg-secondary rounded-2 fs-8 px-5 py-5 lh-base text-gray-950"
                                >
                                    餅皮冷凍保存、醬料與配料冷藏保存，起司依種類需冷凍或冷藏，並於建議期限內使用完畢。
                                </p>
                            </div>
                        </div>
                    </div>
                    <figure className="overflow-hidden">
                        <img src={curvedLine} alt="curved-line" />
                    </figure>
                </section>
                {/* 第一個下拉是選單(之後可能要討論一下樣式，設計稿的rwd跟桌機板，有點矛盾) */}
                <section>
                    <div className="container">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mt-11 mb-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={fqaPaymentIcon}
                                                    alt="fqa-payment-icon" /></span
                                            >Payment & Orders
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center d-lg-block d-none"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 bg-gray-50 text-color text-font lh-base"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-pane"
                                            aria-selected="false"
                                        >
                                            <span className="me-2 drop-icon"
                                            ><img
                                                    src={fqaRocketIcon}
                                                    alt="fqa-rocket-icon" /></span
                                            >Shipping & Delivery
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center d-lg-block d-none mb-lg-0 mb-3"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 bg-gray-50 text-color text-font lh-base"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#contact-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="contact-pane"
                                            aria-selected="false"
                                        >
                                            <span className="me-2 drop-icon"
                                            ><img
                                                    src={fqaGiftIcon}
                                                    alt="fqaGiftIcon" /></span
                                            >Products & Gifts
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* 桌面版 */}
                            <div className="tab-content col-12 col-lg-8">
                                <div
                                    className="tab-pane fade show active"
                                    id="home-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex={0}
                                >
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {faqData.payment.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        {/* 問題按鈕：文字要改為 item.question */}
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={isOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 isOpen 狀態顯示 */}
                                                        {isOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
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
                                        })}
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="profile-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {faqData.shipping.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        {/* 問題按鈕：文字要改為 item.question */}
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleShippingOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={shippingOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt="plus&minus"
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 shippingOpen 狀態顯示 */}
                                                        {shippingOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
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
                                        })}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact-pane"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    tabIndex={0}
                                >
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {faqData.products.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        {/* 問題按鈕：文字要改為 item.question */}
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleProductsOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={productsOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 productsOpen 狀態顯示 */}
                                                        {productsOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
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
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 第二個 */}
                <section>
                    <div className="container d-lg-none d-block">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mb-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={fqaRocketIcon}
                                                    alt="fqa-payment-icon" /></span
                                            >Shipping & Delivery
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content col-12 col-lg-8">
                                <div className="tab-pane fade show active">
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        <div className="d-flex gap-3">
                                            <div className="d-lg-block d-none">
                                                <img
                                                    src={dropdownQuestionOne}
                                                    alt="dropdown-question-01"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                {faqData.shipping.map((item, index) => {
                                                    return (<div key={index}><button
                                                        className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        onClick={() => toggleShippingOpen(index)}
                                                    >
                                                        {item.question}
                                                        <span
                                                        ><img
                                                                className="toggle-icon"
                                                                src={shippingOpen === index
                                                                    ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                    : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </button>
                                                        <div
                                                            className="dropdown-menu w-100 border-0 p-5 bg-secondary mb-4"
                                                        >
                                                            <p className="fs-8">{item.answer.intro}</p>
                                                            <ol className="add-decimal w-100 fs-8">
                                                                {item.answer.items.map((subItem, subIndex) => {
                                                                    return (<li key={subIndex}>
                                                                        {subItem.title}
                                                                        <ul className="add-disc">
                                                                            {subItem.details.map((detail, dIndex) => (
                                                                                <li key={dIndex}>{detail}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>)
                                                                })}
                                                            </ol>
                                                        </div></div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 第三個 */}
                <section>
                    <div className="container d-lg-none d-block">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mb-lg-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={fqaGiftIcon}
                                                    alt="fqa-payment-icon" /></span
                                            >Products & Gifts
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content col-12 col-lg-8">
                                <div className="tab-pane fade show active">
                                    <div className="dropdown dropdown-push w-100">
                                        <div className="d-flex gap-3">
                                            <div className="d-lg-block d-none">
                                                <img
                                                    src={dropdownQuestionOne}
                                                    alt="dropdown-question-01"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                {faqData.products.map((item, index) => {
                                                    return (<div key={index}><button
                                                        className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        onClick={() => toggleProductsOpen(index)}
                                                    >
                                                        {item.question}
                                                        <span
                                                        ><img
                                                                className="toggle-icon"
                                                                src={productsOpen === index
                                                                    ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                    : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                alt="plus&minus"
                                                            />
                                                        </span>
                                                    </button>
                                                        <div
                                                            className="dropdown-menu w-100 border-0 p-5 bg-secondary mb-4"
                                                        >
                                                            <p className="fs-8">{item.answer.intro}</p>
                                                            <ol className="add-decimal w-100 fs-8">
                                                                {item.answer.items.map((subItem, subIndex) => {
                                                                    return (<li key={subIndex}>
                                                                        {subItem.title}
                                                                        <ul className="add-disc">
                                                                            {subItem.details.map((detail, dIndex) => (
                                                                                <li key={dIndex}>{detail}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>)
                                                                })}
                                                            </ol>
                                                        </div></div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Fqa