import Banner from "../Banner/Banner";
import 'react-tabs/style/react-tabs.css';
import TabsItems from "../Categories/TabsItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsItems></TabsItems>
        </div>
    );
};

export default Home;