import React from "react";
import "../styles/page-header.css";

const PageHeader = () => {
  return (
    <div className="header">
      <div className="title">Yu-Gi-Oh Memory Game</div>
      <div className="description">
        Get points by clicking on an image but don't click on any of them more than once!
      </div>
    </div>
  );
};

export default PageHeader;
