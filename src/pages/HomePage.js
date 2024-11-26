import images from '../assets/images';
import { FaArrowRightLong, FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineSearch } from 'react-icons/md';
import { TbCash } from 'react-icons/tb';
import { RxPencil1 } from "react-icons/rx";

import Rating from '../components/Rating/Rating';

function HomePage() {

    return (
        <>
            {/*Hero section*/}
            <div
                className="w-full h-[250px] md:h-[600px] rounded-2xl bg-cover lg:bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images.background1})`,
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: 16 / 9,
                }}
            >
                <div className="grid grid-cols-2 p-4 lg:p-8 h-full">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-sky-600 font-bold max-h-[110px] md:max-h-screen text-2xl md:text-6xl lg:text-8xl leading-9 md:leading-[70px] lg:leading-[90px] text-left tracking-tight">xét
                            nghiệm chính xác, sức khoẻ an tâm
                        </h1>
                        <div className="flex items-center gap-8">
                            <button
                                className="flex items-center gap-2 bg-sky-600 px-4 py-2 text-white text-xs text-nowrap md:text-base rounded-md text-[14px]">
                                <MdOutlineSearch />
                                Xem kết quả xét nghiệm
                            </button>
                            <button className="hidden md:block md:flex items-center gap-2 text-[14px]">
                                Tìm hiểu thêm
                                <FaArrowRightLong className="text-xs" />
                            </button>
                        </div>

                        <div className="w-full md:w-72 flex items-center gap-x-4 md:gap-x-6">
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-xl text-nowrap font-medium">35.5k</p>
                                <p className="text-sky-600 text-xs md:text-sm tracking-wide text-nowrap">Khách
                                    hàng</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-xl text-nowrap font-medium">120.5k</p>
                                <p className="text-sky-600 text-xs md:text-sm tracking-wide text-nowrap">Lượt xét
                                    nghiệm</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-xl text-nowrap font-medium">+30</p>
                                <p className="text-sky-600 text-xs md:text-sm tracking-wide text-nowrap">Đối tác</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    </div>
                </div>
            </div>

            {/*Dịch vụ section*/}
            <div className="w-full mt-10 md:mt-48">
                <div className="">
                    <p className="text-sky-500 text-sm md:text-base font-medium mx-auto">Dịch Vụ</p>
                    <p className="text-slate-800 text-lg md:text-3xl mx-auto mt-2">Doanh mục <span
                        className="underline underline-offset-8 decoration-2 decoration-sky-500">xét nghiệm</span> của
                        Medlab</p>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-6 mt-16">
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.huyethoc} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Huyết
                            học</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhoamiendich} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            hoá - Miễn dịch</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhoa} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            hoá</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.nuoctieu} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Nước
                            tiểu</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.xetnghiemdich} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Xét
                            nghiệm dịch</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.vitrung} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Vi
                            trùng</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhocphantu} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            học phân tử</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.chuandoan} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Chuẩn
                            đoán</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.visinh} alt="" className="px-4 md:px-6" />
                        <p className="text-slate-800 text-center mt-2 md:mt-4 overflow-hidden text-ellipsis text-nowrap w-full">Vi
                            sinh</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-12">
                    <div className="text-sky-600 text-sm flex items-center gap-2">
                        Xem bảng giá dịch vụ
                        <TbCash />
                    </div>
                    <p className="text-slate-600 text-sm">Cập nhật 1 ngày trước</p>
                </div>
            </div>

            {/*Quy trình section*/}
            <div className="w-full mt-48">
                <div className="">
                    <h1 className="text-3xl leading-10">Quy trình <span
                        className="underline underline-offset-8 decoration-2 decoration-yellow-400">xét nghiệm</span>
                    </h1>
                </div>

                <div className="grid grid-cols-2 grid-row-2 gap-4 mt-8">
                    <div
                        className="p-8 h-56 rounded-lg "
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <h1 className="text-lg leading-8">Bước 1</h1>
                                <p className="text-slate-900 text-xl leading-8">Tếp nhận và đăng ký thông tin</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide">Bệnh nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-8 h-56 rounded-lg "
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <h1 className="text-lg leading-8">Bước 1</h1>
                                <p className="text-slate-900 text-xl leading-8">Tếp nhận và đăng ký thông tin</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide">Bệnh nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-8 h-56 rounded-lg "
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <h1 className="text-lg leading-8">Bước 1</h1>
                                <p className="text-slate-900 text-xl leading-8">Tếp nhận và đăng ký thông tin</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide">Bệnh nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-8 h-56 rounded-lg "
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <h1 className="text-lg leading-8">Bước 1</h1>
                                <p className="text-slate-900 text-xl leading-8">Tếp nhận và đăng ký thông tin</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide">Bệnh nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Đánh giá section*/}
            <div className="w-full mt-48">

                <div className="grid grid-cols-3 gap-4">
                    <div className="">
                        <h2 className="text-slate-800 text-3xl leading-snug">Khách hàng nói gì về <span
                            className="bg-clip-text text-transparent bg-gradient-to-br from-sky-900 to-sky-400">Medlab Vĩnh Viễn</span> ?
                        </h2>

                        <div className="flex flex-row items-center gap-6 mt-8">
                            <button className="flex items-center gap-2 px-4 py-1 text-white rounded-lg text-sm bg-gradient-to-tl from-amber-500 to-yellow-400">
                                Để lại đánh giá
                                <RxPencil1 />
                            </button>
                            <button className="text-sm text-slate-600">Xem tất cả</button>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className="bg-slate-100 p-4 rounded-lg ">
                            <div className="flex items-start justify-between">
                                <p className="text-black text-sm">Khách hàng mới</p>
                                <div className="flex items-center">
                                    <img
                                        className="object-cover w-10 h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <img
                                        className="object-cover cover w-10 h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <img
                                        className="object-cover cover w-10 h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                        alt="" />
                                    <img
                                        className="object-cover cover w-10 h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <p className="flex items-center justify-center cover w-10 h-10 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                </div>
                            </div>

                            <div className="flex items-end mt-12">
                                <div className="w-full">
                                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-yellow-500">91%</p>
                                    <p className="text-xs text-slate-600 font-medium">Khách hàng hài lòng</p>
                                </div>

                                <button className="text-nowrap text-sm flex items-center gap-2">
                                    Đặt lịch ngay để nhận ưu đãi
                                    <FaRegCircleCheck />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-100 rounded-lg overflow-hidden grid grid-rows-2">
                            <div
                                className="border-b-[1px] bg-gradient-to-r p-4 w-full flex justify-center items-center from-green-400 to-blue-500 text-xl font-semibold text-transparent bg-clip-text">93%
                                khách hàng hài lòng
                            </div>
                            <div
                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-full flex justify-center items-center text-xl font-semibold text-transparent bg-clip-text">85%
                                khách hàng trở lại sử dụng
                            </div>
                        </div>
                    </div>

                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm tracking-wide">
                                        Lê Ngọc Lộc
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-2 text-[14px]">
                            Cơ sở vật chất hiện đại, máy móc được trang bị tiên tiến, đảm bảo độ chính xác cao trong các
                            kết quả xét nghiệm. Thời gian trả kết quả nhanh chóng và quy trình làm việc khoa học giúp
                            tiết kiệm tối đa thời gian cho khách hàng. Đặc biệt, đội ngũ nhân viên luôn nhiệt tình giải
                            đáp mọi thắc mắc, mang lại cảm giác an tâm và thoải mái.
                        </div>
                    </div>

                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm tracking-wide">
                                        Lê Ngọc Lộc
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-2 text-[14px]">
                            Cơ sở vật chất hiện đại, máy móc được trang bị tiên tiến, đảm bảo độ chính xác cao trong các
                            kết quả xét nghiệm. Thời gian trả kết quả nhanh chóng và quy trình làm việc khoa học giúp
                            tiết kiệm tối đa thời gian cho khách hàng. Đặc biệt, đội ngũ nhân viên luôn nhiệt tình giải
                            đáp mọi thắc mắc, mang lại cảm giác an tâm và thoải mái.
                        </div>
                    </div>

                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm tracking-wide">
                                        Lê Ngọc Lộc
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-2 text-[14px]">
                            Cơ sở vật chất hiện đại, máy móc được trang bị tiên tiến, đảm bảo độ chính xác cao trong các
                            kết quả xét nghiệm. Thời gian trả kết quả nhanh chóng và quy trình làm việc khoa học giúp
                            tiết kiệm tối đa thời gian cho khách hàng. Đặc biệt, đội ngũ nhân viên luôn nhiệt tình giải
                            đáp mọi thắc mắc, mang lại cảm giác an tâm và thoải mái.
                        </div>
                    </div>
                </div>
            </div>

            {/*Đội ngũ section*/}
            <div className="w-full mt-48 pb-48">
                <div className="text-center">
                    <p className="text-yellow-500 font-medium mx-auto">Đội ngũ</p>
                    <p className="text-slate-800 text-3xl mx-auto">Đội ngũ bác sĩ trình độ cao</p>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-8">
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background3})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background4})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background5})`,
                                backgroundPosition: 'bottom left',
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;