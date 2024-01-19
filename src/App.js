import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Stories from "./components/Stories/Stories";
import Kategories from "./components/Kategories/Kategories";
import SalesHits from "./components/SalesHits/SalesHits";

const App = () => {
    return (
        <div >
          <NavBar/>
            <Stories/>
            <Kategories/>
            <SalesHits/>
        </div>
    );
};

export default App;