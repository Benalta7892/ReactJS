/* eslint-disable react/prop-types */

const Modal = ({ showModal, children, hideModal }) => {
  return (
    showModal && (
      <div className="modal-background" onClick={hideModal}>
        <div className="modal-container">{children}</div>
      </div>
    )
  );
};
export default Modal;
