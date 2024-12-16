import images from '../assets/images';
import { FaCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function TestingPackageTienHonNhanPage() {
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
                    <h1 className="text-slate-800 text-3xl font-bold">GÓI XÉT NGHIỆM TIỀN HÔN NHÂN</h1>
                    <div className="flex flex-col gap-2 text-lg mt-6">
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Kiểm tra các rối loạn di truyền tiềm ẩn ảnh hưởng đến sức khỏe của cả cha mẹ và con cái.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Phát hiện các bệnh lý như nhiễm trùng đường tiểu, tiểu đường, và vấn đề về thận có thể ảnh
                            hưởng đến khả năng sinh sản. </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Đánh giá nguy cơ mắc các bệnh như thiếu máu, ung thư máu ở thế hệ kế tiếp.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Phân tích tinh dịch và đánh giá toàn diện khả năng sinh sản của nam giới.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Kiểm tra tình trạng HIV trước khi có kế hoạch mang thai để bảo vệ sức khỏe chung.
                        </p>
                        <div className="max-md:col-span-2">
                            <button className="mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded-lg">Tư vấn miễn
                                phí
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner max-md:col-span-2">
                    <img src={images.background1} alt="hinh anh xet nghiem tong quat"
                         className="h-full object-cover rounded-md" />
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
                                Cặp đôi chuẩn bị kết hôn và sống chung.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có tiền sử bệnh di truyền.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có tiền sử bệnh truyền nhiễm.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người mắc các bệnh mãn tính.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có nguy cơ cao mắc bệnh xã hội: HIV, lậu, giang mai.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có tiền sử sảy thai, sinh non, hoặc gặp khó khăn trong việc thụ thai.
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => toggleArcordion('arcordion2')} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Mục đích xét nghiệm tiền hôn nhân
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
                            Xét nghiệm tiền hôn nhân là một quá trình sàng lọc sức khỏe dành cho các cặp đôi chuẩn bị kết hôn, nhằm kiểm tra sức khỏe tổng thể và nhận diện các yếu tố tiềm ẩn có thể ảnh hưởng đến hạnh phúc gia đình và sức khỏe của con cái sau này. Những xét nghiệm này giúp phát hiện sớm các vấn đề di truyền, bệnh truyền nhiễm, hoặc những nguy cơ tiềm ẩn khác, từ đó giúp các cặp đôi chuẩn bị tốt hơn cho cuộc sống chung.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingPackageTienHonNhanPage;