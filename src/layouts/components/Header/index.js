import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb, FaRegUser, FaRegBookmark, FaRegMoon } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdLiveTv, MdLogout } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";

import Menu from "../../../components/Popper/Menu";
import Button from "../../../components/Button";
import images from "../../../assets/images";
import Search from './Search';
import Skeleton from "react-loading-skeleton";
import { AuthContext, LoadingContext } from '../../../context';
import { AuthModalContext } from '../../../context';
import LoginModal from '../../../components/Modal/LoginModal';

function Header() {
    const LoadingContextValue = useContext(LoadingContext);

    const AuthContextValue = useContext(AuthContext)
    const currentUser = AuthContextValue.user

    const AuthModalContextValue = useContext(AuthModalContext)

    return (
        <>
            <div className="header-wrapper fixed w-full flex justify-center bg-white border-[#1618231F]">
                <div className="flex justify-between px-32 py-2 items-center w-full">
                    <div className="logo flex gap-2 items-center">
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                        <p className="text-sky-600 text-xl font-semibold font-sans">Medlab Vĩnh Viễn</p>
                    </div>

                    <div className="navigate flex gap-6 items-center">
                        <button className="text-slate-800 font-semibold">Home</button>
                        <button className="text-slate-800/60  font-semibold">About</button>
                        <button className="text-slate-800/60  font-semibold">Support</button>
                        <button className="text-slate-800/60  font-semibold">Service</button>
                        <button className="text-slate-800/60  font-semibold">Page</button>
                    </div>

                    <div className="action">
                        <button className="bg-sky-600 px-4 py-2 font-semibold text-white rounded-lg">Đặt lịch xét nghiệm</button>
                    </div>
                </div>
            </div >
            {AuthModalContextValue.showLoginModal && <LoginModal toggleLoginModal={AuthModalContextValue.toggleLoginModal} />}
        </>
    );
}

export default Header;
