/**
 * Config
 * Config Domain Object Component
 */
import React from 'react'

// Components
import {ConfigDeleteElement} from '@domain/element'
import {ModalConfirm} from '@gui/groups'

// Entity
import {typeDeleteConfirmOpen} from '@entity/config'


/**
 * Config Delete Zone
 */
interface DeleteProps {
  open?: boolean
  handleOpen?: typeDeleteConfirmOpen
  confirm: {
    item?: string
    onCansell: React.EffectCallback
    onSuccess: React.EffectCallback
  }
}

export const ConfigDeleteObject:React.FC<DeleteProps> = ({open, handleOpen, confirm}) => (
  <>
    {open && (
      <ModalConfirm
        open={open}
        {...confirm}
        desc='注意：削除後は元に戻すことはできません。'
      />
    )}
    <ConfigDeleteElement handleOpen={handleOpen} />
  </>
)