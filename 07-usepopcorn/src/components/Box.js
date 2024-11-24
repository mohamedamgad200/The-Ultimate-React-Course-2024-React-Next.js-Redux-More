import { useState } from "react";
export default function Box({ children }) {
  const [isopen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !isopen)}
      >
        {isopen ? "-" : "+"}
      </button>
      {isopen && children}
    </div>
  );
}
