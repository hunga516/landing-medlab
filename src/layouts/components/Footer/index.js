import { FaPhone } from 'react-icons/fa';

function Footer() {

    return (
        <div className="w-full p-4 md:p-16 bg-yellow-100 rounded-tr-lg rounded-tl-lg pb-24">
            <div className="grid sm:grid-cols-2 gap-2 gap-y-4 md:gap-8">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="" className="w-6 h-6" />
                        <p className="block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm text-nowrap font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
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

                <div className="">
                    <h1 className="text-xs font-sans font-bold text-sky-600">
                        CÔNG TY TNHH TM DV Y TẾ MEDLAB XÉT NGHIỆM Y KHOA - TẾ BÀO HỌC
                    </h1>

                    <p className="text-sky-600 text-xs font-semibold mt-1">Mã số thuế: 0314145380</p>
                    <p className="text-sky-600 text-xs font-semibold mt-1">Ngày cấp: 06/12/2016</p>

                    <h2 className="text-xs font-semibold mt-4 text-sky-600 ">Địa chỉ:</h2>
                    <p className="text-sky-600 text-xs font-bold mt-1">Trung Tâm Xét Nghiệm Y Khoa Medlab, <p className="font-semibold">250 Đ. Vĩnh Viễn, Phường 4, Quận 10, Hồ Chí Minh, Việt Nam</p></p>


                </div>
            </div>
        </div>
    );
}

export default Footer;
