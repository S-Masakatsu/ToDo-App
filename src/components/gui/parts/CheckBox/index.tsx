/**
 * チェックボックス
 * CheckBox GUI parts Component
 * @height チェックボックスの大きさ
 * @checkedColor チェック時の色
 * @id ID
 * @onChange チェックイベント
 */
import React  from 'react'
import styled from 'styled-components'

interface StyledProps {
  height?:       number
  checkedColor?: string
}

interface Props extends StyledProps {
  id:        string
  onChange?: (res: React.BaseSyntheticEvent) => void
}

export const CheckBox:React.FC<Props> = ({id, onChange, height, checkedColor}) => (
  <StyledWrapper height={height} >
    <StyledCheckBox {...{id, onChange}} />
    <StyledCheckLabel htmlFor={id} {...{height, checkedColor}}/>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: StyledProps) => {
    const height = props.height || 50
    return `
      width:   ${height * 1.3}px;
      padding: ${height / 9}px;
    `
  }}
`

const StyledCheckBox = styled.input.attrs(props => ({type: 'checkbox'}))`
  display: none;
`

// Constants
const UN_CHECKD_COLOR = '#000'
const BACK_COLOR      = '#fff'
const DURATION        = .4

const StyledCheckLabel = styled.label`
  ${(props: StyledProps) => {
    const height = props.height || 50
    const checkedColor = props.checkedColor || '#34b93d'
    return `
      height: ${height}px;
      width: ${height}px;
      background-color: transparent;
      border: ${height * .1}px solid ${UN_CHECKD_COLOR};
      border-radius: 5px;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      transition: border-color ease ${DURATION / 2}s;
      cursor: pointer;
      &::before, &::after {
        box-sizing: border-box;
        position: absolute;
        height: 0;
        width: ${height * .2}px;
        background-color: ${checkedColor};
        display: inline-block;
        transform-origin: left top;
        border-radius: 5px;
        content: ' ';
        transition: opacity ease .5;
      }

      &::before {
        top:${height * .72}px;
        left: ${height * .41}px;
        box-shadow: 0 0 0 ${height * .05}px ${BACK_COLOR};
        transform: rotate(-135deg);
      }

      &::after {
        top: ${height * .37}px;
        left: ${height * .05}px;
        transform: rotate(-45deg);
      }

      @keyframes bottomCheck {
        0%   {height: 0;}
        100% {height: ${height / 2}px;}
      }

      @keyframes topCheck {
        0%   {height: 0;}
        50%  {height: 0;}
        100% {height: ${height * 1.1}px;}
      }

      ${StyledCheckBox}:checked + & {
        border-color: ${checkedColor};
        &::after {
          height: ${height * .5}px;
          animation: bottomCheck ${DURATION / 2}s ease 0s forwards;
        }
        
        &::before {
          height: ${height * 1.2}px;
          animation: topCheck ${DURATION}s ease 0s forwards;
        }
      }
    `
  }}
`