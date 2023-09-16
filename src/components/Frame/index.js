import Styles from './FrameMenu.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles)
function FrameMenu({children, className}) {
    return (
        <div className={cx("wrapper", className)}>{children}</div>
    );
}

export default FrameMenu;