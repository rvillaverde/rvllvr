import React, { ChangeEvent } from 'react';
import Label from '../label';
const ROWS = 6;

interface PropTypes {
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  required?: boolean;
  value: string;
}

const Textarea: React.FunctionComponent<PropTypes> = ({
  id,
  label,
  name,
  onChange,
  required,
  value,
}) => {
  const handleChange = (e?: ChangeEvent<HTMLTextAreaElement>) => {
    if (e?.target) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="form-field">
      {label && <Label id={id} label={label} />}
      <textarea
        className="form-textarea"
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
        required={required}
        rows={ROWS}
      />
    </div>
  );
};

export default Textarea;
