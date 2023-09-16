import Header from "~/components/Layouts/Header";
import Breadcrumbs from "~/routes/Breadcrumbs";

function About() {
    return <div>
        <Header idMenuActive={4}/>
        <Breadcrumbs name = "About" path = "/about"/>
    </div>;
}

export default About;