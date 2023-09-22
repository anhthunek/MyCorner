import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets/images';
import {
    faFacebook,
    faFacebookF,
    faInstagram,
    faPinterestP,
    faTwitter,
    faYoutube,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart, faHouseChimney, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-footer')}>
                <div className={cx('general-infor')}>
                    <div className={cx('logo_img')}>
                        <img src={images.logo} alt="Belle" />
                    </div>
                    <div className={cx('address-list')}>
                        <ul>
                            <li className={cx('address-item')}>
                                <span className={cx('address-icon')}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <span>0963.449.773</span>
                            </li>

                            <li className={cx('address-item')}>
                                <span className={cx('address-icon')}>
                                    <FontAwesomeIcon icon={faHouseChimney} />
                                </span>
                                <span>83A-B Block, Ho Chi Minh City</span>
                            </li>

                            <li className={cx('address-item')}>
                                <span className={cx('address-icon')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span>abcxyz@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('social-media')}>
                        <a href="" className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="" className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="" className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="" className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="" className={cx('social-icon')}>
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                    </div>
                </div>

                <div className={cx('detail-infor')}>
                    <div className={cx('title')}>
                        <h4>Information</h4>
                    </div>
                    <div className={cx('detail-list')}>
                        <ul>
                            <li className={cx('detail-item')}>
                                <a href="">FAQs</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Shipments</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Purchase Policy</a>{' '}
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">About Us</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('service-infor')}>
                    <div className={cx('title')}>
                        <h4>Services</h4>
                    </div>
                    <div className={cx('detail-list')}>
                        <ul>
                            <li className={cx('detail-item')}>
                                <a href="">Help</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Discounts</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Returns</a>{' '}
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('payment-infor')}>
                    <div className={cx('title')}>
                        <h4>Payments</h4>
                    </div>
                    <div className={cx('detail-list')}>
                        <ul>
                            <li className={cx('detail-item')}>
                                <a href="">Cash</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Credit Card</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Paypal</a>{' '}
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Momo</a>
                            </li>
                            <li className={cx('detail-item')}>
                                <a href="">Visa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('bottom-footer')}>
                <p>
                    Made by ThuAnhPhan with Love
                    
                </p>
            </div>
        </div>
    );
}

export default Footer;
