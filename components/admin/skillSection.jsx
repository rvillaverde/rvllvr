import React from 'react'
import { createSkill, editSkill, deleteSkill } from '../../utils/skills'

import styled from "styled-components"
import FormField from '../forms/formField'
import TextField from '../forms/textField'
import NumberField from '../forms/numberField'
import Button from '../buttons/primaryButton'
import IconButton from '../buttons/iconButton'
import { CrossIcon, PlusIcon } from '../icons'
import { Table, TBody, Tr, Td, TdActions } from '../tables/table'


let newSkillId = 'new-skill'

class SkillSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { skills: props.skills }
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  async handleAddSkill(e) {
    e.preventDefault()
    let row = document.getElementById(newSkillId)
    let skill = {
      name: row.querySelector('input[name=name]').value,
      ratio: row.querySelector('input[name=ratio]').value,
      order: row.querySelector('input[name=order]').value
      // order:  Array.prototype.slice.call(document.querySelectorAll('#skill-form tr'))
      //         .findIndex((tr) => tr.id === newSkillId) + 1
    }
    let savedSkill = await createSkill(skill);
    document.getElementById('skill-form').reset();
    this.setState({ skills: this.state.skills.concat([savedSkill]) })
  }

  async handleUpdateSkill(id, field) {
    let upadateField = {}
    upadateField[field.getAttribute('data-name')] = field.value
    const res = await editSkill(id, upadateField);

    if (res.updated === 1) {
      let skills = this.state.skills
      let skill = skills.find((skill) => skill.skill_id === id )
      Object.keys(upadateField).forEach((key) => {
        skill[key] = upadateField[key]
      })
      this.setState({ skills: skills })
    }
  }

  async handleRemoveSkill(id) {
    const res = await deleteSkill(id);

    if (res.deleted === 1) {
      let skills = this.state.skills
      let index = skills.findIndex((skill) => skill.skill_id === id )
      skills.splice(index, 1)
      this.setState({ skills: skills })
    }
  }

  render() {
    return (
      <Section>
        <Title className="typography-headline4">Admin Skills</Title>
        <form id="skill-form" onSubmit={ this.handleAddSkill }>
          <Table>
            <TBody>
              { this.state.skills.map(skill => (
                <SkillRow key={ skill.skill_id } id={`skill-${ skill.skill_id }`}
                  skillName={ skill.name }
                  skillRatio={ skill.ratio }
                  skillOrder={ skill.order }
                  actionHandler={ () => this.handleRemoveSkill(skill.skill_id) }
                  updateHandler={ (e) => this.handleUpdateSkill(skill.skill_id, e.target) }>
                </SkillRow>
              ))}
              <SkillRow id={ newSkillId } create></SkillRow>
            </TBody>
          </Table>
          <Button type="button">Save</Button>
        </form>
      </Section>
    )
  }
}

const SkillRow = function(props) {
  return (
    <Tr key={props.id} id={props.id}>
      <Td>
        <TextField type="text" name={ props.create ? 'name' : '' } dataName="name" value={props.skillName} onBlur={ props.updateHandler } required></TextField>
      </Td>
      <Td>
        <NumberField name={ props.create ? 'ratio' : '' } dataName="ratio" value={props.skillRatio} onBlur={ props.updateHandler } required></NumberField>
      </Td>
      <Td>
        <NumberField name={ props.create ? 'order' : '' } dataName="order" value={props.skillOrder} onBlur={ props.updateHandler } required></NumberField>
      </Td>
      <TdActions>
        <FormField>
          { props.create
            ? <IconButton type="submit"><PlusIcon/></IconButton>
            : <IconButton type="button" onClick={ props.actionHandler }><CrossIcon/></IconButton>
          }
        </FormField>
      </TdActions>
    </Tr>
  );
}

const Section = styled.section`
  background-color: white;
  padding: 24px 0;
  max-width: 840px;
  margin: auto;

  form {
    margin: auto;
    padding: 24px 0;
    width: 100%;
    max-width: 460px;
  }

  @media (min-width: 1280px) {
    padding: 24px;

    form {
      padding: 0 24px;
    }
  }
`
const Title = styled.h4`
  color: var(--gray__600)
`

export default SkillSection;
