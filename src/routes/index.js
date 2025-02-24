import DefautLayout from "../layouts/DefaultLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import DefaultLayout from '../layouts/DefaultLayout';
import PricePage from '../pages/PricePage';
import BlogPage from '../pages/BlogPage';
import AdminBlogPage from '../pages/AdminBlogPage';
import AdminLayout from '../layouts/AdminLayout';
import AdminServicePage from '../pages/AdminServicePage';
import DetailsBlogPage from '../pages/DetailsBlogPage';
import LookUpPage from '../pages/LookUpPage';
import UnitLookUpPage from '../pages/UnitLookUpPage';
import TestingPackagePage from '../pages/TestingPackagePage';
import TestingPackageNIPTPage from '../pages/TestingPackageNIPTPage';
import TestingPackageViChatPageJs from '../pages/TestingPackageViChatPage.js';
import TestingPackageTimMachPage from '../pages/TestingPackageTimMachPage';
import TestingPackageADNPage from '../pages/TestingPackageADNPage';
import TestingPackageTienHonNhanPage from '../pages/TestingPackageTienHonNhanPage';
import AllTestingPackagePage from '../pages/AllTestingPackagePage';
import UnitAdminPage from '../pages/UnitAdminPage';
import UnitAdminLayout from '../layouts/UnitAdminLayout';
import ResultLookUpPage from '../pages/ResultLookUpPage';
import UnitAdminListPatients from '../pages/UnitAdminListPatients';
import AdminBookingPage from '../pages/AdminBookingPage';
import SupportPage from '../pages/SupportPage';
import UnitAdminChangePassword from '../pages/UnitAdminChangePassword';

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    // { path: '/login', element: LoginPage, layout: NoneLayout }, //
    { path: '/tin-tuc/:id', element: DetailsBlogPage, layout: DefautLayout },
    { path: '/tin-tuc', element: BlogPage, layout: DefautLayout },
    { path: '/dich-vu', element: PricePage, layout: DefaultLayout },
    { path: '/tu-van', element: SupportPage, layout: DefaultLayout },
    { path: '/ve-medlab-vinh-vien', element: AboutPage, layout: DefaultLayout },
    { path: '/tra-cuu', element: LookUpPage, layout: DefaultLayout },
    { path: '/ket-qua-tra-cuu', element: ResultLookUpPage, layout: DefaultLayout },
    { path: '/don-vi-tra-cuu', element: UnitLookUpPage, layout: DefaultLayout },
    { path: '/admin/blog', element: AdminBlogPage, layout: AdminLayout },
    { path: '/admin/service', element: AdminServicePage, layout: AdminLayout },
    { path: '/admin/booking', element: AdminBookingPage, layout: AdminLayout },
    { path: '/tat-ca-goi-xet-nghiem', element: AllTestingPackagePage, layout: DefaultLayout },
    { path: '/goi-xet-nghiem-tong-quat', element: TestingPackagePage, layout: DefaultLayout },
    { path: '/goi-xet-nghiem-nipt', element: TestingPackageNIPTPage, layout: DefaultLayout },
    { path: '/goi-xet-nghiem-vi-chat', element: TestingPackageViChatPageJs , layout: DefaultLayout },
    { path: '/goi-xet-nghiem-tim-mach', element: TestingPackageTimMachPage, layout: DefaultLayout },
    { path: '/goi-xet-nghiem-adn-huyet-thong', element: TestingPackageADNPage, layout: DefaultLayout },
    { path: '/goi-xet-nghiem-tien-hon-nhan', element: TestingPackageTienHonNhanPage, layout: DefaultLayout },
    { path: '/:unit/admin/pdf', element: UnitAdminPage, layout: UnitAdminLayout },
    { path: '/:unit/admin/danh-sach-benh-nhan', element: UnitAdminListPatients, layout: UnitAdminLayout },
    { path: '/:unit/admin/doi-mat-khau', element: UnitAdminChangePassword, layout: UnitAdminLayout },
]