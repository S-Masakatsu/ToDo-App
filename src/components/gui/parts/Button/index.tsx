/**
 * ボタン
 * Button GUI parts Component
 * @label ボタンのラベル
 * @disabled disabled
 * @onClick ボタンを押下時のイベント
 */
import React from "react"
import styled from "styled-components"

// Assets JS
import {mainColor} from '@assets/js/variables'

interface Props {
  label?: string
  disabled?: boolean
  onClick?: (res: React.BaseSyntheticEvent) => void
}
export const Button:React.FC<Props> = ({label, onClick, disabled}) => (
  <StyledButton {...{onClick, disabled}} >{label || "OK"}</StyledButton>
)

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  color: ${mainColor};
  font-size: 1.1em;
  min-width: 100px;
  border: 2px solid ${mainColor};
  padding: 7px 24px;
  text-align: center;
`