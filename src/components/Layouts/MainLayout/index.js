import Header from '../Header';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '../Footer';
import { createContext, useState } from 'react';
export const context = createContext()
const cx = classNames.bind(Styles);
function MainLayout({ children }) {
    const [show, setShow] = useState(false)
    return (
        <context.Provider value={{show, setShow}}>
            <div className={cx('wrapper')}>
                <Header show={show} />
                <div>{children}</div>
                <Footer />
            </div>
        </context.Provider>
    );
}

export default MainLayout;
