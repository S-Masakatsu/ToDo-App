/**
 * Config
 * Config Domain Element Component
 */
import React  from 'react'
import styled from 'styled-components'

// Components
import {RadiusBoxWrapper, Button} from '@gui/parts'

// Entity
import {typeDelete, typeDeleteConfirmOpen, typeConfigItems} from '@entity/config'

// Services
import {DELETE_LIST} from '@services/config'

// Constants
const LAYOUT_OPTION = {
  BORDER_COLOR: '#d73a49'
}

/**
 * Delete Item
 */
interface DeleteProps {
  handleOpen?: typeDeleteConfirmOpen
}

export const ConfigDeleteElement:React.FC<DeleteProps> = ({handleOpen}) => {
  const handleConfirmOpen = (t: typeDelete) => {
    if(!handleOpen) return
    handleOpen(t)
  }
  const DELETE_ITEMS: typeConfigItems = [
    {
      title: DELETE_LIST.TODO.TITLE,
      desc: DELETE_LIST.TODO.DESC,
      action: {
        label: DELETE_LIST.TODO.TITLE,
        onClick: () => handleConfirmOpen('todo')
      }
    },
    {
      title: DELETE_LIST.LOG.TITLE,
      desc: DELETE_LIST.LOG.DESC,
      action: {
        label: DELETE_LIST.LOG.TITLE,
        onClick: () => handleConfirmOpen('log')
      }
    },
    {
      title: DELETE_LIST.ALL.TITLE,
      desc: DELETE_LIST.ALL.DESC,
      action: {
        label: DELETE_LIST.ALL.TITLE,
        onClick: () => handleConfirmOpen('all')
      }
    },
  ]

  return (
    <>
      <StyledTitle>Delete Zone</StyledTitle>
      <RadiusBoxWrapper
        borderColor={LAYOUT_OPTION.BORDER_COLOR}
      >
        <ul>
          {DELETE_ITEMS?.map(i => (
            <StyledListItem key={i.title}>
              <StyledStrong>{i.title}</StyledStrong>
              <StyledDesc>{i.desc}</StyledDesc>
              <Button
                label={i.action?.label}
                thema='danger'
                onClick={i.action?.onClick}
              />
            </StyledListItem>
          ))}
        </ul>
      </RadiusBoxWrapper>
    </>
  )
}

const StyledStrong = styled.strong`
  font-weight: 600;
`

const StyledDesc = styled.div`
  margin: 8px 0;
`

const StyledTitle = styled.h2`
  order: 1;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 400;
`

const StyledListItem = styled.li`
  padding: 16px;
  margin-top: -1px;
  list-style-type: none;
  &:not(:first-of-type) {
    border-top: 1px solid #e1e4e8;
  }
`