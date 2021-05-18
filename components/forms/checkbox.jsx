import e from "cors";
import React from "react";
import styled from "styled-components";
import FormField from "./formField";

class Checkbox extends React.Component {
  state = {
    value: false,
  };

  componentDidMount() {
    this.setState({
      value: this.props.value,
    });
  }

  handleChange = () => {
    this.setState({
      value: !this.state.value,
    });
  };

  render() {
    const { id, label } = this.props;
    const { value } = this.state;

    return (
      <FormField>
        <StyledCheckbox
          id={id}
          type="checkbox"
          checked={value}
          onChange={this.handleChange}
        />
        <label htmlFor={id}>{label}</label>
      </FormField>
    );
  }
}

const StyledCheckbox = styled.input``;

export default Checkbox;
