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
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

const menuItem = [
    {
        id: 1,
        href: "/",
        name: 'Home',
        icon: <FontAwesomeIcon className={cx('icon-right')} icon={faChevronDown} />,
    },
    {
        id: 2,
        href: "/product",
        name: 'Products',
        icon: <FontAwesomeIcon className={cx('icon-right')} icon={faChevronDown} />,
    },
    {
        id: 3,
        href: "/contact",
        name: 'Contact',
    },
    {
        id: 4,
        href: "/about",
        name: 'About',
    },
];

function Header({idMenuActive, className}) {
    const [selected, setSelected] = useState(idMenuActive);
    console.log(selected);
    const isHovered = (i) => {
        setSelected(i);
    };
    return (
        <header className={cx('wrapper', className)}>
            <div className={cx('container')}>
                <div className={cx('logo_img')}>
                    <img src={images.logo} alt="Belle" />
                </div>

                <div className={cx('menu-top')}>
                    {menuItem.map((item) => (
                        <Link
                         to={item.href} 
                         className={selected === item.id ? cx("menulist","active"): cx("menulist")}
                         onMouseOver={()=> isHovered(item.id)}
                         onMouseOut={()=> isHovered(idMenuActive)}
                         key={item.id}
                         >
                            {item.name} {item.icon}
                        </Link>
                    ))}
                </div>
                {/* <div className={cx('menu-top')}>
                    <a className={cx('menu-list', 'active')} href="">
                        Home
                        
                    </a>
                    <a className={cx('menu-list')} href="">
                        Products
                        
                    </a>
                    <a href="">Contact</a>
                    <a href="">About</a>
                </div> */}
                <div className={cx('actions')}>
                    <button>
                        <FontAwesomeIcon className={cx('action-btn')} icon={faMagnifyingGlass} />
                    </button>

                    <button>
                        <FontAwesomeIcon className={cx('action-btn')} icon={faCartPlus} />
                    </button>
                    <button>
                        <FontAwesomeIcon className={cx('action-btn')} icon={faUser} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
