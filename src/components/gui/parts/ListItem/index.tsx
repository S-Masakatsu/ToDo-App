/**
 * リストアイテム
 * ListItem GUI parts Component
 * @title タイトル
 * @date 日付
 */
import React  from 'react'
import styled from 'styled-components'

interface StyledProps {
  done?: boolean
}

interface Props extends StyledProps {
  title: string
  date?: string | null
}

export const ListItem:React.FC<Props> = ({title, date, done}) => (
  <div>
    <StyledTitle done={done}>
      {title}
    </StyledTitle>
    {date && (
      <StyledDate>
        {date}
      </StyledDate>
    )}
  </div>
)

const StyledTitle = styled.h2`
  font-size: 1.15rem;
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

const StyledDate = styled.p`
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  color: #fff;
  border-radius: 50px;
  background: #20232a;
`