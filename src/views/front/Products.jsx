import { useEffect, useState } from "react";
import lineSmall from "../../assets/images/line-small.png";
import check from "../../assets/images/Check-2-Fill--Streamline-Mingcute-Fill - gray.svg";
import sourceGreen from "../../assets/images/sauce-01.png";
import sourceWhite from "../../assets/images/sauce-02.png";
import sourceRed from "../../assets/images/sauce-03.png";
import sixInch from "../../assets/images/pizza-inch/pizza-6-inch.png";
import eightInch from "../../assets/images/pizza-inch/pizza-8-inch.png";
import twelveInch from "../../assets/images/pizza-inch/pizza-12-inch.png";
import crustThin from "../../assets/images/pizza-crust-thin.png";
import crustThick from "../../assets/images/pizza-crust-thick.png";
import crustStuffed from "../../assets/images/pizza-crust-stuffed.png";
import cheeseMozzarella from "../../assets/images/cheese-mozzarella.png";
import cheeseCheddar from "../../assets/images/cheese-cheddar.png";
import cheeseParmesan from "../../assets/images/cheese-parmesan.png";
import foodClams from "../../assets/images/food-clams.png";
import foodSquid from "../../assets/images/food-squid.png";
import foodShrimp from "../../assets/images/food-shrimp.png";
import foodMushroom from "../../assets/images/food-mushroom.png";
import foodBacon from "../../assets/images/food-bacon.png";
import foodChicken from "../../assets/images/food-chicken.png";
import foodSpinach from "../../assets/images/food-spinach.png";

import axios from "axios";

const APIUrl = "https://ferment-at-home-data.onrender.com/";

// id 對應圖片
const sauceImages = {
  1: sourceGreen,
  2: sourceWhite,
  3: sourceRed,
};
const pizzaSizesImages = {
  1: sixInch,
  2: eightInch,
  3: twelveInch,
};
const pizzaCrustsImages = {
  1: crustThin,
  2: crustThick,
  3: crustStuffed,
};

const cheeseTypesImages = {
  1: cheeseMozzarella,
  2: cheeseCheddar,
  3: cheeseParmesan,
};

const ingredientImages = {
  foodClams: foodClams,
  foodSquid: foodSquid,
  foodShrimp: foodShrimp,
  foodMushroom: foodMushroom,
  foodBacon: foodBacon,
  foodChicken: foodChicken,
  foodSpinach: foodSpinach,
};

