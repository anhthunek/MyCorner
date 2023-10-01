import MainLayout from '~/components/Layouts/MainLayout';
import LoginForm from '~/pages/LoginForm';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Product from '~/pages/Products';

const publicRoutes = [
    // Ko cần đăng nhập vẫn vào dc
    {
        path: '/',
        component: Home,
        layout: MainLayout,
    },
    {
        path: '/product',
        component: Product,
        layout: MainLayout,
    },
    {
        path: '/contact',
        component: Contact,
        layout: MainLayout,
    },
    {
        path: '/about',
        component: About,
        layout: MainLayout,
    },
    {
        path: '/login',
        component: LoginForm,
        layout: MainLayout,
    },
];
export { publicRoutes };
