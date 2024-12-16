import images from '../assets/images';
import { FaCircleCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function TestingPackageTimMachPage() {
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
                    <h1 className="text-slate-800 text-3xl font-bold">GÓI XÉT NGHIỆM TIM MẠCH</h1>
                    <div className="flex flex-col gap-2 text-lg mt-6">
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Đánh giá sức khỏe tim mạch giúp phát hiện vấn đề tiềm ẩn.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Giúp dự báo nguy cơ xơ vữa động mạch, nhồi máu cơ tim, suy tim, đột quỵ.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Giảm thiểu nguy cơ tử vong do bệnh tim mạch.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Theo dõi và kiểm soát hiệu quả điều trị bệnh tim mạch.
                        </p>
                        <p className="flex items-start gap-2">
                            <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                            Tùy chỉnh xét nghiệm theo nhu cầu cụ thể.
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
                                Người cao tuổi
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người bị cao huyết áp, mỡ máu cao
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Tiền sử gia đình mắc bệnh tim mạch
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người mắc bệnh đái tháo đường, thừa cân, béo phì, ít vận động
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                Người có thói quen uống nhiều rượu bia và hút thuốc
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={() => toggleArcordion('arcordion2')} className="bg-blue-300/30 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-black font-medium text-lg md:text-2xl">
                            Mục đích xét nghiệm tim mạch
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
                            Tầm soát các yếu tố nguy cơ và dấu hiệu bệnh tim, giúp can thiệp kịp thời, ngăn ngừa biến chứng nghiêm trọng và theo dõi tình trạng tim mạch của người bệnh để bảo vệ sức khỏe lâu dài.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestingPackageTimMachPage;