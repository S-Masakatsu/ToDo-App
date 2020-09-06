/**
 * Flexレイアウト用
 * LayoutFlex Layouts Component
 * @height height
 * @minHeight min-height
 * @direction flex-direction
 * @justify justify-content
 * @verticalAlign align-items
 * @children ラップする中身
 */
import React      from 'react'
import styled     from 'styled-components'
import {Property} from 'csstype'

interface StyledProps {
  tmpCol?: Property.GridTemplateColumns
  tmpRow?: Property.GridTemplateRows
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const LayoutGrid:React.FC<Props> = props => (
  <StyledGridBox {...props} />
)

const StyledGridBox = styled.div`
  display: grid;
  grid-template-columns: ${(props: StyledProps) => props.tmpCol || '300px 1fr'};
  grid-template-rows:    ${(props: StyledProps) => props.tmpRow || '80px 1fr'};
`