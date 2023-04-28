import { VscChromeClose } from "react-icons/vsc";
import './Modal.css';

const Modal = ({ isOpen, setCloseModal, children }) => {
  
  if (isOpen) {
    return (
      <div className='modal'>
        <div className='container'>
          <button onClick={setCloseModal}><VscChromeClose className='close__icon' /></button>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;