import React from "react";

const GameWinner = ({ onClose }) => {

    const handleCloseClick = () => {
        onClose();
      };

  return (

    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="modalCloseButton" onClick={handleCloseClick}>X</button>
        </div>
        <div className="modal-body">
          <div>Congratulations, duelist!</div>
          <div>You won!</div>
        </div>
      </div>
    </div>
  );
};

export default GameWinner;
