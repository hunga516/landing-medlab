import images from "../../assets/images";
import AdminSidebarLeft from "../components/AdminSidebarLeft";
import AdminHeader from '../components/AdminHeader';


function AdminLayout({ children }) {
    return (
        <div className="min-h-screen">
            <AdminHeader />
            <AdminSidebarLeft className="fixed left-0 top-[61px] z-10 w-[250px]" />
            <div className="layout-wrapper wrapper flex justify-center bg-white/70 backdrop-blur-md w-full pl-4 pr-4 relative">

                {/* Background Image */}
                {/*<img*/}
                {/*    src={images.background1}*/}
                {/*    alt=""*/}
                {/*    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"*/}
                {/*/>*/}

                {/* Content Wrapper */}
                <div className="w-[900px] mt-[80px] px-8 ml-[250px] mr-[250px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
