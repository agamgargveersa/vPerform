import React from 'react';
import './ConfirmationPopup.css';
import confirm from '../../assets/Images/confirm.svg';
import remove from '../../assets/Images/remove.svg';


const ConfirmationPopup= () => {
  return (
    <div className="dialog-container">
      <div className="dialog-box">
        <div className="dialog-header">
          <img src={confirm} alt=""/>
          <span>Confirmation</span>
        </div>
        <div className="dialog-content">
          <img className="image1"src={remove} alt=""/>
          <p>Are you sure you want to delete this configuration?</p>
        </div>
        <footer>
          <button className="dialog-button cancel-button">No</button>
          <button className="dialog-button confirm-button">Yes</button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmationPopup;


