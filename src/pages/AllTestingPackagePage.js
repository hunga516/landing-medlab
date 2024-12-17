import images from '../assets/images';
import { FaCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoLocationSharp, IoShieldCheckmarkSharp } from 'react-icons/io5';
import { TbRating18Plus } from 'react-icons/tb';
import { PiGenderIntersexBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function AllTestingPackagePage() {
    return (
        <div className="mt-8 md:px-8 lg:px-0 lg:mx-32 md:mt-20">
            <h1 className="text-slate-800 font-medium text-3xl">
                Tất cả gói xét nghiệm
            </h1>

            <div className="grid grid-cols-3 gap-16 mt-8">
                <Link to="/goi-xet-nghiem-tong-quat" className="relative w-full">
                    <img src={images.bannertongquat} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            799.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm tổng quát
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-lg" />
                                Từ 5 tuổi
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/goi-xet-nghiem-nipt" className="relative w-full">
                    <img src={images.bannernipt} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            1.800.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm NIPT
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-lg" />
                                Phụ nữ mang thai từ tuần 10
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/goi-xet-nghiem-vi-chat" className="relative w-full">
                    <img src={images.bannervichat} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            1.000.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm vi chất
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-base" />
                                Từ 2 tuổi
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/goi-xet-nghiem-tim-mach" className="relative w-full">
                    <img src={images.bannertimmach} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            499.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm tim mạch
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-base" />
                                Từ 25 tuổi
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/goi-xet-nghiem-tien-hon-nhan" className="relative w-full">
                    <img src={images.bannertienhonnhan} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            990.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm tiền hôn nhân
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-base" />
                                Từ 18 tuổi
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/goi-xet-nghiem-adn-huyet-thong" className="relative w-full">
                    <img src={images.banneradnhuyetthong} alt="" className="" />
                    <div
                        className="absolute w-3/4 -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-md p-4 drop-shadow-md">
                        <div
                            className="absolute -top-8 left-4 bg-blue-500 text-white font-medium px-3 py-2 rounded-lg">Từ
                            1.990.000 vnđ
                        </div>
                        <p className="text-slate-800">
                            Gói xét nghiệm ADN huyết thống
                        </p>

                        <div className="flex items-center justify-between text-[12px] mt-4">
                            <div className="flex items-center gap-1">
                                <TbRating18Plus className="text-base" />
                                Mọi lứa tuổi
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLocationSharp className="text-base" />
                                TP.HCM
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AllTestingPackagePage;