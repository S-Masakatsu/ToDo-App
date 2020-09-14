/**
 * typeDelete 削除項目
 * @type {'todo' | 'log' | 'all'}
 */
export type typeDelete = 'todo' | 'log' | 'all'


/**
 * typeDeleteEvent
 * @type {(res: typeDelete) => void}
 */
export type typeDeleteConfirmOpen = (type: typeDelete) => void


/**
 * typeButton
 * @title @type {string} ボタン表示ラベル
 * @onClick @type {typeDeleteEvent} クリックイベント
 */
export type typeButton = {
  label?:   string
  onClick?: typeDeleteEvent
}


/**
 * typeDeleteListItem
 * @title @type {string} タイトル
 * @desc @type {string} 説明 or 注意書き
 * @action @type {typeButton}
 */
export type typeConfigItem = {
  title?:  string
  desc?:   string
  action?: typeButton
}


/**
 * typeConfigItems
 * @type {typeConfigItem[]}
 */
export type typeConfigItems = typeConfigItem[]