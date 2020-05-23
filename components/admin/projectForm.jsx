import React from 'react'
import styled from 'styled-components';

import FileUploader from '../fileUploader'
import FormRow from '../forms/formRow';
import TextField from '../forms/textField';
import FormSection from '../forms/formSection';
import FormSubsection from '../forms/formSubsection';
import PrimaryButton from '../buttons/primaryButton'
import {CrossIcon} from '../icons'
import IconButton from '../buttons/iconButton';

import { deleteImage } from '../../utils/projects';

const defaultState = (project) => (
  { coverPreview: project ? project.cover_url : "/img/placeholder.svg",
    images: project && project.images ? project.images : [],
    imagesPreview: [],
    loading: false,
    project: undefined
  }
)
const ImagePreview = styled.div`
  width: 100%;
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
`
const ImagePreviewActions = styled.div`
  transition: all .3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
`
const ImagePreviewWithActions = styled(ImagePreview)`
&& {
  background-size: contain;
  position: relative;
  &:hover {
    ${ImagePreviewActions} {
      opacity: 1;
    }
  }
}
`
const ImagesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  width: 100%;
`
const SmallFormSubsection = styled(FormSubsection)`
  min-width: 200px;
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
    this.handleImageDelete = this.handleImageDelete.bind(this)
    this.handleImagesAdd = this.handleImagesAdd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.images)
    this.setState({ loading: true })
    let formData = new FormData(e.target)
    formData.append('cover', this.state.cover)
    formData.append('images', this.state.images)
    if (this.props.project) formData.append('project_id', this.props.project.project_id)
    this.props.onSubmit(formData)
  }

  handleCoverChange(files) {
    this.setState({
      cover: files[0],
      coverPreview: URL.createObjectURL(files[0])
    })
  }

  handleImagesAdd(files) {
    files.forEach((file, i) => { 
      file.image_id = `image-${new Date().valueOf()}-${ i }`;
      file.image_url = URL.createObjectURL(file);
      file.new = true;
    })
    let images = this.state.images.concat(files)
    this.setState({ images })
  }

  async handleImageDelete(id) {
    this.setState({ loading: true })
    
    let index = this.state.images.findIndex((image) => image.image_id === id )
    let image = this.state.images[index]
    
    if (image.new) {
      this.deleteImage(index)
    } else {
      let res = await deleteImage(id)
      if (res.deleted === 1) {
        this.deleteImage(index)
      }
    }
  }

  deleteImage(index) {
    let images = this.state.images
    images.splice(index, 1)
    this.setState({ images: images, loading: false })
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
              <TextField placeholder="Type" type="text" name="type" value={this.props.project ? this.props.project.type : ''} />
            </FormRow>
            <FormRow>
              <FileUploader onChange={ this.handleCoverChange } name="cover">
                <p className='typography-body'>
                  Drag 'n' drop the project cover here, or click to select a file.
                </p>
              </FileUploader>
            </FormRow>
          </FormSubsection>
        </FormSection>
        <FormSection>
          <FileUploader onChange={ this.handleImagesAdd } name="images" multiple>
            <ImagesPreview>
              { this.state.images.map(image => (
                <ImagePreviewWithActions key={ image.image_id } image={ image.image_url } >
                  <ImagePreviewActions>
                    <IconButton type="button" onClick={ (e) => { e.stopPropagation(); this.handleImageDelete(image.image_id) }}>
                      <CrossIcon/>
                    </IconButton>
                  </ImagePreviewActions>
                </ImagePreviewWithActions>
              ))}
            </ImagesPreview>
            <p className='typography-body'>
              Drag 'n' drop the project images, or click to select a file.
            </p>
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
