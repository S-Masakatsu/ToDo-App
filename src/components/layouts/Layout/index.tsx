/**
 * レイアウトの子要素用
 * Layout Layouts Component
 * @hasPadding paddingの有無[top,right,bttom,left]
 * @hasMargin marginの有無[top,right,bttom,left]
 * @children ラップする中身
 */
import React  from 'react'
import styled from 'styled-components'

interface TopRightBottomLeft {
  top?:    boolean
  right?:  boolean
  bottom?: boolean
  left?:   boolean
}

interface StyledProps {
  hasPadding?: TopRightBottomLeft
  padding?:    String
  hasMargin?:  TopRightBottomLeft
  margin?:     String
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const Layout:React.FC<Props> = props => (
  <StyledWrapper {...props} />
)

const StyledWrapper = styled.div`
  ${(props: StyledProps) => {
    const hasPadding = props.hasPadding || {}
    const hasMargin =  props.hasMargin  || {}
    const getSpace = (bool?: boolean) => (bool ? `16px` : 0)

    return `
      margin-bottom: ${getSpace(
        typeof hasMargin.bottom === 'boolean' ? hasMargin.bottom : true
      )};
      margin-top:     ${getSpace(hasMargin.top)};
      margin-right:   ${getSpace(hasMargin.right)};
      margin-left:    ${getSpace(hasMargin.left)};
      ${props.margin ? `margin: ${props.margin}` : ''};

      padding-bottom: ${getSpace(hasPadding.bottom)};
      padding-top:    ${getSpace(hasPadding.top)};
      padding-right:  ${getSpace(hasPadding.right)};
      padding-left:   ${getSpace(hasPadding.left)};
      ${props.padding ? `padding: ${props.padding}` : ''};
    `
  }}
`