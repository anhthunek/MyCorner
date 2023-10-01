import Header from '../Header';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';

import Footer from '../Footer';

const cx = classNames.bind(Styles);
function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
