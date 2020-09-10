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
  ListItem,
  SelectBox,
  TextField
} from '@gui/parts'

// Utils
import {useTodoDelete} from '@utils/todo'

// Entity
import {typeTodo, typeTodoFormItem, typeTodoOption, typeTodoSelectEvent} from '@entity/todo'

// Services
import {TODO_LABELS, TODO_OPTIONS} from '@services/todo'

// Assets
import {mainColor} from '@assets/js/variables'

// Material-UI
import {
  Close,
  AccessTime,
  Notes,
  DeleteOutlineOutlined
} from '@material-ui/icons'

// Constants
enum HEADING {
  ADD    = 'ToDoを追加',
  DETAIL = 'ToDoの詳細',
  EDIT   = 'ToDoの編集',
}
const LABEL   = 'を追加'
const ICONS = {
  DATE:        <AccessTime />,
  DESCRIPTION: <Notes />,
}


/**
 * Form Header Component
 */
interface HeadingProps {
  title?:        string
  onClose:       React.EffectCallback
  handleDelete?: React.EffectCallback
}
const Heading:React.FC<HeadingProps> = ({title, onClose, handleDelete}) => (
  <StyledDiv>
    <LayoutFlex>
      <StyledHeading children={title || HEADING.ADD} />
      <LayoutFlex justify={'flex-end'}>
        {handleDelete && (
          <StyledButton onClick={handleDelete}>
            <DeleteOutlineOutlined />
          </StyledButton>
        )}
        <StyledButton onClick={onClose}>
          <Close />
        </StyledButton>
      </LayoutFlex>
    </LayoutFlex>
  </StyledDiv>
)

const StyledDiv = styled.div`
  background-color: ${mainColor};
  border-radius: 8px 8px 0 0;
  padding: 10px 15px;
`
const StyledHeading = styled.h1`
  color: #fff;
  font-size: 1.3rem;
`
const StyledButton = styled.button`
  color: #fff;
  border-radius: 50%;
  &:last-of-type{
    margin-left: 10px;
  }
`

/**
 * Form Edit Component
 */
interface Props {
  onClose:     React.EffectCallback
  title:       typeTodoFormItem,
  description: typeTodoFormItem,
  date:        typeTodoFormItem,
  onClick:     (res: React.BaseSyntheticEvent) => void
}
export const TodoEdit:React.FC<Props> = ({onClose, onClick, title, description, date}) => (
  <FieldBlockWrapper heading={<Heading {...{onClose}}/>} >
    <Layout padding={'0 15px'} margin={'0 0 15px 0'}>
      {/* タイトル */}
      <StyledInputField>
        <TextField
          name={title.name}
          inputRef={title.ref}
          label={TODO_LABELS.TITLE}
          placeholder={`${TODO_LABELS.TITLE}${LABEL}`}
          error={title.error ? true : false}
          helperText={title.error}
          required={true}
        />
      </StyledInputField>

      {/* 日時 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DATE}
          name={date.name}
          type={'date'}
          defaultValue={date.defaultValue}
          hasShrink={true}
          inputRef={date.ref}
          label={TODO_LABELS.DATE}
          placeholder={`${TODO_LABELS.DATE}${LABEL}`}
        />
      </StyledInputField>

      {/* 説明 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DESCRIPTION}
          name={description.name}
          inputRef={description.ref}
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
}

export const TodoDetail:React.FC<DetailProps> = ({onClose, todo}) => {
  const {handleDelete} = useTodoDelete()
  if(!todo) return <></>
  // Delete Todo
  const handleClick = (id?: number) => {
    if(!handleDelete || !id) return
    handleDelete(id)
    onClose()
  }
  
  return (
    <FieldBlockWrapper
      heading={
        <Heading
          {...{onClose}}
          title={HEADING.DETAIL}
          handleDelete={() => handleClick(todo.id)}
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
          <Button label={'編集'} onClick={() => console.log('更新')} />
        </StyledSubmitField>
      </Layout>
    </FieldBlockWrapper>
  )
}

const StyledDescription = styled.p`
  margin-left: 10px;
  white-space: pre-wrap;
`