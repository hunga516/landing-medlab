import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { useRef, useState } from 'react';
import axios from 'axios';
import images from '../assets/images';
import { VscLoading } from 'react-icons/vsc';
import Button from '../components/Button';

function UnitLookUpPage() {
    const docsRef = useRef(null);
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const location = useLocation();
    const [formData, setFormData] = useState({
        TaiKhoan: "baoviet",
        MatKhau: "123",
    });
    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();

    const LOGIN_STATUS = {
        statusCode: 200,
        message: "Thành công!",
        token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImJhb3ZpZXQiLCJzdWIiOiI0IiwiVG9rZW5JZCI6Ijg5MmQ0ZTdkLWMxMGEtNDdmNy1hOWZiLTdjYTE4ZjEyYTQ4NiIsIkRvaVRhYyI6IjQiLCJDaGlOaGFuaCI6IjAxIiwiTG9haSI6IjEiLCJuYmYiOjE3MzQ2Nzk1MzYsImV4cCI6MTczNDY4MDEzNiwiaWF0IjoxNzM0Njc5NTM2fQ._cRbM-ENEW_qaM0CtWlhVXxXVVza4quVCWKW1KNUCvr97VzmJX6ft2oAEQhEuVYicKs4ezYvzyXgEHZgtxhF4Q"
    }

    const handleChange = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    console.log(errorMessage);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.TaiKhoan.trim()) {
            setErrorMessage(prevState => ({...errorMessage, 'TaiKhoan': "Tài khoản không được để trống!"}))
            return;
        }
        if (!formData.MatKhau.trim()) {
            setErrorMessage(prevState => ({...errorMessage, 'TaiKhoan': "Mã tra cứu không được để trống."}));
            return;
        }

        setIsLoadingSubmit(true);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_API}/api/TraCuuKetQua/doi-tac/dang-nhap`, formData
            );

            if (response.data.statusCode === 200) {
                localStorage.setItem('token', response.data.token);
                navigate(`/${formData.TaiKhoan}/admin/danh-sach-benh-nhan`);
            } else {
                setErrorMessage(prevState => ({...prevState, 'loginError': response.data.message}));
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingSubmit(false);
        }
    };

    const scrollToDocs = () => {
        if (docsRef.current) {
            docsRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    return (
        <section className="md:px-8 lg:px-0 lg:mx-32 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="rounded-lg">
                <h1 className="mx-auto text-3xl text-slate-800 font-medium">
                    Tra cứu kết quả xét nghiệm
                </h1>
                <div className="type grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link to="/tra-cuu"
                          className={`rounded px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-sky-500 ring-inset'}`}>
                        Khách hàng
                    </Link>

                    <Link to="/don-vi-tra-cuu"
                          className={`rounded-md px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/don-vi-tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-sky-500 ring-inset'}`}>
                        Đơn vị gửi mẫu
                    </Link>
                    <button onClick={scrollToDocs} className="md:hidden text-slate-600 flex items-center gap-2">
                        Hướng dẫn tra cứu
                        <FaArrowDown />
                    </button>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="TaiKhoan" className="text-sm text-gray-900 leading-6">Tài khoản</label>
                        <input
                            type="text"
                            id="TaiKhoan"
                            name="TaiKhoan"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2 placeholder:font-sans"
                            placeholder={'Nhập tên tài khoản'}
                            onChange={handleChange}
                        />
                        {errorMessage.TaiKhoan && (
                            <p className="italic text-xs text-red-500 font-sans font-medium">{errorMessage.TaiKhoan}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start justify-between gap-4">
                            <label htmlFor="MatKhau" className="text-sm text-gray-900 leading-6 text-nowrap">Mật khẩu</label>
                        </div>
                        <input
                            type="text"
                            id="MatKhau"
                            name="MatKhau"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2 placeholder:font-sans"
                            placeholder={'Nhập mật khẩu'}
                            onChange={handleChange}
                        />
                        {errorMessage.TaiKhoan && (
                            <p className="italic text-xs text-red-500 font-sans font-medium">{errorMessage.TaiKhoan}</p>
                        )}
                        {errorMessage.loginError && (
                            <p className="italic text-xs text-red-500 font-sans font-medium">{errorMessage.loginError}</p>
                        )}
                    </div>
                    <div className="text-right">
                        {isLoadingSubmit ? (
                            <button
                                className="px-4 py-1 bg-sky-500/50 rounded-md text-white"
                                onClick={handleSubmit}
                            >
                                <VscLoading className='animate-spin text-2xl' />
                                <span></span>
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="px-4 py-1 bg-sky-500 rounded-md text-white">
                                Đăng nhập
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div ref={docsRef} className="overflow-hidden rounded-lg">
                <img
                    src={images.hddonvi}
                    alt="" />
            </div>
        </section>
    );
}

export default UnitLookUpPage;