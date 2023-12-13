import Banner from "../Banner/Banner";
import 'react-tabs/style/react-tabs.css';
import TabsItems from "../Categories/TabsItems";
import OurServices from "../OurServices/OurServices";
import Statistics from "../Statistics/Statistics";
import ClientsFeedback from "../ClientsFeedback/ClientsFeedback";
import { Helmet } from 'react-helmet-async';
import TopCompanies from "../TopCompanies/TopCompanies";


const Home = () => {
    return (
        <div>
            <Helmet>

                <title>
                    Home
                </title>

            </Helmet>
            <Banner></Banner>
            <TabsItems></TabsItems>
            <OurServices></OurServices>
            <Statistics></Statistics>
            <ClientsFeedback></ClientsFeedback>
            <TopCompanies></TopCompanies>
        </div>
    );
};

export default Home;