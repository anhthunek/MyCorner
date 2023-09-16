import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Styles from './SelectMenu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FrameMenu from '../Frame';
import { useState } from 'react';


const cx = classNames.bind(Styles);
function SelectMenu({items}) {
    const [display, setDisplay] = useState("d-none")
    const [select, setSelect] = useState([items[0]])
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(true)
        setDisplay(display === 'd-none' ? 'd-block' : 'd-none')
    }
    const handleSelect = (item) => {
        setSelect(item)
        setDisplay("d-none")
    }
    return (
        <div className={cx('wrapper')}>
            <Button select transparent iconRight={<FontAwesomeIcon icon={faChevronDown}/>} style = {active ?{color: '#116466', border: '1px solid #116466'}: {}} onClick={handleClick}>{select}</Button>
            <FrameMenu className={cx(display)}>
                {
                    items.map ((item)=> (
                        <Button onClick={()=> {handleSelect(item)}} className={cx("menu-btn")} select transparent key={item}> { item} </Button>
                    ))
                }
            </FrameMenu>
        </div>
    );
}

export default SelectMenu;
