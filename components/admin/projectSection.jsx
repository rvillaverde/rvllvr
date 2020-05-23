import React from 'react'
import Router from 'next/router'
import { deleteProject } from '../../utils/projects'

import styled from "styled-components"
import IconButton from '../buttons/iconButton'
import Modal from '../modal'
import { CrossIcon, EditIcon } from '../icons'
import { Table, TBody, Tr, Td, TdActions } from '../tables/table'
import Button from '../buttons/primaryButton'
import LinkButton from '../buttons/primaryButton'
import Link from 'next/link';

const DeleteProjectModal = ({ open, handler, confirm }) => (
  <Modal open={ open } handler={ handler }>
    <ModalContent>
      <h4 className="typography-headline4">Are you sure?</h4>
      <p className="typography-body">
        Do you really want to delete this project?
        <br/>
        This action cannot be undone.
      </p>
    </ModalContent>
    <ModalActions>
      <Button type="button" onClick={ handler }>
        Cancel
      </Button>
      <Button type="button" onClick={ confirm }>
        Delete
      </Button>
    </ModalActions>
  </Modal>
);

class ProjectSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { deleteModalOpen: false }
    this.deleteProject = this.deleteProject.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }

  toggleDeleteModal(project_id) {
    this.setState({ deleteModalOpen: !this.state.deleteModalOpen, project_id: project_id })
    this.deleteProject(project_id)
  }

  async deleteProject(id) {
    await deleteProject(id);
    Router.push(`/admin`)
  }

  render() {
    return (
      <Section>
        <DeleteProjectModal open={ this.state.deleteModalOpen }
          handler={ this.toggleDeleteModal }
          confirm={ this.deleteProject }/>
        <TittleWrapper>
          <Title className="typography-headline4">Admin Projects</Title>
            <Link href="/admin/projects/new">
              <LinkButton href="/admin/projects/new">New Project</LinkButton>
            </Link>
          </TittleWrapper>
        <Table>
          <TBody>
            { this.props.projects.map(project => (
              <ProjectRow key={ project.project_id } id={`project-${ project.project_id }`}
                project={project} handleDelete={ this.toggleDeleteModal }>
              </ProjectRow>
            ))}
          </TBody>
        </Table>
      </Section>
    )
  }
}

const ProjectRow = function(props) {
  return (
    <Tr key={props.id} id={props.id}>
      <Td>
        {props.project.name}
      </Td>
      <Td>
        {props.project.technologies}
      </Td>
      <TdActions>
        <Link href="/admin/projects/[id]" as={`/admin/projects/${props.project.project_id}`}>
          <IconButton as="a" href={`/admin/projects/${props.project.project_id}`}>
            <EditIcon/>
          </IconButton>
        </Link>
        {/* <IconButton type="button"><EditIcon/></IconButton> */}
        <IconButton type="button" onClick={() => props.handleDelete(props.project.project_id) }>
          <CrossIcon/>
        </IconButton>
      </TdActions>
    </Tr>
  );
}

const TittleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Section = styled.section`
  background-color: white;
  padding: 24px 0;
  max-width: 840px;
  margin: auto;

  table {
    margin: 24px 0;
  }

  @media (min-width: 1280px) {
    padding: 24px;
  }
`
const Title = styled.h4`
  color: var(--gray__600)
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  > h3 {
    margin: 1rem;
  }

  > p {
    text-align: center;
  }
`
const ModalActions = styled.div`
  margin: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  button:not(:first-child) {
    margin-left: 1rem;
  }
`
export default ProjectSection;
