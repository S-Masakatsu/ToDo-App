/**
 * フォームモーダル表示ボタン
 * OpenButton GUI parts Component
 */
import React  from 'react'
import styled from 'styled-components'

// Material-UI
import AddIcon from '@material-ui/icons/Add'

interface Props {
  onClick?: (res: React.BaseSyntheticEvent) => void
}

export const OpenButton:React.FC<Props> = ({onClick}) => (
  <StyledButton onClick={onClick}>
    <AddIcon fontSize='large'/>
  </StyledButton>
)

const StyledButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 25px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
  text-decoration: none;
  color: rgba(152, 152, 152, 0.43);
  width: 60px;
  height: 60px;
  line-height: 90px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  background-image: linear-gradient(#e8e8e8 0%, #d6d6d6 100%);
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
  border-bottom: solid 2px #b5b5b5;
`