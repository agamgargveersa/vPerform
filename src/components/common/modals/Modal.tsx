import React from "react";
import crossImage from "../../../assets/images/cross.svg";
import "./Modal.css";
import { Dialog } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  logo: string;
  title: string;
  content: string;
  action: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  logo,
  title,
  content,
  action,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
          Width: "56.375rem",
          Height: "43.375rem",
          margin: "auto",
      }}
    >
      {/* header section start */}
      <div className="modalHeaderContainer">
      <div className="modalHeaderSection">
        <div className="modalLeftHeaderSection">
          <img src={logo} alt=""  className="logo"/>
          <p>{title}</p>
        </div>
        <div className="modalRightHeaderSection">
          <button className="closeButton" onClick={onClose}>
            <img src={crossImage} alt="closeImage" className="crossImage" />
          </button>
        </div>
      </div>
      </div>
      {/* header section end */}
      
      {/* content section start */}
      <div className="contentContainer">
        <div className="contentSection">
          {content}
        
        </div>
      </div>
      {/* content section end */}

      {/* footer section start */}
      <div className="footerContainer">
        <div className="buttonDiv">
          <button className="actionButton">
            {action}
            submit
            </button>
        </div>
      </div>
      {/* footer section end */}
    </Dialog>
  );
};

export default Modal;
