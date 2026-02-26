import lineSmall from "../../assets/images/line-small.png";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import trashcan from "../../assets/images/trashcan.svg";
import redDelet from "../../assets/images/Delete-red.svg";
import pizzaHawaii from "../../assets/images/pizza-hawaii.png";
import pizzaCheese from "../../assets/images/pizza-cheese.png";
import pizzaMargaret from "../../assets/images/pizza-margaret.png";
import pizzaMeat from "../../assets/images/pizza-meat.png";
import pizzaSeafood from "../../assets/images/pizza-seafood.png";
import pizzaCustomerized from "../../assets/images/pizza-customerized.png";
import shoppingCart from "../../assets/images/Shopping-Cart-1-Line--Streamline-Mingcute.svg";
import downline from "../../assets/images/Down-Line--Streamline-Mingcute.svg";
import upline from "../../assets/images/Up-Line--Streamline-Mingcute.svg";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const APIUrl = "https://ferment-at-home-data.onrender.com/";
const productImages = {
  "夏威夷披薩": pizzaHawaii,
  "起司三重奏": pizzaCheese,
  "瑪格麗特披薩": pizzaMargaret,
  "全肉總匯披薩": pizzaMeat,
  "海鮮總匯披薩": pizzaSeafood,
  "客製化披薩": pizzaCustomerized
};
const shippingFee = 100;

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [popList, setPopList] = useState([]);

  const navigate = useNavigate()

