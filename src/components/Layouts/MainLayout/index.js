import Header from '../Header';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets/images';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '~/components/Button';

const cx = classNames.bind(Styles);
function MainLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header idMenuActive={1} />
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className={cx('slide-item')}>
                            <div className={cx('thumbnail')}>
                                <img src={images.slideImage.thumbnail1} alt="" />
                            </div>
                            <div className={cx('content')}>
                                <h2>New Collection For Women</h2>
                                <p>From Hight to low, classic or modern. We have you covered</p>
                                <Button primary>Read more</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cx('slide-item')}>
                            <div className={cx('thumbnail')}>
                                <img src={images.slideImage.thumbnail2} alt="" />
                            </div>
                            <div className={cx('content')}>
                                <h2>New Collection For Men</h2>
                                <p>From Hight to low, classic or modern. We have you covered</p>
                                <Button primary>Read more</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>{children}</div>
        </div>
    );
}

export default MainLayout;
