
import { SlMenu } from "react-icons/sl";
import { CgCalendarDates } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavigateModal from '../../../components/Modal/NavigateModal';

function Header() {

    const [isShowNavigateModal, setIsShowNavigateModal] = useState(false);

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

                    <div className="logo flex gap-2 items-center">
                        <p className="md:hidden bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm md:text-xl font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                        <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab Vĩnh Viễn</p>
                    </div>

                    <div className="hidden lg:flex gap-8 items-center">
                        <Link to={"/"} className="text-slate-800/60 text-base">Trang chủ</Link>
                        <Link to="/price" className="text-slate-800/60  text-base">Dịch vụ</Link>
                        <Link to={"/about"} className="text-slate-800/60  text-base">Về chúng tôi</Link>
                        <Link to={"/support"} className="text-slate-800/60  text-base">Tư vấn</Link>
                    </div>

                    <div className="hidden md:block action ]">
                        <button
                            className="hidden lg:block text-base md:text-base bg-sky-600 px-4 py-2 text-white rounded-lg drop-shadow-[0_1px_35px_rgba(44,132,241,0.8)]">
                            Đặt lịch xét nghiệm
                        </button>
                        <button
                            className="lg:hidden flex items-center gap-1 bg-sky-600 pl-3 pr-4 py-2 text-white rounded-lg">
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
