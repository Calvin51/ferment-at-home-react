import lineSmall from "../../assets/images/line-small.png"
import pizzaHawaii from "../../assets/images/pizza-hawaii.png";
import pizzaCheese from "../../assets/images/pizza-cheese.png";
import pizzaMargaret from "../../assets/images/pizza-margaret.png";
import pizzaMeat from "../../assets/images/pizza-meat.png";
import pizzaSeafood from "../../assets/images/pizza-seafood.png";
import pizzaCustomerized from "../../assets/images/pizza-customerized.png";
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom";


const API_BASE = import.meta.env.VITE_API_BASE;
const productImages = {
    "夏威夷披薩": pizzaHawaii,
    "起司三重奏": pizzaCheese,
    "瑪格麗特披薩": pizzaMargaret,
    "全肉總匯披薩": pizzaMeat,
    "海鮮總匯披薩": pizzaSeafood,
    "客製化披薩": pizzaCustomerized
};


const OrderDetails = () => {
    const [detail, setDetail] = useState(null);
    const [orderProduct, setOrderProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const res = await axios.get(`${API_BASE}orders/${id}`)
                console.log(res.data.products);
                setDetail(res.data);
                setOrderProduct(res.data.products)
            } catch (error) {
                console.log(error.message)
            }
        }
        if (id) {
            getOrderDetails()
        }
    }, [id])


    return (
        <section className="container-fluid text-center mt-lg-10 mt-6 mb-lg-11">
            {/* 標題 */}
            <div className="container mt-11 position-relative">
                {/* <Link
                    to="/checkout"
                    className="position-absolute start-0 top-50 d-flex align-items-center text-decoration-none text-dark">
                    <span className="fs-8">←</span>
                    <span className="fs-8 d-none d-lg-inline">回到訂單列表</span>
                </Link> */}

                <h2 className="section-title fs-2 fs-lg-1 text-primary text-center">
                    Order Details
                </h2>
            </div>
            <div className="mt-4 text-center mb-lg-11 mb-7">
                <img src={lineSmall} alt="線" />
            </div>
            {/* 電腦版訂單內容 */}
            <div className="container d-none d-lg-block border border-4 border-secondary-300 rounded-3">
                {/* 訂單狀態 */}
                {detail && (
                    <div className="row m-lg-8 gap-lg-5 justify-content-center">
                        <div className={`col text-center border-top-8 ${detail.status === "訂單成立" ? "border-secondary-300" : "border-gray-100"}`}
                        >
                            <p className="pt-3 fs-9">訂單成立</p>
                        </div>
                        <div className={`col text-center border-top-8 ${detail.status === "配送中" ? "border-secondary-300" : "border-gray-100"}`}
                        >
                            <p className="pt-3 fs-9">配送中</p>
                        </div>
                        <div className={`col text-center border-top-8 ${detail.status === "理貨中" ? "border-secondary-300" : "border-gray-100"}`}
                        >
                            <p className="pt-3 fs-9">理貨中</p>
                        </div>
                        <div className={`col text-center border-top-8 ${detail.status === "已到貨" ? "border-secondary-300" : "border-gray-100"}`}
                        >
                            <p className="pt-3 fs-9">已到貨</p>
                        </div>
                        <div className={`col text-center border-top-8 ${detail.status === "已收貨" ? "border-secondary-300" : "border-gray-100"}`}
                        >
                            <p className="pt-3 fs-9">已收貨</p>
                        </div>
                    </div>

                )}
                {/* 訂單編號 */}
                {detail && (
                    <div className=" mb-8 mx-8">
                        <div className="row justify-content-center border-bottom border-gray-100 mx-8 pb-8">
                            <div className="col-lg-6 pt-5 pb-3 text-start">
                                <p className="mb-2">訂單編號</p>
                                <p className="fw-bold fs-8">{detail.orderNumber}</p>
                            </div>

                            <div className="col-lg-6 pt-5 pb-3 text-start">
                                <p className="mb-2">訂單建立時間</p>
                                <p className="fw-bold fs-8">{detail.orderCreatedAt}</p>
                            </div>

                            <div className="col-lg-6 pt-5 pb-3 text-start">
                                <p className="mb-2">發票號碼</p>
                                <p className="fw-bold fs-8">{detail.invoiceNumber}</p>
                            </div>

                            <div className="col-lg-6 pt-5 pb-3 text-start">
                                <p className="mb-2">訂單付款時間</p>
                                <p className="fw-bold fs-8">{detail.orderPaidAt}</p>
                            </div>

                        </div>
                    </div>
                )}
                {/* order summary */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Order Details</h5>
                    </div>
                    <ul className="list-unstyled" >
                        {
                            orderProduct.map((product) => {
                                return (
                                    <li className="d-flex align-items-center gap-5" key={product.id}>
                                        <img src={productImages[product.name]} alt={product.name}
                                            style={{ width: 160, height: 160 }} />
                                        <div className="text-start" style={{ width: 308 }}>
                                            <p className="fw-bold fs-7">{product.name}（{typeof product.size === "object"
                                                ? `${product.size.inchs} `
                                                : product.size}）</p>
                                        </div>
                                        <div style={{ width: 100 }}>
                                            <h5 className="section-title">X{product.qty}</h5>
                                        </div>
                                        <h5 className="text-primary section-title">NT${product.price * product.qty}</h5>
                                    </li>

                                )
                            })
                        }
                    </ul>

                </div>
                {/* Customer Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Customer Information</h5>
                    </div>
                    {
                        detail && (<ul className="list-unstyled">
                            <li className="text-start mb-3">
                                <p className="mb-2">名稱</p>
                                <p className="fw-bold fs-8">{detail.customer.name}</p>
                            </li>

                            <li className="text-start mb-3">
                                <p className="mb-2">Email</p>
                                <p className="fw-bold fs-8">{detail.customer.email}</p>
                            </li>

                            <li className="text-start mb-3">
                                <p className="mb-2">電話</p>
                                <p className="fw-bold fs-8">{detail.customer.phone}</p>
                            </li>
                        </ul>)
                    }
                </div>
                {/* Shipping Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Shipping Information</h5>
                    </div>
                    {
                        detail && (
                            <ul className="list-unstyled">
                                <li className="text-start mb-3">
                                    <p className="mb-2">配送方式</p>
                                    <p className="fw-bold fs-8">{detail.shipping.method}</p>
                                </li>
                                {
                                    detail.shipping.store ? <li className="text-start mb-3">
                                        <p className="mb-2">取貨門市</p>
                                        <p className="fw-bold fs-8">{detail.shipping.store}</p>
                                    </li> : ""
                                }
                                {
                                    detail.shipping.address ? <li className="text-start mb-3">
                                        <p className="mb-2">配送地址</p>
                                        <p className="fw-bold fs-8">{detail.shipping.address}</p>
                                    </li> : ""
                                }
                            </ul>
                        )
                    }
                </div>
                {/* Payment Information */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title  fs-lg-5 text-primary text-start">Payment Information</h5>
                    </div>
                    {
                        detail && (
                            <ul className="list-unstyled">
                                <li className="text-start mb-3">
                                    <p className="mb-2">付款方式</p>
                                    <p className="fw-bold fs-8">{detail.payment.method}</p>
                                </li>

                                <li className="text-start mb-3">
                                    <p className="mb-2">卡號後四碼</p>
                                    <p className="fw-bold fs-8">{detail.payment.cardLast4}</p>
                                </li>
                            </ul>
                        )
                    }
                </div>
                {/* Payment Details */}
                <div className=" mb-8 mx-8">
                    <div className="mb-5">
                        <h5 className="section-title fs-lg-5 text-primary text-start">Payment Details</h5>
                    </div>
                    {detail && (
                        <ul className="list-unstyled">
                            <li className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                                <span>商品總金額</span><span>NT$ {detail.amount.productsTotal}</span>
                            </li>
                            <li className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                                <span>運費</span><span>NT$ {detail.amount.shippingFee}</span>
                            </li>
                            <li className="text-gray-950 d-flex justify-content-between">
                                <span className="fs-8">總付款金額</span>
                                <h5 className="fs-5 text-primary section-title">NT$ {detail.amount.grandTotal}</h5>
                            </li>
                        </ul>
                    )}
                </div>
            </div >

            {/* 手機版訂單內容 */}
            <div className="container d-lg-none ">
                {/* 訂單狀態 */}
                {detail && (<div className="row gap-2 justify-content-center mb-7">
                    <div className={`col text-center border-top-8 ${detail.status === "訂單成立" ? "border-secondary-300" : "border-gray-100"}`}
                    >
                        <p className="pt-3 fs-11">訂單成立</p>
                    </div>
                    <div className={`col text-center border-top-8 ${detail.status === "配送中" ? "border-secondary-300" : "border-gray-100"}`}
                    >
                        <p className="pt-3 fs-11">配送中</p>
                    </div>
                    <div className={`col text-center border-top-8 ${detail.status === "理貨中" ? "border-secondary-300" : "border-gray-100"}`}
                    >
                        <p className="pt-3 fs-11">理貨中</p>
                    </div>
                    <div className={`col text-center border-top-8 ${detail.status === "已到貨" ? "border-secondary-300" : "border-gray-100"}`}
                    >
                        <p className="pt-3 fs-11">已到貨</p>
                    </div>
                    <div className={`col text-center border-top-8 ${detail.status === "已收貨" ? "border-secondary-300" : "border-gray-100"}`}
                    >
                        <p className="pt-3 fs-11">已收貨</p>
                    </div>
                </div>)}
                {/* 訂單編號 */}
                {detail && (
                    <div className="row justify-content-center border-bottom border-gray-100 pb-7">
                        <div className="p-3 text-start">
                            <p className="mb-2">訂單編號</p>
                            <p className="fw-bold fs-8">{detail.orderNumber}</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">訂單建立時間</p>
                            <p className="fw-bold fs-8">{detail.orderCreatedAt}</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">發票號碼</p>
                            <p className="fw-bold fs-8">{detail.invoiceNumber}</p>
                        </div>

                        <div className="p-3 text-start">
                            <p className="mb-2">訂單付款時間</p>
                            <p className="fw-bold fs-8">{detail.orderPaidAt}</p>
                        </div>
                    </div>
                )}

                {/* order summary */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Order Summary</h5>
                    </div>
                    <ul className="list-unstyled">
                        {
                            orderProduct.map((product, index) => {
                                return (
                                    <li className="d-flex align-items-center gap-5 px-3 pt-3 pb-5 border-bottom border-gray-100" key={index}>
                                        <img src={productImages[product.name]} alt={product.name}
                                            style={{ width: 120, height: 120 }} />
                                        <div className="d-flex flex-column  text-start">
                                            <p className="fw-bold fs-7">{product.name}（{typeof product.size === "object"
                                                ? `${product.size.inchs} `
                                                : product.size}）</p>
                                                
                                            <h5 className="section-title">X{product.qty}</h5>
                                            <h5 className="text-primary section-title">NT${product.price * product.qty}</h5>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>

                </div>

                {/* Customer Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 fs-lg-5 text-primary text-start">Customer Information</h5>
                    </div>
                    {detail && (<ul className="list-unstyled">
                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">名稱</p>
                            <p className="fw-bold fs-8">{detail.customer.name}</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">Email</p>
                            <p className="fw-bold fs-8">{detail.customer.email}</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">電話</p>
                            <p className="fw-bold fs-8">{detail.customer.phone}</p>
                        </li>
                    </ul>)}
                </div>
                {/* Shipping Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Shipping Information</h5>
                    </div>
                    {detail && (
                        <ul className="list-unstyled">
                            <li className="text-start mt-3 mb-3">
                                <p className="mb-2">配送方式</p>
                                <p className="fw-bold fs-8">{detail.shipping.method}</p>
                            </li>
                            {
                                detail.shipping.store ? <li className="text-start mt-3 mb-3">
                                    <p className="mb-2">取貨門市</p>
                                    <p className="fw-bold fs-8">{detail.shipping.store}</p>
                                </li> : ""
                            }
                            {
                                detail.shipping.address ? <li className="text-start mt-3 mb-3">
                                    <p className="mb-2">取貨地址</p>
                                    <p className="fw-bold fs-8">{detail.shipping.address}</p>
                                </li> : ""
                            }
                        </ul>
                    )}

                </div>
                {/* Payment Information */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Payment Information</h5>
                    </div>
                    {detail && (<ul className="list-unstyled">
                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">付款方式</p>
                            <p className="fw-bold fs-8">{detail.payment.method}</p>
                        </li>

                        <li className="text-start mt-3 mb-3">
                            <p className="mb-2">卡號後四碼</p>
                            <p className="fw-bold fs-8">{detail.payment.cardLast4}</p>
                        </li>
                    </ul>)}

                </div>

                {/* Payment Details */}
                <div className="mb-7">
                    <div className="mb-5">
                        <h5 className="section-title fs-5 text-primary text-start">Payment Details</h5>
                    </div>
                    {detail && (
                        <ul className="list-unstyled">
                            <li className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                                <span>商品總金額</span><span>NT$ {detail.amount.productsTotal}</span>
                            </li>
                            <li className="text-gray-950 fs-8 d-flex justify-content-between mb-3">
                                <span>運費</span><span>NT$ {detail.amount.shippingFee}</span>
                            </li>
                            <li className="text-gray-950 d-flex justify-content-between">
                                <span className="fs-8">總付款金額</span>
                                <h5 className="fs-5 text-primary section-title">NT$ {detail.amount.grandTotal}</h5>
                            </li>

                        </ul>)}


                </div>



            </div >


        </section >
    )
}


export default OrderDetails