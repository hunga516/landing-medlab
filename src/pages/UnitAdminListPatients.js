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



function UnitAdminListPatients() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [date, setDate] = useState();
    const [daysHaveResult, setDaysHaveResult] = useState([
        "2024-11-30",
        "2024-12-14",
        "2024-12-15",
        "2024-12-16"
    ]);
    const [patients, setPatients] = useState([
        {

            "id": 525,

            "macn": "01",

            "idhopDong": 4,

            "idbacSiChiDinh": null,

            "idnoiChiDinh": null,

            "code": "00224",

            "maBenhNhan": "BN2411260001-YY",

            "tenBenhNhan": "Lê Thị Bảo Yến",

            "ngaySinh": "2001-04-10T00:00:00",

            "namsinh": 2001,

            "gioiTinh": "Nữ",

            "idgt": 2,

            "idtinh": 42,

            "idquan": null,

            "idpx": null,

            "diaChi": "Đắk Lắk",

            "dienthoai": "0393352523",

            "email": null,

            "iddt": 1,

            "idnn": null,

            "idqg": 190,

            "cccd": "066301001234",

            "ngayCap": null,

            "noiCap": null,

            "boPhan": null,

            "taiKhoan": null,

            "matKhau": null,

            "ngayThem": "2024-11-26T00:00:00",

            "cskcbmaBn": "BN-241125001",

            "cskcbmaLk": "VV-241125001",

            "ghiChu": null,

            "maTraCuu": "10042001",

            "clsPhieuXns": [],

            "filesBenhNhans": [],

            "idbacSiChiDinhNavigation": null,

            "idgtNavigation": null,

            "idhopDongNavigation": null,

            "idnoiChiDinhNavigation": null,

            "qlChiDinhs": []

        },

        {

            "id": 536,

            "macn": "01",

            "idhopDong": 4,

            "idbacSiChiDinh": null,

            "idnoiChiDinh": null,

            "code": "00237",

            "maBenhNhan": "BN2411270002-YY",

            "tenBenhNhan": "Test Hợp Đồng lúc lưu B\"'xN\\n\\t",

            "ngaySinh": "2004-09-06T00:00:00",

            "namsinh": 2004,

            "gioiTinh": "Nam",

            "idgt": 1,

            "idtinh": 52,

            "idquan": 595,

            "idpx": 9339,

            "diaChi": "Long Bình, Gò Công Tây, Tiền Giang",

            "dienthoai": "0987612344",

            "email": "maianhkha@hotmail.com",

            "iddt": 1,

            "idnn": 182,

            "idqg": 190,

            "cccd": "082204011900",

            "ngayCap": null,

            "noiCap": null,

            "boPhan": "Bộ phận test",

            "taiKhoan": null,

            "matKhau": null,

            "ngayThem": "2024-11-28T00:00:00",

            "cskcbmaBn": "123",

            "cskcbmaLk": "321",

            "ghiChu": "ghi chú test",

            "maTraCuu": null,

            "clsPhieuXns": [],

            "filesBenhNhans": [],

            "idbacSiChiDinhNavigation": null,

            "idgtNavigation": null,

            "idhopDongNavigation": null,

            "idnoiChiDinhNavigation": null,

            "qlChiDinhs": []

        }
    ]);
    const token = localStorage.getItem("token");

    // useEffect(() => {
    //     const getDaysHaveResult = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/TraCuuKetQua/doi-tac/lay-dsngaykq`, {
    //                 headers: {
    //                     Authorization : `Bearer ${token}`
    //                 }
    //             })
    //             setDaysHaveResult(response.data);
    //         }
    //         catch (e) {
    //             console.log(e);
    //         }
    //     }
    //
    //     getDaysHaveResult();
    // }, [])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleOnChange = (e) => {
        try {
            // const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/TraCuuKetQua/doi-tac/lay-dsbn-theo-ngay?ngayKetQua=${e.target.value}`,{
            //                     headers: {
            //                         Authorization : `Bearer ${token}`
            //                     }
            //                 })
            // setPatients(response.data)
            console.log(e.target.value);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getPatientsByDay = async (day) => {
        try {
            // const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/TraCuuKetQua/doi-tac/lay-dsbn-theo-ngay?ngayKetQua=${e.target.value}`,{
            //                     headers: {
            //                         Authorization : `Bearer ${token}`
            //                     }
            //                 })
            // setPatients(response.data)
            console.log(day);
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
                            <h2 className="text-lg font-medium text-gray-800">Danh sách bệnh nhân</h2>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Danh sách tất cả bệnh nhân của đơn vị</p>
                    </div>
                </div>

                <h3 className="mt-6 text-sm font-medium text-slate-800">Các ngày có kết quả</h3>

                <div className="mt-2 md:flex md:gap-1 md:items-center md:justify-between drop-shadow-md">
                    <div
                        className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                        {daysHaveResult && (
                            daysHaveResult.map((day, index) => (
                                <button
                                    key={index}
                                    className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm`}
                                    onClick={() => getPatientsByDay(day)}
                                >
                                    {formateDDMMYYYY(day)}
                                </button>
                            ))
                        )}
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <input
                            onChange={handleOnChange}
                            name="date"
                            type="date"
                            placeholder="Tìm tin tức"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 rtl:pr-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>


                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md">
                            <PatientTable
                                headers={['Mã bệnh nhân', 'Tên bệnh nhân', 'Năm sinh', 'Địa chỉ', 'Số điện thoại', '']}
                                data={patients}
                            />
                </div>
            </div>
        </>
    )
}

export default UnitAdminListPatients;