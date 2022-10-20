import React from 'react';

interface PropTypes {
  id: string;
  label: string;
}

const Label: React.FunctionComponent<PropTypes> = ({ id, label }) => {
  return (
    <label className="form-label typography-body" htmlFor={id}>
      {label}
    </label>
  );
};

export default Label;
