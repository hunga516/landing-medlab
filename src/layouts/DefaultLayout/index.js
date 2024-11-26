import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import images from '../../assets/images';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wrapper mx-auto flex justify-center w-screen">
                <div className="content w-full mt-20 md:mt-32 mx-8 px-4 md:px-8 lg:px-0 lg:mx-32">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout