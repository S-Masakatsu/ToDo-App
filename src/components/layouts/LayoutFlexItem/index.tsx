/**
 * Flexレイアウトの子要素用
 * LayoutFlexItem Component
 * @column カラムの数
 * @children ラップする中身
 */

import React  from 'react'
import styled from 'styled-components'

interface StyledProps {
  column?: Number | String
}

interface Props extends StyledProps {
  children: React.ReactNode
}

export const LayoutFlexItem: React.FC<Props> = ({column, children}) => (
  <StyledFlex column={column}>{children}</StyledFlex>
)

const StyledFlex = styled.div`
  ${(props: StyledProps) => {
    if (!props.column) return
    return `flex: ${props.column}`
  }}
`