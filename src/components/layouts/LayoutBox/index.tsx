/**
 * ボックスサイズ
 * LayoutBox Component
 */
import React  from 'react'
import styled from 'styled-components'

interface StyledProps {
  height?:    number | string
  width?:     number | string
  maxWidth?:  number | string
  hasCenter?: boolean
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const LayoutBox:React.FC<Props> = props => (
  <StyledBox {...props} />
)

const StyledBox = styled.div<StyledProps>`
  display: block;
  height: ${(props => props.height || '100%')};
  margin: ${(props => props.hasCenter && '0 auto')};

  ${(props: StyledProps) => {
    if(props.maxWidth) return `max-width: ${props.maxWidth};`
    if(props.width)    return `width: ${props.width};`
  }}
`