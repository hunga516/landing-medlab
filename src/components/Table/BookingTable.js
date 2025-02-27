import React, { useEffect, useState } from 'react';

import { LuArchiveRestore } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";

import Menu from "../Popper/Menu";
import Button from '../Button';
import axios from 'axios';
import images from '../../assets/images';



const BookingTable = ({ headers, data, activeButton, handleRestore, itemEditedId, bookingActions, isSending,handleSendManyEmail, getBookingIds, isSendingManyEmail, random }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)
    const [bookingIds, setBookingIds] = useState([])

    const handleRedirect = (id) => {
        window.location.href = `/booking/${id}`;
    };

    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setBookingIds(prev => [...prev, e.target.value])
        } else {
            setBookingIds(prev => prev.filter(id => id !== e.target.value))
        }
    }

    useEffect(() => {
        getBookingIds(bookingIds)
    }, [bookingIds])

    useEffect(() => {
        setIsSelectAtion(prev => !prev)
    }, [random])

    return (
        <div className="inline-block min-w-full py-2 align-middle">
            <div className="rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50 font-sans">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-2 px-4 text-sm font-medium text-left rtl:text-right text-gray-800 ">
                                {header}
                            </th>
                        ))}
                        <th className="relative flex justify-center py-3.5 px-4 text-center">
                            <button onClick={() => setIsSelectAtion(!isSelectAction)}>
                                <IoIosOptions className='text-center' />
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {data?.map((item, index) => (
                        <tr
                            key={item.id}
                            className={`group transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50 ${itemEditedId === item._id ? 'transition ease-out duration-1000 ' : ''}`}
                        >
                            {isSelectAction ? (
                                <>
                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                        <input type='checkbox' name='bookingId' value={item.id}
                                               onChange={handleChangeCheckbox}
                                        />
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <h2 className="text-gray-800">{item.id}</h2>
                                    </td>
                                </>
                            )}
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <h2
                                    onClick={() => handleRedirect(item.id)}
                                    className="max-w-52 overflow-scroll hover:cursor-pointer hover:text-blue-600 duration-300 text-ellipsis flex items-center gap-2 text-gray-800">
                                    {item.name}
                                </h2>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div
                                    className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.phone}</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div
                                    className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.email}</div>
                            </td>
                            {item.status === "Đã gửi" ? (
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-center text-green-500 rounded-full ring-1 ring-inset ring-green-500 px-2 py-0.5">
                                        Đã gửi
                                    </h4>
                                </td>
                            ) : (
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-center text-yellow-500 rounded-full ring-1 ring-inset ring-yellow-500 px-2 py-0.5">
                                        Chưa gửi
                                    </h4>
                                </td>
                            )}

                            {activeButton === 'trash' ? (
                                <td className="">
                                    <Button className="text-sm px-[-2] hover:bg-gray-200 hover:duration-200"
                                            onClick={() => handleRestore(item)}>
                                        <LuArchiveRestore />
                                        Khôi phục
                                    </Button>
                                </td>
                            ) : (
                                !isSending && item.status !== "Đã gửi" ? (
                                    <Menu items={bookingActions} payload={item}>
                                        <td className={`flex justify-center px-2 py-4 text-sm whitespace-nowrap z-10 sticky right-0 ${index % 2 !== 0 ? "bg-slate-50" : "bg-white"}`}>
                                            <button
                                                className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </Menu>
                                ) : (
                                    item.status !== "Đã gửi" && isSending ? (
                                        <Menu>
                                            <td className={`flex justify-center px-2 py-4 text-sm whitespace-nowrap z-10 sticky right-0 ${index % 2 !== 0 ? "bg-slate-50" : "bg-white"}`}>
                                                <button
                                                    className="px-1 py-2 animate-spin opacity-80 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                    <CgSpinner />
                                                </button>
                                            </td>
                                        </Menu>
                                    ) : (
                                        <td>
                                        </td>
                                    )
                                )
                            )}

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingTable;