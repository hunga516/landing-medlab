import { useEffect, useState } from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import BlogTable from '../components/Table/BlogTable';
import Skeleton from 'react-loading-skeleton';
import CourseTable from '../components/Table/BlogTable';
import PatientTable from '../components/Table/PatientTable';
import axios from 'axios';
import formateDDMMYYYY from '../helper/formateDDMMYYYY';
import ResultPDFModal from '../components/Modal/ResultPDFModal';
import { FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function UnitAdminChangePassword
() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [date, setDate] = useState();
    const [daysHaveResult, setDaysHaveResult] = useState([]);
    const [patients, setPatients] = useState();
    const [daySelected, setDaySelected] = useState();
    const [results, setResults] = useState();
    const [isShowResultModal, setIsShowResultModal] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({})

    const handleOnChange = async (e) => {
       setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/TraCuuKetQua/doi-tac/doi-mat-khau?password=${formData.password}&passwordNew=${formData.newPassword}`, {},{
                headers: {
                    Authorization: `Bearer ${token}`,
                }})
            if (response.data.statusCode === 200) {
                alert(response.data.message)
            } else  {
                alert(response.data.message)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="home-page-wrapper bg-white px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Đổi mật khẩu</h2>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Đổi mật khẩu tài khoản đơn vị</p>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-end gap-4 drop-shadow-md">
                    <div className="relative flex flex-col gap-2 mt-4 md:mt-0">
                        <p className="text-sm font-medium font-sans text-slate-700">
                            Mật khẩu hiện tại
                        </p>
                        <input
                            onChange={handleOnChange}
                            name="password"
                            type="text"
                            placeholder="Mật khẩu hiện tại"
                            className="block w-full py-1.5 pr-5 text-gray-700 placeholder:font-sans bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 rtl:pr-11 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>


                    <div className="relative flex flex-col gap-2 mt-4 md:mt-0">
                        <p className="text-sm font-medium font-sans text-slate-700">
                            Mật khẩu mới
                        </p>
                        <input
                            onChange={handleOnChange}
                            name="newPassword"
                            type="text"
                            placeholder="Nhập mật khẩu mới"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 rtl:pr-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <button
                        className="px-4 py-1.5 bg-sky-500 rounded-lg text-white"
                        onClick={handleSubmit}
                    >
                        Đổi mật khẩu
                    </button>
                </div>
            </div>
        </>
    )
}

export default UnitAdminChangePassword
;