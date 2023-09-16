// 1.Cài đặt: Custom-cra (Custome create-react-app): custome webpack mà ko cần phải eject ra: ghi đè cấu hình webpack
// - Install react-app-rewired để custome-cra work: npm i customize-cra react-app-rewired -d (chỉ cài trên dev ko trên production)
// - Tạo file config : /* config-overrides.js */, đổi các scripts bên package-json
// 2. Cài đặt babel-plugin-module-resolver: giúp viết gọn địa chỉ import nhiều cấp cha
// - Tạo file .babelrc ở thư mục gốc
// - Tạo file jsconfig.json : gợi ý file khi import
// - Để nạp baelrc vào webpack thì cần cấu hình ở file config.overrides.js
// 3. Cài đặt Prettier: Giúp code đẹp mắt hơn: tạo filr prettierc để cấu hình
// 4. Cài SCSS trên dev vì production chỉ dùng css
// 5. Cài Nomalize : reset css (production)

import { BrowserRouter as Router, Routes, Route, MemoryRouter } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Home from './pages/Home';
import Product from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import { publicRoutes } from './routes';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route,index)=> {
                      const Layout = route.layout
                      const MainLayoutt = Layout ? Layout : Fragment
                      const Page = route.component
                      return (
                        <Route
                           key={index}
                           path={route.path}
                           element= {<MainLayoutt><Page/></MainLayoutt>}
                        />
                      )
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
