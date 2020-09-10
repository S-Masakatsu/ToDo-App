/**
 * タグアイテム
 * TagItem GUI parts Component
 * @text テキスト
 */
import React  from 'react'
import styled from 'styled-components'

interface Props {
  text?: string | null
}

export const TagItem:React.FC<Props> = ({text}) => {
  if(!text) return <></>
  return (
    <StyledDate>
      {text}
    </StyledDate>
  )
}

const StyledDate = styled.p`
  display: inline-block;
  padding: 0 15px;
  text-align: center;
  color: #fff;
  border-radius: 50px;
  background: #20232a;
`