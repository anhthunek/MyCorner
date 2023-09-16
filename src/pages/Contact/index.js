import Header from '~/components/Layouts/Header';
import BlockTitle from '~/components/BlockTitle';
import Styles from './Contact.module.scss';
import Styles2 from '../Products/Product.module.scss';
import classNames from 'classnames/bind';
import Breadcrumbs from '~/routes/Breadcrumbs';
const cx = classNames.bind(Styles);
const cx2 = classNames.bind(Styles2);
function Contact() {
    return (
        <div>
            <Header idMenuActive={3} className={cx2('p-relative')} />
            <BlockTitle className={cx2('bg')} span="Contact" h2="Us" />
            <Breadcrumbs name = "Contact" path = "/contact"/>
        </div>
    );
}

export default Contact;
