/**
 * ScreenWrapper GUI Parts Component
 * @hasPadding 左右にpaddingを入れるか
 * @pageTitle ページタイトル
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {Layout} from '@layouts'

// Constants
const LAYOUT_OPTION = {
  MARGIN:  {bottom: false},
  PADDING: {left: true, right: true}
}

interface Props {
  children:    React.ReactNode
  hasPadding?: boolean
  pageTitle?:  string
}

export const ScreenWrapper:React.FC<Props> = ({children, hasPadding = true, pageTitle}) => (
  <StyledMain>
    <Layout
      hasMargin={LAYOUT_OPTION.MARGIN}
      hasPadding={hasPadding ? LAYOUT_OPTION.PADDING : {}}
    >
      {PageTitle(pageTitle)}
      {children}
    </Layout>
  </StyledMain>
)

const NAV_BAR_HEIGHT = 72
const StyledMain = styled.main`
  overflow: hidden;
  position: relative;
  top: ${NAV_BAR_HEIGHT}px;
`

const PageTitle = (title?: string) => {
  if (!title) return
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e1e4e8;
`

const StyledTitle = styled.h1`
  text-align: left;
  font-size: 24px;
  margin: 0;
  padding: 0;
`