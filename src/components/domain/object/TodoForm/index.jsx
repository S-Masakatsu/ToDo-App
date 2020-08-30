/**
 * ToDo登録フォーム
 * TodoForm Domain Object Component
 */
import React, {useState} from 'react'

// Components
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
        onClose={handleClose}
        width={`${window.outerWidth - 40}px`}
        ariaLabelledby={'todo-registration-form'}
        ariaDescribedby={'todo-input-form'}
      >
        <h1>Todo Input Form</h1>
      </ModalWrapper>
    </>
  )
}