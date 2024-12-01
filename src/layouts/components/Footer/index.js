import { FaCalendarCheck, FaFacebookF, FaPhone } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';

function Footer() {

    return (
        <div className="w-full p-4 sm:px-8 sm:py-4 md:p-16 bg-yellow-100 rounded-tr-lg rounded-tl-lg pb-24">
            {/*<div className="flex items-center gap-2">*/}
            {/*    <img src="/logo.png" alt="" className="w-6 h-6" />*/}
            {/*    <p className="block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm text-nowrap font-semibold font-sans">Medlab*/}
            {/*        Vĩnh Viễn</p>*/}
            {/*</div>*/}
            <div className="flex justify-between">
                <div className="">
                    <h3 className="text-xs sm:text-sm font-medium text-sky-600 flex items-center gap-2 text-nowrap">
                        <FaCalendarCheck />
                        Giờ làm việc
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm sm:text-base font-semibold text-sky-600">Thứ 2 - Thứ 7 <span
                            className="hidden md:inline">lúc 6h30 - 19h30</span></p>
                        <p className="text-sm text-sky-600 md:hidden">6h30 - 19h30</p>
                        <p className="text-sm sm:text-base font-semibold text-sky-600">Ngày lễ, chủ nhật <span
                            className="hidden md:inline">lúc 7h00 - 12h00</span></p>
                        <p className="text-sm text-sky-600 md:hidden">7h00 - 12h00</p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <h3 className="text-xs sm:text-sm font-medium text-sky-600 flex items-center gap-2 text-nowrap">
                        Liên hệ
                    </h3>
                    <div
                        className="flex items-center gap-2 text-nowrap bg-white rounded-full px-3 py-2 font-medium text-xs tracking-wide text-sky-600">
                        <FaPhone />
                        0909 636293
                    </div>
                    <div
                        className="flex items-center gap-2 text-nowrap bg-white rounded-full px-3 py-2 font-medium text-xs tracking-wide text-sky-600">
                        <FaPhone />
                        028 39273929
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 gap-y-4 sm:gap-8 md:gap-8 mt-8">
                <div className="">
                    <h1 className="text-xs sm:text-sm font-sans font-semibold text-sky-600">
                        CÔNG TY TNHH TM DV Y TẾ MEDLAB XÉT NGHIỆM Y KHOA - TẾ BÀO HỌC
                    </h1>

                    <p className="text-sky-600 text-xs sm:text-sm font-semibold">Mã số thuế: 0314145380</p>
                    <p className="text-sky-600 text-xs sm:text-sm font-semibold">Ngày cấp: 06/12/2016</p>

                    <h2 className="text-xs sm:text-sm font-semibold mt-4 text-sky-600 ">Địa chỉ:</h2>
                    <p className="text-sky-600 text-xs sm:text-sm font-bold">Trung Tâm Xét Nghiệm Y Khoa Medlab, <p
                        className="font-semibold">250 Đ. Vĩnh Viễn, Phường 4, Quận 10, Hồ Chí Minh, Việt Nam</p>
                    </p>


                    <div className="grid grid-cols-2 mt-8">
                        <div className="">
                            <h2 className="text-base sm:text-lg text-sky-600 font-semibold">Tra cứu</h2>

                            <p className="text-sm sm:text-base text-sky-600">Khách hàng tra cứu</p>
                            <p className="text-sm sm:text-base text-sky-600">Đơn vị gửi mẫu tra cứu</p>
                        </div>
                        <div className="flex items-end justify-end gap-2">
                            <button className="p-2 bg-blue-600 rounded-full"><FaFacebookF className="text-white" /></button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="rounded-md overflow-hidden">
                        <div className="" style={{ width: '99%' }}>
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=250%20%C4%90.%20V%C4%A9nh%20Vi%E1%BB%85n,%20Ph%C6%B0%E1%BB%9Dng%204,%20Qu%E1%BA%ADn%2010,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vi%E1%BB%87t%20Nam+(Trung%20T%C3%A2m%20Xe%CC%81t%20Nghi%C3%AA%CC%A3m%20Y%20T%C3%AA%CC%81%20Medlab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            >
                                Your browser does not support iframes.
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
