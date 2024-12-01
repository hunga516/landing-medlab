import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import images from '../../assets/images';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wrapper mx-auto flex justify-center max-w-[1536px]">
                <div className="content w-full mt-20 md:mt-32 mx-8 px-4 md:px-8 lg:px-0 lg:mx-32">
                    {children}
                    <div className="mt-6 md:mt-26">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout