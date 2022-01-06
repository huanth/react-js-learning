import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Button from './UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {    
    const [showParagraph, setshowParagraph] = useState(false);

    const toggleParagraphHandler = () => {
      setshowParagraph((preShowParagraph) => !preShowParagraph);
    };


    return ( 
      <div className = "App" >
        <DemoOutput show={showParagraph} />
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      </div>
    );
}

export default App;