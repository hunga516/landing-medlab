import images from '../assets/images';
import { FaArrowRightLong, FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineSearch } from 'react-icons/md';
import { TbCash } from 'react-icons/tb';
import { RxPencil1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

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
                        <h1 className="text-sky-600 font-bold lg:font-medium lg:tracking-tight max-h-[110px] md:max-h-screen text-2xl md:text-6xl lg:text-7xl leading-7 md:leading-[70px] lg:leading-[70px] xl:leading-[70px] text-left">Xét
                            nghiệm chính xác, sức khoẻ an tâm
                        </h1>
                        <p className="hidden md:block text-slate-600 text-sm md:text-base mt-2 max-h-20 overflow-hidden">
                           Medlab ự hào là trung tâm xét nghiệm hàng đầu, cung cấp dịch vụ chính xác, nhanh chóng với đội ngũ
                            chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại.
                        </p>
                        <p className="block md:hidden text-slate-600 text-xs">
                           Medlab tự hào là một trong top trung tâm xét nghiệm nhanh, chính xác.
                        </p>
                        <div className="flex items-center gap-8">
                            <button
                                className="flex items-center gap-1 bg-sky-600 px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-1 text-white text-[10px] text-nowrap md:text-lg rounded-md text-[14px]">
                                <MdOutlineSearch />
                                Tra cứu kết quả xét nghiệm
                            </button>
                            <button className="hidden md:block md:flex items-center gap-2 text-[14px]">
                                Tìm hiểu thêm
                                <FaArrowRightLong className="text-xs" />
                            </button>
                        </div>

                        <div className="w-full md:w-72 hidden md:flex items-center gap-x-4 md:gap-x-6">
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-2xl text-nowrap font-medium">35.5k</p>
                                <p className="text-sky-600 text-xs md:text-lg tracking-wide text-nowrap">Khách
                                    hàng</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-2xl text-nowrap font-medium">120.5k</p>
                                <p className="text-sky-600 text-xs md:text-lg tracking-wide text-nowrap">Lượt xét
                                    nghiệm</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-xs md:text-2xl text-nowrap font-medium">+30</p>
                                <p className="text-sky-600 text-xs md:text-lg tracking-wide text-nowrap">Đối tác</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-show relative">
                        <div
                            className="absolute top-28 right-0 md:top-28 lg:top-16 bg-white px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg drop-shadow-md">
                            <Rating className="w-2 h-2 md:w-4 md:h-4 lg:text-lg text-orange-300" />
                        </div>
                        <div
                            className="absolute text-nowrap mt-0.5 top-32 right-0 md:top-40 lg:top-28 bg-white px-2 py-0.5 sm:px-2 sm:py-0.5 md:px-4 md:py-1 rounded-md md:rounded-lg drop-shadow-md flex items-center gap-2 max-w-max">
                            <FaCheck className="text-green-500 text-[10px] md:text-base" />
                            <p className="text-slate-800 text-[8px] md:text-sm lg:text-base font-medium">Dịch vụ tận tâm</p>
                        </div>

                    </div>
                </div>
            </div>

            {/*Dịch vụ section*/}
            <div className="w-full mt-16 md:mt-48">
                <div className="">
                    <p className="text-sky-500 text-sm md:text-2xl font-medium mx-auto font-sans">Dịch Vụ</p>
                    <p className="text-slate-800 text-lg md:text-3xl mx-auto mt-2">Doanh mục <span
                        className="underline underline-offset-8 decoration-2 decoration-sky-500">Xét nghiệm</span> của
                        Medlab</p>

                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 md:gap-4 mt-8 md:mt-16">
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 lg:p-6 rounded-2xl">
                        <img src={images.huyethoc} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl text-center overflow-hidden text-ellipsis text-nowrap w-full">Huyết
                            học</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhoamiendich} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            hoá - Miễn dịch</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhoa} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            hoá</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.nuoctieu} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Nước
                            tiểu</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.xetnghiemdich} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Xét
                            nghiệm dịch</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.vitrung} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Vi
                            trùng</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.sinhhocphantu} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Sinh
                            học phân tử</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.chuandoan} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Chuẩn
                            đoán</p>
                    </div>
                    <div className="grid-item ring-1 ring-slate-300 p-2 md:p-4 rounded-2xl">
                        <img src={images.visinh} alt="" className="p-2 lg:p-4" />
                        <p className="text-sky-700 text-xs sm:text-sm md:text-lg lg:text-xl  text-center overflow-hidden text-ellipsis text-nowrap w-full">Vi
                            sinh</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 md:mt-12">
                    <div className="text-sky-600 text-sm md:text-lg flex items-center gap-2">
                        Xem bảng giá dịch vụ
                        <TbCash />
                    </div>
                    <p className="hidden md:block text-slate-600 text-sm md:text-lg">Cập nhật 1 ngày trước</p>
                </div>
            </div>

            {/*Quy trình section*/}
            <div className="w-full mt-16 md:mt-48">
                <div className="">
                    <h1 className="text-xl md:text-3xl leading-10">Quy trình <span
                        className="underline underline-offset-8 decoration-2 decoration-yellow-400">Xét nghiệm</span>
                    </h1>
                </div>

                <div className="grid grid-cols-2 grid-row-2 gap-4 mt-8">
                    <div
                        className="p-4 md:p-8 h-56 rounded-lg  overflow-y-auto text-ellipsis"
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 sm:col-span-2">
                                <h1 className="text-lg leading-8">Bước 1</h1>
                                <p className="text-slate-900 text-lg md:text-xl leading-8">̀Đăng ký thông
                                    tin</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide h-[40px] md:max-h-full">Bệnh
                                    nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-4 md:p-8 h-56 rounded-lg  overflow-y-auto text-ellipsis"
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 sm:col-span-2">
                                <h1 className="text-lg leading-8">Bước 2</h1>
                                <p className="text-slate-900 text-lg md:text-xl leading-8">Tiếp nhận và hẹn ngày</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide h-[40px] md:max-h-full">Nhân viên tiếp nhận thông tin từ bệnh nhân, kiểm tra đầy đủ giấy tờ cần thiết và sắp xếp lịch hẹn khám hoặc xét nghiệm. Bệnh nhân được thông báo ngày giờ cụ thể.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-4 md:p-8 h-56 rounded-lg  overflow-y-auto text-ellipsis"
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 sm:col-span-2">
                                <h1 className="text-lg leading-8">Bước 3</h1>
                                <p className="text-slate-900 text-lg md:text-xl leading-8">Tiến hành xét nghiệm</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide h-[40px] md:max-h-full">Bệnh nhân đến đúng lịch hẹn, thực hiện các xét nghiệm theo chỉ định của bác sĩ. Quá trình xét nghiệm được nhân viên y tế hướng dẫn chi tiết để đảm bảo độ chính xác.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-4 md:p-8 h-56 rounded-lg  overflow-y-auto text-ellipsis"
                        style={{
                            backgroundImage: `url(${images.background1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 sm:col-span-2">
                                <h1 className="text-lg leading-8">Bước 4</h1>
                                <p className="text-slate-900 text-lg md:text-xl leading-8">Tra cứu kết quả</p>
                                <p className="text-slate-800 text-sm mt-2 tracking-wide h-[40px] md:max-h-full">Bệnh nhân nhận kết quả xét nghiệm trực tiếp tại bệnh viện hoặc tra cứu qua hệ thống trực tuyến. Nhân viên y tế hoặc bác sĩ sẽ giải thích kết quả và đưa ra hướng điều trị phù hợp nếu cần.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Đánh giá section*/}
                <div className="w-full mt-16 md:mt-48">

                <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="col-span-3 md:col-span-1">
                        <h2 className="text-slate-800 text-3xl leading-snug">Khách hàng nói gì về <span
                            className="bg-clip-text text-transparent bg-gradient-to-br from-sky-900 to-sky-400">Medlab Vĩnh Viễn</span>
                        </h2>

                        <div className="flex flex-row items-center gap-6 mt-4 md:mt-8">
                            <button
                                className="flex items-center gap-2 px-4 py-1 text-white font-semibold rounded-lg text-sm bg-gradient-to-tl from-amber-500 to-yellow-400/70">
                                Để lại đánh giá
                                <RxPencil1 />
                            </button>
                            <button className="text-sm text-slate-600">Xem tất cả</button>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 grid grid-cols-2 gap-4">
                        <div className="bg-slate-100 p-4 rounded-lg ">
                            <div className="flex items-start justify-between gap-4">
                                <p className="text-black text-sm md:text-lg">Khách hàng mới</p>
                                <div className="flex items-center">
                                    <img
                                        className="object-cover w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <img
                                        className="object-cover cover  w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <img
                                        className="hidden lg:block  object-cover cover w-8 h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                                        alt="" />
                                    <img
                                        className="hidden lg:block object-cover cover w-8 h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="" />
                                    <p className="flex items-center justify-center cover  w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                </div>
                            </div>

                            <div className="flex items-end mt-12">
                                <div className="w-full">
                                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-yellow-500">91%</p>
                                    <p className="text-xs md:text-base text-slate-600 font-medium">Khách hàng hài lòng</p>
                                </div>

                                <button className="hidden lg:flex text-nowrap text-xs items-center gap-2">
                                    Đặt lịch ngay để nhận ưu đãi
                                    <FaRegCircleCheck />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-100 rounded-lg overflow-hidden grid grid-rows-2">
                            <div
                                className="border-b-[1px] bg-gradient-to-r p-4 w-full flex justify-center items-center from-green-400 to-blue-500 text-base md:text-sm font-semibold text-transparent bg-clip-text text-nowrap">93%
                                khách hàng hài lòng
                            </div>
                            <div
                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-full flex justify-center items-center text-base md:text-2xl text-nowrap font-semibold text-transparent bg-clip-text">85%
                                khách hàng quay lại
                            </div>
                        </div>
                    </div>

                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm md:text-lg tracking-wide">
                                        Chị Mai, Bình Tân TP.HCM
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Dịch vụ tại đây rất tuyệt vời! Nhân viên chuyên nghiệp, nhiệt tình hướng dẫn, kết quả xét nghiệm nhanh chóng và chính xác. Tôi sẽ tiếp tục tin tưởng lựa chọn.
                        </div>
                    </div>
                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm md:text-lg tracking-wide">
                                        Anh Hùng, Quận 1 TP.HCM
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Medlab thực sự đáng tin cậy. Đội ngũ nhân viên không chỉ thân thiện mà còn tư vấn rất chi tiết, giúp tôi hiểu rõ hơn về tình trạng sức khỏe của mình
                        </div>
                    </div>
                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-sm md:text-lg tracking-wide">
                                        Chị Thảo, Quận 10 TP.HCM
                                        <Rating />
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Tôi rất ấn tượng với cơ sở vật chất hiện đại và quy trình xét nghiệm nhanh gọn tại đây. Kết quả trả đúng hẹn, không để khách hàng phải chờ đợi.
                        </div>
                    </div>
                </div>
            </div>

            {/*Khuyến mãi section*/}
            <div className="w-full mt-16 md:mt-48 pb-48">
                <div className="text-center">
                    <p className="text-yellow-500 font-medium mx-auto md:text-2xl font-sans">Gói khuyến mãi</p>
                    <p className="text-slate-800 text-xl md:text-3xl mx-auto font-sans">Các gói xét nghiệm ưu đãi</p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-4 gap-4 mt-8">
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background4})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-2xl mx-4">Xét nghiệm tổng quát chức năng gan, thận</h2>
                            </div>
                            <img
                                src={images.gan}
                                alt="Doctor"
                                className="absolute w-32 bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background4})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-2xl">Xét nghiệm tổng quát.</h2>
                            </div>
                            <img
                                src={images.tongquat}
                                alt="Doctor"
                                className="absolute w-32 bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background4})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-2xl mx-4">Xét nghiệm miễn dịch, dị ứng</h2>
                            </div>
                            <img
                                src={images.virus}
                                alt="Doctor"
                                className="absolute w-32 bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background4})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-8">
                                <h2 className="text-black text-2xl mx-4">Tầm soát ung thư, thai sản và tiền hôn nhân</h2>
                            </div>
                            <img
                                src={images.sex}
                                alt="Doctor"
                                className="absolute w-32 bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default HomePage;