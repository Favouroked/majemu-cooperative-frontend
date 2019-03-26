import React from 'react';

export default props => {
  const { valueState, name } = props;
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{props.label}</label>
      <div className="col-sm-10">
        <select className="form-control" name={props.name} onChange={props.change} value={valueState ? valueState[name] : null} required>
          <option defaultValue> </option>
          {props.options ? props.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          }) : null}
        </select>
      </div>
    </div>
  );
};
