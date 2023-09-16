import Frame from '~/components/Frame';
import Styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Item from '~/components/Item';
import { images } from '~/assets/images';
import BlockTitle from '~/components/BlockTitle';

const cx = classNames.bind(Styles);
function Home() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <BlockTitle
                    span = "Newest"
                    h2 = "Items"
                />
                <div className={cx('item-list')}>
                    <Item
                        src1={images.itemImage.thumbnail1_1}
                        src2={images.itemImage.thumbnail1_2}
                        name="Rosé Skirt Vintage"
                        main_price="$34"
                        offer_price="$39.55"
                    />
                    <Item
                        src2={images.itemImage.thumbnail2_1}
                        src1={images.itemImage.thumbnail2_2}
                        name="Modern Cardigan "
                        main_price="$80"
                        offer_price="$100.27"
                    />
                    <Item
                        src1={images.itemImage.thumbnail3_2}
                        src2={images.itemImage.thumbnail3_1}
                        name="Coat Men Gray"
                        main_price="$68.56"
                        offer_price="$80.15"
                    />
                    <Item
                        src1={images.itemImage.thumbnail3_1}
                        src2={images.itemImage.thumbnail3_2}
                        name="Hat Weather Vintage"
                        main_price="$28.54"
                        offer_price="$29"
                    />
                    <Item
                        src1={images.itemImage.thumbnail2_1}
                        src2={images.itemImage.thumbnail2_2}
                        name="Rosé Skirt Vintage"
                        main_price="$40"
                        offer_price="$45.55"
                    />
                </div>
            </div>
            <div className={cx('wrapper', 'bg-gray')}>
            <BlockTitle
                    span = "Hottest"
                    h2 = "Items"
                />
                <div className={cx('item-list')}>
                    <Item
                        src1={images.itemImage.thumbnail1_1}
                        src2={images.itemImage.thumbnail1_2}
                        name="Rosé Skirt Vintage"
                        main_price="$34"
                        offer_price="$39.55"
                    />
                    <Item
                        src2={images.itemImage.thumbnail2_1}
                        src1={images.itemImage.thumbnail2_2}
                        name="Modern Cardigan "
                        main_price="$80"
                        offer_price="$100.27"
                    />
                    <Item
                        src1={images.itemImage.thumbnail3_2}
                        src2={images.itemImage.thumbnail3_1}
                        name="Coat Men Gray"
                        main_price="$68.56"
                        offer_price="$80.15"
                    />
                    <Item
                        src1={images.itemImage.thumbnail3_1}
                        src2={images.itemImage.thumbnail3_2}
                        name="Hat Weather Vintage"
                        main_price="$28.54"
                        offer_price="$29"
                    />
                    <Item
                        src1={images.itemImage.thumbnail2_1}
                        src2={images.itemImage.thumbnail2_2}
                        name="Rosé Skirt Vintage"
                        main_price="$40"
                        offer_price="$45.55"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
