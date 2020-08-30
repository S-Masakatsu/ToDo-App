/**
 * モーダル
 * Modal GUI parts Component
 * @width styled width
 * @children ラップする中身
 * @open モーダルが開いているかどうか
 * @onClose モーダルを閉じるように要求したときに呼び出されるコールバック
 * @ariaLabelledby オブジェクトのラベルの要素のID
 * @ariaDescribedby オブジェクトを説明する要素のID
 * {@link https://material-ui.com/api/modal/}
 */
import React from 'react'
import styled from 'styled-components'

// Material-UI
import Modal from '@material-ui/core/Modal'

interface StyledProps {
  width?: String | Number
}

interface Props extends StyledProps {
  children: React.ReactNode
  open: boolean
  onClose: React.EffectCallback
  ariaLabelledby?: string
  ariaDescribedby?: string
}

export const ModalWrapper:React.FC<Props> = ({width, children, open, onClose, ariaLabelledby, ariaDescribedby}) => (
  <Modal
    {...{open, onClose}}
    aria-labelledby={ariaLabelledby || 'simple-modal-title'}
    aria-describedby={ariaDescribedby || 'simple-modal-description'}
    style={{zIndex: 99999}}
  >
    <StyledDiv {...{width}}>
      {children}
    </StyledDiv>
  </Modal>
)

const StyledDiv = styled.div`
  outline: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%,-50%);
  border: 8px solid #fff;
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
              0px 5px 8px 0px rgba(0,0,0,0.14),
              0px 1px 14px 0px rgba(0,0,0,0.12);
  ${(props: StyledProps) => {
    if (!props.width) return `width: 335px`
    return `width: ${props.width}`;
  }}
`