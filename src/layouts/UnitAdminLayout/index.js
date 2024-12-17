import images from "../../assets/images";
import AdminSidebarLeft from "../components/AdminSidebarLeft";
import AdminHeader from '../components/AdminHeader';
import UnitAdminSidebarLeft from '../components/UnitAdminSidebarLeft';


function UnitAdminLayout({ children }) {
    return (
        <div className="min-h-screen">
            <AdminHeader />
            <div className="layout-wrapper wrapper grid grid-cols-7 md:grid-cols-8">
                {/* Content Wrapper */}
                {/*<div className="col-span-1 md:col-span-1 mt-[61px]">*/}
                {/*    <UnitAdminSidebarLeft />*/}
                {/*</div>*/}
                <div className="col-span-7 md:col-span-8 overflow-auto mx-0 md:mx-8">
                    <div className="mt-[80px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnitAdminLayout;
