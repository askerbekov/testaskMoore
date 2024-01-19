import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Stories from "./components/Stories/Stories";
import Kategories from "./components/Kategories/Kategories";

const App = () => {
    return (
        <div >
          <NavBar/>
            <Stories/>
            <Kategories/>
        </div>
    );
};

export default App;