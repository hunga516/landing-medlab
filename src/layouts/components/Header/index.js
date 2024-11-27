
import { SlMenu } from "react-icons/sl";
import { CgCalendarDates } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <div className="header-wrapper fixed w-full md:px-4 lg:px-0 flex justify-center border-[#1618231F]">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg -z-10"></div>
                <div className="flex justify-between py-2 items-center w-full mx-4 md:mx-4 lg:mx-0 lg:px-32">
                    <button className="block lg:hidden p-1">
                        <SlMenu className="text-2xl" />
                    </button>

                    <div className="logo flex gap-2 items-center">
                        <p className="md:hidden bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm md:text-xl font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                        <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-xl font-semibold font-sans">Medlab Vĩnh Viễn</p>
                    </div>

                    <div className="hidden lg:flex gap-8 items-center">
                        <Link to={"/"} className="text-slate-800/60 text-xl">Trang chủ</Link>
                        <Link to="/price" className="text-slate-800/60  text-xl">Dịch vụ</Link>
                        <Link to={"/about"} className="text-slate-800/60  text-xl">Về chúng tôi</Link>
                        <Link to={"/support"} className="text-slate-800/60  text-xl">Tư vấn</Link>
                    </div>

                    <div className="hidden md:block action ]">
                        <button
                            className="hidden lg:block text-base md:text-lg bg-sky-600 px-4 py-2 text-white rounded-lg drop-shadow-[0_1px_35px_rgba(44,132,241,0.8)]">
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
        </>
    );
}

export default Header;
