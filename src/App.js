import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Stories from "./components/Stories/Stories";
import Kategories from "./components/Kategories/Kategories";
import SalesHits from "./components/SalesHits/SalesHits";
import News from "./components/News/News";
import AuctionItems from "./components/AuctionItems/AuctionItems";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div >
          <NavBar/>
            <Stories/>
            <Kategories/>
            <SalesHits/>
            <News/>
            <AuctionItems/>
            <Footer/>
        </div>
    );
};

export default App;