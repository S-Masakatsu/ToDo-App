/**
 * 見出し付きのフィールドブロック
 * FieldBlockWrapper GUI Parts Component
 * @heading ヘッダーテキスト or コンポーネント
 * @children ラップするコンテンツ
 */
import React from 'react'
import styled from 'styled-components'

interface Props {
  heading?: string | React.ReactNode
  children: React.ReactNode
}

export const FieldBlockWrapper:React.FC<Props> = ({heading, children}) => (
  <StyledWrapper>
    {heading && (
      <StyledHeading>{heading}</StyledHeading>
    )}
    <div>{children}</div>
  </StyledWrapper>
)

const StyledWrapper = styled.section``
const StyledHeading = styled.header``