import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wrapper mx-auto flex justify-center w-full">
                <div className="content w-full mt-[60px] mx-32">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout