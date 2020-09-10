/**
 * リストアイテム
 * ListItem GUI parts Component
 * @title タイトル
 * @date 日付
 * @done 完了の有無
 * @tagDate タグ化(デフォルト：true)
 */
import React  from 'react'
import styled from 'styled-components'
import {Property} from 'csstype'

interface StyledProps {
  done?:     boolean
  fontSize?: Property.FontSize
}

interface Props extends StyledProps {
  title: string
  children?: React.ReactNode
}

export const ListItem:React.FC<Props> = ({title, done, children, fontSize}) => (
  <>
    <StyledTitle done={done} fontSize={fontSize}>
      {title}
    </StyledTitle>
    {children}
  </>
)

const StyledTitle = styled.h2`
  font-size: ${(props: StyledProps) => props.fontSize || '1.15rem'};
  font-weight: bold;
  text-decoration: none;
  ${(props: StyledProps) => {
    if(!props.done) return
    return `
      color: #666;
      text-decoration: line-through;
    `
  }}
`