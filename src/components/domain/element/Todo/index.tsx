/**
 * Todo入力コンポーネント
 * Todo Domain Element Component
 */
import React from 'react'
import styled from 'styled-components'

// Components
import {Layout, LayoutFlex} from '@layouts'
import {
  Button,
  FieldBlockWrapper,
  TextField
} from '@gui/parts'

// Entity
import {TODO_LABELS} from '@services/todo'

// Assets
import {mainColor} from '@assets/js/variables'

// Material-UI
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import NotesIcon      from '@material-ui/icons/Notes'
import CloseIcon      from '@material-ui/icons/Close'

// Constants
const HEADING = 'ToDoを追加'
const LABEL = 'を追加'
const ICONS = {
  DATE:        <AccessTimeIcon />,
  DESCRIPTION: <NotesIcon />,
}

interface HeadingProps {
  onClose: React.EffectCallback
}

const Heading:React.FC<HeadingProps> = ({onClose}) => (
  <StyledDiv>
    <LayoutFlex>
      <StyledHeading children={HEADING} />
      <StyledButton onClick={onClose}>
        <CloseIcon />
      </StyledButton>
    </LayoutFlex>
  </StyledDiv>
)

const StyledDiv = styled.div`
  background-color: ${mainColor};
  border-radius: 8px 8px 0 0;
  padding: 10px;
`
const StyledHeading = styled.h1`
  color: #fff;
  font-size: 1.3rem;
`
const StyledButton = styled.button`
  color: #fff;
  border-radius: 50%;
`


interface Props {
  onClose: React.EffectCallback
}

export const Todo:React.FC<Props> = ({onClose}) => (
  <FieldBlockWrapper heading={<Heading {...{onClose}}/>} >
    <Layout padding={'0 10px'} margin={'0 0 15px 0'}>
      {/* タイトル */}
      <StyledInputField>
        <TextField 
          label={TODO_LABELS.TITLE}
          placeholder={`${TODO_LABELS.TITLE}${LABEL}`}
          required={true}
        />
      </StyledInputField>

      {/* 日時 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DATE}
          label={TODO_LABELS.DATE}
          placeholder={`${TODO_LABELS.DATE}${LABEL}`}
        />
      </StyledInputField>

      {/* 説明 */}
      <StyledInputField>
        <TextField
          icon={ICONS.DESCRIPTION}
          label={TODO_LABELS.DESCRIPTION}
          placeholder={`${TODO_LABELS.DESCRIPTION}${LABEL}`}
          multiline={true}
        />
      </StyledInputField>

      <StyledSubmitField>
        <Button label={'保存'}/>
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