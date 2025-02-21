import images from '../assets/images';
import { MdOutlineEditCalendar, MdSupportAgent } from 'react-icons/md';
import { FaMinusCircle, FaPhoneAlt, FaRegCalendarCheck } from 'react-icons/fa';
import BookingModal from '../components/Modal/BookingModal';
import { useModal } from '../context/ModalContext';
import { Ri24HoursLine } from 'react-icons/ri';
import { IoIosCheckbox, IoIosFlash } from 'react-icons/io';
import { IoLeaf } from 'react-icons/io5';
import { useState } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import axios from 'axios';

function SupportPage() {
    const { bookingModal, toggleModal } = useModal();
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const [isOpen, setIsOpenAccordion] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false,
        accordion4: false,
        accordion5: false,
        accordion6: false,
        accordion7: false,
        accordion8: false,
        accordion9: false,
    });
    const [formData, setFormData] = useState({
        Id: "0",
        Name: "",
        Email: "",
        Phone: "",
    });

    const toggleAccordion = (accordion) => {
        setIsOpenAccordion((prev) => ({ ...prev, [accordion]: !prev[accordion] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoadingSubmit(true);

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/Booking/Create`, formDataToSend);
            setMessage("Bạn đã gửi thông tin thành công!"); // Cập nhật thông báo thành công
        } catch (error) {
            console.error(error);
            setMessage("Vui lòng điền đầy đủ thông tin!"); // Thông báo lỗi
        } finally {
            setIsLoadingSubmit(false);
        }
    };


    return (
        <>
        {/*Tổng quan section*/}
            <div className="md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                {/*Contact section*/}
                <div className="mt-12 md:mt-16 md:px-8 lg:px-0 lg:mx-32">
                    <div className="">
                        <div className="grid grid-cols-3 p-4 mx-auto md:px-8 md:py-20 bg-slate-100 rounded-md">
                            <div className="col-span-3 md:col-span-2 px-4 md:px-20">
                                <h2 className="text-slate-800 text-xl font-medium">Bạn cần hỗ trợ?</h2>
                                <p className="text-slate-600 leading-5 text-sm mt-2">Medlab rất hân hạnh được hỗ trợ bạn,
                                    hãy để lại thông tin cho chúng tôi nhé. Yêu cầu của bạn sẽ được xử lý và phản hồi trong
                                    thời gian sớm nhất.</p>
                                <div className="grid grid-cols-2 gap-2 mt-6">
                                    <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                        <h3 className="text-slate-800">Họ và tên:</h3>
                                        <input
                                            type="text"
                                            name="Name"
                                            placeholder="Nhập tên"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="col-span-2 sm:col-span-1 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                        <h3 className="text-slate-800">Số điện thoại:</h3>
                                        <input
                                            type="text"
                                            name="Phone"
                                            placeholder="Nhập số điện thoại"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="col-span-2 sm:col-span-1 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 col-span-2 md:mt-4">
                                        <h3 className="text-slate-800">Email:</h3>
                                        <input
                                            type="email"
                                            name="Email"
                                            placeholder="Nhập email liên hệ"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="col-span-2 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md"
                                        />
                                    </div>
                                    <button type="submit" onClick={handleSubmit}
                                            className="col-span-2 mt-2 bg-blue-600 rounded-lg text-white px-12 py-1.5">
                                        GỬI
                                    </button>
                                    {message && <p style={{ color: message.includes("thành công") ? "green" : "red" }}>{message}</p>}
                                </div>
                            </div>
                            <img src={images.contact} alt="" className="hidden md:block w-52 h-full mx-auto object-cover " />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SupportPage;