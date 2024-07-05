import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90">
      {children}
      <form method="dialog" action="" className="m-5 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  buttonCaption: PropTypes.string.isRequired,
};
export default Modal;
