import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Product.module.scss';
import classNames from 'classnames/bind';
import BlockTitle from '~/components/BlockTitle';
import Button from '~/components/Button';
import Header from '~/components/Layouts/Header';
import Breadcrumbs from '~/routes/Breadcrumbs';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import SelectMenu from '~/components/SelectMenu';
import Frame from '~/components/Frame';
import { useState } from 'react';

const cx = classNames.bind(Styles);
const Menu = [
    "Choose Sex","Women", "Men", "Unisex"
]
const Menu2 = [
    "Choose Price","0-30$", "30$-90$", "Up to 90$"
]
function Product() {
    const  [active, setActive] = useState("")
    const handleClick = () => {
        setActive(active === "active" ? null : "active")
    }
    return (
        <div className={cx('wrapper')}>
            <Header idMenuActive={2} className={cx('p-relative')} />
            <BlockTitle className={cx('bg')} span="All Our" h2="Products" />
            <Breadcrumbs name = "Products" path = "/product"/>
            <div className={cx("product-filter")}>
                <div className={cx("category-sidebar")}>
                    <BlockTitle
                        h2 = "Category"
                        className = {cx("sidebar-title")}
                
                    />
                </div>
                <div className={cx('product-container')}>
                    <div className={cx("filter-btn")}>
                        <Button onClick={handleClick} className={cx(active)} transparent  iconLeft={<FontAwesomeIcon icon={faFilter}/>}>Filter</Button>
                    </div>
                    <div className={cx('filter-bar')}>
                        <SelectMenu items={Menu} />
                        <SelectMenu items={Menu} />
                        <SelectMenu items={Menu2} />
                        

                        {/* <SelectMenu/>
                        <SelectMenu/>
                        <SelectMenu/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
