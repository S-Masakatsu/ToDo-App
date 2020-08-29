import {ReactNode} from 'react'

type Item = {
  primary: String,    // ページタイトル
  icon:    ReactNode, // Icon
  to:      string,    // Link
}

export type Pages = Item[]