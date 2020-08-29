/**
 * Flexレイアウト用
 * LayoutFlex Component
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
  height?:        String | Number
  minHeight?:     String | Number
  direction?:     Property.FlexDirection
  justify?:       Property.JustifyContent
  verticalAlign?: Property.BoxAlign
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const LayoutFlex:React.FC<Props> = ({
  direction,
  justify,
  verticalAlign,
  height,
  minHeight,
  children
}) => (
  <StyledFlexBox {...{direction, justify, verticalAlign, height, minHeight}}>
    {children}
  </StyledFlexBox>
)

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction:  ${(props: StyledProps) => props.direction     || "row"};
  justify-content: ${(props: StyledProps) => props.justify       || "space-between"};
  align-items:     ${(props: StyledProps) => props.verticalAlign || "center"};

  ${(props: StyledProps) => {
    if (!props.height) return
    return `height: ${props.height}`;
  }}

  ${(props: StyledProps) => {
    if (!props.minHeight) return
    return `min-height: ${props.minHeight}`;
  }}
`