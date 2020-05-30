import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

const getBorderColor = (props) => {
  if (props.isDragAccept) {
    return 'var(--color-primary)';
  }
  if (props.isDragReject) {
    return '#ca2627';
  }
  if (props.isDragActive) {
    return 'var(--color-primary)';
  }
  return 'var(--gray__200)';
}

const getBackgroundColor = (props) => {
  if (props.isDragActive && props.isDragAccept) {
    return 'var(--color-tertiary__100)';
  }
  return 'var(--gray__100)';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  border-width: 2px;
  border-radius: 0.2rem;
  border-color: ${props => getBorderColor(props)};
  border-style: dashed;
  background-color:  ${props => getBackgroundColor(props)};
  color: var(--gray__500);
  outline: none;
  transition: border .24s ease-in-out;
  width: 100%;
`;

export default function FileUploader(props) {
  const handleDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) props.onChange(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    multiple: props.multiple,
    onDrop: handleDrop
  })

  return (
    <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
      <input name={ props.name } {...getInputProps()} />
        { props.children }
    </Container>
  )
}