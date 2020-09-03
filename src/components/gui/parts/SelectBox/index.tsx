/**
 * セレクトボックス
 * SelectBox GUI Parts Component
 * @choice 選択肢
 * @selected デフォルトvalue
 * @onSelected change event
 */
import React  from 'react'
import styled from 'styled-components'

interface Props {
  choices?:    string[]
  selected?:   string
  onSelected?: (res: React.BaseSyntheticEvent) => void
}

export const SelectBox:React.FC<Props> = ({choices, selected, onSelected}) => (
  <StyledSelectBox>
    <StyledSelect defaultValue={selected || 'DEFAULT'} onChange={onSelected} >
      <option key={0} value='DEFAULT' children='選択してください' />
      {SelectBoxItem(choices)}
    </StyledSelect>
  </StyledSelectBox>
)

const SelectBoxItem = (choices?: string[]) => {
  if(!choices) return
  return choices.map((c, i) => (
    <option key={i} value={c} children={c} />
  ))
}

const StyledSelectBox = styled.div`
  position: relative;
  box-sizing: border-box;
  color: #555;
  background: #fff;
  border-radius: 3px;
  padding: 0 12px;
  width: 100%;
  height: 42px;
  line-height: 42px;
  box-shadow: 0 2px 2px rgba(146,151,165,.5);
  border-top: .8px solid #e7e7e7;
  &::before, &::after {
    content: ' ';
    position: absolute;
    display: block;
  }
  &::before {
    top: 0;
    right: 0;
    bottom: 0;
    width: 42px;
    border-radius: 0 3px 3px 0;
    background: #44434f;
  }
  &::after {
    top: 50%;
    right: 12px;
    margin-top: -4px;
    width: 0;
    height: 0;
    border-color: #ccc transparent transparent;
    border-style: solid;
    border-width: 10px 8px 0;
  }
`

const StyledSelect = styled.select`
  padding: 8px 38px 8px 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 42px;
  color: #333;
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  appearance: none;
`