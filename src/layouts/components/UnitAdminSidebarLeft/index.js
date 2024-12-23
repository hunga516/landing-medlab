import { useContext } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";

import { LoadingContext } from "../../../context";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineMedicalServices } from 'react-icons/md';
import { BsFilePost } from 'react-icons/bs';
import { FaRegFilePdf } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { HiUsers } from 'react-icons/hi';
import { IoIosKey } from 'react-icons/io';

function UnitAdminSidebarLeft({ className }) {
    const LoadingContextValue = useContext(LoadingContext);
    const location = useLocation();
    const parmas = useParams()

    const NAV_ITEMS = [
        {
            icon: HiUsers,
            title: 'Danh sách bệnh nhân',
            to: `/${parmas.unit}/admin/danh-sach-benh-nhan`
        },
        {
            icon: IoIosKey,
            title: 'Đổi mật khẩu',
            to: `/${parmas.unit}/admin/doi-mat-khau`
        }
    ]

    return (
        <aside
            className={`${className} sticky top-[61px] flex flex-col drop-shadow-md box-border`}
            style={{
                height: 'calc(100vh - 61px)',
                // backgroundImage: `url(${images.background})`
            }}
        >
            <div className="flex flex-col justify-between gap-8 md:gap-0 flex-1 pt-5 px-5 pb-4 border-r-[1px] border-gray-400/30">
                <nav className="-mx-3 space-y-3 max-sm:flex max-sm:flex-col max-sm:gap-4">
                    {LoadingContextValue ? (
                        <>
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                        </>
                    ) : (
                        <>
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className={`${location.pathname === item.to
                                        ? 'bg-gray-200 before:absolute before:right-[-9px] before:h-8 before:w-[2px] before:bg-bluePrimary'
                                        : ''
                                    } flex items-center justify-center md:px-3 md:py-2 text-gray-600 transition-color rounded-lg relative `}
                                >
                                    <item.icon size="25px" className="text-gray-600" />
                                </Link>
                            ))}
                        </>
                    )}

                </nav>
            </div>
        </aside >
    )
}

export default UnitAdminSidebarLeft