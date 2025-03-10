import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { TiEdit } from 'react-icons/ti';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutgoingMail } from "react-icons/md";
import BookingTable from '../components/Table/BookingTable';
import CourseTable from '../components/Table/BookingTable';
import Skeleton from 'react-loading-skeleton';
import { AuthContext } from '../context';
import { FaRegEye } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';

function AdminBookingPage() {
    const [isSending, setIsSending] = useState(false);
    const [booking, setBooking] = useState();
    const [selectedBookingDelete, setSelectedBookingDelete] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null); //for render blogs
    const [activeButton, setActiveButton] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [bookingIds, setBookingIds] = useState([]);
    const [isSendingManyEmail, setIsSendingManyEmail] = useState(false);
    const [random, setRandom] = useState(Math.random());

    const getAllBookings = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Booking/Read`, {
                params: {
                    page: currentPage,
                    pageSize: 10,
                },
            });
            setBooking(response.data.booking);
            setTotalPages(response.data.totalPages);
            setIsSending(prevState => !prevState);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getAllBookings = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Booking/Read`, {
                    params: {
                        page: currentPage,
                        pageSize: 10,
                    },
                });
                setBooking(response.data.booking);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            }
        };

        //For active button (all,recent,trash)
        switch (activeButton) {
            case 'all':
                getAllBookings();
                break;
            default:
                break;
        }

    }, [currentPage, activeButton]);

    const onChangeSearch = async (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Booking/Read?name=${searchQuery}`);
                setBooking(response.data.booking);
            } catch (error) {
                console.log(error);
            }
        }
    }


    const sendEmail = async (booking, setIsSending) => {
        try {
            setIsSending(true);

            const response = await axios.post(`http://localhost:5106/api/Emails/SendBookingConfirmation/${booking.id}`);

            getAllBookings();
        } catch (error) {
            alert(`Vui lòng chờ trước khi gửi email mới !`);

            setIsSending(false);
        }
    }

    const BOOKING_ACTIONS = [
        {
            icon: MdOutgoingMail,
            title: 'Gửi mail',
            onClick: (booking) => sendEmail(booking, setIsSending),
        },
    ]

    console.log(random);

    const handleSendManyEmail = async () => {
        setIsSendingManyEmail(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/Emails/SendManyBooking`, bookingIds);
            setIsSendingManyEmail(false)
            setRandom(Math.random());
            getAllBookings();
        } catch (error) {
            console.log(error);
            setIsSendingManyEmail(false)
        }
    }

    const getBookingIds = (bookingIds) => {
        setBookingIds(bookingIds)
    }


    return (
        <>
            <div className="home-page-wrapper bg-white px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Thông tin khách hàng</h2>

                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các thông tin khách hàng</p>
                    </div>


                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between drop-shadow-md">
                    <div
                        className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                        {!isSendingManyEmail ? (
                            <button
                                onClick={handleSendManyEmail}
                                className="flex w-full items-center text-nowrap justify-center px-6 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                            >
                                <IoSend />
                                <span>Gửi nhanh mail xác nhận</span>
                            </button>
                        ) : (
                            <button
                                onClick={handleSendManyEmail}
                                className="flex w-full items-center text-nowrap justify-center px-6 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                            >
                                <VscLoading className="animate-spin text-lg" />
                                <span>Đang gửi từng email</span>
                            </button>
                        )}
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>
                        <input
                            onChange={(e) => onChangeSearch(e)}
                            onKeyDown={handleSearch}
                            type="text"
                            placeholder="Tìm thông tin khách hàng"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md ">
                    {activeButton === 'all' || activeButton === 'recent' ? (
                        booking ? (
                            <BookingTable
                                headers={['STT', 'Tên khách hàng', 'Số điện thoại', 'Email', ' Trạng thái']}
                                data={booking}
                                activeButton={activeButton}
                                bookingActions={BOOKING_ACTIONS}
                                disabled={isSending}
                                isSending={isSending}
                                handleSendManyEmail={handleSendManyEmail}
                                getBookingIds={getBookingIds}
                                isSendingManyEmail={isSendingManyEmail}
                                random={random}
                            />
                        ) : (
                            <div className="flex flex-col gap-1 justify-center mt-10">
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                            </div>

                        )
                    ) : (
                        <CourseTable
                            headers={['STT', 'Tên khách hàng', 'Số điện thoại', 'Email', ' Trạng thái']}
                            data={booking}
                            activeButton={activeButton}
                            disabled={isSending}
                            bookingActions={BOOKING_ACTIONS}
                        />
                    )}
                </div>
                <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                    <div class="text-sm text-gray-500">
                        Trang <span class="font-medium text-gray-700">{currentPage} / {totalPages}</span>
                    </div>
                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            href="#"
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800"
                            disabled={currentPage === 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>
                                Trước
                            </span>
                        </button>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            href="#"
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800"
                            disabled={currentPage === totalPages}
                        >
                            <span>
                                Kế tiếp
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}




export default AdminBookingPage;