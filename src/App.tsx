import React, { useState } from "react";
import CollapsibleCardGrid from './CollapsibleCardGrid';
import Map from './map'
import "./card"
import PopupWindow from "./popUpWindow"; 


const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
     <div className = "wholePageLayout">
      <div className ="navBar">
        <button onClick={openPopup}>Open Popup</button>

        {showPopup && <PopupWindow onClose={closePopup} />}
      </div>
      <div className ="container">
        <div id = "cardsContainer">
          <div id = "rightCol">
            <h2>Collapsible Card Grid</h2>
            <CollapsibleCardGrid />
            
          </div>
          <div id = "leftCol">
          <CollapsibleCardGrid />
          </div>
        </div>
        <div id = "mapContainer">
          <h2 > Map </h2>
          <Map />
        </div>
      </div>
    </div>

  );
};

export default App;