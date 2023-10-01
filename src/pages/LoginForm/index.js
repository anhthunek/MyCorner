import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import Styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { context } from '~/components/Layouts/MainLayout';

const cx = classNames.bind(Styles);
function LoginForm() {
    const Context = useContext(context)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form-container')}>
                <div className={cx('form-title-area')}>
                    <h3 className={cx('title')}>Login</h3>
                    <p className={cx('desc')}>Please login to continue!</p>
                </div>
                <div className={cx('form-area')}>
                    <input className={cx('input-item')} type="text" placeholder="Email"></input>
                    <input className={cx('input-item')} type="text" placeholder="Password"></input>
                </div>
                <div className={cx('form-btn')}>
                    <Button to="/" secondary onClick={()=> Context.setShow(true)}>
                        Login
                    </Button>
                    <a href="" className={cx('forgot-pw')}>
                        Forgot password?
                    </a>
                </div>
                <div className={cx('form-register')}>
                    <a href="" className={cx('create-acc')}>
                        Create account <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
