import React from 'react';

export default props => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{props.label}</label>
      <div className="radio">
        {props.inputs.map(inputObject => {
          return (
            <label key={inputObject.value}>
              <input
                type="radio"
                name={props.name}
                value={inputObject.value}
                onChange={props.change}
              />
              {inputObject.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};
