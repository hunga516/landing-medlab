import images from "../../assets/images";
import AdminSidebarLeft from "../components/AdminSidebarLeft";
import AdminHeader from '../components/AdminHeader';


function AdminLayout({ children }) {
    return (
        <div className="min-h-screen">
            <AdminHeader />
            <div className="layout-wrapper wrapper grid md:grid-cols-7 lg:grid-cols-8 gap-8">
                {/* Content Wrapper */}
                <div className="col-span-1 mt-[61px]">
                    <AdminSidebarLeft />
                </div>
                <div className="md:col-span-4 lg:col-span-7 overflow-auto">
                    <div className="mt-[80px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
