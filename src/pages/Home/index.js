import Styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '~/components/Button';
import { images } from '~/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';

const cx = classNames.bind(Styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-container')}>
                <div className={cx('slide-area')}>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className={cx('slide-item')}>
                                <div className={cx('thumbnail')}>
                                    <img src="https://placehold.co/850x400" alt="" />
                                </div>
                                {/* <div className={cx('content')}>
                                    <h2>New Collection For Women</h2>
                                    <p>From Hight to low, classic or modern. We have you covered</p>
                                    <Button primary>Read more</Button>
                                </div> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('slide-item')}>
                                <div className={cx('thumbnail')}>
                                    <img src="https://placehold.co/850x400" alt="" />
                                </div>
                                {/* <div className={cx('content')}>
                                    <h2>New Collection For Men</h2>
                                    <p>From Hight to low, classic or modern. We have you covered</p>
                                    <Button primary>Read more</Button>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={cx('banner-area')}>
                    <img src="https://placehold.co/300x400" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
