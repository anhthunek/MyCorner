import Styles from './BlockTitle.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles)
function BlockTitle(props) {
    return (
        <div className={cx('wrapper',props.className)}>
            <h2>
                <span>{props.span}</span> {props.h2}
            </h2>
        </div>
    );
}

export default BlockTitle;
