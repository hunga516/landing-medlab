import { useState } from 'react';
// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from 'axios';


function UnitAdminLookupPage() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [date, setDate] = useState();
    const [formData, setFormData] = useState({
        idBenhNhan: '',
        ngayKetQua: '',
    });
    const [results, setResults] = useState();
    const token = localStorage.getItem('token');


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleOnChange = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/TraCuuKetQua/doi-tac/tra-cuu-ket-qua-bn?ngayKetQua=${formData.ngayKetQua}&idbenhNhan=${formData.idBenhNhan}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob',
            });
            setResults(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    console.log(formData);

    return (
        <>
            <div className="home-page-wrapper bg-white px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Tra cứu kết quả</h2>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Tra cứu kết quả xét nghiệm của bệnh nhân theo
                            ngày</p>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-end gap-4 drop-shadow-md">
                    <div className="relative flex flex-col gap-2 mt-4 md:mt-0">
                        <p className="text-sm font-medium font-sans text-slate-700">
                            Mã bệnh nhân
                        </p>
                        <input
                            onChange={handleOnChange}
                            name="idBenhNhan"
                            type="idBenhNhan"
                            placeholder="Nhập tên hoặc id bệnh nhân"
                            className="block w-full py-1.5 pr-5 text-gray-700 placeholder:font-sans bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 rtl:pr-11 focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>


                    <div className="relative flex flex-col gap-2 mt-4 md:mt-0">
                        <p className="text-sm font-medium font-sans text-slate-700">
                            Ngày
                        </p>
                        <input
                            onChange={handleOnChange}
                            name="ngayKetQua"
                            type="date"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-4 rtl:pr-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <button
                        className="px-4 py-1.5 bg-sky-500 rounded-lg text-white"
                        onClick={handleSubmit}
                    >
                        Tra cứu
                    </button>
                </div>


                {/*Pdf section*/}
                {results && (
                    <div className="mt-12 rounded-md overflow-hidden">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl={results}
                                plugins={[
                                    // Register plugins
                                    defaultLayoutPluginInstance,
                                ]}
                            />
                        </Worker>
                    </div>
                )}
            </div>
        </>
    );
}

export default UnitAdminLookupPage;