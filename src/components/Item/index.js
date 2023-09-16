import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Item.module.scss';
import classNames from 'classnames/bind';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const cx = classNames.bind(Styles);
function Item(props) {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('thumbnail')}>
                <img className={cx('front-img')} src={props.src1} alt="Item-1" />
                <img className={cx('behind-img')} src={props.src2} alt="Item-2" />
            </a>
            <div className={cx('quick-action')}>
                <button>
                    <FontAwesomeIcon className={cx("quick-btn")} icon={faShoppingBasket} />
                </button>
                <button>
                    <FontAwesomeIcon className={cx("quick-btn")} icon={faEye} />
                </button>
            </div>
            <div className={cx('content')}>
                <a>
                    <p className={cx('item-name')}>{props.name}</p>
                </a>
                <p className={cx('price')}>
                    <span className={cx('main-price')}>{props.main_price}</span>
                    <span className={cx('offer-price')}>{props.offer_price}</span>
                </p>
                <Button secondary>BUY NOW</Button>
            </div>
        </div>
    );
}

export default Item;
