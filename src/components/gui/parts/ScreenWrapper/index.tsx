/**
 * ScreenWrapper GUI Parts Component
 * @hasPadding 左右にpaddingを入れるか
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
}

export const ScreenWrapper:React.FC<Props> = ({children, hasPadding = true}) => (
  <StyledMain>
    <Layout
      hasMargin={LAYOUT_OPTION.MARGIN}
      hasPadding={hasPadding ? LAYOUT_OPTION.PADDING : {}}
    >
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