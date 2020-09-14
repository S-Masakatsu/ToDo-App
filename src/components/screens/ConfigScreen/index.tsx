/**
 * 設定画面
 * ConfigScreen Screen
 */
import React from 'react'

// Components
import {LayoutBox} from '@layouts'
import {ScreenWrapper} from '@gui/parts'
import {ConfigDeleteContainer} from '@containers'

export const ConfigScreen:React.FC = () => (
  <LayoutBox hasCenter={true} maxWidth='800px'>
    <ScreenWrapper pageTitle='設定'>
      <ConfigDeleteContainer />
    </ScreenWrapper>
  </LayoutBox>
)