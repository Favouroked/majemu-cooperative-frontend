import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (
    <Aux>
      <Backdrop clicked={props.handleClose} show={props.show} />
      <div className={showHideClassName}>
        <div className="modal-content">
          <span className="close" onClick={props.handleClose}>
            &times;
          </span>
          <table className="table table-striped">
            <tbody>
              {props.content
                ? Object.keys(props.content).map(field => (
                    <tr key={field.toUpperCase()}>
                      <td>
                        <strong>{field.toUpperCase()}</strong>
                      </td>
                      <td>{props.content[field].toString()}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          {props.footer ? <Aux><button onClick={() => props.approveLoan(props.content)} className="btn btn-success">Approve</button> <button onClick={() => props.declineLoan(props.content)} className="btn btn-danger pull-right">Decline</button></Aux> : null}
          {props.editMember? <Aux><button onClick={() => props.handleEdit(props.content)} className="btn btn-success">Edit</button> <button onClick={() => props.handleDelete(props.content)} className="btn btn-danger pull-right">Delete</button></Aux>: null}
          {props.editContribution? <Aux><button onClick={() => props.handleEdit(props.content)} className="btn btn-success">Edit</button> <button onClick={() => props.handleDelete(props.content)} className="btn btn-danger pull-right">Delete</button></Aux>: null}
        </div>
      </div>
    </Aux>
  );
};

export default Modal;
