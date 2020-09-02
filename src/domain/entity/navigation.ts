import {ReactNode} from 'react'

type Item = {
  primary: string,    // ページタイトル
  icon:    ReactNode, // Icon
  to:      string,    // Link
}

export type Pages = Item[]