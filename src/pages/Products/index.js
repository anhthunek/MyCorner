import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Header from '~/components/Layouts/Header';
import Breadcrumbs from '~/routes/Breadcrumbs';
import { faChevronLeft, faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import SelectMenu from '~/components/SelectMenu';
import React, { useEffect, useState } from 'react';
import Item from '~/components/Item';
import Footer from '~/components/Layouts/Footer';
import JSONs from '~/data.json';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { json } from 'react-router-dom';
const cx = classNames.bind(Styles);

const Menu = [
    ['Availability', 'In Stock', 'Out Of Stock'],
    ['Gender', 'Women', 'Men', 'Unisex'],
    ['Type', 'Clothes', 'Accessories'],
    ['Price', 'From highest to lowest', 'From lowest to highest'],
];

function Product() {
    const [sum, setSum] = useState(21);
    const [showing, setShowing] = useState(8);
    const [active, setActive] = useState('');
    const [showFilterBar, setShowFilterBar] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [allPosts] = useState(JSONs);
    const [selectItem, setSelectItem] = useState('');
    const indexLastPost = currentPage * showing;
    const indexFirstPost = indexLastPost - showing;

    const row = [];
    for (let i = 1; i <= Math.ceil(sum / showing); i++) {
        row.push(i);
    }

    const onFilter = allPosts.filter((product) => {
        if (selectItem === 'Women') {
            return product.gender === 'Women';
        } else if (selectItem === 'Men') {
            return product.gender === 'Men';
        } else if (selectItem === 'Unisex') {
            return product.gender === 'Unisex';
        } else return product;
    });
    useEffect(() => {
        setSum(onFilter.length);
        setShowing(onFilter.length > 8 ? 8 : sum);
    }, [onFilter.length, sum]);

    const currentResult = onFilter.slice(indexFirstPost, indexLastPost);

    const handleFilter = (item) => {
        setSelectItem(item);
        setCurrentPage(1);
    };
    const handleClickFilter = () => {
        setActive(active === 'active' ? null : 'active');
        setShowFilterBar(showFilterBar === false ? true : false);
    };
    const handleClickPagiation = (item) => {
        setCurrentPage(item);
    };

    // handle();
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('p-relative')} />
            <Breadcrumbs name="Products" path="/product" />
            <div className={cx('product-filter')}>
                <div className={cx('category-sidebar')}>
                    {Menu.slice(0, 3).map((menu) => (
                        <div className={cx('sidebar-title')}>
                            <h2>{menu[0]}</h2>
                            <ul className={cx('category-list')}>
                                {menu.slice(1, 4).map((item) => (
                                    <li className={cx('category-item')}>
                                        <a href="">{item} (20)</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={cx('product-container')}>
                    <div className={cx('filter-actions')}>
                        <div className={cx('filter-btn')}>
                            <Button
                                onClick={handleClickFilter}
                                className={cx(active)}
                                transparent
                                iconLeft={<FontAwesomeIcon icon={faFilter} />}
                            >
                                Filter
                            </Button>
                        </div>
                        <p className={cx('display-result')}>
                            {active ? `Displaying ${showing} of ${sum} results` : `All Products (${sum})`}
                            {/* Displaying 15 of 30 results */}
                        </p>
                    </div>
                    <div className={cx('filter-bar')}>
                        {Menu.slice(1, 4).map((menu) => (
                            <SelectMenu
                                key={menu}
                                showFilterBar={showFilterBar}
                                handleFilter={handleFilter}
                                items={menu}
                            />
                        ))}
                    </div>
                    <div className={cx('product-block', showFilterBar ? 'translateY' : '')}>
                        {currentResult.map((json) => (
                            <Item
                                key={json.id}
                                className={cx('d-block')}
                                src1={json.image.image1}
                                src2={json.image.image2}
                                name="Rosé Skirt Vintage"
                                main_price={json.price}
                                offer_price="$45.55"
                            />
                        ))}
                    </div>
                    <nav className={cx('pagination')}>
                        <ul>
                            <li
                                className={cx('pagination-item', row.length <= 1 ? 'd-none' : '')}
                                onClick={() => setCurrentPage((prev) => (prev !== row[0] ? prev - 1 : row.length))}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </li>
                            {row.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={cx(
                                            'pagination-item',
                                            currentPage === item ? 'active-pagination' : '',
                                        )}
                                        onClick={() => handleClickPagiation(item)}
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                            <li
                                href=""
                                className={cx('pagination-item', row.length <= 1 ? 'd-none' : '')}
                                onClick={() => setCurrentPage((prev) => (prev !== row.length ? prev + 1 : 1))}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
// https://hygraph.com/blog/react-pagination: implement pagniation
