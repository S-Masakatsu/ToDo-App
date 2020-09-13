/**
 * チェックボックス付リストアイテム
 * ListCheckItem GUI groups Component
 * @id ID
 * @title タイトル
 * @date 日付
 * @checked チェック
 * @onChange チェックイベント
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {LayoutFlex} from '@layouts'
import {CheckBox, ListItem, RadiusBoxWrapper, TagItem} from '@gui/parts'

// Constants
const LAYOUT_OPTION = {
  PADDING: {top: true, bottom: true}
}

interface Props {
  id:            string
  title:         string
  date?:         string | undefined | null
  checked?: boolean
  onChange?:     (res: React.BaseSyntheticEvent) => void
  onClick?:      (res: React.BaseSyntheticEvent) => void
}

export const ListCheckItem:React.FC<Props> = ({id, title, date, checked, onChange, onClick}) => (
  <RadiusBoxWrapper hasPadding={LAYOUT_OPTION.PADDING}>
    <LayoutFlex justify={'start'}>
      <StyledDone>
        <CheckBox
          {...{id, onChange, checked}}
          height={40}
          checkedColor={'#E20D0D'}
        />
      </StyledDone>
      <StyledItem onClick={onClick}>
        <ListItem title={title} done={checked} >
          <TagItem text={date} />
        </ListItem>
      </StyledItem>
    </LayoutFlex>
  </RadiusBoxWrapper>
)

const StyledDone = styled.div`
  margin-right: 8px;
`

const StyledItem = styled.div`
  width: 100%;
`