
import { SlMenu } from "react-icons/sl";
import { CgCalendarDates } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import NavigateModal from '../../../components/Modal/NavigateModal';

function Header() {

    const [isShowNavigateModal, setIsShowNavigateModal] = useState(false);
    const location = useLocation();

    const toggleIsShowNavigateModal = () => {
        setIsShowNavigateModal(!isShowNavigateModal);
    }

    return (
        <>
            <div className="header-wrapper fixed w-full md:px-4 lg:px-0 flex justify-center border-[#1618231F] z-50">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg -z-10"></div>
                <div className="flex justify-between py-2 items-center w-full mx-4 md:mx-4 lg:mx-12">
                    <button onClick={toggleIsShowNavigateModal} className="block lg:hidden p-1">
                        <SlMenu className="text-2xl" />
                    </button>

                    <Link to="/" className="logo flex gap-2 items-center">
                        <p className="md:hidden bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm md:text-xl font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                        <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab Vĩnh Viễn</p>
                    </Link>

                    <div className="hidden lg:flex gap-8 items-center">
                        <Link to={"/"} className={`${location.pathname === '/' ? 'text-slate-800' : "text-slate-800/60"}  text-base font-medium`}>Trang chủ</Link>
                        <Link to="/price" className={`${location.pathname === '/price' ? 'text-slate-800' : "text-slate-800/60"}  text-base font-medium`}>Dịch vụ</Link>
                        <Link to={"/about"} className={`${location.pathname === '/about' ? 'text-slate-800' : "text-slate-800/60"}  text-base font-medium`}>Về chúng tôi</Link>
                        <Link to={"/support"} className={`${location.pathname === '/support' ? 'text-slate-800' : "text-slate-800/60"}  text-base font-medium`}>Tư vấn</Link>
                    </div>

                    <div className="hidden md:block action ]">
                        <button
                            className="hidden lg:block text-base md:text-base bg-[#0093DD] px-4 py-2 text-white rounded-lg           ">
                            Đặt lịch xét nghiệm
                        </button>
                        <button
                            className="lg:hidden flex items-center gap-1 bg-[#0093DD] pl-3 pr-4 py-2 text-white rounded-lg">
                            <CgCalendarDates className="text-white" />
                            Đặt lịch
                        </button>

                    </div>
                </div>
            </div>

            {isShowNavigateModal && (
                <NavigateModal toggleIsShowNavigateModal={toggleIsShowNavigateModal} />
            )}
        </>
    );
}

export default Header;
