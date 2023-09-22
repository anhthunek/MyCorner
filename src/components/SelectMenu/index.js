import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Styles from './SelectMenu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FrameMenu from '../Frame';
import { useEffect, useRef, useState } from 'react';
import Item from '../Item';
import { images } from '~/assets/images';

const cx = classNames.bind(Styles);
function SelectMenu({ items, showFilterBar, handleFilter }) {
    const [display, setDisplay] = useState('d-none');
    const [select, setSelect] = useState([items[0]]);
    const [active, setActive] = useState(false);

    const btn = useRef();
    useEffect(() => {
        document.addEventListener('click', out, true);
        return () => {
            document.removeEventListener('click', out);
        };
    }, []);

    const out = (e) => {
        if (btn.current && !btn.current.contains(e.target)) {
            setDisplay('d-none');
        }
    };
    const handleClick = () => {

        setDisplay(display === 'd-block' ? 'd-none' : 'd-block');
    };
    const handleSelect = (item) => {
        setSelect(item);
        setDisplay('d-none');
        handleFilter(item)
    };
    
    return (
        <div className={cx(showFilterBar ? 'wrapper' : 'no')}>
            <button
                ref={btn}
                style={active ? { color: '#116466', border: '1px solid #116466' } : {}}
                className={cx('select-btn')}
                onClick={handleClick}
            >
                <span>{select}</span>
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </button>
            <FrameMenu className={cx(display)}>
                {items.map((item) => (
                    <Button
                        onClick={() => {
                            handleSelect(item);
                        }}
                        className={cx('menu-btn')}
                        transparent
                        key={item}
                    >
                        {item}
                    </Button>
                ))}
            </FrameMenu>
        </div>
    );
}

export default SelectMenu;
