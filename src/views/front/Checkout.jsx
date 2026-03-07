import { useForm } from 'react-hook-form';
import lineSmall from '../../assets/images/line-small.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const API_BASE = import.meta.env.VITE_API_BASE;
const SHIPPING_FEE = 100;

const Checkout = () => {
    const [showStoreModal, setShowStoreModal] = useState(false);
    const [selectedStore, setSelectedStore] = useState('');
    const [tempStore, setTempStore] = useState('');
    const [cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const navigate = useNavigate();
    //自動生成訂單編號
    const generateOrderNumber = () => {
        const date = new Date();
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        const random = Math.floor(100000 + Math.random() * 900000);
        return `ORD-${y}${m}${d}-${random}`;
    };
    //自動生成發票號碼
    const generateInvoiceNumber = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const prefix =
            letters[Math.floor(Math.random() * 26)] +
            letters[Math.floor(Math.random() * 26)];

        letters[Math.floor(Math.random() * 26)] +
            letters[Math.floor(Math.random() * 26)];

        const numbers = Math.floor(10000000 + Math.random() * 90000000);
        return `${prefix}-${numbers}`;
    };




    useEffect(() => {
        const apiCart = async () => {
            try {
                const res = await axios.get(`${API_BASE}cart`)
                setCart(res.data)
            } catch (err) {
                setCart(err.res.data)
            } finally {
                setCartLoading(false) // ← 加這行
            }
        }
        apiCart();
    }, [])

    const productsTotal = cart.reduce((acc, item) => {
        const unitPrice =
            item.totalPrice ?? item.size?.price ?? 0;

        return acc + Number(unitPrice) * Number(item.quantity);
    }, 0);
    const grandTotal = productsTotal + SHIPPING_FEE;


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: 'onChange'
    });

    const selectedShipping = watch('shippingMethod');

    const shippingOptions = [
        { value: '7-11 超商取貨', label: '7-11 超商取貨' },
        { value: '全家超商取貨', label: '全家超商取貨' },
        { value: '宅配到府', label: '宅配到府' },
        { value: '其他', label: '其他' },
    ];

    const timeSlots = [
        { value: '09:00 - 12:00', label: '09:00 - 12:00' },
        { value: '12:00 - 15:00', label: '12:00 - 15:00' },
        { value: '15:00 - 18:00', label: '15:00 - 18:00' },
        { value: '18:00 - 21:00', label: '18:00 - 21:00' },
    ];


    const paymentOptions = [
        { value: '貨到付款', label: '貨到付款' },
        { value: '信用卡', label: '信用卡' },
        { value: '轉帳', label: '轉帳' },
    ];

    const storeOptions = {
        '7-11 超商取貨': ['智取門市', '全日門市', '幸福門市', '陽光門市', '健康門市'],
        '全家超商取貨': ['快樂門市', '便利門市', '微笑門市', '活力門市', '溫馨門市'],
    };

    const cityDistricts = {
        台北市: ['中正區', '大安區', '信義區', '松山區', '內湖區', '士林區', '北投區', '文山區', '南港區', '中山區', '萬華區', '大同區'],
        新北市: ['板橋區', '新莊區', '中和區', '永和區', '三重區', '新店區', '土城區', '蘆洲區', '樹林區', '淡水區'],
        桃園市: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '大溪區', '龜山區'],
        台中市: ['中區', '東區', '西區', '南區', '北區', '西屯區', '南屯區', '北屯區', '豐原區', '大里區'],
        台南市: ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區'],
        高雄市: ['前金區', '苓雅區', '鹽埕區', '鼓山區', '三民區', '楠梓區', '左營區', '鳳山區', '小港區'],
        基隆市: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
        新竹市: ['東區', '北區', '香山區'],
        新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '湖口鄉'],
        苗栗縣: ['苗栗市', '頭份市', '竹南鎮', '通霄鎮', '苑裡鎮'],
        彰化縣: ['彰化市', '員林市', '和美鎮', '鹿港鎮', '溪湖鎮'],
        南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮'],
        雲林縣: ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮'],
        嘉義市: ['東區', '西區'],
        嘉義縣: ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉'],
        屏東縣: ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉'],
        宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉'],
        花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉'],
        台東縣: ['台東市', '成功鎮', '關山鎮', '卑南鄉', '鹿野鄉'],
        澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉'],
        金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉'],
        連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
    };

    const handleOpenModal = () => {
        setTempStore(selectedStore); // 暫存目前選擇
        setShowStoreModal(true);
    };

    const handleConfirmStore = () => {
        setSelectedStore(tempStore);
        setShowStoreModal(false);
    };




    const onSubmit = async (data) => {
        setSubmitting(true);
        setSubmitError('');
        try {
            const payload = {
                status: '訂單成立',
                orderCreatedAt: new Date()?.toLocaleString('zh-TW', { hour12: false }).replace(/\//g, '-'),
                orderNumber: generateOrderNumber(),
                invoiceNumber: generateInvoiceNumber(),
                orderPaidAt: new Date()?.toLocaleString('zh-TW', { hour12: false }).replace(/\//g, '-'),
                products: cart.map(item => ({
                    id: item.id,
                    name: item.title,
                    size: item.size?.inchs || item.selectedOptions?.size?.name,
                    price: Number(item.totalPrice),
                    qty: Number(item.quantity),
                    subtotal: Number(item.totalPrice) * Number(item.quantity),
                })),
                customer: {
                    name: `${data.lastName} ${data.firstName}`,
                    email: data.email,
                    phone: data.phone,
                },
                shipping: {
                    method: data.shippingMethod,
                    store: selectedStore || '',
                    address: `${data.city}${data.district}${data.address}`,
                },
                payment: {
                    method: data.paymentMethod,
                },
                amount: {
                    productsTotal,
                    shippingFee: SHIPPING_FEE,
                    grandTotal,
                },
            };
            const res = await axios.post(`${API_BASE}/orders`, payload);
            const newOrderId = res.data.id;
            setSubmitSuccess(true);
            Swal.fire({
                title: "送出訂單成功",
                icon: "success",
                draggable: true,
            });
            navigate(`/orderdetails/${newOrderId}`);
        } catch (e) {
            Swal.fire({
                title: "送出訂單失敗",
                icon: "error",
                draggable: true,
                position: "top-end",
                toast: true,
                timer: 3000,
                showConfirmButton: false,
            });
            setSubmitError('送出訂單失敗，請稍後再試', e);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <main className="bg-gray-50 py-md-10 py-5">
                <div className="container text-center py-10">
                    <h2 className="text-primary fw-bold answer-font">訂單送出成功！</h2>
                    <p className="mt-3">感謝您的訂購，我們將盡快處理您的訂單。</p>
                </div>
            </main>
        );
    }
    return (<>
        <main className="bg-gray-50 mt-md-10 mt-8 py-md-10 py-5">
            <section>
                <div className="container">
                    <div className="text-center pb-md-11 pb-7 mt-9 mt-md-1">
                        <h2 className="h2 fw-bold answer-font">checkout</h2>
                        <img
                            className="mx-auto d-block"
                            src={lineSmall}
                            alt="line-small"
                        />
                        <div className="d-lg-block form-checked rounded-3 mt-lg-11">
                            <div className='text-start'>
                                <form onSubmit={handleSubmit(onSubmit)} className="px-md-4">
                                    <div className='row'>
                                        <h3 className="text-font text-primary mb-lg-5 mt-md-8">Payment Method</h3>
                                        {paymentOptions.map(({ value, label }) => (
                                            <div className="col-12" key={value}>
                                                <div className="form-check">
                                                    <input
                                                        className={`form-check-input ${errors.paymentMethod ? 'is-invalid' : ''}`}
                                                        type="radio"
                                                        id={value}
                                                        value={value}
                                                        {...register('paymentMethod', { required: '請選擇付款方式' })}
                                                    />
                                                    <label className="form-check-label" htmlFor={value}>{label}</label>
                                                </div>
                                            </div>
                                        ))}
                                        {/* 錯誤提示 */}
                                        {errors.paymentMethod && (
                                            <div className='col-12'>
                                                <p className='text-danger mt-1'>{errors.paymentMethod.message}</p>
                                            </div>
                                        )}
                                        <h3 className='text-font text-primary mb-md-5 mt-md-8'>Shipping Method</h3>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">配送方式</label>
                                            <select
                                                className={`form-select rounded-2 py-3 ${errors.shippingMethod ? 'is-invalid' : ''}`}
                                                {...register('shippingMethod', { required: '請選擇配送方式' })}
                                            >
                                                <option value="">選擇配送方式</option>
                                                {shippingOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                            {errors.shippingMethod && (
                                                <div className="invalid-feedback">{errors.shippingMethod.message}</div>
                                            )}
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className={`form-label ${!selectedShipping ? 'text-muted' : ''}`}>配送時段</label>
                                            <select
                                                className={`form-select rounded-2 py-3 ${errors.timeSlot ? 'is-invalid' : ''}`}
                                                disabled={!selectedShipping}
                                                {...register('timeSlot', { required: '請選擇配送時段' })}
                                            >
                                                <option value="">選擇配送時段</option>
                                                {timeSlots.map((t) => (
                                                    <option key={t.value} value={t.value}>{t.label}</option>
                                                ))}
                                            </select>
                                            {errors.timeSlot && (
                                                <div className="invalid-feedback">{errors.timeSlot.message}</div>
                                            )}
                                        </div>
                                        {/* 超商取貨門市 */}
                                        {(selectedShipping === '7-11 超商取貨' || selectedShipping === '全家超商取貨') && (
                                            <div className="col-12 mb-3">
                                                <label className="form-label">取貨門市</label>
                                                <div className="d-flex align-items-center gap-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary rounded-pill py-3 px-5"
                                                        onClick={handleOpenModal}
                                                    >
                                                        選擇門市
                                                    </button>
                                                    {selectedStore && (
                                                        <span className="text-muted">{selectedStore}</span>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {/* Shipping Address */}
                                        <h3 className='text-font text-primary mb-md-5 mt-md-8'>Shipping Address</h3>

                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">姓氏</label>
                                            <input
                                                type="text"
                                                className={`form-control rounded-2 py-3 ${errors.lastName ? 'is-invalid' : ''}`}
                                                placeholder="Hung"
                                                defaultValue={"Hung"}
                                                {...register('lastName', { required: '請輸入姓氏' })}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">名字</label>
                                            <input
                                                type="text"
                                                className={`form-control rounded-2 py-3 ${errors.firstName ? 'is-invalid' : ''}`}
                                                placeholder="Alice"
                                                {...register('firstName', { required: '請輸入名字' })}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                                        </div>

                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">電話</label>
                                            <input
                                                type="tel"
                                                className={`form-control rounded-2 py-3 ${errors.phone ? 'is-invalid' : ''}`}
                                                placeholder="0987654321"
                                                {...register('phone', {
                                                    required: '請輸入電話',
                                                    pattern: { value: /^09\d{8}$/, message: '電話格式不正確（需為 09 開頭共 10 碼）' },
                                                })}
                                            />
                                            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className={`form-control rounded-2 py-3 ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="example@gmail.com"
                                                defaultValue={"alicehung@gmail.com"}
                                                {...register('email', {
                                                    required: '請輸入 Email',
                                                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email 格式不正確' },
                                                })}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>

                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">縣市</label>
                                            <select
                                                className={`form-select rounded-2 py-3 ${errors.city ? 'is-invalid' : ''}`}
                                                {...register('city', { required: '請選擇縣市' })}
                                            >
                                                <option value="">選擇縣市</option>
                                                {['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市', '基隆市', '新竹市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'].map(c => (
                                                    <option key={c} value={c}>{c}</option>
                                                ))}
                                            </select>
                                            {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">鄉鎮市區</label>
                                            <select
                                                className={`form-select rounded-2 py-3 ${errors.district ? 'is-invalid' : ''}`}
                                                {...register('district', { required: '請選擇鄉鎮市區' })}
                                            >
                                                <option value="">選擇鄉鎮市區</option>
                                                {(cityDistricts[watch('city')] || []).map(d => (
                                                    <option key={d} value={d}>{d}</option>
                                                ))}
                                            </select>
                                            {errors.district && <div className="invalid-feedback">{errors.district.message}</div>}
                                        </div>

                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">郵遞區號</label>
                                            <input
                                                type="text"
                                                className={`form-control rounded-2 py-3 ${errors.zipCode ? 'is-invalid' : ''}`}
                                                placeholder="950"
                                                {...register('zipCode', { required: '請輸入郵遞區號' })}
                                            />
                                            {errors.zipCode && <div className="invalid-feedback">{errors.zipCode.message}</div>}
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <label className="form-label">地址</label>
                                            <input
                                                type="text"
                                                className={`form-control rounded-2 py-3 ${errors.address ? 'is-invalid' : ''}`}
                                                placeholder="好吃鄉666號1樓"
                                                {...register('address', { required: '請輸入地址' })}
                                            />
                                            {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                                        </div>
                                    </div>

                                    <h3 className='text-font text-primary mb-md-5 mt-md-8'>Payment Details</h3>
                                    <div className="col-12 mb-4">
                                        {cartLoading ? (
                                            <p className="text-muted">載入購物車中...</p>
                                        ) : (
                                            <>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span>商品總金額</span>
                                                    <span>NT$ {productsTotal?.toLocaleString()}</span>
                                                </div>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span>運費</span>
                                                    <span>NT$ {SHIPPING_FEE.toLocaleString()}</span>
                                                </div>
                                                <div className="d-flex justify-content-between fw-bold mb-md-6">
                                                    <span>總付款金額</span>
                                                    <span className="text-primary text-font">NT$ {grandTotal?.toLocaleString()}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {submitError && (
                                        <div className="col-12">
                                            <p className="text-danger">{submitError}</p>
                                        </div>
                                    )}

                                    <div className="d-grid gap-2">
                                        <button
                                            type='submit'
                                            className='btn btn-primary rounded-pill fs-8 py-2 mb-md-8'
                                            disabled={submitting}
                                        >
                                            {submitting ? '送出中...' : '送出訂單'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* Store Modal */}
        {showStoreModal && (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
            >
                <div className="modal-dialog modal-dialog-centered w-50 m-0">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-primary text-font">選擇門市</h5>
                            <button type="button" className="btn-close" onClick={() => setShowStoreModal(false)} />
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                {(storeOptions[selectedShipping] || []).map((store) => (
                                    <li
                                        key={store}
                                        className={`list-group-item list-group-item-action ${tempStore === store ? 'active' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setTempStore(store)}
                                    >
                                        {store}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowStoreModal(false)}>
                                取消
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleConfirmStore}
                                disabled={!tempStore}
                            >
                                確認
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>)
}

export default Checkout