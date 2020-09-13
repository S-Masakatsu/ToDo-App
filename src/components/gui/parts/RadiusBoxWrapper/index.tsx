/**
 * radius付きBOX Wrepper
 * RadiusBoxWrapper GUI Parts Component
 * @children ラップするコンテンツ
 */
import React  from 'react'
import styled from 'styled-components'
import {Property} from 'csstype'

interface TopRightBottomLeft {
  top?:    boolean
  right?:  boolean
  bottom?: boolean
  left?:   boolean
}

interface StyledProps {
  hasPadding?:  TopRightBottomLeft
  borderColor?: Property.Color | string
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const RadiusBoxWrapper:React.FC<Props> = props => (
  <StyledWrapper {...props} />
)

const StyledWrapper = styled.div`
  margin: 8px auto 0;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075);
  border-radius: .25rem;
  ${(props: StyledProps) => {
    const hasPadding = props.hasPadding || {}
    const getXspace = (bool?: boolean) => (bool ? `20px` : 0)
    const getYspace = (bool?: boolean) => (bool ? `6px` : 0)

    return `
      padding-top: ${getYspace(hasPadding.top)};
      padding-bottom: ${getYspace(hasPadding.bottom)};
      padding-right: ${getXspace(hasPadding.right)};
      padding-left: ${getXspace(hasPadding.left)};
      border-color: ${props.borderColor ? props.borderColor : '#dee2e6'};
    `
  }}
`