import React from 'react'
import styled from 'styled-components';

import FileUploader from '../fileUploader'
import FormRow from '../forms/formRow';
import TextField from '../forms/textField';
import FormSection from '../forms/formSection';
import FormSubsection from '../forms/formSubsection';
import PrimaryButton from '../buttons/primaryButton'

const defaultState = (project) => (
  { coverPreview: project ? project.cover_url : "/img/placeholder.svg",
    loading: false,
    project: undefined
  }
)

const ImagePreview = styled.div`
  width: 200px;
  background-color: #fafafa;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  border: 1px solid #eeeeee;

  &::before {
    content: "";
    width: 100%;
    padding-top: 100%;
    display: block;
  }

  @media (max-width: 459px) {
    width: 100%;
  }
`;
const SmallFormSubsection = styled(FormSubsection)`
  && {
    @media (min-width: 768px) {
      flex-grow: 0;
      flex-shrink: 1;
    }
  }
`
const Form = styled.form`
  max-width: 840px;
`

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState(this.props.project)
    this.handleCoverChange = this.handleCoverChange.bind(this)
    this.handleImagesChange = this.handleImagesChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ loading: true })
    let formData = new FormData(e.target)
    formData.append('cover', this.state.cover)
    if (this.props.project) formData.append('project_id', this.props.project.project_id)
    this.props.onSubmit(formData)
  }

  handleCoverChange(file) {
    this.setState({
      cover: file,
      coverPreview: URL.createObjectURL(file)
    })
  }

  handleImagesChange(files) {
    this.setState({
      photos: files,
      photosPreview: URL.createObjectURL(files)
    })
  }

  render() {
    return (
      <Form id="new-project__form" onSubmit={ this.handleSubmit }>
        <FormSection>
          <SmallFormSubsection>
            <ImagePreview image={ this.state.coverPreview } />
          </SmallFormSubsection>
          <FormSubsection>
            <FormRow>
              <TextField placeholder="Name" type="text" name="name" value={this.props.project ? this.props.project.name : ''} />
            </FormRow>
            <FormRow>
              <TextField placeholder="Technologies" type="text" name="technologies" value={this.props.project ? this.props.project.technologies : ''} />
            </FormRow>
            <FormRow>
              <TextField placeholder="URL" type="text" name="url" value={this.props.project ? this.props.project.url : ''} />
            </FormRow>
            <FormRow>
              <FileUploader onChange={ this.handleCoverChange } name="cover">
                Drag 'n' drop the project cover here, or click to select a file.
              </FileUploader>
            </FormRow>
          </FormSubsection>
        </FormSection>
        <FormSection>
          <FileUploader onChange={ this.handleImagesChange } name="images" multiple>
            Drag 'n' drop the project images, or click to select a file.
          </FileUploader>
        </FormSection>
        <FormSection>
          <FormRow>
            <PrimaryButton type="submit" disabled={ this.state.loading }>Save</PrimaryButton>
          </FormRow>
        </FormSection>
      </Form>
    );
  }
}

export default ProjectForm;
