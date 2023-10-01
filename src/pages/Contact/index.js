import Styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Breadcrumbs from '~/routes/Breadcrumbs';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '~/pages/LoginForm';

const cx = classNames.bind(Styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumbs name="Contact" path="/contact" />
            <div className={cx('form-container')}>
                <div className={cx('form-title-area')}>
                    <h3 className={cx('title')}>Get In Touch With Us</h3>
                    <p className={cx('desc')}>Use the form below to contact with us</p>
                </div>
                <div className={cx('form-area')}>
                    <input className={cx('input-item')} type="text" placeholder="Name"></input>
                    <input className={cx('input-item')} type="text" placeholder="Address"></input>
                    <input className={cx('input-item')} type="text" placeholder="Phone"></input>
                    <input className={cx('input-item')} type="text" placeholder="Subject"></input>
                    <input className={cx('input-item')} type="text" placeholder="Message"></input>
                </div>
                <div className={cx('form-btn')}>
                    <Button secondary iconRight={<FontAwesomeIcon icon={faChevronRight} />}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
