import React from "react";
import styled from "styled-components";

import FileUploader from "../fileUploader";
import FormRow from "../forms/formRow";
import TextField from "../forms/textField";
import FormSection from "../forms/formSection";
import FormSubsection from "../forms/formSubsection";
import PrimaryButton from "../buttons/primaryButton";
import { CrossIcon } from "../icons";
import IconButton from "../buttons/iconButton";

import { deleteImage } from "../../utils/projects";
import Checkbox from "../forms/checkbox";

const defaultState = (project) => ({
  coverPreview: project ? project.cover_url : "/img/placeholder.svg",
  images: project && project.images ? project.images : [],
  imagesPreview: [],
  loading: false,
  project: undefined,
});

const ImagePreview = styled.div`
  width: 100%;
  background-color: #fafafa;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
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
const ImagePreviewActions = styled.div`
  transition: all 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
`;
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
`;
const ImagesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  width: 100%;
`;
const SmallFormSubsection = styled(FormSubsection)`
  min-width: 200px;
  && {
    @media (min-width: 768px) {
      flex-grow: 0;
      flex-shrink: 1;
    }
  }
`;
const Form = styled.form`
  max-width: 840px;
`;

class ProjectForm extends React.Component {
  state = {
    coverPreview: this.props.project
      ? this.props.project.cover_url
      : "/img/placeholder.svg",
    images:
      this.props.project && this.props.project.images
        ? this.props.project.images
        : [],
    imagesPreview: [],
    loading: false,
    project: this.props.project,
  };

  // constructor(props) {
  //   super(props);
  //   // this.state = defaultState(this.props.project)
  //   this.handleCoverChange = this.handleCoverChange.bind(this)
  //   this.handleImageDelete = this.handleImageDelete.bind(this)
  //   this.handleImagesAdd = this.handleImagesAdd.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { project, onSubmit } = this.props;
    const { images, cover } = this.state;

    const formData = new FormData(e.target);
    cover && formData.append("cover", cover);
    images.length &&
      images.forEach((image) => {
        formData.append("images", image.file);
      });

    if (project) formData.append("project_id", project.project_id);
    onSubmit(formData);
  };

  handleCoverChange = (files) => {
    this.setState({
      cover: files[0],
      coverPreview: URL.createObjectURL(files[0]),
    });
  };

  handleImagesAdd = (files) => {
    const { images } = this.state;
    files.forEach((file, i) => {
      images.push({
        file: file,
        image_id: `image-${new Date().valueOf()}-${i}`,
        image_url: URL.createObjectURL(file),
        new: true,
      });
    });
    this.setState({ images });
  };

  handleImageDelete = (id) => {
    this.setState({ loading: true });
    const { images } = this.state;

    const index = images.findIndex((image) => image.image_id === id);
    const image = images[index];

    if (image.new) {
      this.deleteImage(index);
    } else {
      deleteImage(id).then(({ deleted }) => {
        if (deleted === 1) {
          this.deleteImage(index);
        }
      });
    }
  };

  deleteImage = (index) => {
    const { images } = this.state;
    images.splice(index, 1);
    this.setState({ images, loading: false });
  };

  render() {
    const { project = {} } = this.props;

    return (
      <Form id="new-project__form" onSubmit={this.handleSubmit}>
        <FormSection>
          <SmallFormSubsection>
            <ImagePreview image={this.state.coverPreview} />
          </SmallFormSubsection>
          <FormSubsection>
            <FormRow>
              <TextField
                placeholder="Name"
                type="text"
                name="name"
                value={project.name || ""}
              />
            </FormRow>
            <FormRow>
              <TextField
                placeholder="Internal URL"
                type="text"
                name="internal_url"
                value={project.internal_url || ""}
              />
            </FormRow>
            <FormRow>
              <TextField
                placeholder="Technologies"
                type="text"
                name="technologies"
                value={project.technologies || ""}
              />
            </FormRow>
            <FormRow>
              <TextField
                placeholder="URL"
                type="text"
                name="url"
                value={project.url || ""}
              />
            </FormRow>
            <FormRow>
              <TextField
                placeholder="Type"
                type="text"
                name="type"
                value={project.type || ""}
              />
            </FormRow>
            <FormRow>
              <Checkbox
                id="show"
                label="Show"
                name="show"
                value={project.show}
              ></Checkbox>
            </FormRow>
            <FormRow>
              <FileUploader onChange={this.handleCoverChange}>
                <p className="typography-body">
                  Drag 'n' drop the project cover here, or click to select a
                  file.
                </p>
              </FileUploader>
            </FormRow>
          </FormSubsection>
        </FormSection>
        <FormSection>
          <FileUploader onChange={this.handleImagesAdd}>
            <ImagesPreview>
              {this.state.images.map((image) => (
                <ImagePreviewWithActions
                  key={image.image_id}
                  image={image.image_url}
                >
                  <ImagePreviewActions>
                    <IconButton
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        this.handleImageDelete(image.image_id);
                      }}
                    >
                      <CrossIcon />
                    </IconButton>
                  </ImagePreviewActions>
                </ImagePreviewWithActions>
              ))}
            </ImagesPreview>
            <p className="typography-body">
              Drag 'n' drop the project images, or click to select a file.
            </p>
          </FileUploader>
        </FormSection>
        <FormSection>
          <FormRow>
            <PrimaryButton type="submit" disabled={this.state.loading}>
              Save
            </PrimaryButton>
          </FormRow>
        </FormSection>
      </Form>
    );
  }
}

export default ProjectForm;
