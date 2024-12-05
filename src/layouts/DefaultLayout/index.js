import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import images from '../../assets/images';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="bg-slate-100/30">
            <Header />
            <div className="wrapper mx-auto flex justify-center max-w-[1536px]">
                <div className="content w-full mt-20 md:mt-48 px-4 md:px-0">
                    {children}
                    <div className="mt-12 md:mt-32">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout