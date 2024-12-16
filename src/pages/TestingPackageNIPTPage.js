import images from '../assets/images';
import { FaCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function TestingPackageNIPTPage() {
    const [arcordion, setArcordion] = useState({
        arcordion1: false,
        arcordion2: false,
        arcordion3: false,
    });

    const toggleArcordion = (arcordion) => {
        setArcordion(prevState => ({...prevState, [arcordion]: !prevState[arcordion]}));
    }


    return (
        <div className="mt-8 md:px-8 lg:px-0 lg:mx-32 md:mt-20">
            {/*Banner section*/}
            <div className="grid grid-cols-2 gap-8">
                <div className="max-md:col-span-2">
                    <h1 className="text-slate-800 text-3xl font-bold">GÓI XÉT NGHIỆM NIPT</h1>
                    <div className="flex flex-col gap-2 text-lg mt-6">
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Phát hiện các hội chứng di truyền như Down, Edwards, Patau với độ chính xác lên đến 99,9%.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Không xâm lấn, không gây đau đớn, đảm bảo an toàn cho cả mẹ và bé.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Có thể tiến hành từ tuần thai thứ 9, giúp phát hiện nguy cơ sớm nhất có thể.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Quy trình xét nghiệm hiện đại, tiết kiệm thời gian, mang đến sự an tâm tối đa.
                        </p>
                        <div className="max-md:col-span-2">
                            <button className="mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded-lg">Tư vấn miễn
                                phí
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner max-md:col-span-2">
                <img src={images.background1} alt="hinh anh xet nghiem tong quat" className="h-full object-cover rounded-md" />
                </div>
            </div>

            {/*FAQ section*/}
            <div className="flex flex-col gap-2 mt-12 md:mt-20">
                <div onClick={() => toggleArcordion("arcordion1")} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Những ai nên thực hiện xét nghiệm
                        </p>
                        {arcordion["arcordion1"] ? (
                            <FaMinus className="text-blue-800 text-lg" />
                        ) : (
                            <FaPlus className="text-blue-800 text-lg" />
                        )}
                    </div>
                    <div
                        className={`transition-all content-accordion overflow-hidden ${arcordion[`arcordion1`] ? "max-h-w-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                        <ul className="list-none flex flex-col gap-2 text-xl">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Mẹ bầu từ 35 tuổi trở lên.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Có tiền sử sảy thai, thai lưu, hoặc sinh non.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Từng sinh con mắc dị tật bẩm sinh.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Gia đình có tiền sử mắc bệnh di truyền.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Kết quả Double Test hoặc Triple Test cho thấy nguy cơ cao.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Siêu âm phát hiện các dấu hiệu bất thường ở thai nhi.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Làm việc trong môi trường độc hại, tiếp xúc với nhiều hóa chất.
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => toggleArcordion('arcordion2')} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Mục đích xét nghiệm NIPT
                        </p>
                        {arcordion["arcordion2"] ? (
                            <FaMinus className="text-blue-800 text-lg" />
                        ) : (
                            <FaPlus className="text-blue-800 text-lg" />
                        )}
                    </div>
                    <div
                        className={`transition-all content-accordion overflow-hidden ${arcordion[`arcordion2`] ? "max-h-w-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                        <p className="text-xl leading-8">
                            NIPT (Non-Invasive Prenatal Testing) là phương pháp sàng lọc trước sinh không xâm lấn, giúp
                            phát hiện sớm các bất thường nhiễm sắc thể (NST) ở thai nhi. Phương pháp này sử dụng mẫu máu
                            người mẹ để phân tích ADN tự do của thai nhi, nhằm phát hiện các hội chứng di truyền như:
                        </p>
                        <ul className="list-none px-4 mt-4 flex flex-col gap-2 text-xl">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Hội chứng Down, Edwards, Patau
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Rối loạn NST giới tính: Turner, Klinefelter
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => toggleArcordion('arcordion3')} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Ưu điểm của gói xét nghiệm NIPT
                        </p>
                        {arcordion["arcordion3"] ? (
                            <FaMinus className="text-blue-800 text-lg" />
                        ) : (
                            <FaPlus className="text-blue-800 text-lg" />
                        )}
                    </div>
                    <div
                        className={`transition-all content-accordion overflow-hidden ${arcordion[`arcordion3`] ? "max-h-w-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                        <ul className="list-none flex flex-col gap-2 text-xl">
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                               An toàn tuyệt đối: Không xâm lấn, không gây nguy hiểm cho mẹ và thai nhi.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Độ chính xác cao: Lên đến 99,9% đối với các hội chứng NST phổ biến.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Thực hiện sớm: Có thể tiến hành từ tuần thai thứ 9.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Thời gian trả kết quả nhanh: Chỉ trong vòng 7-11 ngày.                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingPackageNIPTPage;