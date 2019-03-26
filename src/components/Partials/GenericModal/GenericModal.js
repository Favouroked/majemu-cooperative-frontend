import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import './GenericModal.css';

const GenericModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <Aux>
      <Backdrop clicked={handleClose} show={show} />
      <div className={showHideClassName}>
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    </Aux>
  );
};

export default GenericModal;
