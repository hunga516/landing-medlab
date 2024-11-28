import { Link, useLocation } from 'react-router-dom';
import { BiSupport } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';

function NavigateModal({toggleIsShowNavigateModal}) {
    const location = useLocation();

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowNavigateModal();
        }
    }

    return (
        <div className="modal fixed inset-0 bg-slate-100/50 z-20" onClick={closeModal}>
            <div className="absolute flex flex-col justify-between top-0 bottom-0 left-0 w-52 md:w-80 bg-white py-4 md:py-8 px-4">
               <div>
                   <Link to="/" className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/" ? 'bg-slate-100' : ""} px-4 py-2  rounded-lg`}>Trang
                       chủ
                   </Link>
                   <Link to="/price" className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/price" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Dịch vụ
                   </Link>
                   <Link to="/about" className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/about" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Về chúng tôi
                   </Link>
                   <Link to="/support" className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/support" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Tư vấn
                   </Link>
                   <div className="mt-12 w-full h-[0.5px] bg-slate-300/50"></div>
                   <a href="/support" className={`mt-4 flex items-center gap-2 text-sm md:text-lg font-medium bg-gradient-to-tl from-blue-500 to-sky-600 text-white px-4 py-2 rounded-lg`}>
                       Tra cứu kết quả xét nghiệm
                   </a>
               </div>
                <div className="flex justify-between items-end">
                    <a href="/" className="flex items-center gap-2 text-sm md:text-lg font-medium">
                        <BiSupport />
                        Hỗ trợ
                    </a>
                   <p className="text-sm text-slate-400">v1.28.11</p>
                </div>
            </div>
        </div>
    )
}

export default NavigateModal