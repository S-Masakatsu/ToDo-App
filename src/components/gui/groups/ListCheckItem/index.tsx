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
import {CheckBox, ListItem} from '@gui/parts'

interface Props {
  id:            string
  title:         string
  date?:         string | undefined | null
  checked?: boolean
  onChange?:     (res: React.BaseSyntheticEvent) => void
}

export const ListCheckItem:React.FC<Props> = ({id, title, date, checked, onChange}) => (
  <StyledWrapper>
    <LayoutFlex justify={'start'}>
      <StyledDone>
        <CheckBox
          {...{id, onChange, checked}}
          height={40}
          checkedColor={'#E20D0D'}
        />
      </StyledDone>
      <ListItem {...{title, date}} done={checked} />
    </LayoutFlex>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  margin: 8px auto 0;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  max-width: 560px;
  border: 1px solid #dee2e6;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075);
  border-radius: .25rem;
`

const StyledDone = styled.div`
  margin-right: 8px;
`