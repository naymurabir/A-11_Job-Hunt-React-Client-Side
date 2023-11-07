import Banner from "../Banner/Banner";
import 'react-tabs/style/react-tabs.css';
import TabsItems from "../Categories/TabsItems";
import OurServices from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsItems></TabsItems>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;