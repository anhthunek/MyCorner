import Header from '~/components/Layouts/Header';
import BlockTitle from '~/components/BlockTitle';
import Styles from './Contact.module.scss';
import Styles2 from '../Products/Product.module.scss';
import classNames from 'classnames/bind';
import Breadcrumbs from '~/routes/Breadcrumbs';
import Footer from '~/components/Layouts/Footer';
const cx = classNames.bind(Styles);
const cx2 = classNames.bind(Styles2);
function Contact() {
    return (
        <div>
            <Header idMenuActive={3} className={cx2('p-relative')} />
            <Breadcrumbs name = "Contact" path = "/contact"/>
            <Footer/>
        </div>
    );
}

export default Contact;
