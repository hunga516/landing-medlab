import React, { useState } from 'react';

import { LuArchiveRestore } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from 'react-icons/ti';

import Menu from "../Popper/Menu";
import Button from '../Button';
import axios from 'axios';
import images from '../../assets/images';
import formateDDMMYYYY from '../../helper/formateDDMMYYYY';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import formateYYYYMMDD from '../../helper/formateYYYYMMDD';


const PatientTable = ({ headers, data, handleShowResult }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)
    const navigate = useNavigate();
    const params = useParams();
    const [results, setResults] = useState({});
    const token = localStorage.getItem('token');

    const handleRedirect = async (item) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/TraCuuKetQua/doi-tac/tra-cuu-ket-qua-bn?ngayKetQua=${formateYYYYMMDD(item.ngayThem)}&idbenhNhan=${item.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob',
            });
            setResults(prevState => response.data);
            navigate(`${params}/admin/tra-cuu`, {state : results})
        }
        catch (e) {
            console.log(e);
        }
    };

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
                        {data.map((item, index) => (
                            <tr
                                onClick={() => handleShowResult(item)}
                                key={item.maBenhNhan}
                                className={`transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50`}
                            >
                                {isSelectAction ? (
                                    <>
                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <input type='checkbox' name='courseId' value={item.maBenhNhan}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <h2 className="text-gray-800">{item.maBenhNhan}</h2>
                                        </td>
                                    </>
                                )}
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h2
                                        // onClick={() => handleRedirect(item.id)}
                                        className="max-w-52 overflow-scroll hover:cursor-pointer hover:text-blue-600 duration-300 text-ellipsis flex items-center gap-2 text-gray-800">
                                        {item.tenBenhNhan}
                                    </h2>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div
                                        className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.namsinh}</div>
                                </td>
                                <td className="px-4 py-4 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                                    <div className="flex gap-2 items-end py-1 text-sm rounded-full">
                                        {item.diaChi}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{item.dienthoai}</h4>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700"></h4>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700"></h4>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientTable;
