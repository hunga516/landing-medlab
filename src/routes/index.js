import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PopupLogin from "../pages/PopupLogin";
import DefaultLayout from '../layouts/DefaultLayout';
import PricePage from '../pages/PricePage';

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    { path: '/sign-in', element: PopupLogin, layout: NoneLayout },
    { path: '/following', element: AboutPage },
    { path: '/price', element: PricePage, layout: DefaultLayout },
    { path: '/about', element: AboutPage, layout: DefaultLayout },
]