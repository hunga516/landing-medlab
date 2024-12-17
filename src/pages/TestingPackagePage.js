import images from '../assets/images';
import { FaCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function TestingPackagePage() {
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
                    <h1 className="text-slate-800 text-3xl font-bold">GÓI XÉT NGHIỆM TỔNG QUÁT</h1>
                    <div className="flex flex-col gap-2 text-lg mt-6">
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Đánh giá chi tiết 36 chỉ số quan trọng của cơ thể.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Phát hiện sớm các nguy cơ bệnh lý về tim mạch, gan, thận, tiểu đường, mỡ máu,...
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Bác sĩ chuyên khoa hỗ trợ giải thích kết quả và tư vấn sức khỏe trực tiếp.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Thủ tục nhanh gọn, không chờ đợi lâu.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Dịch vụ linh hoạt, làm việc cả cuối tuần.
                        </p>
                        <div>
                            <button className="mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded-lg">Tư vấn miễn
                                phí
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner max-md:col-span-2">
                <img src={images.bannertongquat} alt="hinh anh xet nghiem tong quat" className="h-full object-cover rounded-md" />
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
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người cao tuổi: Đối tượng dễ gặp các vấn đề sức khỏe cần được theo dõi định kỳ.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có dấu hiệu bất thường: Mệt mỏi, sụt cân hoặc tăng cân không rõ nguyên nhân.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có tiền sử bệnh lý: Mắc bệnh mãn tính hoặc gia đình có tiền sử bệnh lý.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Môi trường làm việc độc hại: Thường xuyên tiếp xúc hóa chất hoặc các yếu tố nguy hiểm.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Trẻ em: Đối tượng cần kiểm tra sức khỏe định kỳ để phát triển toàn diện.
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Phụ nữ mang thai hoặc dự định mang thai: Đảm bảo sức khỏe mẹ và bé được chăm sóc tốt nhất.
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => toggleArcordion("arcordion2")} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Mục đích của xét nghiệm tổng quát
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
                            Gói xét nghiệm tổng quát của Medlab được xây dựng nhằm phát hiện sớm các vấn đề sức khỏe
                            tiềm ẩn
                            có thể gây ảnh hưởng nghiêm trọng đến cơ thể. Việc kiểm tra định kỳ giúp bạn chủ động theo
                            dõi
                            và ngăn ngừa các nguy cơ sức khỏe trước khi chúng tiến triển thành các bệnh lý phức tạp hoặc
                            mãn
                            tính. Đồng thời, gói xét nghiệm bên Medlab còn hỗ trợ bạn đưa ra các quyết định sáng suốt về
                            chăm sóc sức khỏe và điều chỉnh lối sống phù hợp, góp phần bảo vệ sức khỏe lâu dài.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingPackagePage;