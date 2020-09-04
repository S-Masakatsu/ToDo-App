/**
 * Flexレイアウトの子要素用
 * LayoutFlexItem Layouts Component
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

export const LayoutFlexItem: React.FC<Props> = props => (
  <StyledFlex {...props} />
)

const StyledFlex = styled.div`
  ${(props: StyledProps) => {
    if (!props.column) return
    return `flex: ${props.column}`
  }}
`