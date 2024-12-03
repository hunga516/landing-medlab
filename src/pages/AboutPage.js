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
            {/*Hero section*/}
            <div
                className="w-full h-[250px] md:h-[600px] rounded-2xl bg-cover lg:bg-cover bg-center bg-"
                style={{
                    backgroundImage: `url(${images.background6})`,
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: 16 / 9,
                }}
            >
                <div className="grid grid-cols-2 p-4 lg:p-8 h-full">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-sky-600 font-bold max-h-[110px] md:max-h-screen text-4xl md:text-6xl lg:text-9xl leading-9 md:leading-[70px] lg:leading-[90px] text-left"> Medlab
                            center
                        </h1>
                        <div className="flex items-center gap-8 -mt-12 md:-mt-80 lg:-mt-32">
                            <button
                                className="flex items-center gap-2 bg-sky-600 px-4 py-2 text-white text-xs text-nowrap md:text-lg rounded-md text-[14px]">
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
                            className="absolute top-1/3 lg:left-1/2 lg:top-16 bg-white px-4 py-2 rounded-lg drop-shadow-md">
                            <Rating className="w-3 h-3 md:w-4 md:h-4 lg:text-lg text-orange-300" />
                        </div>
                        <div
                            className="absolute text-nowrap bottom-0 right-0 lg:left-4 lg:bottom-36 bg-white px-4 py-1 rounded-lg drop-shadow-md flex items-center gap-2 max-w-max">
                            <FaCheck className="text-green-500 text-xl" />
                            <p className="text-slate-800 text-base sm:text-xl font-medium">Dịch vụ tận tâm</p>
                        </div>

                    </div>
                </div>
            </div>

            {/*Tổng quan section*/}
            <div className="w-full mt-8 md:mt-20">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 row-span-2 flex flex-col items-start justify-between">
                        <h1 className="text-bold text-3xl leading-[40px]"><span
                            className="text-sky-600">Sức khỏe</span> của bạn là <span className="text-orange-500">trách nghiệm</span> của
                            Medlab Vĩnh Viễn</h1>
                        <p className="text-slate-600">Chăm sóc sức khỏe không chỉ là một dịch vụ, mà là trách nhiệm
                            và niềm tự hào của chúng tôi.
                            Với sự tận tâm và chuyên môn cao, Medlab cam kết đồng hành cùng bạn, mang đến giải pháp y tế
                            hiện đại, giúp bạn sống khỏe mạnh và hạnh phúc hơn mỗi ngày. </p>

                        <button
                            onClick={() => toggleModal('bookingModal')}
                            className="flex items-center gap-2 font-medium bg-sky-600 hover:bg-sky-700 duration-300 rounded-lg leading-4 pl-4 py-2 pr-3.5 text-white">
                            <MdOutlineEditCalendar className="text-lg" />
                            Đặt lịch xét nghiệm
                        </button>
                    </div>
                    <div>
                        <img src={images.background2} alt="" className="h-72 w-full object-cover rounded-lg" />
                    </div>
                </div>

                <div className="rounded-lg p-4 grid grid-cols-5 gap-4">
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-2xl font-medium text-sky-600">35.5k</h2>
                        <p className="font-semibold text-slate-800">Khách hàng</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-2xl font-medium text-sky-600">10+</h2>
                        <p className="font-semibold text-slate-800">Dịch vụ</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-2xl font-medium text-sky-600">8+</h2>
                        <p className="font-semibold text-slate-800">Năm kinh nghiệm</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-2xl font-medium text-sky-600">15+</h2>
                        <p className="font-semibold text-slate-800">Đối tác</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-2xl font-medium text-sky-600">95%</h2>
                        <p className="font-semibold text-slate-800">Khách hàng quay lại</p>
                    </div>
                </div>
            </div>

            {/*Đội ngũ section*/}
            <div className="w-full mt-8 md:mt-20">
                <div className="text-center">
                    <p className="text-sky-500 text-sm md:text-lg font-medium mx-auto font-sans">Đội Ngũ</p>
                    <p className="text-slate-800 text-lg md:text-2xl mx-auto mt-2">Bác sĩ chuyên ngành trình độ cao</p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-4 gap-4 mt-8">
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
            {bookingModal && (
                <BookingModal />
            )}
        </>
    );
}

export default AboutPage;