const handleCheckout = () => {
  navigate("/checkout")
}
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get(`${APIUrl}cart`);
        // console.log(res.data);
        setCartList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCart();
  }, []);

  useEffect(() => {
    const getPopProduct = async () => {
      try {
        const res = await axios.get(`${APIUrl}popular_Product`);
        // console.log(res.data);
        setPopList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPopProduct();
  }, []);

  const updateCart = async (item, qty) => {
    try {
      const updatedItem = {
        ...item,
        quantity: qty
      }
      const res = await axios.put(`${APIUrl}cart/${item.id}`,updatedItem);
      console.log(res.data)
      const response = await axios.get(`${APIUrl}cart`);
        // console.log(res.data);
        setCartList(response.data);
  
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleQtyChange = (item, newQty) => {
    const safeQty = Math.max(1, newQty);
  
    const newCart = cartList.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: safeQty }
        : cartItem
    );
  
    setCartList(newCart);
  
    updateCart(item, safeQty); // 再同步資料庫
  };

  const addCart = async (popItem, quantity, selectedSize,totalPrice) => {
    const cartData = {
      productId: popItem.id,
      title: popItem.title,
      size: {
          id: selectedSize.id,
          inchs: selectedSize.inchs,
          price: selectedSize.price
        }
      ,
      quantity,
      totalPrice
    };
  
    console.log(cartData)
    try {
      const res = await axios.post(`${APIUrl}cart`, cartData);
      setCartList(prev => [...prev, res.data]); // 更新畫面
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletCart = async (cartId) => {
    try {
      const res = await axios.delete(`${APIUrl}cart/${cartId}`);
      console.log(res.data);
      const response = await axios.get(`${APIUrl}cart`);
      setCartList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const finalTotal = useMemo(() => {
    return cartList.reduce(
      (sum, item) => sum + item.totalPrice * item.quantity,
      0
    );
  }, [cartList]);

  const PopProductCard = ({ popItem }) => {
    const [selectedSize, setSelectedSize] = useState(popItem.size[0]);
    const [quantity, setQuantity] = useState(1);

    const price = selectedSize?.price || 0;
    const totalPrice = price * quantity;


    return (
      <div className="card border-0 bg-secondary rounded-4 p-5">
        {/* 產品圖   */}
        <div className="text-center">
          <img
            src={productImages[popItem.title]}
            className="card-img-top"
            style={{ width: 258 }}
            alt={popItem.title}
          />
        </div>
        {/* 產品介紹 */}
        <div>
          <h5 className="card-title fw-bold">{popItem.title}</h5>
          <p className="card-text fs-8 text-gray-700 mb-5">
            {popItem.description}
          </p>
          <p className="section-title text-primary fs-5 mb-5">
            NT${totalPrice}
          </p>
        </div>
        {/* 尺寸選擇 */}
        <div className="d-flex justify-content-center gap-2 mb-5">
        {popItem.size.map((sizeItem) => (
          <button
            key={sizeItem.id}
            className={`sizeChoose btn fs-8 ${
              selectedSize?.id === sizeItem.id
                ? "btn-gray-700"
                : "btn-gray-100"
            }`}
            onClick={() => setSelectedSize(sizeItem)}
          >
            {sizeItem.inchs}
          </button>
        ))}
        </div>
        {/* 數量選擇 */}
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <div
            className="border border-2 border-primary rounded-pill bg-white"
            style={{ width: 186 }}
          >
            <div className="input-group my-2 justify-content-center">
              <button className="btn p-3"
              onClick={() =>
                setQuantity(prev => (prev > 1 ? prev - 1 : 1))
              }>
                <img src={minus} alt="少一個" />
              </button>
              <input
                type="text"
                value={quantity} 
                className="quantity-input section-title fs-5"
                style={{ width: 74 }}
              />
              <button className="btn p-3"
              onClick={() => setQuantity(prev => prev + 1)}>
                <img src={plus} alt="多一個" />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="btn bg-primary shop-btn rounded-circle"
            onClick={() => addCart(popItem, quantity, selectedSize,totalPrice)}
          >
            <img src={shoppingCart} alt="購物車" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="container-fluid text-center mt-lg-10 mt-6 mb-lg-11">
        {/* 標題 */}
        <div className="mb-lg-11 mb-5">
          <h2 className="section-title fs-2 fs-lg-1 text-primary">
            Shopping Cart
          </h2>
          <img src={lineSmall} alt="線" />
        </div>
        {/* 購物車電腦板 */}
        <div className="cart container d-none d-lg-block">
          <div className="row justify-content-center gx-lg-5">
            <div className="col-lg-9">
              {/* 購物項目 */}
              <ul className="list-unstyled p-5 border border-4 border-secondary-300 rounded-3">
                {cartList.map((item, index) => {
                  return (

                    <li
                      className={`d-flex align-items-center ${index !== cartList.length - 1 ? "border-bottom" : ""} gap-5 py-5 px-8`}
                      key={item.id}
                    >
                      <img
                        src={productImages[item.title]}
                        alt={item.title}
                        style={{ width: 160, height: 160 }}
                      />
                      <div style={{ width: 218 }}>
                        <p className="fw-bold fs-7">
                          {item.title}（{item.size?.inchs ? item.size?.inchs : item.selectedOptions?.size?.name}）
                        </p>
                        {item.selectedOptions && (
                          <p>
                            {[
                              item.selectedOptions.sauce?.name,
                              item.selectedOptions.crust?.name,
                              item.selectedOptions.cheese?.name,
                              item.selectedOptions.combo?.name,
                            ]
                              .filter(Boolean)
                              .join(" / ")}
                          </p>
                        )}
                      </div>
                      <div
                        className="border border-2 border-primary rounded-pill"
                        style={{ width: 180 }}
                      >
                        <div className="input-group my-2 justify-content-center">
                          <button className="btn p-3"
                          onClick={() => handleQtyChange(item, item.quantity - 1)}>
                            <img src={minus} alt="少一個" />
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="quantity-input section-title fs-5"
                            onChange={(e)=>updateCart(item, Number(e.target.value))}
                            style={{ width: 68 }}
                          />
                          <button className="btn p-3"
                          onClick={() => handleQtyChange(item, item.quantity + 1)}>
                            <img src={plus} alt="多一個" />
                          </button>
                        </div>
                      </div>

                      <h5 className="text-primary section-title">
                        NT${item.quantity*item.totalPrice}
                      </h5>
                      <button className="nonstyle-button" type="button" onClick={() => deletCart(item.id)}>
                        <img src={trashcan} alt="delet" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* total */}
            <div className="col-lg-3">
              <div className="p-5 border border-4 border-secondary-300 rounded-3">
                <h2 className="text-primary mb-5 section-title">Total</h2>
                <ul className="border-bottom list-unstyled">
                  <li className="d-flex justify-content-between mb-5">
                    <p className="fs-8">小計</p>
                    <p className="fs-8">NT$ {finalTotal}</p>
                  </li>
                  <li className="d-flex justify-content-between mb-5">
                    <p className="fs-8">運費</p>
                    <p className="fs-8">NT$ {shippingFee}</p>
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center mt-2 mb-5">
                  <p className="fs-8">應付金額</p>
                  <p className="fs-5 text-primary section-title">NT$ {finalTotal + shippingFee}</p>
                </div>
                <button
                  className="btn-filled-primary"
                  style={{width: 258}}
                  type="button"
                  onClick={handleCheckout}
                >
                  確認付款
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 手機版  */}
        {cartList.map((item, index) => {

          return (
            <ul className="container text-center list-unstyled -0 d-lg-none" key={index}>
              <li
                className={`${index !== cartList.length - 1 ? "border-bottom" : ""} pt-3 pb-5 px-3`}
              >
                {/* 產品 */}
                <div className="d-flex gap-3 align-items-center mb-3">
                  <img
                    src={productImages[item.title]}
                    alt={item.title}
                    style={{ width: 120, height: 120 }}
                  />
                  <div>
                    <p className="fw-bold fs-7">
                      {item.title}（{item.size?.inchs ? item.size?.inchs : item.selectedOptions?.size?.name}）
                    </p>
                    <h5 className="text-primary section-title text-start">
                      NT${item.quantity*item.totalPrice}
                    </h5>
                  </div>
                </div>
                {/* 數量選擇 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="border border-2 border-primary rounded-pill">
                    <div className="input-group my-2 justify-content-center">
                      <button type="button" className="btn p-3"
                      onClick={() => handleQtyChange(item, item.quantity - 1)}>
                        <img src={minus} alt="少一個" />
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="quantity-input section-title fs-5"
                        style={{ width: 139 }}
                        onChange={(e)=>updateCart(item, Number(e.target.value))}
                      />
                      <button className="btn p-3"
                      onClick={() => handleQtyChange(item, item.quantity + 1)}>
                        <img src={plus} alt="多一個" />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary rounded-circle shop-btn"
                  onClick={() => deletCart(item.id)}>
                    <img src={redDelet} alt="delete" />
                  </button>
                </div>
              </li>
            </ul>
          )
        })}
      </section>

      {/* 分隔線 */}
      <div className="d-block w-100 wave-line mt-6 mt-lg-10 mb-8"></div>

      {/* 熱門商品 */}
      <section className="container-fluid text-center pb-6 pb-sm-10">
        {/* 熱門商品標題 */}
        <div className="mb-lg-8 mb-6">
          <h2 className="section-title fs-2 fs-lg-1 text-primary">
            Popular Items
          </h2>
          <img src={lineSmall} alt="線" />
        </div>
        {/* 熱門商品卡片輪播 */}
        {/* Slider main container */}
        <div className="swiper shopCart container px-5 position-relative">
          {/* Slides */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {popList.map((popItem) => (
              <SwiperSlide key={popItem.id} className="swiper-slide popProduct">
                <PopProductCard popItem={popItem} />
              </SwiperSlide>
            ))}

          </Swiper>
          <button
            className="swiper-button-prev btn-filled-primary rounded-circle shop-btn button-left me-3 me-sm-0"
            type="button"
          >
            <i className="bi bi-arrow-left fs-6 fs-sm-5"></i>
          </button>

          <button
            className="swiper-button-next btn-filled-primary rounded-circle shop-btn button-right me-3 me-sm-0"
            type="button"
          >
            <i className="bi bi-arrow-right fs-6 fs-sm-5"></i>
          </button>
        </div>
      </section>

      {/* 結帳區 */}
      <div className="fixed-bottom shop-shadow bg-secondary d-lg-none rounded-top">
        <div className="p-4">
          {/* 應付金額區 */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-4">
              <div className="fs-9">應付金額</div>
              <button
                className="btn btn-link p-0 fs-11 text-gray-700"
                data-bs-toggle="collapse"
                data-bs-target="#payDetail"
              >
                付款明細
                <span className="ms-1">
                  <img src={downline} alt="展開" className="arrow-down" />
                  <img src={upline} alt="收合" className="arrow-up" />
                </span>
              </button>
            </div>
            <div className="fs-5 text-primary section-title">NT$ {finalTotal + shippingFee}</div>
          </div>

          {/* 收合內容佔滿版 */}
          <div className="collapse my-4" id="payDetail">
            <div className="w-100">
              <div className="text-gray-950 fs-9 d-flex justify-content-between mb-2">
                <span>小計</span>
                <span>NT$ {finalTotal}</span>
              </div>
              <div className="text-gray-950 fs-9 d-flex justify-content-between">
                <span>運費</span>
                <span>NT$ {shippingFee}</span>
              </div>
            </div>
          </div>

          {/* 確認付款按鈕 */}
          <button
            className="btn-filled-primary"
            style={{ width: "100%" }}
            type="button"
            onClick={handleCheckout}
          >
            確認付款
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
