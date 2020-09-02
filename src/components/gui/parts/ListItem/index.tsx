/**
 * リストアイテム
 * ListItem GUI parts Component
 * @title タイトル
 * @date 日付
 */
import React  from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  date?: string
}

export const ListItem:React.FC<Props> = ({title, date}) => (
  <div>
    <StyledTitle>
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
  font-size: 1.1rem;
  font-weight: bold;
`

const StyledDate = styled.p`
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  margin-top: 2px;
  color: #fff;
  border-radius: 50px;
  background: #20232a;
`