import React, { useState } from 'react';

import { LuArchiveRestore } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from 'react-icons/ti';

import Menu from "../Popper/Menu";
import Button from '../Button';
import axios from 'axios';
import images from '../../assets/images';


const BlogTable = ({ headers, data, activeButton, handleRestore, itemEditedId, courseActions, handleActionForm }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)
    const [courseIds, setCourseIds] = useState([])

    const handleSoftDeleteFormAction = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/courses/handle-form-action`, {
            action: 'soft-delete',
            courseIds,
        })
    }

    const handleRestoreFormAction = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/courses/handle-form-action`, {
            action: 'restore',
            courseIds,
        })
    }

    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setCourseIds(prev => [...prev, e.target.value])
        } else {
            setCourseIds(prev => prev.filter(id => id !== e.target.value))
        }
    }

    return (
        <div className="inline-block min-w-full py-2 align-middle">
            <div className='flex justify-end h-10'>
                {isSelectAction && (
                    <>
                        {activeButton === 'trash' ? (
                            <Button onClick={handleRestoreFormAction} className={"flex text-sm w-[200px] text-bluePrimary "} size='medium'>
                                <FaRegTrashAlt />
                                Khôi phục
                            </Button>
                        ) : (
                            <Button onClick={handleSoftDeleteFormAction} className={"flex text-sm w-[200px] text-bluePrimary "} size='medium'>
                                <FaRegTrashAlt />
                                Chuyển vào thùng rác
                            </Button>
                        )}
                        <Button className={"flex text-sm w-[120px] text-bluePrimary "} size='medium'>
                            <TiEdit className='text-[16px]' />
                            Chỉnh sửa
                        </Button>
                    </>
                )}
            </div>

            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50 font-sans">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="py-2 px-2 text-sm font-medium text-left rtl:text-right text-gray-800 ">
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
                        {data.map((item, index) => (
                            <tr key={item.id}
                                className={`transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50 ${itemEditedId === item._id ? 'transition ease-out duration-1000 bg-green-200' : ''}`}>
                                {isSelectAction ? (
                                    <>
                                        <td className="px-2 py-4 text-sm font-medium whitespace-nowrap">
                                            <input type='checkbox' name='courseId' value={item.id}
                                                   onChange={handleChangeCheckbox}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-2 py-4 text-sm whitespace-nowrap">
                                            <h2 className="text-gray-800">{item.id}</h2>
                                        </td>
                                    </>
                                )}
                                <td className="px-2 py-4 text-sm whitespace-nowrap">
                                    <h2 className="max-w-52 overflow-scroll text-ellipsis flex items-center gap-2 text-gray-800">
                                        <img src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}/${item.img}`}
                                             alt="hinh anh blog" className="w-6 h-6 rounded-lg object-cover" />
                                        {item.title}
                                    </h2>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div
                                        className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.title}</div>
                                </td>
                                <td className="px-2 py-4 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                                    <div className="flex gap-2 items-center py-1 text-sm rounded-full">
                                        <img src={images.sony} className="w-4 rounded-full object-cover" alt="avatar" />
                                        Ngoc Loc
                                    </div>
                                </td>
                                <td className="px-2 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{item.createdAt}</h4>
                                </td>
                                <td className="px-2 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{item.createdAt}</h4>
                                </td>
                                {activeButton === 'trash' ? (
                                    <td className="px-2 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-gray-700 text-left">{item.deletedAt}</h4>
                                    </td>
                                ) : (
                                    <td className="px-2 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-gray-700 text-left">{item.updatedAt}</h4>
                                    </td>
                                )}
                                {activeButton === 'trash' ? (
                                    <td className=''>
                                        <Button className='text-sm px-[-2] hover:bg-gray-200 hover:duration-200'
                                                onClick={() => handleRestore(item)}>
                                            <LuArchiveRestore />
                                            Khôi phục
                                        </Button>
                                    </td>
                                ) : (
                                    <Menu items={courseActions} payload={item}>
                                        <td className="flex justify-center px-2 py-4 text-sm whitespace-nowrap">
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
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogTable;
