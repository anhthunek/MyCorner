import Styles from './Button.module.scss'
import classNames from 'classnames/bind';
import { useRef } from 'react';
const cx = classNames.bind(Styles)
function Button({children, primary,secondary, transparent,className, iconLeft, iconRight, onClick, to, href, ...passProps}) {
    let Tag = 'button'
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        transparent,
        secondary

    })


    const props = {onClick, to, href,...passProps}
    return (
        <Tag className={classes} {...props} >
        
        {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
      <span className={cx("title")}>{children}</span>

      {iconRight && <span className={cx('icon', 'p-left')}>{iconRight}</span>}
        </Tag>
    );
}

export default Button;