/**
 * テキストフィールド
 * TextField GUI Component
 * @icon アイコンコンポーネント
 * @label ラベル
 * @defaultValue デフォルトValue
 * @placeholder 説明
 * @required 必須入力かどうか
 * @multiline テキストエリアかどうか
 * @error エラーかどうか
 * @helperText ヘルプ
 */
import React from 'react'
import styled from 'styled-components'

// Components
import {LayoutFlex} from '@layouts'

// Material-UI
import {TextField as InputText} from '@material-ui/core'

// CSS
import classes from './style.module.sass'

interface Props {
  icon?: React.ReactNode
  label: string
  name?: string
  type?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  multiline?: boolean
  inputRef?: any
  error?: boolean
  helperText?: string
  hasShrink?: boolean
}

const shrink = (hasShrink: boolean) => {
  if(!hasShrink) return 
  return {shrink: true}
}

export const TextField:React.FC<Props> = ({icon, label, name, type, defaultValue, placeholder, required, multiline, inputRef, error, helperText, hasShrink}) => (
  <LayoutFlex>
    {icon && <StyledDiv children={icon} />}
    <InputText
      {...{label, defaultValue, name, required, multiline, inputRef, error, helperText}}
      type={type || 'text'}
      placeholder={placeholder || '入力してください...'}
      className={classes.txtAria}
      InputLabelProps={shrink(hasShrink || false)}
    />
  </LayoutFlex>
)

TextField.defaultProps = {
  required: false,
  multiline: false,
  error: false,
}

const StyledDiv = styled.div`
  margin-top: 17px;
  margin-right: 10px;
`