/**
 * Todo
 * Todo Domain Element Component
 */
import React from 'react'
import styled from 'styled-components'

// Components
import {Layout, LayoutFlex} from '@layouts'
import {
  Button,
  FieldBlockWrapper,
  ModalHeader,
  ListItem,
  SelectBox,
  TextField
} from '@gui/parts'

// Entity
import {
  typeTodo,
  typeTodoFormItem,
  typeTodoOption,
  typeTodoSelectEvent
} from '@entity/todo'

// Services
import {TODO_LABELS, TODO_OPTIONS} from '@services/todo'

// Material-UI
import {AccessTime, Notes} from '@material-ui/icons'

// Constants
enum HEADING {
  ADD    = 'ToDoを追加',
  DETAIL = 'ToDoの詳細',
  EDIT   = 'ToDoの編集',
  DELETE = 'ToDoの削除',
}
const LABEL   = 'を追加'
const ICONS = {
  DATE:        <AccessTime />,
  DESCRIPTION: <Notes />,
}


/**
 * Form Edit Component
 */
interface Props {
  onClose: React.EffectCallback
  isPut?:  boolean
  form: {
    title:       typeTodoFormItem,
    description: typeTodoFormItem,
    date:        typeTodoFormItem,
  }
  onClick: (res: React.BaseSyntheticEvent) => void
}
export const TodoEdit:React.FC<Props> = ({onClose, isPut, onClick, form}) => (
  <FieldBlockWrapper
    heading={
      <ModalHeader {...{onClose}} title={isPut ? HEADING.EDIT : HEADING.ADD} />
    } 
  >
    <Layout padding={'0 15px'} margin={'0 0 15px 0'}>
      {/* タイトル */}
      <StyledInputField>
        <TextField
          name={form.title.name}
          inputRef={form.title.ref}
          defaultValue={form.title.defaultValue}
          label={TODO_LABELS.TITLE}
          placeholder={`${TODO_LABELS.TITLE}${LABEL}`}
          error={form.title.error ? true : false}
          helperText={form.title.error}
          required={true}
        />
      </StyledInputField>

      {/* 日時 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DATE}
          name={form.date.name}
          type={'date'}
          defaultValue={form.date.defaultValue}
          hasShrink={true}
          inputRef={form.date.ref}
          label={TODO_LABELS.DATE}
          placeholder={`${TODO_LABELS.DATE}${LABEL}`}
        />
      </StyledInputField>

      {/* 説明 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DESCRIPTION}
          name={form.description.name}
          defaultValue={form.description.defaultValue}
          inputRef={form.description.ref}
          label={TODO_LABELS.DESCRIPTION}
          placeholder={`${TODO_LABELS.DESCRIPTION}${LABEL}`}
          multiline={true}
        />
      </StyledInputField>

      <StyledSubmitField>
        <Button label={'保存'} onClick={onClick} />
      </StyledSubmitField>
    </Layout>
  </FieldBlockWrapper>
)

const StyledInputField = styled.div`
  margin-top: 8px;
`
const StyledSubmitField = styled.div`
  margin-top: 12px;
  text-align: right;
  button:last-of-type{
    margin-left: 10px;
  }
`

/**
 * Todo List SelectBox Status
 */
interface SelectedProps {
  selected?:       typeTodoOption
  onSelectedTodo?: typeTodoSelectEvent
}
export const TodoSelected:React.FC<SelectedProps> = ({selected, onSelectedTodo}) => {
  const onSelected = (res: React.BaseSyntheticEvent) => {
    if(!onSelectedTodo) return
    const choice = res.target.value
    onSelectedTodo(choice)
  }

  return (
    <Layout>
      <SelectBox
        choices={TODO_OPTIONS}
        {...{selected, onSelected}}
      />
    </Layout>
  )
}


/**
 * Todo Detail Component
 */
interface DetailProps {
  onClose: React.EffectCallback
  todo?:   typeTodo
  handleDeleteOpen?: React.EffectCallback
  handlePutOpen?:    React.EffectCallback
}

export const TodoDetail:React.FC<DetailProps> = ({onClose, todo, handleDeleteOpen, handlePutOpen}) => {
  if(!todo) return <></>
  // Delete Todo
  const handleClick = () => {
    if(!handleDeleteOpen) return
    handleDeleteOpen()
  }
  
  return (
    <FieldBlockWrapper
      heading={
        <ModalHeader
          {...{onClose}}
          title={HEADING.DETAIL}
          handleDelete={handleClick}
        />
      } 
    >
      <Layout padding={'15px 15px 0'} margin={'0 0 15px 0'}>
        <ListItem title={todo.title} fontSize={'1.5rem'} >
          {todo.date}
        </ListItem>

        {todo.memo !== '' && (
          <Layout margin={'18px 0 0 0'}>
            <LayoutFlex justify={'start'} verticalAlign={'start'}>
              {ICONS.DESCRIPTION}
              <StyledDescription>
                {todo.memo.split(' ').map(m => m)}
              </StyledDescription>
            </LayoutFlex>
          </Layout>
        )}

        <StyledSubmitField>
          <Button label={'編集'} onClick={handlePutOpen} />
        </StyledSubmitField>
      </Layout>
    </FieldBlockWrapper>
  )
}

const StyledDescription = styled.p`
  margin-left: 10px;
  white-space: pre-wrap;
`


/**
 * Todo Delete yes no Modal
 */
interface DeleteProps {
  todo?:   typeTodo
  handleDelete?:  (id?: number | undefined) => void
  handleCansell?: (res?: React.BaseSyntheticEvent) => void
}

export const TodoDelete:React.FC<DeleteProps> = ({todo, handleDelete, handleCansell}) => {
  if(!todo) return <></>

  const handleNoClick = () => {
    if(!handleCansell) return
    handleCansell()
  }

  const handleYesClick = () => {
    if(!handleDelete) return
    handleDelete(todo.id)
  }
  
  return (
    <FieldBlockWrapper
      heading={
        <ModalHeader title={HEADING.DELETE} />
      } 
    >
      <Layout padding={'15px 15px 0'} margin={'0 0 15px 0'}>
        <ListItem title={todo.title} fontSize={'1.5rem'} />
        <p>を削除してもよろしいですか？</p>
       
        <LayoutFlex justify={'flex-end'}>
          <StyledSubmitField>
            <Button label='CANSELL' thema='danger'  onClick={handleNoClick} />
            <Button label='DELETE'  thema='success' onClick={handleYesClick} />
          </StyledSubmitField>
        </LayoutFlex>
      </Layout>
    </FieldBlockWrapper>
  )
}