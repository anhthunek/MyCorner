import Footer from "~/components/Layouts/Footer";
import Header from "~/components/Layouts/Header";
import Breadcrumbs from "~/routes/Breadcrumbs";

function About() {
    return <div>
        <Header/>
        <Breadcrumbs name = "About" path = "/about"/>
        <Footer/>
    </div>;
}

export default About;