import React, { ChangeEvent } from 'react';
import Label from '../label';

const TYPES = {
  NUMBER: 'number',
  TEXT: 'text',
} as const;

type Types =
  | {
      input: typeof TYPES.NUMBER;
      type: number;
    }
  | {
      input: typeof TYPES.TEXT;
      type: string;
    };

type InputType = Types['input'];
type Type<T extends InputType> = Extract<Types, { input: T }>['type'];

interface PropTypes<T extends InputType> {
  id: string;
  label?: string;
  name: string;
  onBlur?: () => void;
  onChange: (value: Type<T>) => void;
  placeholder?: string;
  required?: boolean;
  type: T;
  value: Type<T>;
}

function createInput<T extends InputType>() {
  const Input: React.FunctionComponent<PropTypes<T>> = ({
    id,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    required,
    type,
    value,
  }) => {
    const handleChange = (e?: ChangeEvent<HTMLInputElement>) => {
      if (e?.target.value) {
        onChange(e.target.value as Type<T>);
      }
    };

    return (
      <div className="form-field">
        {label && <Label id={id} label={label} />}
        <input
          className="form-input"
          id={id}
          name={name}
          // data-name={ this.props.dataName }
          placeholder={placeholder}
          type={type}
          value={value}
          required={!!required}
          onChange={handleChange}
          onBlur={onBlur}
          // autoComplete={ this.props.autoComplete }
        />
      </div>
    );
  };

  return Input;
}

export default createInput;
