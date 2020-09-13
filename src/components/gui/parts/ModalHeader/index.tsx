/**
 * モーダルヘッダー
 * ModalHeader GUI parts Component
 * @title タイトル
 * @onClose モーダルを閉じるイベント
 * @handleDelete 削除イベント
 */
import React from 'react'
import styled from 'styled-components'

// Components
import {LayoutFlex} from '@layouts'

// Assets
import {mainColor} from '@assets/js/variables'

// Material-UI
import {Close, DeleteOutlineOutlined} from '@material-ui/icons'


interface Props {
  title?:        string
  onClose?:      React.EffectCallback
  handleDelete?: React.EffectCallback
}

export const ModalHeader:React.FC<Props> = ({title, onClose, handleDelete}) => (
  <StyledDiv>
    <LayoutFlex>
      <StyledHeading children={title || ''} />
      <LayoutFlex justify={'flex-end'}>
        {handleDelete && (
          <StyledButton onClick={handleDelete}>
            <DeleteOutlineOutlined />
          </StyledButton>
        )}
        {onClose && (
          <StyledButton onClick={onClose}>
            <Close />
          </StyledButton>
        )}
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