import { useState } from "react";
// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function ResultPDFModal({results, toggleIsShowResultModal}) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();


    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowResultModal();
        }
    }

    return (
        <div className="modal fixed inset-0 bg-slate-100/50 z-20 mt-11" onClick={closeModal}>
            <div
                className="absolute overflow-scroll left-1/2 transform -translate-x-1/2 p-8 mt-6 rounded-lg w-full max-w-[900px] h-[100vh] bg-white">
                <div className="mt-2 rounded-md overflow-scroll">
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
            </div>
        </div>
    )
}

export default ResultPDFModal;