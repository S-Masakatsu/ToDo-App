/**
 * OK, キャンセルを持つモーダルダイアログ
 * ModalConfirm GUI groups Component
 * @open ダイアログを開くかどうか
 * @header ヘッダー
 * @item 内容
 * @desc 説明
 * @onCansell キャンセルイベント
 * @onSuccess OKイベント
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {Layout, LayoutFlex} from '@layouts'
import {Button, FieldBlockWrapper, ListItem, ModalHeader, ModalWrapper} from '@gui/parts'

interface Props {
  open:    boolean
  header?: string
  item?:   string
  desc?:   string
  onCansell: React.EffectCallback
  onSuccess: React.EffectCallback
}

export const ModalConfirm:React.FC<Props> = ({open, header, item, desc, onCansell, onSuccess}) => (
  <ModalWrapper
    open={open}
    width={`${window.outerWidth * 0.9}px`}
    ariaLabelledby={'confirm-registration-detail'}
    ariaDescribedby={'confirm-detail'}
  >
    <FieldBlockWrapper
      heading={<ModalHeader title={header || '確認してください'} />}
    >
      <Layout padding={'15px 15px 0'} margin={'0 0 15px 0'}>
        <ListItem title={item || '内容'} fontSize={'1.5rem'} />
        <p>{desc || 'を削除してもよろしいですか？'}</p>
       
        <LayoutFlex justify={'flex-end'}>
          <StyledSubmitField>
            <Button label='CANSELL' thema='danger'  onClick={onCansell} />
            <Button label='DELETE'  thema='success' onClick={onSuccess} />
          </StyledSubmitField>
        </LayoutFlex>
      </Layout>
    </FieldBlockWrapper>
  </ModalWrapper>
)

const StyledSubmitField = styled.div`
  margin-top: 12px;
  text-align: right;
  button:last-of-type{
    margin-left: 10px;
  }
`