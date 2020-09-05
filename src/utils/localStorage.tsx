/**
 * Local Storage
 * localStorage utils Hook
 */
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

// Entity
import {typeRootState} from '@entity/rootState'

// Constants
export const APP_KEY = 'dG9kb2xpc3QK'

export const LocalStorage = () => {
  const state = useSelector((state: typeRootState) => state)
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  return <></>
}