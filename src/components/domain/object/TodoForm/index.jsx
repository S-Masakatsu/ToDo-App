/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React, {useState} from 'react'

// Components
import {Todo} from '@domain/element'
import {ModalWrapper, OpenButton} from '@gui/parts'

export const TodoForm = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <OpenButton onClick={handleOpen} />
      <ModalWrapper
        open={open}
        width={`${window.outerWidth * 0.9}px`}
        ariaLabelledby={'todo-registration-form'}
        ariaDescribedby={'todo-input-form'}
      >
        <Todo onClose={handleClose} />
      </ModalWrapper>
    </>
  )
}