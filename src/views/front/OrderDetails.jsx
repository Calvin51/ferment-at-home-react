import lineSmall from "../../assets/images/line-small.png"
import pizzaHawaii from "../../assets/images/pizza-hawaii.png"
import cheesepizza from "../../assets/images/pizza-cheese.png"
const OrderDetails = () => {
    return (
        <section className="container-fluid text-center mt-lg-10 mt-6 mb-lg-11">
            {/* 標題 */}
            <div className="container mb-lg-11 mb-7 position-relative">
                <button type="button" className="position-absolute start-0">
                    <span className="fs-8">←</span>
                    <span className="fs-8 d-none d-lg-inline">回到訂單列表</span>
                </button>

                <h2 className="section-title fs-2 fs-lg-1 text-primary text-center">
                    Order Details
                </h2>

                <div className="mt-4 text-center">
                    <img src={lineSmall} alt="線" />
                </div>

            </div>
            {/* 電腦版訂單內容 */}
            <div className="container d-none d-lg-block border border-4 border-secondary-300 rounded-3">
                {/* 訂單狀態 */}
                <div className="row m-lg-8 gap-lg-5 justify-content-center">
                    <div className="col text-center border-top border-secondary-300 border-5"
                        >
                        <p className="pt-3 fs-9">訂單成立</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-9">配送中</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-9">理貨中</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-9">已到貨</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-9">已收貨</p>
                    </div>
                </div>
                {/* 訂單編號 */}
                <div className=" mb-8 mx-8">
                    <div className="row justify-content-center border-bottom border-gray-100 mx-8 pb-8">
                        <div className="col-lg-6 pt-5 pb-3 text-start">
                            <p className="mb-2">訂單編號</p>
                            <p className="fw-bold fs-8">FAH202512201350</p>
                        </div>

                        <div className="col-lg-6 pt-5 pb-3 text-start">
                            <p className="mb-2">訂單建立時間</p>
                            <p className="fw-bold fs-8">2025/12/20 13:50</p>
                        </div>

                        <div className="col-lg-6 pt-5 pb-3 text-start">
                            <p className="mb-2">發票號碼</p>
                            <p className="fw-bold fs-8">VK82606137</p>
                        </div>

                        <div className="col-lg-6 pt-5 pb-3 text-start">
                            <p className="mb-2">訂單付款時間</p>
                            <p className="fw-bold fs-8">2025/12/20 13:50</p>
                        </div>

                    </div>
                </div>

                {/* order summary */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Order Details</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center gap-5">
                            <img src={pizzaHawaii} alt="夏威夷披薩"
                                style={{ width: 160, height: 160 }} />
                            <div className="text-start" style={{ width: 308 }}>
                                <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            </div>
                            <div style={{ width: 100 }}>
                                <h5 className="section-title">X1</h5>
                            </div>
                            <h5 className="text-primary section-title">NT$260</h5>
                        </li>
                        <li className="d-flex align-items-center gap-5">
                            <img src={cheesepizza} alt="夏威夷披薩"
                                style={{ width: 160, height: 160 }} />
                            <div className="text-start" style={{ width: 308 }}>
                                <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            </div>
                            <div style={{ width: 100 }}>
                                <h5 className="section-title">X1</h5>
                            </div>
                            <h5 className="text-primary section-title">NT$260</h5>
                        </li>
                        <li className="d-flex align-items-center gap-5">
                            <img src={pizzaHawaii} alt="夏威夷披薩"
                                style={{ width: 160, height: 160 }} />
                            <div className="text-start" style={{ width: 308 }}>
                                <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            </div>
                            <div style={{ width: 100 }}>
                                <h5 className="section-title">X1</h5>
                            </div>
                            <h5 className="text-primary section-title">NT$260</h5>
                        </li>

                    </ul>

                </div>

                {/* Customer Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Customer Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mb-3">
                            <p className="mb-2">名稱</p>
                            <p className="fw-bold fs-8">Alice Hung</p>
                        </li>

                        <li className="text-start mb-3">
                            <p className="mb-2">Email</p>
                            <p className="fw-bold fs-8">alicehung@gmail.com</p>
                        </li>

                        <li className="text-start mb-3">
                            <p className="mb-2">電話</p>
                            <p className="fw-bold fs-8">0987654321</p>
                        </li>
                    </ul>

                </div>
                {/* Shipping Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Shipping Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mb-3">
                            <p className="mb-2">配送方式</p>
                            <p className="fw-bold fs-8">7-11 超商取貨</p>
                        </li>

                        <li className="text-start mb-3">
                            <p className="mb-2">取貨門市</p>
                            <p className="fw-bold fs-8">智取門市 - 台東縣無限區好吃鄉666號1樓</p>
                        </li>
                    </ul>

                </div>
                {/* Payment Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title  fs-lg-5 text-primary text-start">Payment Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mb-3">
                            <p className="mb-2">付款方式</p>
                            <p className="fw-bold fs-8">信用卡</p>
                        </li>

                        <li className="text-start mb-3">
                            <p className="mb-2">卡號後四碼</p>
                            <p className="fw-bold fs-8">8756</p>
                        </li>
                    </ul>

                </div>

                {/* Payment Details */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Payment Details</h5>
                    </div>

                    <div>
                        <div className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                            <span>商品總金額</span><span>NT$ 1,040</span>
                        </div>
                        <div className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                            <span>運費</span><span>NT$ 100</span>
                        </div>
                        <div className="text-gray-950 d-flex justify-content-between">
                            <span className="fs-8">總付款金額</span>
                            <h5 className="fs-5 text-primary section-title">NT$ 1,140</h5>
                        </div>

                    </div>


                </div>



            </div >

            {/* 手機版訂單內容 */}
            <div className="container d-lg-none ">
                {/* 訂單狀態 */}
                <div className="row gap-2 justify-content-center mb-7">
                    <div className="col text-center border-top border-secondary-300 border-5"
                        >
                        <p className="pt-3 fs-11">訂單成立</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-11">配送中</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-11">理貨中</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-11">已到貨</p>
                    </div>
                    <div className="col text-center border-top border-gray-100 border-5"
                        >
                        <p className="pt-3 fs-11">已收貨</p>
                    </div>
                </div>
                {/* 訂單編號 */}
                    <div className="row justify-content-center border-bottom border-gray-100 pb-7">
                        <div className="p-3 text-start">
                            <p className="mb-2">訂單編號</p>
                            <p className="fw-bold fs-8">FAH202512201350</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">訂單建立時間</p>
                            <p className="fw-bold fs-8">2025/12/20 13:50</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">發票號碼</p>
                            <p className="fw-bold fs-8">VK82606137</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">訂單付款時間</p>
                            <p className="fw-bold fs-8">2025/12/20 13:50</p>
                        </div>

                    </div>

                {/* order summary */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Order Summary</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center gap-5 px-3 pt-3 pb-5 border-bottom border-gray-100">
                            <img src={pizzaHawaii} alt="夏威夷披薩"
                                style={{ width: 120, height: 120 }} />
                            <div className="d-flex flex-column align-items-start">
                            <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            <h5 className="section-title">X1</h5>
                            <h5 className="text-primary section-title">NT$260</h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center gap-5 px-3 pt-3 pb-5 border-bottom border-gray-100">
                            <img src={cheesepizza} alt="夏威夷披薩"
                                style={{ width: 120, height: 120 }} />
                            <div className="d-flex flex-column align-items-start">
                            <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            <h5 className="section-title">X1</h5>
                            <h5 className="text-primary section-title">NT$260</h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center gap-5 px-3 pt-3 pb-5 border-bottom border-gray-100">
                            <img src={cheesepizza} alt="夏威夷披薩"
                                style={{ width: 120, height: 120 }} />
                            <div className="d-flex flex-column align-items-start">
                            <h7 className="fw-bold fs-7">夏威夷披薩（6寸）</h7>
                            <h5 className="section-title">X1</h5>
                            <h5 className="text-primary section-title">NT$260</h5>
                            </div>
                        </li>
                        

                    </ul>

                </div>

                {/* Customer Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 fs-lg-5 text-primary text-start">Customer Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">名稱</p>
                            <p className="fw-bold fs-8">Alice Hung</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">Email</p>
                            <p className="fw-bold fs-8">alicehung@gmail.com</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">電話</p>
                            <p className="fw-bold fs-8">0987654321</p>
                        </li>
                    </ul>
                </div>
                {/* Shipping Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Shipping Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">配送方式</p>
                            <p className="fw-bold fs-8">7-11 超商取貨</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">取貨門市</p>
                            <p className="fw-bold fs-8">智取門市 - 台東縣無限區好吃鄉666號1樓</p>
                        </li>
                    </ul>

                </div>
                {/* Payment Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Payment Information</h5>
                    </div>
                    <ul className="list-unstyled">
                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">付款方式</p>
                            <p className="fw-bold fs-8">信用卡</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">卡號後四碼</p>
                            <p className="fw-bold fs-8">8756</p>
                        </li>
                    </ul>

                </div>

                {/* Payment Details */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Payment Details</h5>
                    </div>

                    <div>
                        <div className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                            <span>商品總金額</span><span>NT$ 1,040</span>
                        </div>
                        <div className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                            <span>運費</span><span>NT$ 100</span>
                        </div>
                        <div className="text-gray-950 d-flex justify-content-between">
                            <span className="fs-8">總付款金額</span>
                            <h5 className="fs-5 text-primary section-title">NT$ 1,140</h5>
                        </div>

                    </div>


                </div>



            </div >

            
        </section >
    )
}

export default OrderDetails