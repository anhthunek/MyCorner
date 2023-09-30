import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { images } from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(Styles);

const menuItem = [
    {
        id: 1,
        href: '/',
        name: 'Home',
        icon: <FontAwesomeIcon className={cx('icon-right')} icon={faChevronDown} />,
    },
    {
        id: 2,
        href: '/product',
        name: 'Products',
        icon: <FontAwesomeIcon className={cx('icon-right')} icon={faChevronDown} />,
    },
    {
        id: 3,
        href: '/contact',
        name: 'Contact',
    },
    {
        id: 4,
        href: '/about',
        name: 'About',
    },
];

function Header() {
    const [active, setActive] = useState();
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo_img')}>
                    <img src={images.logo} alt="Belle" />
                </div>

                <div className={cx('menu-top')}>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.href}
                            //  onMouseOver={()=> isHovered(item.id)}

                            style={({ isActive }) => ({
                                color: isActive ? '#116466' : '',
                            })}
                            className={cx('menulist')}
                            key={index}
                        >
                            {item.name} {item.icon}
                        </NavLink>
                    ))}
                </div>
                <div className={cx('actions')}>
                    <a href="" className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                    <a href="" className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
