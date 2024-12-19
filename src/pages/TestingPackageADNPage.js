import images from '../assets/images';
import { useState } from 'react';
import { FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import AllTestingPackagePage from './AllTestingPackagePage';

function TestingPackageADNPage() {
    const [arcordion, setArcordion] = useState({
        arcordion1: false,
        arcordion2: false,
        arcordion3: false,
    });

    const toggleArcordion = (arcordion) => {
        setArcordion(prevState => ({ ...prevState, [arcordion]: !prevState[arcordion] }));
    };


    return (
        <>
            <div className="mt-8 md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                {/*Banner section*/}
                <div className="grid grid-cols-2 gap-8">
                    <div className="max-md:col-span-2">
                        <h1 className="text-slate-800 text-3xl font-bold">GÓI XÉT NGHIỆM ADN HUYẾT THỐNG</h1>
                        <div className="flex flex-col gap-2 text-lg mt-6">
                            <p className="flex items-start gap-2">
                                <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                                Kiểm tra 11 dưỡng chất quan trọng cho sức khỏe ở mọi lứa tuổi.
                            </p>
                            <p className="flex items-start gap-2">
                                <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                                Giúp phát hiện và điều trị các vấn đề dinh dưỡng.
                            </p>
                            <p className="flex items-start gap-2">
                                <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                                Giám sát sức khỏe gan, thận, tim và các bệnh lý liên quan.
                            </p>
                            <p className="flex items-start gap-2">
                                <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                                Đảm bảo sự phát triển thể chất và trí tuệ toàn diện cho trẻ nhỏ.
                            </p>
                            <p className="flex items-start gap-2">
                                <IoShieldCheckmarkSharp className="text-green-600 flex-shrink-0 text-xl" />
                                Xét nghiệm đơn giản, kết quả có sẵn trực tuyến trong ngày.
                            </p>
                            <div className="max-md:col-span-2">
                                <button className="mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded-lg">Tư vấn
                                    miễn
                                    phí
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="banner max-md:col-span-2">
                        <img src={images.banneradnhuyetthong} alt="hinh anh xet nghiem tong quat"
                             className="h-full object-cover rounded-md" />
                    </div>
                </div>

                {/*FAQ section*/}
                <div className="flex flex-col gap-2 mt-12 md:mt-20">
                    <div onClick={() => toggleArcordion('arcordion1')} className="bg-blue-300/30 rounded-lg p-6">
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-black font-medium text-lg md:text-2xl">
                                Những ai nên thực hiện xét nghiệm
                            </p>
                            {arcordion['arcordion1'] ? (
                                <FaMinus className="text-blue-800 text-lg" />
                            ) : (
                                <FaPlus className="text-blue-800 text-lg" />
                            )}
                        </div>
                        <div
                            className={`transition-all content-accordion overflow-hidden ${arcordion[`arcordion1`] ? 'max-h-w-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                            <ul className="list-none flex flex-col gap-2 text-xl">
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Thể trạng yếu: Người gầy, dễ bị ốm, thiếu sức đề kháng.
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Thiếu dưỡng chất: Biểu hiện mệt mỏi, chuột rút, rụng tóc, yếu cơ.
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Dư thừa dưỡng chất: Buồn nôn, đau bụng, nguy cơ mắc sỏi thận.
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Trẻ nhỏ: Cần bổ sung vi chất trong giai đoạn phát triển.
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Phụ nữ mang thai hoặc cho con bú: Cần dưỡng chất để phát triển sức khỏe của cả mẹ và
                                    bé.
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                                    Vận động viên và người tập thể thao: Cần bổ sung dưỡng chất để duy trì sức bền và
                                    phục hồi.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={() => toggleArcordion('arcordion2')} className="bg-blue-300/30 rounded-lg p-6">
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-black font-medium text-lg md:text-2xl">
                                Mục đích xét nghiệm vi chất
                            </p>
                            {arcordion['arcordion2'] ? (
                                <FaMinus className="text-blue-800 text-lg" />
                            ) : (
                                <FaPlus className="text-blue-800 text-lg" />
                            )}
                        </div>
                        <div
                            className={`transition-all content-accordion overflow-hidden ${arcordion[`arcordion2`] ? 'max-h-w-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                            <p className="text-xl leading-8">
                                Xét nghiệm nhằm xác định mức độ thiếu hụt hoặc thừa các dưỡng chất quan trọng như
                                vitamin D, B12, canxi, sắt, magie và các điện giải (natri, kali, clorua). Điều này giúp
                                hỗ trợ bác sĩ chẩn đoán và điều trị các rối loạn dinh dưỡng, bệnh lý liên quan đến hệ
                                thần kinh, co thắt cơ, điều hòa nhịp tim, và các chức năng cơ bản khác, từ đó duy trì
                                sức khỏe tổng thể.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*All package section*/}
            <AllTestingPackagePage />
        </>
    );
}

export default TestingPackageADNPage;