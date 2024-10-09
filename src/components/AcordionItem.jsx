import { useState } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
function AcordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="wrapper  ">
      <div className="item ">
        <div
          className={`main  ${isOpen ? "openMain" : ""}`}
          onClick={handleToggle}
        >
          <p className={`element ${isOpen ? "open" : ""}`}>
            {num < 9 ? `0${num + 1}` : num + 1}
          </p>
          <h1 className={`element ${isOpen ? "open" : ""}`}>{title}</h1>
          <p className={`element ${isOpen ? "open" : ""}`}>
            {isOpen ? "-" : "+"}
          </p>
        </div>
        {isOpen && <div className="content">{text}</div>}
      </div>
    </div>
  );
}

export default AcordionItem;
