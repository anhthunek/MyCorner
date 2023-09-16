import MainLayout from "~/components/Layouts/MainLayout"
import About from "~/pages/About"
import Contact from "~/pages/Contact"
import Home from "~/pages/Home"
import Product from "~/pages/Products"

const publicRoutes = [
    // Ko cần đăng nhập vẫn vào dc
    {
      path: '/',
      component: Home,
      layout: MainLayout
    },
    {
      path: '/product',
      component: Product,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/about',
      component: About,
      layout: MainLayout,
    }
]
export {publicRoutes}