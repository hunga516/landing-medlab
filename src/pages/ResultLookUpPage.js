import { useLocation } from 'react-router-dom';
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



function ResultLookUpPage() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const location = useLocation();
    const data = location.state

    return (
        <div className="md:px-8 lg:px-0 lg:mx-32 md:mt-20">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={data}
                    plugins={[
                        // Register plugins
                        defaultLayoutPluginInstance,
                    ]}
                />
            </Worker>
        </div>
    )
}

export default ResultLookUpPage;