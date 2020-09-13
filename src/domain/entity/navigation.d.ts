import {ReactNode} from 'react'

/**
 * page item
 * @primary @type {string} ページタイトル
 * @icon    @type {ReactNode} Icon component
 * @to      @type {string} path
 * @divider @type {boolean} 区切り線
 */
type typeNav = {
  primary?: string,
  icon?:    ReactNode,
  to?:      string,
  divider?: boolean, 
}

/**
 * page items
 * @type {typeNav[]}
 */
export type typePages = typeNav[]