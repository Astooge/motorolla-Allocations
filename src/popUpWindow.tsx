import React from "react";
import './popup.css'
import Checklist from './FreqCheckList';

interface PopupWindowProps {
  onClose: () => void;
}

const PopupWindow: React.FC<PopupWindowProps> = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>רשימת תדרים</h2>
          <Checklist />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupWindow;
