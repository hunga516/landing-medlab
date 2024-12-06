import images from '../assets/images';
import { MdOutlineEditCalendar, MdOutlineSearch } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import Rating from '../components/Rating/Rating';
import { FaCheck } from 'react-icons/fa';
import BookingModal from '../components/Modal/BookingModal';
import { useModal } from '../context/ModalContext';

function AboutPage() {
    const { bookingModal, toggleModal } = useModal();


    return (
        <>
            {/*Tổng quan section*/}
            <div className="md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="row-span-2 flex flex-col justify-center gap-4 md:gap-8 items-start">
                        <h1 className="text-bold text-xl md:text-4xl leading-6 md:leading-10"><span
                            className="text-sky-600">Sức khỏe</span> của bạn là <span className="text-orange-500">trách nghiệm</span> của
                            Medlab Vĩnh Viễn</h1>
                        <p className="inline md:hidden text-slate-600 md:text-lg">Medlab tận tâm mang đến giải pháp y tế hiện
                            đại, đồng hành cùng bạn để sống khỏe và hạnh phúc mỗi ngày.</p>
                        <p className="hidden md:inline text-slate-600 md:text-lg">Medlab luôn tận tâm mang đến các giải pháp y tế hiện đại, tiên tiến và toàn diện, đồng hành cùng bạn trong mọi hành trình chăm sóc sức khỏe, giúp bạn sống khỏe mạnh, vui vẻ và hạnh phúc hơn mỗi ngày.</p>
                        <button
                            onClick={() => toggleModal('bookingModal')}
                            className="flex items-center justify-center md:justify-normal gap-2 text-sm md:text-sm w-full md:w-auto font-medium bg-sky-600 hover:bg-sky-700 duration-300 rounded-lg leading-4 pl-2 md:pl-4 py-2 md:py-1.5 pr-1.5 md:pr-3.5 text-white">
                            <MdOutlineEditCalendar className="text-sm md:text-lg" />
                            Đặt lịch xét nghiệm
                        </button>
                    </div>
                    <div className="row-span-2 mt-4 md:mt-0">
                        <img src={images.medlab1} alt="" className="h-96 w-full object-cover rounded-lg" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 rounded-lg mt-8 md:mt-16 gap-2 md:gap-4">
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">35.5k</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Khách hàng</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">10+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Dịch vụ</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">8+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Năm kinh nghiệm</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">15+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Đối tác</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">95%</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Khách hàng quay lại</p>
                    </div>
                </div>
            </div>

            {/*Đội ngũ section*/}
            <div className="mt-8 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="text-center">
                    <p className="text-sky-500 text-sm md:text-lg font-medium mx-auto font-sans">Đội Ngũ</p>
                    <p className="text-slate-800 text-lg md:text-2xl mx-auto mt-2">Bác sĩ chuyên ngành trình độ cao</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {bookingModal && (
                <BookingModal />
            )}
        </>
    );
}

export default AboutPage;