import {ReactNode} from 'react'

/**
 * page item
 * @primary @type {string} ページタイトル
 * @icon    @type {ReactNode} Icon component
 * @to      @type {string} path
 */
type typeNav = {
  primary: string,
  icon:    ReactNode,
  to:      string,
}

/**
 * page items
 * @type {typeNav[]}
 */
export type typePages = typeNav[]