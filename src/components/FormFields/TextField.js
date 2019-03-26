import React from 'react';

export default props => {
  const { valueState, name } = props;
  return (
    <div className="form-group">
      <label htmlFor={props.id} className="col-sm-2 control-label">
        {props.label}
      </label>
      <div className="col-sm-10">
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          name={props.name}
          value={valueState ? valueState[name] : null}
          placeholder={props.placeholder}
          onChange={props.change}
        />
      </div>
    </div>
  );
};
