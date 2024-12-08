import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import DefaultLayout from '../layouts/DefaultLayout';
import PricePage from '../pages/PricePage';
import BlogPage from '../pages/BlogPage';
import AdminBlogPage from '../pages/AdminBlogPage';
import AdminLayout from '../layouts/AdminLayout';
import AdminServicePage from '../pages/AdminServicePage';
import DetailsBlogPage from '../pages/DetailsBlogPage';

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    // { path: '/login', element: LoginPage, layout: NoneLayout },
    { path: '/blog/:id', element: DetailsBlogPage, layout: DefautLayout },
    { path: '/blog', element: BlogPage, layout: DefautLayout },
    { path: '/price', element: PricePage, layout: DefaultLayout },
    { path: '/about', element: AboutPage, layout: DefaultLayout },
    { path: '/admin/blog', element: AdminBlogPage, layout: AdminLayout },
    { path: '/admin/service', element: AdminServicePage, layout: AdminLayout },
]