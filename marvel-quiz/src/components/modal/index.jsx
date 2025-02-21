/* eslint-disable react/prop-types */

const Modal = ({ showModal, children }) => {
  return (
    showModal && (
      <div className="modal-background">
        <div className="modal-container">{children}</div>
      </div>
    )
  );
};
export default Modal;
