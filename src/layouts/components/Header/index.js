
import { SlMenu } from "react-icons/sl";
import { Link, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import NavigateModal from '../../../components/Modal/NavigateModal';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../../../components/Popper/Wrapper';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCalendar, FaHospitalUser, FaPhone } from 'react-icons/fa';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { RiTestTubeFill } from 'react-icons/ri';
import { PiHospitalBold, PiHospitalDuotone } from 'react-icons/pi';
import BookingModal from '../../../components/Modal/BookingModal';

function Header() {

    const [isShowNavigateModal, setIsShowNavigateModal] = useState(false);
    const [isShowBookingModal, setIsShowBookingModal] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let prevScroll = window.scrollY

        const handleScroll = () => {
            const currentScroll = window.scrollY
                if(currentScroll > prevScroll) {
                    setIsHidden(true)
                } else {
                    setIsHidden(false)
                }
                prevScroll = currentScroll;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    console.log(isHidden);

    const toggleIsShowNavigateModal = () => {
        setIsShowNavigateModal(!isShowNavigateModal);
    }

   const toggleIsShowBookingModal = () => {
        setIsShowBookingModal(!isShowBookingModal);
    }

    return (
        <>
            <div
                className="header-wrapper fixed w-full md:px-4 lg:px-0 flex justify-center border-[#1618231F] z-50">
                <div className={`fixed ${isHidden ? '-translate-y-full' : "translate-y-0"} hidden sm:flex w-full items-center justify-end bg-sky-600 text-white gap-2 duration-300`}>
                    <button
                        onClick={toggleIsShowBookingModal}
                        className="flex items-center gap-2 text-xs font-medium hover:bg-sky-700 rounded-lg leading-4 pl-2 py-1 pr-1.5 text-white">
                        <MdOutlineEditCalendar className="text-lg" />
                        Đặt lịch xét nghiệm
                    </button>
                    <button
                        className="flex items-center gap-1 text-xs font-medium hover:bg-sky-700 rounded-lg leading-4 pl-2 py-1 pr-1.5 text-white">
                        <RiTestTubeFill className="text-lg" />
                        Tra cứu kết quả
                    </button>
                    <button
                        className="flex items-center gap-2 text-xs font-medium hover:bg-sky-700 rounded-lg leading-4 pl-2 py-1 pr-1.5 text-white">
                        <PiHospitalBold className="text-lg" />
                        Đơn vị gửi mẫu tra cứu
                    </button>
                    <button className="bg-sky-800 text-xs flex items-center gap-2 px-2 py-2.5 tracking-wide font-medium text-white/85">
                        <FaPhone className=""/>
                        0909 636293
                    </button>
                </div>
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg -z-10 drop-shadow-sm"></div>
                <div className={`flex justify-between py-2 items-center w-full ${isHidden ? 'mt-0' : "sm:mt-9"} mt-0 mx-4 md:mx-4 lg:mx-8 duration-300`}>
                    <button onClick={toggleIsShowNavigateModal} className="block lg:hidden p-1">
                        <SlMenu className="text-2xl" />
                    </button>

                    <Link to="/" className="logo flex gap-2 items-center">
                        <p className="md:hidden bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm md:text-xl font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                        <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                    </Link>

                    <div className="hidden lg:flex gap-2 items-center">
                        <Link to={"/"}
                              className={`text-slate-800 hover:bg-slate-300 px-2 py-1 rounded-lg  text-sm font-semibold`}>Trang
                            chủ</Link>
                        <Link to="/price"
                              className={`text-slate-800 hover:bg-slate-300 px-2 py-1 rounded-lg  text-sm font-semibold`}>Dịch
                            vụ</Link>
                        <Link to={"/about"}
                              className={`text-slate-800 hover:bg-slate-300 px-2 py-1 rounded-lg text-sm font-semibold`}>Về
                            chúng tôi</Link>
                        <Tippy
                            interactive={true}
                            delay={[0, 500]}
                            render={attrs => (
                                <Wrapper {...attrs}>
                                    <div className="flex flex-col items-center">
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                        <Link to="/combo/:id"
                                              className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-8 py-2 duration-200">Gói
                                            xét nghiệm 1</Link>
                                    </div>
                                </Wrapper>
                            )}
                        >
                            <Link className={`text-slate-800 text-sm font-medium flex items-center gap-1`}>
                                Gói xét nghiệm
                                <IoIosArrowDown className="text-sky-600" />
                            </Link>
                        </Tippy>
                    </div>
                </div>
            </div>

            {isShowNavigateModal && (
                <NavigateModal toggleIsShowNavigateModal={toggleIsShowNavigateModal} />
            )}

            {isShowBookingModal && (
                <BookingModal toggleIsShowBookingModal={toggleIsShowBookingModal} />
            )}
        </>
    );
}

export default Header;
