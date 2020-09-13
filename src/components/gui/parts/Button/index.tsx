/**
 * ボタン
 * Button GUI parts Component
 * @label ボタンのラベル
 * @disabled disabled
 * @onClick ボタンを押下時のイベント
 * @thema 配色テーマ
 */
import React from "react"
import styled from "styled-components"

// Assets JS
import {mainColor} from '@assets/js/variables'

type thema = 'normal' | 'success' | 'danger' | 'warning'

interface StyledProps {
  thema?: thema
}

interface Props extends StyledProps {
  label?:    string
  type?:     'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?:  (res: React.BaseSyntheticEvent) => void
}
export const Button:React.FC<Props> = ({label, type, onClick, disabled, thema}) => (
  <StyledButton {...{type, onClick, disabled, thema}} >{label || "OK"}</StyledButton>
)

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  min-width: 100px;
  border: 2px solid;
  padding: 7px 24px;
  text-align: center;
  ${(props: StyledProps) => {
    const getColor = (thema?: thema) => {
      if(thema === 'danger') return '#d73a49'
      if(thema === 'warning') return '#ffc107'
      if(thema === 'success') return '#28a745'
      return mainColor
    }

    return `
      border-color: ${getColor(props.thema)};
      color: ${getColor(props.thema)};
    `
  }}
`