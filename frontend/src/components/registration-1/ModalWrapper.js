import React from "react";

const ModalWrapper = ({ children }) => (
  <div className="modal fade show d-block"
       tabIndex="-1"
       style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content p-4 rounded-4 shadow-lg">
        {children}
      </div>
    </div>
  </div>
);

export default ModalWrapper;