const Products = () => {
  // state
  const [sauceList, setSauceList] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState([]);
  const [pizzaSizesList, setPizzaSizesList] = useState([]);
  const [selectedPizzaSizes, setSelectedPizzaSizes] = useState([]);
  const [pizzaCrustsList, setPizzaCrustsList] = useState([]);
  const [selectedPizzaCrusts, setSelectedPizzaCrusts] = useState([]);
  const [cheeseTypesList, setCheeseTypesList] = useState([]);
  const [selectedCheeseTypes, setSelectedCheeseTypes] = useState([]);
  const [toppingCombosList, setToppingCombosList] = useState([]);
  const [selectedToppingCombos, setSelectedToppingCombos] = useState([]);

  // useEffect 取得資料
  useEffect(() => {
    const getSauces = async () => {
      try {
        const res = await axios.get(`${APIUrl}sauces`);
        setSauceList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSauces();
  }, []);
  useEffect(() => {
    const getPizzaSizes = async () => {
      try {
        const res = await axios.get(`${APIUrl}pizzaSizes`);
        setPizzaSizesList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPizzaSizes();
  }, []);
  useEffect(() => {
    const getPizzaCrusts = async () => {
      try {
        const res = await axios.get(`${APIUrl}pizzaCrusts`);
        setPizzaCrustsList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPizzaCrusts();
  }, []);
  useEffect(() => {
    const getCheeseTypes = async () => {
      try {
        const res = await axios.get(`${APIUrl}cheeseTypes`);
        setCheeseTypesList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCheeseTypes();
  }, []);

  useEffect(() => {
    const getToppingCombos = async () => {
      try {
        const res = await axios.get(`${APIUrl}toppingCombos`);
        setToppingCombosList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getToppingCombos();
  }, []);

  return (
    <>
      <main className="container-fluid">
        <div className="container py-6 py-md-10">
          {/* Pick Your Pizza標題 */}
          <div className="text-center text-center mb-6 mb-md-11">
            <h1 className="section-title fs-2 fs-md-1 text-primary">
              Pick Your Pizza
            </h1>
            <img src={lineSmall} alt="底線" />
          </div>
          {/* Step1選擇口味 */}
          <div className="row flex-wrap flex-md-nowrap mb-8 px-2">
            {/* Step1 */}
            <div className="col-12 col-md-3 mb-3 px-0">
              <div className="d-flex align-items-center section-title">
                <h1 className="fs-2 fs-md-1 me-2">Step</h1>
                <div className="step">
                  <div className="step-circle rounded-circle bg-primary"></div>
                  <p className="step-number text-white fs-5 fs-md-2">1</p>
                </div>
              </div>
            </div>
            {/* 選擇口味 */}
            <div className="col-12 col-md-9 px-0">
              <div className="d-flex align-items-center mb-3">
                <p className="fs-7 fs-md-5 fw-bold py-3 py-md-2 me-2">
                  選擇口味
                </p>
                <div className="check">
                  <img src={check} alt="打勾圖示" />
                </div>
              </div>
              <div className="row flex-nowrap overflow-x-auto">
                {sauceList.map((sauce) => (
                  <div className="col-12 col-md-4" key={sauce.id}>
                    <div
                      className={`card-body text-center p-5 rounded-4 ${
                        selectedSauce === sauce.id
                          ? "border border-2 border-primary"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedSauce(sauce.id)}
                    >
                      <div>
                        <div className="card-photo justify-content-center">
                          <div className="card-check rounded-4">
                            <a
                              href="/products#/products"
                              className={
                                selectedSauce === sauce.id
                                  ? "check text-white active"
                                  : "check text-white"
                              }
                            >
                              <img src={check} alt="打勾圖示" />
                            </a>
                          </div>
                          <img
                            src={sauceImages[[sauce.id]]} // 圖片未上傳至遠端資料庫的方法
                            alt={sauce.title}
                            className="mw-100"
                          />
                        </div>
                        <h5 className="fw-bold mb-2">{sauce.title}</h5>
                        <p>{sauce.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Step2選擇尺寸餅皮起司 */}
          <div className="row flex-wrap flex-md-nowrap mb-8 px-2">
            {/* Step2 */}
            <div className="col-12 col-md-3 mb-3 px-0">
              <div className="d-flex align-items-center section-title">
                <h1 className="fs-2 fs-md-1 me-2">Step</h1>
                <div className="step">
                  <div className="step-circle rounded-circle bg-primary"></div>
                  <p className="step-number text-white fs-5 fs-md-2">2</p>
                </div>
              </div>
            </div>
            {/* 選擇尺寸餅皮起司 */}
            <div className="col-12 col-md-9 px-0">
              {/* 尺寸 */}
              <div className="d-flex align-items-center mb-3">
                <p className="fs-7 fs-md-5 fw-bold py-3 py-md-2 me-2">
                  選擇尺寸
                </p>
                <div className="check">
                  <img src={check} alt="打勾圖示" />
                </div>
              </div>
              <div className="row flex-nowrap overflow-x-auto mb-3 mb-md-5">
                {pizzaSizesList.map((pizzaSizes) => (
                  <div className="col-12 col-md-4" key={pizzaSizes.id}>
                    <div
                      className={`card-body text-center p-5 rounded-4 ${
                        selectedPizzaSizes === pizzaSizes.id
                          ? "border border-2 border-primary"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedPizzaSizes(pizzaSizes.id)}
                    >
                      <div>
                        <div className="card-photo justify-content-center">
                          <h2 className="selling-price section-title">
                            +{pizzaSizes.price}
                          </h2>
                          <div className="card-check rounded-4">
                            <a
                              href="#"
                              className={
                                selectedPizzaSizes === pizzaSizes.id
                                  ? "check text-white active"
                                  : "check text-white"
                              }
                            >
                              <img src={check} alt="打勾圖示" />
                            </a>
                          </div>
                          <img
                            src={pizzaSizesImages[[pizzaSizes.id]]} // 圖片未上傳至遠端資料庫的方法
                            alt={pizzaSizes.title}
                            className="mw-100"
                          />
                        </div>
                        <h5 className="fw-bold mb-2">{pizzaSizes.inches}</h5>
                        <p>{pizzaSizes.people}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* 餅皮 */}
              <div className="d-flex align-items-center mb-3">
                <p className="fs-7 fs-md-5 fw-bold py-3 py-md-2 me-2">
                  選擇餅皮
                </p>
                <div className="check">
                  <img src={check} alt="打勾圖示" />
                </div>
              </div>
              <div className="row flex-nowrap overflow-x-auto mb-3 mb-md-5">
                {pizzaCrustsList.map((pizzaCrusts) => (
                  <div className="col-12 col-md-4" key={pizzaCrusts.id}>
                    <div
                      className={`card-body text-center p-5 rounded-4 ${
                        selectedPizzaCrusts === pizzaCrusts.id
                          ? "border border-2 border-primary"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedPizzaCrusts(pizzaCrusts.id)}
                    >
                      <div className="card-photo justify-content-center">
                        <div className="card-check rounded-4">
                          <a
                            href="#"
                            className={
                              selectedPizzaCrusts === pizzaCrusts.id
                                ? "check text-white active"
                                : "check text-white"
                            }
                          >
                            <img src={check} alt="打勾圖示" />
                          </a>
                        </div>
                        <img
                          src={pizzaCrustsImages[[pizzaCrusts.id]]} // 圖片未上傳至遠端資料庫的方法
                          alt={pizzaCrusts.crust}
                          className="mw-100"
                        />
                      </div>
                      <h5 className="fw-bold mb-2">{pizzaCrusts.crust}</h5>
                      <p>{pizzaCrusts.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* 起司 */}
              <div className="d-flex align-items-center mb-3">
                <p className="fs-7 fs-md-5 fw-bold py-3 py-md-2 me-2">
                  選擇起司
                </p>
                <div className="check">
                  <img src={check} alt="打勾圖示" />
                </div>
              </div>
              <div className="row flex-nowrap overflow-x-auto">
                {cheeseTypesList.map((cheeseTypes) => (
                  <div className="col-12 col-md-4" key={cheeseTypes.id}>
                    <div
                      className={`card-body text-center p-5 rounded-4 ${
                        selectedCheeseTypes === cheeseTypes.id
                          ? "border border-2 border-primary"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedCheeseTypes(cheeseTypes.id)}
                    >
                      <div className="card-photo justify-content-center">
                        <div className="card-check rounded-4">
                          <a
                            href="#"
                            className={
                              selectedCheeseTypes === cheeseTypes.id
                                ? "check text-white active"
                                : "check text-white"
                            }
                          >
                            <img src={check} alt="打勾圖示" />
                          </a>
                        </div>
                        <img
                          src={cheeseTypesImages[[cheeseTypes.id]]} // 圖片未上傳至遠端資料庫的方法
                          alt={cheeseTypes.name}
                          className="mw-100"
                        />
                      </div>
                      <h5 className="fw-bold mb-2">{cheeseTypes.name}</h5>
                      <p>{cheeseTypes.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Step3選擇配料組合 */}
          <div className="row flex-wrap flex-md-nowrap px-2">
            {/* Step3 */}
            <div className="col-12 col-md-3 mb-3">
              <div className="d-flex align-items-center section-title">
                <h1 className="fs-2 fs-md-1 me-2">Step</h1>
                <div className="step">
                  <div className="step-circle rounded-circle bg-primary"></div>
                  <p className="step-number text-white fs-5 fs-md-2">3</p>
                </div>
              </div>
            </div>
            {/* 選擇配料組合 */}
            <div className="col-12 col-md-9 px-0">
              {/* 配料組合 */}
              <div className="d-flex align-items-center mb-3">
                <p className="fs-7 fs-md-5 fw-bold py-3 py-md-2 me-2">
                  選擇配料組合
                </p>
                <div className="check">
                  <img src={check} alt="打勾圖示" />
                </div>
              </div>
              <div className="row flex-nowrap overflow-x-auto mb-3 mb-md-5">
                {/* 海鮮派對 */}
                {toppingCombosList.map((toppingCombos) => (
                  <div className="col-12 col-md-4" key={toppingCombos.id}>
                    <div
                      className={`card-body text-center p-5 rounded-4 ${
                        selectedToppingCombos === toppingCombos.id
                          ? "border border-2 border-primary"
                          : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedToppingCombos(toppingCombos.id)}
                    >
                      <div className="card-photo justify-content-center">
                        <h2 className="selling-price section-title">
                          +{toppingCombos.price}
                        </h2>
                        <div className="card-check rounded-4">
                          <a
                            href="#"
                            className={
                              selectedToppingCombos === toppingCombos.id
                                ? "check text-white active"
                                : "check text-white"
                            }
                          >
                            <img src={check} alt="打勾圖示" />
                          </a>
                        </div>
                      </div>
                      <div className="text-center pt-11">
                        <h5 className="fw-bold mb-2">{toppingCombos.name}</h5>
                        <p className="mb-2">{toppingCombos.description}</p>
                        <div className="d-flex justify-content-center">
                          {toppingCombos.ingredients.map(
                            (ingredient, index) => (
                              <div key={index}>
                                <img
                                  src={ingredientImages[ingredient.imgKey]}
                                  alt={ingredient.name}
                                  className="mw-100"
                                />
                                <p className="fs-10 fw-bold">
                                  {ingredient.name}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* 總計 */}
      <div class="d-none d-md-block container-fluid fixed-bottom p-0 bottom-0">
        <div class="product-shadow bg-secondary py-4">
          <div class="container">
            <div class="d-flex align-items-center">
              <div class="fs-9 fs-md-8 me-3">總計</div>
              <div class="section-title text-primary fs-5 me-auto">NT$ 520</div>
              <a href="packageResult.html">
                <button class="btn-filled-primary" type="button">
                  <div class="d-flex align-items-center">
                    <span class="me-2">生成您的披薩組合</span>
                    <i class="bi bi-arrow-right fs-6"></i>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 總計-手機板 */}
      <div class="d-md-none container-fluid p-0 position-fixed bottom-0">
        <div class="rounded-top-3 product-shadow bg-secondary p-4">
          <div class="d-flex align-items-center mb-4">
            <div class="me-auto">
              <h3 class="fs-9 text-gray-950">總計</h3>
            </div>
            <div>
              <h2 class="section-title fs-5 text-primary">NT$ 520</h2>
            </div>
          </div>
          <a href="packageResult.html">
            <button class="btn-filled-primary w-100" type="button">
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-2">生成您的披薩組合</span>
                <i class="bi bi-arrow-right fs-6"></i>
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
