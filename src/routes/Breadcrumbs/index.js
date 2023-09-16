import { Link, useLocation } from 'react-router-dom';
import Styles from './Breadcrumbs.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Breadcrumbs(props) {
    const location = useLocation();
    console.log(location);
    return (
        <nav className={cx('wrapper')}>
            <Link
                to="/"
                className={cx('breadcrumb', location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active')}
            >
                Home
            </Link>
            <span className={cx('chevron-right')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <Link
                to="/product"
                className={cx(
                    'breadcrumb',
                    location.pathname.startsWith(props.path) ? 'breadcrumb-active' : 'breadcrumb-not-active',
                )}
            >
                {props.name}
            </Link>
        </nav>
    );
}

export default Breadcrumbs;
